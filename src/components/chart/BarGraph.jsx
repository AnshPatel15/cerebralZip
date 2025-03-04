import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const BarGraph = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/monthly-data");
        const jsonData = await response.json();
        const firstOccurrence = jsonData.filter(
          (item, index, self) =>
            index === self.findIndex((t) => t.month === item.month)
        );

        setData(firstOccurrence);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full h-[400px] p-4">
      <ResponsiveContainer width="70%" height="70%">
        <CartesianGrid strokeDasharray="3 3" />
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="last_year"
            fill="#8884d8"
            name="Last Year"
            radius={10}
          />
          <Bar
            dataKey="this_year"
            fill="#82ca9d"
            name="This Year"
            radius={10}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarGraph;
