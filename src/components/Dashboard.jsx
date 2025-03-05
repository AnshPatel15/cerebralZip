import BarGraph from "./chart/BarGraph";
import Metrics from "./chart/Metrics";
import TopProducts from "./TopProducts";

const Dashboard = () => {
  return (
    <div className="h-full w-full overflow-hidden flex flex-col">
      <div className="font-bold text-5xl m-7">Dashboard</div>
      <div className="flex-1 overflow-y-auto px-7 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <Metrics />
        <BarGraph />
        <TopProducts />
      </div>
    </div>
  );
};

export default Dashboard;
