import { useState } from "react";
import { useUser } from "../context/userContext";
import { useNavigate } from "react-router-dom";

const MenuBar = () => {
  const [selectedMenu, setSelectedMenu] = useState("Dashboard");
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loginState");
    setUser(null);
    setShowUserMenu(false);
    navigate("/login");
  };

  const settingsItems = [
    { name: "Settings", img: "assets/settings.svg" },
    { name: "Teams", img: "assets/team.svg" },
  ];

  const menuItems = [
    { name: "Dashboard", img: "assets/dashboard.svg" },
    { name: "Campaigns", img: "assets/campaigns.svg" },
    { name: "Flows", img: "assets/flows.svg" },
    { name: "Integrations", img: "assets/integrations.svg" },
    { name: "Customers", img: "assets/customers.svg" },
  ];

  return (
    <div className="w-[220px] relative">
      <div className="flex items-center text-xl font-black">
        <span>
          <img src="assets/logo.svg" alt="logo" className="h-10 w-10 m-2" />
        </span>
        SalesWay
      </div>
      <div className="mt-5">
        {settingsItems.map((item, i) => (
          <div key={i} className="flex items-center text-lg m-5">
            <span>
              <img src={item.img} alt={item.img} className="h-5 w-5 mr-2" />
            </span>
            {item.name}
          </div>
        ))}
      </div>
      <div>
        <span className="text-sm text-gray-600 font-medium ml-5">Menu</span>
        {menuItems.map((item, i) => (
          <div
            key={i}
            className={`flex items-center text-lg m-5 p-2 rounded-lg cursor-pointer ${
              selectedMenu === item.name
                ? "bg-white border-blue-500 border-[1px] font-bold"
                : ""
            }`}
            onClick={() => setSelectedMenu(item.name)}
          >
            <span>
              <img
                src={item.img}
                alt={item.img}
                className="h-5 w-5 mr-2 blue"
              />
            </span>
            {item.name}
          </div>
        ))}
      </div>
      <div
        onClick={() => setShowUserMenu((p) => !p)}
        className=" cursor-pointer absolute text-center text-lg font-bold mt-5 bottom-[-300px] left-15 flex items-center gap-2 flex-row"
      >
        <img src="assets/profile.svg" alt="profile" className="h-10 w-10" />
        <span>
          {user.username.charAt(0).toUpperCase() + user.username.slice(1)}
        </span>
        {showUserMenu && (
          <div className="absolute bottom-10 left-[-58px] bg-gray-50 border-[1px] border-gray-300 rounded-lg p-2 w-50 text-center mb-2">
            <div className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer">
              <span>{user.username}</span>
            </div>
            <hr className="border-gray-300 w-[90%] my-2" />
            <div 
              className="flex items-center gap-2 mt-2 p-2 hover:bg-gray-100 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                handleLogout();
              }}
            >
              <span>Logout</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuBar;
