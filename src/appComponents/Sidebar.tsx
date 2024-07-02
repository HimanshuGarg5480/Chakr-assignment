"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  FaBars,
  FaTimes,
  FaUser,
  FaBuilding,
  FaCog,
  FaSearch,
  FaBell,
  FaTasks,
} from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRecoilState } from "recoil";
import { CommandbarState } from "@/app/atoms/atoms";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [commandbarState, setCommandbarState] = useRecoilState(CommandbarState);
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`h-screen bg-gray-800 text-white transition-all duration-300 ${
        isCollapsed ? "w-9" : "w-64"
      } sm:w-64`}
    >
      <div
        className={`${
          isCollapsed ? "p-1" : "p-4"
        } sm:p-4 w-full flex justify-between items-center border-b border-gray-700`}
      >
        <div
          className={`flex items-center ${
            isCollapsed ? "hidden" : "flex"
          } sm:flex`}
        >
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div className="ml-3">
            <p className="text-sm font-medium">User Name</p>
            <p className="text-xs text-gray-400">Organization Name</p>
          </div>
        </div>
        <button onClick={toggleSidebar} className="text-white m-1 sm:hidden">
          {isCollapsed ? <FaBars /> : <FaTimes />}
        </button>
      </div>

      <nav className="mt-10 flex flex-col gap-5">
        <div
          className={`flex flex-col gap-10 justify-center ml-2 ${
            !isCollapsed ? "hidden" : ""
          } sm:hidden`}
        >
          <FaUser />
          <FaBuilding />
          <FaSearch />
          <FaBell />
          <FaTasks />
          <FaCog />
        </div>
        <div className={`${isCollapsed ? "hidden" : ""} sm:block`}>
          <p className={`text-xs text-gray-400 px-4`}>CRM</p>
          <ul>
            <li>
              <Link href="/pages/people">
                <div className="flex items-center px-4 py-2 hover:bg-gray-700">
                  <FaUser className="mr-2" />
                  <span>Prospects</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/pages/people">
                <div className="flex items-center px-4 py-2 hover:bg-gray-700">
                  <FaBuilding className="mr-2" />
                  <span>Companies</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>

        <div className={`${isCollapsed ? "hidden" : ""} sm:block`}>
          <p className={`text-xs text-gray-400 px-4 mt-4`}>Utilities</p>
          <ul>
            <li
              onClick={() => {
                setCommandbarState(!commandbarState);
              }}
            >
              <div className="flex items-center px-4 py-2 hover:bg-gray-700">
                <FaSearch className="mr-2" />
                <span>Search</span>
              </div>
            </li>
            <li>
              <Link href="/pages/people">
                <div className="flex items-center px-4 py-2 hover:bg-gray-700">
                  <FaTasks className="mr-2" />
                  <span>Tasks</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>

        <div className={`${isCollapsed ? "hidden" : ""} sm:block`}>
          <p className={`text-xs text-gray-400 px-4 mt-4`}>Settings</p>
          <ul>
            <li>
              <Link href="/pages/settings">
                <div className="flex items-center px-4 py-2 hover:bg-gray-700">
                  <FaCog className="mr-2" />
                  <span>Settings</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
