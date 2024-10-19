import React from "react";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { LuUser2 } from "react-icons/lu"; // Importing Profile and Cart Icons
import Logo from "../assets/logo.png";
import TopBanner from "./TopBanner";
const Header = () => {
  return (
    <>
      {/* Top Banner */}
      <TopBanner />

      {/* Main Header Section */}
      <header className="py-4 bg-white">
        <div className="container flex items-center justify-between px-4 mx-auto">
          {/* Left Section: Logo */}
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="object-contain mr-2 w-14" />
            <span className="text-2xl font-semibold text-[#0F4811]">
              Chaperone
            </span>
          </div>

          {/* Middle Section: Navigation Links */}
          <nav className="hidden md:flex space-x-6 text-[16px] font-[500] text-[#000000]">
            <a href="/" className="hover:text-[#F3A939]">
              Home
            </a>
            <a href="/shop" className="hover:text-[#F3A939]">
              Plants & Pots
            </a>
            <a href="/about" className="hover:text-[#F3A939]">
              Tools
            </a>
            <a href="/contact" className="hover:text-[#F3A939]">
              Our Services
            </a>
            <a href="/" className="hover:text-gray-900">
              Blog
            </a>
            <a href="/shop" className="hover:text-[#F3A939]">
              Our Story
            </a>
            <a href="/about" className="hover:text-[#F3A939]">
              FAQs
            </a>
          </nav>

          {/* Right Section: Icons */}
          <div className="flex items-center space-x-6">
            {/* Profile Icon */}
            <div className="flex flex-col items-center">
              <LuUser2
                size={22}
                className="text-black font-[500] hover:text-gray-900 cursor-pointer"
              />
              <span className="text-sm font-[500]">My Profile</span>
            </div>

            {/* Cart Icon */}
            <div className="relative flex flex-col items-center">
              <LiaShoppingCartSolid
                size={28}
                className="text-black font-[500] hover:text-gray-900 cursor-pointer"
              />
              <span className="text-sm font-[500]">Cart</span>
              <div className="absolute -top-3 right-0 bg-[#F3A939] text-black text-xs font-bold px-1 rounded-full">
                0
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
