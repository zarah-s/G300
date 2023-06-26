import React from "react";
import Sidebar from "./components/Sidebar";
import Assets from "../assets/assets";
interface Props {
  children: React.ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <div className="">
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      <Sidebar />

      <div className="px-10 pb-10 xl:ml-64 lg:ml-64 md:ml-20 sm:ml-0 xs:ml-0 overflow-x-auto">
        <div className="py-10 flex flex-wrap items-center justify-between">
          <h4 className="text-[#858585] font-[700] text-lg">
            Admin Management Panel
          </h4>

          <div className="flex items-center justify-between xl:gap-10 lg:gap-10 md:gap-10 flex-wrap sm:gap-3 xs:gap-3">
            <div className="border-[#F0F0F0] border-2 rounded-full py-1 px-2 flex items-center gap-2">
              <img src={Assets.Search} alt="" />
              <input
                type="text"
                placeholder="search"
                className=" border-none outline-none"
              />
            </div>
            <div className="">
              <h4 className="text-[#858585] font-[700] whitespace-nowrap">
                Accounts | Segun &#x25B4;
              </h4>
            </div>
          </div>
        </div>

        {children}
      </div>
    </div>
  );
};

export default Layout;
