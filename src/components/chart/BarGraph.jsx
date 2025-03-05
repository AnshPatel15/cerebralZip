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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
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
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full h-[400px] p-4 mt-10">
      <div className="relative h-[360px] transition-all duration-300">
        {isLoading ? (
          <div className="absolute inset-0 flex items-end justify-between animate-pulse">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="h-32 w-8 bg-gray-200 rounded-t"></div>
                <div className="h-4 w-12 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <CartesianGrid strokeDasharray="3 3" />
            <BarChart data={data}>
              <XAxis dataKey="month" />
              <YAxis
                tickFormatter={(value) => `${value / 1000}k`}
                domain={[0, "auto"]}
              />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="last_year"
                fill="#387cc9"
                name="Last Year"
                radius={8}
              />
              <Bar
                dataKey="this_year"
                fill="#0b4280"
                name="This Year"
                radius={8}
              />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

export default BarGraph;
