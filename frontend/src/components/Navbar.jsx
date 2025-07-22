import React, { useState } from "react";
import { Phone } from "lucide-react";
import Button from "./Button"; // Adjust import if your Button is from UI library
import { Link } from "react-router-dom";

// Elite Ripple Hamburger Menu
const HamburgerMenuElite = ({ isOpen, onClick, className = "" }) => (
  <button
    onClick={onClick}
    className={`relative w-9 h-9 flex flex-col justify-center items-center cursor-pointer focus:outline-none group ${className}`}
    aria-label="Toggle menu"
  >
    <div className="relative w-full h-full">
      <div className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
        {/* Top line */}
        <span
          className={`absolute top-1/2 left-1/2 w-6 h-0.5 bg-[#F24E1E] transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] transform -translate-x-1/2 shadow-sm ${
            isOpen ? 'rotate-45 -translate-y-1/2 w-7' : '-translate-y-2 rotate-0 w-6'
          }`}
          style={{
            transformOrigin: 'center',
            transitionDelay: isOpen ? '0.1s' : '0s'
          }}
        />
        {/* Middle line */}
        <span
          className={`absolute top-1/2 left-1/2 w-6 h-0.5 bg-[#F24E1E] transition-all duration-500 ease-out transform -translate-x-1/2 -translate-y-1/2 shadow-sm ${
            isOpen ? 'opacity-0 scale-0 rotate-180' : 'opacity-100 scale-100 rotate-0'
          }`}
          style={{
            transformOrigin: 'center',
            transitionDelay: isOpen ? '0s' : '0.2s'
          }}
        />
        {/* Bottom line */}
        <span
          className={`absolute top-1/2 left-1/2 w-6 h-0.5 bg-[#F24E1E] transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] transform -translate-x-1/2 shadow-sm ${
            isOpen ? '-rotate-45 -translate-y-1/2 w-7' : 'translate-y-2 rotate-0 w-6'
          }`}
          style={{
            transformOrigin: 'center',
            transitionDelay: isOpen ? '0.1s' : '0s'
          }}
        />
      </div>
      {/* Ripple effect */}
      <div className={`absolute top-1/2 left-1/2 w-12 h-12  rounded-full transition-all duration-700 ease-out transform -translate-x-1/2 -translate-y-1/2 ${
        isOpen ? 'scale-100 opacity-20' : 'scale-0 opacity-0'
      }`} />
    </div>
  </button>
);

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
      <div className="container mx-auto px-4 flex items-center justify-between max-w-7xl transition-all duration-300">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="/Procedo-logo-2.png"
            alt="Procedo Logo"
            className={`transition-all duration-300 ${scrolled ? "w-35 h-10" : "w-45 h-12"}`}
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-600 hover:text-[#F24E1E] transition-colors">
            Home
          </Link>
          <Link to="/mission" className="text-gray-600 hover:text-[#F24E1E] transition-colors">
            Our Mission
          </Link>
          <a href="#solutions" className="text-gray-600 hover:text-[#F24E1E] transition-colors">
            Solutions
          </a>
          <a href="#about" className="text-gray-600 hover:text-[#F24E1E] transition-colors">
            About
          </a>
          <a href="#contact" className="text-gray-600 hover:text-[#F24E1E] transition-colors">
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

        {/* Mobile Hamburger Icon - Elite Ripple */}
        <div className="md:hidden flex items-center">
          <HamburgerMenuElite
            isOpen={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          />
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
          <Link
            to="/"
            className="text-gray-700 font-medium text-lg hover:text-[#F24E1E] transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/mission"
            className="text-gray-700 font-medium text-lg hover:text-[#F24E1E] transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Our Mission
          </Link>
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
