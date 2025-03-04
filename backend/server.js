import express from "express";
import sqlite3 from "sqlite3";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const db = new sqlite3.Database(
  path.join(__dirname, "database.sqlite"),
  (err) => {
    if (err) {
      console.error("Error opening database:", err);
    } else {
      console.log("Connected to SQLite database");
      createTable();
    }
  }
);

function createTable() {
  db.run(
    `
    CREATE TABLE IF NOT EXISTS monthly_data (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      month TEXT NOT NULL,
      last_year INTEGER NOT NULL,
      this_year INTEGER NOT NULL
    )
  `,
    (err) => {
      if (err) {
        console.error("Error creating table:", err);
      } else {
        console.log("Table created or already exists");
        insertInitialData();
      }
    }
  );
}

function insertInitialData() {
  const data = [
    ["Jan", 5000, 6000],
    ["Feb", 10000, 2000],
    ["Mar", 20000, 40000],
    ["Apr", 32000, 21000],
    ["May", 12000, 9200],
    ["Jun", 13000, 8700],
  ];

  const stmt = db.prepare(
    "INSERT OR IGNORE INTO monthly_data (month, last_year, this_year) VALUES (?, ?, ?)"
  );

  data.forEach((row) => {
    stmt.run(row, (err) => {
      if (err) {
        console.error("Error inserting data:", err);
      }
    });
  });

  stmt.finalize();
}

app.get("/api/monthly-data", (req, res) => {
  db.all("SELECT * FROM monthly_data", [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
