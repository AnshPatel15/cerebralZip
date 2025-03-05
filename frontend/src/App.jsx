import { FiMenu, FiX } from "react-icons/fi";
import Dashboard from "./components/Dashboard";
import MenuBar from "./components/MenuBar";
import { useState } from "react";
import Login from "./components/Login";
import { useUser } from "./context/userContext";
import GaugeChart from "./components/chart/GaugeChart";
import LineGraph from "./components/chart/LineGraph";
import FeedbackChart from "./components/chart/FeedbackChart";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { user } = useUser();

  const rightSidebarComponents = [
    {
      title: "Performance Metrics",
      component: <GaugeChart />,
    },
    {
      title: "Customers By Device",
      component: <LineGraph />,
    },
    {
      title: "Community Feedback",
      component: <FeedbackChart />,
    },
  ];

  const ProtectedLayout = () => (
    <div className="bg-gray-300 h-screen flex justify-center items-center p-4 overflow-hidden">
      <div className="bg-gray-100 w-full h-full max-h-[97vh] p-3 rounded-3xl shadow-lg grid grid-cols-12 gap-2 sm:mt-23 lg:mt-0 relative">
        <button
          className="block lg:hidden absolute top-[-50px] left-7 bg-white p-2 rounded-md shadow-md z-50"
          onClick={() => setShowMenu((p) => !p)}
        >
          {showMenu ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
        {showMenu && (
          <div
            className="lg:hidden fixed inset-0 bg-opacity-50 z-40"
            onClick={() => setShowMenu(false)}
          >
            <div
              className="bg-white w-64 h-full p-4 shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <MenuBar />
            </div>
          </div>
        )}
        <div className="lg:col-span-2 lg:p-2 hidden lg:block">
          <MenuBar />
        </div>
        <div className="lg:col-span-7 bg-white lg:p-2 rounded-xl shadow-md lg:-ml-20 sm:col-span-12 overflow-hidden">
          <Dashboard />
        </div>
        <div className="lg:col-span-3 sm:col-span-12 h-full overflow-hidden flex flex-col">
          <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth">
            <div className="flex flex-col gap-4 p-1">
              {rightSidebarComponents.map((component, i) => (
                <div
                  key={i}
                  className="bg-white p-4 rounded-xl shadow-md flex flex-col"
                >
                  <h2 className="text-2xl font-semibold mb-3 text-center">
                    {component.title}
                  </h2>
                  {component.component}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            user ? (
              <Navigate to="/" />
            ) : (
              <div className="bg-gray-300 h-screen flex justify-center items-center p-4">
                <Login />
              </div>
            )
          }
        />
        <Route
          path="/"
          element={user ? <ProtectedLayout /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
