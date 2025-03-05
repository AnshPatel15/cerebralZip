import { useEffect, useState } from "react";
import { apiCall } from "../../config/api";

const FeedbackChart = () => {
  const [feedbackData, setFeedbackData] = useState([]);
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
          "/api/v1/sample_assignment_api_5/",
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
        const data = await response.json();
        setFeedbackData(data);
      } catch (error) {
        console.error("Error fetching feedback data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full bg-white rounded-lg shadow-sm p-4 animate-pulse">
        <div className="flex justify-between items-center mb-4">
          <div className="h-4 bg-gray-200 rounded w-32"></div>
          <div className="h-4 bg-gray-200 rounded w-24"></div>
        </div>

        <div className="h-2 flex rounded-full overflow-hidden mb-5 gap-1">
          <div className="bg-gray-200 rounded-full w-1/3"></div>
          <div className="bg-gray-200 rounded-full w-1/3"></div>
          <div className="bg-gray-200 rounded-full w-1/3"></div>
        </div>

        <div className="flex justify-between px-1">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <div className="h-4 bg-gray-200 rounded w-16"></div>
              <div className="h-4 bg-gray-200 rounded w-8"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const data = {
    negative: { value: feedbackData.negative, color: "bg-[#FF5C5C]" },
    neutral: { value: feedbackData.neutral, color: "bg-[#FFB74D]" },
    positive: { value: feedbackData.positive, color: "bg-[#4CAF50]" },
  };

  const total = Object.values(data).reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="w-full bg-white rounded-lg shadow-sm p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="text-sm text-gray-700 font-medium">Mostly positive</div>
      </div>

      <div className="h-2 flex rounded-full overflow-hidden mb-5 gap-1">
        <div
          className={`${data.negative.color} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${(data.negative.value / total) * 100}%` }}
        />
        <div
          className={`${data.neutral.color} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${(data.neutral.value / total) * 100}%` }}
        />
        <div
          className={`${data.positive.color} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${(data.positive.value / total) * 100}%` }}
        />
      </div>

      <div className="flex justify-between px-1">
        {Object.entries(data).map(([key, item]) => (
          <div key={key} className="flex flex-col items-center gap-1">
            <span className="text-sm text-gray-500 capitalize">{key}</span>
            <span className="text-sm text-gray-700 font-medium">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackChart;
