import { useEffect, useState } from "react";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const LineGraph = () => {
  const [deviceData, setDeviceData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/line-chart-data"
        );
        const data = await response.json();
        console.log("Fetched data:", data);
        setDeviceData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const calculateGrowth = (dataKey) => {
    if (deviceData.length < 2) return 0;
    const firstValue = deviceData[0][dataKey];
    const lastValue = deviceData[deviceData.length - 1][dataKey];
    const growth = ((lastValue - firstValue) / firstValue) * 100;
    return growth.toFixed(1);
  };

  const webGrowth = calculateGrowth("web_sales");
  const offlineGrowth = calculateGrowth("offline_sales");

  return (
    <div className="mr-15">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={deviceData}>
          <XAxis axisLine={true} tickLine={false} tick={false} dataKey="date" />
          <YAxis
            tickFormatter={(value) => {
              if (value === 0) return "0";
              return `${value / 1000}k`;
            }}
            ticks={[0, 4000, 8000]}
          />
          <Tooltip
            labelFormatter={(value) => {
              const date = new Date(value);
              return date.toLocaleString();
            }}
          />
          <Legend
            formatter={(value) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span>{value}</span>
                <span style={{ fontSize: "12px", color: "#666" }}>
                  {value === "Web Sales"
                    ? `${webGrowth}%`
                    : `${offlineGrowth}%`}
                </span>
              </div>
            )}
          />
          <Line
            type="monotone"
            dataKey="web_sales"
            name="Web Sales"
            stroke="#007BFF"
            strokeWidth={0.8}
            dot={false}
            activeDot={{ r: 2 }}
          />
          <Line
            type="monotone"
            dataKey="offline_sales"
            name="Offline Sales"
            stroke="#FF6B6B"
            strokeWidth={0.8}
            dot={false}
            activeDot={{ r: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineGraph;
