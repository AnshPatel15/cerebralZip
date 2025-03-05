import { useEffect, useState } from "react";
import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";

const GaugeChart = () => {
  const [gaudeData, setGaugeData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const credentials = btoa(
          `${import.meta.env.VITE_API_USERNAME}:${
            import.meta.env.VITE_API_PASSWORD
          }`
        );
        const response = await fetch(
          "http://3.111.196.92:8020/api/v1/sample_assignment_api_3/",
          {
            method: "GET",
            headers: {
              Authorization: `Basic ${credentials}`,
              Accept: "application/json",
            },
            mode: "cors",
            credentials: "same-origin",
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setGaugeData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-[280px] flex items-center justify-center animate-pulse">
        <div className="space-y-4">
          <div className="h-8 w-32 bg-gray-200 "></div>
          <div className="h-8 w-38 bg-gray-200 "></div>
          <div className="h-8 w-42 bg-gray-200 "></div>
          <div className="h-8 w-48 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  const data = [
    { name: "Background", value: 100, fill: "none" },
    { name: "Score", value: gaudeData.score, fill: "#007BFF" },
  ];

  return (
    <div className="w-full h-[280px] flex flex-col items-center">
      <div className="h-[220px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            innerRadius="75%"
            outerRadius="90%"
            data={data}
            startAngle={180}
            endAngle={0}
            barSize={8}
          >
            <RadialBar
              background={false}
              dataKey="value"
              cornerRadius={10}
              stroke={(entry) =>
                entry.name === "Background" ? "#e0e0e0" : "none"
              }
              strokeDasharray={(entry) =>
                entry.name === "Background" ? "3 3" : "0"
              }
              strokeWidth={(entry) => (entry.name === "Background" ? 1 : 0)}
            />
            <text
              x="50%"
              y="40%"
              textAnchor="middle"
              dominantBaseline="middle"
              style={{ fontSize: "40px", fontWeight: "bold" }}
            >
              {data[1]?.value || 0}
            </text>
            <text
              x="50%"
              y="55%"
              textAnchor="middle"
              dominantBaseline="middle"
              style={{ fontSize: "16px", fill: "#666" }}
            >
              of 100 points
            </text>
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
      <div className="border border-gray-200 w-[80%] -mt-12"></div>
      <div className="flex flex-col items-start w-[80%]">
        <div className="mt-4 text-2xl font-bold mb-4">{gaudeData.title}!</div>
        <div className="-mt-1">{gaudeData.message}</div>
      </div>
    </div>
  );
};

export default GaugeChart;
