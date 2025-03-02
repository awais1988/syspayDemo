import React, { useState } from "react";
import SearchSvg from "../utils/images/svg/SearchSvg";
import { profileImg } from "../utils/images";
import DownSvg from "../utils/images/svg/DownSvg";
import NotificationSvg from "../utils/images/svg/NotificationSvg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full h-[7.5rem] bg-white shadow-sm flex items-center justify-between px-4 md:px-8">
      <div className="flex items-center space-x-6 w-3/4 justify-between">
        <div className="header-page-title text-xl font-semibold text-gray-800 w-2/6">
          Dashboard
        </div>

        <div className="hidden md:flex items-center w-4/6">
          <div className="relative w-96">
            <SearchSvg />
            <input
              type="text"
              placeholder="Search here..."
              className="w-full h-[60px] pl-10 pr-4 py-2 rounded-[16px] border-none bg-[#F9FAFB] focus:outline-none focus:ring-2 focus:ring-[#1559ED]"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-6 w-1/4 justify-around">
        <div className="hidden md:flex items-center">
          <div className="relative w-40">
            <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1559ED] focus:border-transparent appearance-none bg-white">
              <option value="us">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="ca">Canada</option>
            </select>
            <DownSvg
              clsProperties={
                "h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
              }
            />
          </div>
        </div>

        <button className="hidden md:block relative p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#1559ED]">
          <NotificationSvg />

          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
            3
          </span>
        </button>

        <div className="relative">
          <button className="flex items-center space-x-2 focus:outline-none">
            <img
              src={profileImg}
              alt="User Profile"
              className="w-10 h-10 rounded-full"
            />
            <DownSvg clsProperties={"h-5 w-5 text-gray-600"} />
          </button>
        </div>
      </div>

      <button
        className="md:hidden p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#1559ED]"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {isMenuOpen && (
        <div className="md:hidden absolute top-[7.5rem] right-0 w-full bg-white shadow-lg z-50">
          <div className="p-4">
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search here..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1559ED] focus:border-transparent"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <div className="relative">
              <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1559ED] focus:border-transparent appearance-none bg-white">
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="ca">Canada</option>
              </select>
              <DownSvg
                clsProperties={
                  "h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                }
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
