import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from 'react-router-dom';
import SolutionsAndServices from "./SolutionsAndServices"; // Import the SolutionsAndServices component
import Resources from "./Resources";

const NavBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false); // State for toggling Solutions & Services visibility
  const [showResources, setShowResources] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleNavigation = (path, sectionId) => {
    setSidebarOpen(false);
    if (sectionId) {
      navigate(path, { state: { sectionId } }); // Passing state for navigation if needed
    } else {
      navigate(path);
      setSidebarOpen(false);
   // Close menu after navigating
    }
  };

  // Toggle visibility of the Solutions & Services section
  const toggleSolutions = () => {
    setShowSolutions((prev) => !prev);
    if(sidebarOpen){
      setSidebarOpen(false);
    }
  };

  const toggleReso = () =>{
    setShowResources(!showResources);
    if(sidebarOpen){
      setSidebarOpen(false);
    }
  }

  return (
    <div>
      {/* Part 1: Centered Text */}
      <div className="fixed top-0 left-0 right-0 z-50 w-full bg-black text-white text-center py-2">
        <p className="text-sm font-medium">Save 50% for 12 months</p>
        <p className="text-sm font-medium underline underline-dashed">
          Limited time offer. Get Started today
        </p>
      </div>

      {/* Navigation Bar (Fixed at the top) */}
      <div className="fixed top-[40px] left-0 right-0 z-50  mt-3 w-full navbar flex items-center bg-white text-gray-700 py-3 px-4 lg:px-8">
        {/* Hamburger Menu (Visible only on small screens) */}
        <button
          className="text-gray-700 block lg:hidden"
          onClick={toggleSidebar}
        >
          <MenuIcon fontSize="large" />
        </button>

        {/* Left Section: Logo and Menu Items (Visible only on large screens) */}
        <div className="fixed items-center space-x-6 lg:flex lg:items-center lg:space-x-4 lg:mr-auto hidden mt-3">
          <img src="./Images/logo.png" alt="Logo" className="h-10" />
          <div className="flex items-center space-x-4">
            <div
              onClick={toggleSolutions} // Toggle visibility of Solutions & Services section
              className="flex items-center space-x-1 cursor-pointer"
            >
              <span className="text-sm font-semibold">Solutions & Services</span>
              <ArrowDropDownIcon fontSize="small" />
            </div>
            <div onClick={toggleReso} className="flex items-center space-x-1 cursor-pointer">
              <span className="text-sm font-semibold">Resources</span>
              <ArrowDropDownIcon fontSize="small" />
            </div>
            <span onClick={() => handleNavigation("/mailchimp")} className="text-sm font-semibold cursor-pointer">
              Switch to Mailchimp
            </span>
            <span onClick={() => handleNavigation("/pricing")}  className="text-sm font-semibold cursor-pointer">Pricing</span>
            <button onClick={()=>handleNavigation("/landingpage")} className="text-sm font-semibold cursor-pointer">Landingpage</button>
          </div>
        </div>

        {/* Right Section: Search, Language, Sales, Login, and Sign Up (Visible only on large screens) */}
        <div className="hidden lg:flex items-center space-x-6 ml-auto mt-12">
          <button className="text-gray-700">
            <SearchIcon fontSize="small" />
          </button>
          <div className="flex items-center space-x-1 cursor-pointer">
            <LanguageIcon fontSize="small" />
            <span className="text-sm">Language</span>
            <ArrowDropDownIcon fontSize="small" />
          </div>
          <span className="text-sm font-semibold">Sales: +1 (800) 315-5939</span>
          <button onClick={() => handleNavigation('/login')}
            className="px-4 py-1 border border-black rounded-full hover:bg-yellow-400 transition text-black">
            Login
          </button>
          <button onClick={()=>handleNavigation('/signup')} className="px-4 py-1 border border-black text-black rounded-full hover:bg-yellow-400 transition">
            Sign Up
          </button>
        </div>
      </div>

      {/* Solutions & Services Section (Only visible when the button is clicked) */}
      {showSolutions && <SolutionsAndServices  closeSolutions={toggleSolutions}/>}
       {/* Display Resources Section */}
       {showResources && <Resources />}

      {/* Sidebar (For mobile screens) */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 lg:hidden`}
      >
        {/* Close Icon */}
        <button
          className="absolute top-4 right-4 text-gray-700"
          onClick={toggleSidebar}
        >
          <CloseIcon fontSize="large" />
        </button>

        {/* Sidebar Content */}
        <div className="mt-20 space-y-6 px-6">
          <div className="flex items-center space-x-1 cursor-pointer">
            <span
              onClick={toggleSolutions} // Toggle visibility of Solutions & Services section
              className="text-lg font-semibold"
            >
              Solutions & Services
            </span>
            <ArrowDropDownIcon fontSize="small" />
          </div>
          <div onClick={toggleReso} className="flex items-center space-x-1 cursor-pointer">
            <span className="text-lg font-semibold">Resources</span>
            <ArrowDropDownIcon fontSize="small" />
          </div>
          <div>
            <span onClick={() => handleNavigation("/mailchimp")} className="block text-lg font-semibold cursor-pointer">
              Switch to Mailchimp
            </span>
          </div>
          <div>
            <span onClick={() => handleNavigation("/pricing")} className="block text-lg font-semibold cursor-pointer">
              Pricing
            </span>
          </div>
          <div>
            <span onClick={()=>handleNavigation("/landingpage")} className="block text-lg font-semibold cursor-pointer">
              Landingpage
            </span>
          </div>
          <hr className="border-gray-300" />
          <div className="flex items-center space-x-2">
            <SearchIcon fontSize="small" />
            <span className="text-lg">Search</span>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer">
            <LanguageIcon fontSize="small" />
            <span className="text-lg">Language</span>
            <ArrowDropDownIcon fontSize="small" />
          </div>
          <span className="text-lg font-semibold">Sales: +1 (800) 315-5939</span>
          <button onClick={() => handleNavigation('/login')} className="w-full px-4 py-2 border border-black rounded-full hover:bg-yellow-400 transition text-black">
            Login
          </button>
          <button onClick={()=>handleNavigation('/signup')} className="w-full px-4 py-2 border border-black text-black rounded-full hover:bg-yellow-400 transition">
            Sign Up
          </button>
        </div>
      </div>

      {/* Overlay (for closing sidebar) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default NavBar;
