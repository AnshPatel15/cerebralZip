import { FiMenu, FiX } from "react-icons/fi";
import Dashboard from "./components/Dashboard";
import MenuBar from "./components/MenuBar";
import { useEffect, useState } from "react";
import Login from "./components/Login";
import { useUser } from "./context/userContext";

const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { user } = useUser();

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
    <div className="bg-gray-300 h-screen flex justify-center items-center p-4">
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
        <div className="lg:col-span-8 bg-white lg:p-2 rounded-xl shadow-md lg:-ml-20 sm:col-span-12">
          <Dashboard />
        </div>
        <div className="lg:col-span-2 bg-white lg:p-2 rounded-xl shadow-md sm:col-span-12"></div>
      </div>
    </div>
  );
};

export default App;
