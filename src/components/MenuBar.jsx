import { useState } from "react";
import { useUser } from "../context/userContext";

const MenuBar = () => {
  const [selectedMenu, setSelectedMenu] = useState("Dashboard");
  const { user } = useUser();

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
      <div className=" absolute text-center text-lg font-bold mt-5 bottom-[-300px] left-15 flex items-center gap-2 flex-row">
        <img src="assets/profile.svg" alt="profile" className="h-10 w-10" />
        <span>
          {user.username.charAt(0).toUpperCase() + user.username.slice(1)}
        </span>
      </div>
    </div>
  );
};

export default MenuBar;
