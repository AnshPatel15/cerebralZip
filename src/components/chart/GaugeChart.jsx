import { useEffect, useState } from "react";
import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";

const GaugeChart = () => {
  const [gaudeData, setGaugeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const credentials = btoa("trial:assignment123");
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
      }
    };
    fetchData();
  }, []);

  const data = [
    { name: "Background", value: 100, fill: "none" },
    { name: "Score", value: gaudeData.score, fill: "#007BFF" },
  ];

  return (
    <div className="w-full h-[320px] flex flex-col items-center">
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
      <div className="border border-gray-200 w-[80%] -mt-4"></div>
      <div className="flex flex-col items-start w-[80%]">
        <div className="mt-1 text-2xl font-bold mb-4">{gaudeData.title}!</div>
        <div className="-mt-1">{gaudeData.message}</div>
      </div>
    </div>
  );
};

export default GaugeChart;
