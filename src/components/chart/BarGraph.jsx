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
    <div className="w-full h-[400px] p-4 mt-10">
      <ResponsiveContainer width="100%" height="90%">
        <CartesianGrid strokeDasharray="3 3" />
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis
            tickFormatter={(value) => `${value / 1000}k`}
            domain={[0, "auto"]}
          />
          <Tooltip />
          <Legend />
          <Bar dataKey="last_year" fill="#387cc9" name="Last Year" radius={8} />
          <Bar dataKey="this_year" fill="#0b4280" name="This Year" radius={8} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarGraph;
