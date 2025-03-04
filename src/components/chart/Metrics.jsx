import { useEffect, useState } from "react";
import { useUser } from "../../context/userContext";

const Metrics = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const credentials = btoa("trial:assignment123");
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
    <div className="flex gap-10 ml-8">
      {Object.entries(data).map(([key, value], i) => (
        <div key={i} className="border border-black w-70 h-30 rounded-2xl p-4">
          <div className="font-bold text-lg">
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </div>
          <div className="text-2xl">{value}</div>
        </div>
      ))}
    </div>
  );
};

export default Metrics;
