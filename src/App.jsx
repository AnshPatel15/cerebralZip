import { FiMenu, FiX } from "react-icons/fi";
import Dashboard from "./components/Dashboard";
import MenuBar from "./components/MenuBar";
import { useEffect, useState } from "react";
import Login from "./components/Login";
import { useUser } from "./context/userContext";
import GaugeChart from "./components/chart/GaugeChart";

const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { user } = useUser();

  const rightSidebarComponents = [
    {
      title: "Performance Metrics",
      component: <GaugeChart />,
    },
    {
      title: "Activity Status",
      component: <div>Activity Status Component</div>,
    },
    {
      title: "Recent Updates",
      component: <div>Recent Updates Component</div>,
    },
  ];

  useEffect(() => {
    if (user) {
      setIsLoggedIn(true);
    }
  }, [user]);

  return !isLoggedIn ? (
    <div className="bg-gray-300 h-screen flex justify-center items-center p-4">
      <Login setIsLoggedIn={setIsLoggedIn} />
    </div>
  ) : (
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
        <div className="lg:col-span-3 sm:col-span-12">
          <div className="flex flex-col gap-4">
            {rightSidebarComponents.map((component, i) => (
              <div key={i} className="bg-white p-4 rounded-xl shadow-md">
                <h2 className="text-lg font-semibold mb-2">
                  {component.title}
                </h2>
                {component.component}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
