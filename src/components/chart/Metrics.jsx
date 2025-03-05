import { useEffect, useState } from "react";

const formatNumber = (value) => {
  if (typeof value !== "number") return value;

  if (value >= 1000 && value % 100 === 0) {
    return (value / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  }
  return value;
};

const Metrics = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const credentials = btoa(
          `${import.meta.env.VITE_API_USERNAME}:${
            import.meta.env.VITE_API_PASSWORD
          }`
        );
        const response = await fetch(
          "http://3.111.196.92:8020/api/v1/sample_assignment_api_1/",
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
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex gap-2 ml-8">
      {Object.entries(data).map(([key, value], i) => (
        <div
          key={i}
          className="border border-gray-300 w-140 h-30 rounded-2xl p-4"
        >
          <div className="font-bold text-lg text-gray-500">
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </div>
          <div className="text-2xl mt-5">
            {key !== "purchases"
              ? "$" + formatNumber(value)
              : formatNumber(value)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Metrics;
