import express from "express";
import sqlite3 from "sqlite3";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import lineChartData from "./lineData.js";

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
      setupDatabase();
    }
  }
);

function setupDatabase() {
  db.serialize(() => {
    db.run("BEGIN TRANSACTION");

    db.run(`
      CREATE TABLE IF NOT EXISTS monthly_data (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        month TEXT NOT NULL,
        last_year INTEGER NOT NULL,
        this_year INTEGER NOT NULL
      )
    `);

    db.run(`
      CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        product_name TEXT NOT NULL,
        sold_amount INTEGER NOT NULL,
        unit_price REAL NOT NULL,
        revenue REAL NOT NULL,
        rating REAL NOT NULL
      )
    `);

    db.get("SELECT COUNT(*) as count FROM products", [], (err, row) => {
      if (err) {
        console.error("Error checking products table:", err);
        db.run("ROLLBACK");
        return;
      }

      if (row.count === 0) {
        const monthlyStmt = db.prepare(
          "INSERT INTO monthly_data (month, last_year, this_year) VALUES (?, ?, ?)"
        );

        const monthlyData = [
          ["Jan", 5000, 6000],
          ["Feb", 10000, 2000],
          ["Mar", 20000, 40000],
          ["Apr", 32000, 21000],
          ["May", 12000, 9200],
          ["Jun", 13000, 8700],
        ];

        monthlyData.forEach((row) => {
          monthlyStmt.run(row);
        });
        monthlyStmt.finalize();
        const productStmt = db.prepare(
          "INSERT INTO products (product_name, sold_amount, unit_price, revenue, rating) VALUES (?, ?, ?, ?, ?)"
        );

        const productData = [
          ["Camera Mi 360", 432, 120, 51320, 4.81],
          ["Message Gun", 120, 60, 23901, 3.44],
          ["Redmi Note 9", 190, 87.6, 87211, 2.5],
          ["One Plus Nord CE Lite 2", 140, 24.1, 29809, 4.65],
        ];

        productData.forEach((row) => {
          productStmt.run(row);
        });
        productStmt.finalize();

        db.run("COMMIT", (err) => {
          if (err) {
            console.error("Error committing transaction:", err);
            db.run("ROLLBACK");
          } else {
            console.log("Database initialized successfully");
          }
        });
      } else {
        db.run("COMMIT", (err) => {
          if (err) {
            console.error("Error committing transaction:", err);
            db.run("ROLLBACK");
          } else {
            console.log("Database already initialized");
          }
        });
      }
    });
  });
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

app.get("/api/products", (req, res) => {
  db.all("SELECT * FROM products", [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

app.get("/api/products/count", (req, res) => {
  db.get("SELECT COUNT(*) as count FROM products", [], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(row);
  });
});

app.get("/api/line-chart-data", (req, res) => {
  res.json(lineChartData);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
