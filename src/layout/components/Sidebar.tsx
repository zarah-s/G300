import { useEffect, useState } from "react";
import navigationData from "../../common/data/navigation";
import { Link, useLocation } from "react-router-dom";
import Assets from "../../assets/assets";
const Sidebar = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<number>(0);
  const getActivefillClass = (label: string): any => {
    if (label === "Notifications" || label === "Messages") {
      return "transparent";
    } else {
      return "active-fill";
    }
  };

  const getActiveStrokeClass = (label: string): any => {
    if (label !== "Notifications" && label !== "Messages") {
      return "transparent";
    } else {
      return "active-stroke";
    }
  };

  useEffect(() => {
    const path = location.pathname;
    const pathIndex = navigationData.findIndex((fd) => fd.path === path);
    if (pathIndex !== -1) {
      setActiveTab(pathIndex);
    } else {
      setActiveTab(0);
    }
  }, [location.pathname]);

  return (
    <aside
      id="default-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full py-10 overflow-y-auto bg-[#3B6FEE]">
        <img src={Assets.Avatar} className="mx-8 mb-10" alt="" />
        <ul className="space-y-3">
          {navigationData.map((navigation, index) => {
            return (
              <li
                key={index}
                className={`
                   ${index === activeTab && "bg-white "}
                     hover:bg-white rounded-tr-full rounded-br-full text-white hover:text-[#3B6FEE] px-4 mr-4`}
              >
                <Link
                  onClick={() => setActiveTab(index)}
                  to={navigation.path}
                  className={`flex items-center p-2.5 ${
                    activeTab === index ? "text-[#3B6FEE]" : ""
                  } rounded-lg `}
                >
                  <navigation.icon
                    className={` ${
                      activeTab === index &&
                      getActiveStrokeClass(navigation.label)
                    }  ${
                      activeTab === index &&
                      getActivefillClass(navigation.label)
                    }`}
                  />
                  <span className="ml-3">{navigation.label}</span>
                </Link>
              </li>
            );
          })}
          <li className="px-4 mr-4">
            <Link to="/" className="flex items-center p-2.5 text-white">
              <img src={Assets.Logout} alt="" />
              <span className="ml-3">Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
