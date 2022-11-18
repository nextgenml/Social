import React from "react";
import { IconBase } from "react-icons";
import { FaIcons } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col flex-auto flex-shrink-0 min-h-screen antialiased text-black bg-[rgba(0,10,0,0.04)]">
      <div className="fixed z-10 flex items-center justify-between w-full h-2 text-white">
        <div className="flex items-center justify-between w-full h-2 bg-blue-600 " />
      </div>

      <div className="fixed left-0 z-10 flex flex-col h-full text-white transition-all duration-300 border-none top-2 w-14 hover:w-64 md:w-64 sidebar bg-zinc-600">
        <div className="flex flex-col justify-between flex-grow overflow-x-hidden overflow-y-auto">
          <ul className="flex flex-col py-4 space-y-1">
            <li className="hidden px-5 md:block">
              <div className="flex flex-row items-center h-8">
                <div className="text-sm font-bold tracking-wide text-white uppercase">
                  Menu
                </div>
              </div>
            </li>
            <MenuItem title="Test Link 1" />
            <MenuItem title="Test Link 2" />
          </ul>
        </div>
      </div>
      <div className="h-full mt-2 mb-10 ml-14 md:ml-64">
        <Outlet />
      </div>
    </div>
  );
};

const MenuItem = ({ link = "#", title = "", Icon }) => {
  return (
    <li>
      <Link
        to={link}
        className="relative flex flex-row items-center pr-6 border-l-4 border-transparent h-11 focus:outline-none hover:bg-blue-800 text-white-600 hover:text-white-800 hover:border-blue-500"
      >
        <span className="inline-flex items-center justify-center ml-4">
          {Icon ? <Icon /> : <FaIcons className="ml-1 mr-1 text-sm" />}
        </span>
        <span className="ml-2 text-sm tracking-wide truncate">{title}</span>
      </Link>
    </li>
  );
};

export default Layout;
