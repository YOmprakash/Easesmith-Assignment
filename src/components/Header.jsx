import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Import Link and useLocation

import { LiaShoppingCartSolid } from "react-icons/lia";
import { LuUser2 } from "react-icons/lu";
import { FiMenu, FiX } from "react-icons/fi"; // For Hamburger Menu and Close
import Logo from "../assets/logo.png";
import TopBanner from "./TopBanner";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu
  const [activeLink, setActiveLink] = useState("/"); // State for active link
  const location = useLocation(); // Get the current location (path)
 
 
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu open/close
  };

  // Function to handle link click
  const handleLinkClick = (path) => {
    setActiveLink(path); // Set the clicked link as active
  };

  return (
    <>
      {/* Top Banner */}
      <TopBanner />

      {/* Main Header Section */}
      <header className="py-4 bg-white ">
        <div className="container flex items-center justify-between px-4 mx-auto">
          {/* Left Section: Logo */}
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="object-contain mr-2 w-14" />
            <span className="text-2xl font-semibold hidden md:block text-[#0F4811]">
              Chaperone
            </span>
          </div>

          {/* Right Section for Mobile: Icons (Profile, Cart, and Menu) */}
          <div className="flex items-center space-x-4 md:hidden">
            {/* Profile Icon */}
            <LuUser2
              size={22}
              className="text-black font-[500] hover:text-gray-900 cursor-pointer"
            />

            {/* Cart Icon */}
            <div className="relative">
              <LiaShoppingCartSolid
                size={28}
                className="text-black font-[500] hover:text-gray-900 cursor-pointer"
              />
              <div className="absolute -top-3 right-0 bg-[#F3A939] text-black text-xs font-bold px-1 rounded-full">
                0
              </div>
            </div>

            {/* Hamburger Icon */}
            {isMenuOpen ? (
              <FiX size={28} className="cursor-pointer" onClick={toggleMenu} />
            ) : (
              <FiMenu size={28} className="cursor-pointer" onClick={toggleMenu} />
            )}
          </div>

           {/* Navigation Links for Desktop */}
           <nav className="hidden md:flex space-x-6 text-[16px] font-[500] text-[#000000]">
            <Link
              to="/"
              className={`hover:text-[#F3A939] ${
                location.pathname === "/" ? "text-[#F3A939]" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className={`hover:text-[#F3A939] ${
                location.pathname === "/shop" ? "text-[#F3A939]" : ""
              }`}
            >
              Plants & Pots
            </Link>
            <Link
              to="/about"
              className={`hover:text-[#F3A939] ${
                location.pathname === "/about" ? "text-[#F3A939]" : ""
              }`}
            >
              Tools
            </Link>
            <Link
              to="/contact"
              className={`hover:text-[#F3A939] ${
                location.pathname === "/contact" ? "text-[#F3A939]" : ""
              }`}
            >
              Our Services
            </Link>
            <Link
              to="/blog"
              className={`hover:text-[#F3A939] ${
                location.pathname === "/blog" ? "text-[#F3A939]" : ""
              }`}
            >
             Blog
            </Link>
            <Link
              to="/story"
              className={`hover:text-[#F3A939] ${
                location.pathname === "/story" ? "text-[#F3A939]" : ""
              }`}
            >
              Our Story
            </Link>
            <Link
              to="/faqs"
              className={`hover:text-[#F3A939] ${
                location.pathname === "/faqs" ? "text-[#F3A939]" : ""
              }`}
            >
              FAQs  
            </Link>
            {/* Add more links as needed */}
          </nav>

          {/* Right Section: Icons (Desktop) */}
          <div className="items-center hidden space-x-6 md:flex">
            {/* Profile Icon */}
            <div className="flex flex-col items-center">
              <LuUser2
                size={22}
                className="text-black font-[500] hover:text-[#F3A939] cursor-pointer"
              />
              <span className="text-sm hidden md:block font-[500]">My Profile</span>
            </div>

            {/* Cart Icon */}
            <div className="relative flex flex-col items-center ">
              <LiaShoppingCartSolid
                size={28}
                className="text-black font-[500]   cursor-pointer"
              />
              <span className="text-sm hidden md:block  font-[500]">Cart</span>
              <div className="absolute -top-3 right-0 bg-[#F3A939] text-black text-xs font-bold px-1 rounded-full">
                0
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="flex flex-col h-full px-4 py-2 mt-4 space-y-4 bg-white md:hidden">
          <Link
              to="/"
              className={`hover:text-[#F3A939] ${
                location.pathname === "/" ? "text-[#F3A939]" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className={`hover:text-[#F3A939] ${
                location.pathname === "/shop" ? "text-[#F3A939]" : ""
              }`}
            >
              Plants & Pots
            </Link>
            <Link
              to="/about"
              className={`hover:text-[#F3A939] ${
                location.pathname === "/about" ? "text-[#F3A939]" : ""
              }`}
            >
              Tools
            </Link>
            <Link
              to="/contact"
              className={`hover:text-[#F3A939] ${
                location.pathname === "/contact" ? "text-[#F3A939]" : ""
              }`}
            >
              Our Services
            </Link>
            <Link
              to="/blog"
              className={`hover:text-[#F3A939] ${
                location.pathname === "/blog" ? "text-[#F3A939]" : ""
              }`}
            >
             Blog
            </Link>
            <Link
              to="/story"
              className={`hover:text-[#F3A939] ${
                location.pathname === "/story" ? "text-[#F3A939]" : ""
              }`}
            >
              Our Story
            </Link>
            <Link
              to="/faqs"
              className={`hover:text-[#F3A939] ${
                location.pathname === "/faqs" ? "text-[#F3A939]" : ""
              }`}
            >
              FAQs  
            </Link>
            
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;
