import BarGraph from "./chart/BarGraph";
import Metrics from "./chart/Metrics";

const Dashboard = () => {
  return (
    <div className="">
      <div className=" font-bold text-5xl m-7 ">Dashboard</div>
      <div className="">
        <Metrics />
        {/* <BarGraph /> */}
      </div>
    </div>
  );
};

export default Dashboard;
