import React, { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import Button from "./Button"; // Adjust import if your Button is from UI library

const Navbar = ({ scrolled, handleButtonClick }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className={`
        fixed top-0 w-full z-50 border-b border-[rgba(242,78,30,0.08)] 
        bg-[rgba(255,246,236,0.85)] backdrop-blur-md transition-all duration-300
        ${scrolled ? "py-2 shadow-md" : "py-4"}
      `}
    >
      <div className="container  mx-auto px-4 flex items-center justify-between max-w-7xl transition-all duration-300">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="/Procedo-logo.png"
            alt="Procedo Logo"
            className={`transition-all duration-300 ${scrolled ? "w-35 h-10" : "w-40 h-12"}`}
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-gray-600 hover:text-emerald-600 transition-colors">
            Home
          </a>
          <a href="#mission" className="text-gray-600 hover:text-emerald-600 transition-colors">
            Our Mission
          </a>
          <a href="#solutions" className="text-gray-600 hover:text-emerald-600 transition-colors">
            Solutions
          </a>
          <a href="#about" className="text-gray-600 hover:text-emerald-600 transition-colors">
            About
          </a>
          <a href="#contact" className="text-gray-600 hover:text-emerald-600 transition-colors">
            Contact
          </a>
          <Button
            className="bg-[#F24E1E] hover:bg-[#d63e13] text-white"
            onClick={() => handleButtonClick("Book Consultation")}
          >
            <Phone className="w-4 h-4 mr-2" />
            Book Consultation
          </Button>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-md focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? (
              <X className="w-7 h-7 text-[#F24E1E]" />
            ) : (
              <Menu className="w-7 h-7 text-[#F24E1E]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Sliding Animation */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-800 ease-in-out
          bg-white shadow-lg 
          ${mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="flex flex-col items-center py-6 space-y-4">
          <a
            href="#home"
            className="text-gray-700 font-medium text-lg hover:text-[#F24E1E] transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </a>
          <a
            href="#mission"
            className="text-gray-700 font-medium text-lg hover:text-[#F24E1E] transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Our Mission
          </a>
          <a
            href="#solutions"
            className="text-gray-700 font-medium text-lg hover:text-[#F24E1E] transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Solutions
          </a>
          <a
            href="#about"
            className="text-gray-700 font-medium text-lg hover:text-[#F24E1E] transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            About
          </a>
          <a
            href="#contact"
            className="text-gray-700 font-medium text-lg hover:text-[#F24E1E] transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </a>
          <Button
            className="bg-[#F24E1E] hover:bg-[#d63e13] text-white w-11/12"
            onClick={() => {
              handleButtonClick("Book Consultation");
              setMobileOpen(false);
            }}
          >
            <Phone className="w-4 h-4 mr-2" />
            Book Consultation
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
