import React, { useState } from "react";
import { Phone } from "lucide-react";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../context/ThemeContext";
import { themeConfig } from "../config/themeConfig";

const HamburgerMenuElite = ({ isOpen, onClick, className = "", isDark }) => (
  <button
    onClick={onClick}
    className={`relative w-9 h-9 flex flex-col justify-center items-center cursor-pointer focus:outline-none group ${className}`}
    aria-label="Toggle menu"
  >
    <div className="relative w-full h-full">
      <div
        className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${isOpen ? "rotate-180" : "rotate-0"}`}
      >
        {/* Top Line */}
        <span
          className={`absolute top-1/2 left-1/2 w-6 h-0.5 bg-[#F24E1E] transition-all duration-700 transform -translate-x-1/2 shadow-sm ${isOpen ? "rotate-45 -translate-y-1/2 w-7" : "-translate-y-2 rotate-0 w-6"}`}
          style={{ transformOrigin: "center", transitionDelay: isOpen ? "0.1s" : "0s" }}
        />
        {/* Middle Line */}
        <span
          className={`absolute top-1/2 left-1/2 w-6 h-0.5 bg-[#F24E1E] transition-all duration-500 transform -translate-x-1/2 -translate-y-1/2 shadow-sm ${isOpen ? "opacity-0 scale-0 rotate-180" : "opacity-100 scale-100 rotate-0"}`}
          style={{ transformOrigin: "center", transitionDelay: isOpen ? "0s" : "0.2s" }}
        />
        {/* Bottom Line */}
        <span
          className={`absolute top-1/2 left-1/2 w-6 h-0.5 bg-[#F24E1E] transition-all duration-700 transform -translate-x-1/2 shadow-sm ${isOpen ? "-rotate-45 -translate-y-1/2 w-7" : "translate-y-2 rotate-0 w-6"}`}
          style={{ transformOrigin: "center", transitionDelay: isOpen ? "0.1s" : "0s" }}
        />
      </div>
    </div>
  </button>
);

const Navbar = ({ scrolled, handleButtonClick }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const config = themeConfig[theme];

  const handleResponsiveContact = () => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      window.location.href = "tel:9958896172";
    } else {
      window.location.href = "mailto:contact@procedoinfo.com";
    }
  };

  const handleScrollAndNavigate = (path) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      navigate(path);
    }, 300);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 ${config.border.navbar} ${config.bg.navbar} backdrop-blur-md transition-all duration-300 ${scrolled ? "py-2 shadow-md" : "py-4"} border-b`}>
      <div className="container mx-auto px-4 flex items-center justify-between max-w-7xl transition-all duration-300">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => handleScrollAndNavigate("/")}
            className="cursor-pointer flex items-center gap-3"
          >
            <img
              src="/Procedo-logo-3-only.png"
              alt="Procedo Logo"
              className={`transition-all duration-300 ${scrolled
                  ? "w-10 md:w-12 h-10 md:h-12"
                  : "w-11 md:w-12 h-11 md:h-14"
                }`}
            />
            <div className="flex flex-col leading-none">
              <span className="text-[#F24E1E] font-bold text-xl md:text-3xl tracking-tight "style={{ fontFamily: "'Nunito', 'Quicksand', 'Rounded Mplus 1c', 'Comfortaa', sans-serif" }}>procedo</span>
              <span className="text-[#1D3557] font-bold text-xs md:text-sm tracking-wide">INFOSYSTEMS</span>
            </div>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 text-[18px] font-medium w-3xl justify-evenly">
          {/* Company Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setCompanyDropdownOpen(true)}
            onMouseLeave={() => setCompanyDropdownOpen(false)}
          >
            <button className={`${config.text.secondary} hover:${config.text.accent} transition-colors flex items-center`}>
              Company
              <svg
                className={`ml-1 h-4 w-4 transition-transform duration-200 ${companyDropdownOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 9-7 7-7-7" />
              </svg>
            </button>

            <div className={`absolute top-full left-0 mt-2 w-56 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-xl border-t-4 ${config.border.accent} z-50 transition-all duration-300 ease-out ${companyDropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}>
              <div className="py-2">
                <button onClick={() => handleScrollAndNavigate("/company/overview")} className={`block w-full text-left px-4 py-3 ${config.text.secondary} ${isDark ? 'hover:bg-gray-700' : 'hover:bg-[#FFF6EC]'} hover:${config.text.accent} transition-colors`}>
                  Company Overview
                </button>
                <button
                  onClick={() => navigate("/company/overview/#values")}
                  className={`block w-full text-left px-4 py-3 ${config.text.secondary} ${isDark ? 'hover:bg-gray-700' : 'hover:bg-[#FFF6EC]'} hover:${config.text.accent} transition-colors`}
                >
                  Our Core Values
                </button>
                <button onClick={() => navigate("/company/overview/#why-us")} className={`block w-full text-left px-4 py-3 ${config.text.secondary} ${isDark ? 'hover:bg-gray-700' : 'hover:bg-[#FFF6EC]'} hover:${config.text.accent} transition-colors`}>
                  Why Us?
                </button>
              </div>
            </div>
          </div>

          <button onClick={() => handleScrollAndNavigate("/#solutions")} className={`${config.text.secondary} hover:${config.text.accent} hover:underline underline-offset-4 transition-all`}>
            Services
          </button>

          <button onClick={() => handleScrollAndNavigate("/mission")} className={`${config.text.secondary} hover:${config.text.accent} hover:underline underline-offset-4 transition-all`}>
            Our Mission
          </button>

          <button onClick={() => handleScrollAndNavigate("/career")} className={`${config.text.secondary} hover:${config.text.accent} hover:underline underline-offset-4 transition-all`}>
            Careers
          </button>

          {/* Theme Toggle */}
          <ThemeToggle />

          <Button
            className="bg-[#F24E1E] hover:bg-[#d63e13] text-white shadow-md hover:shadow-lg transition-all duration-300"
            onClick={handleResponsiveContact}
          >
            <Phone className="w-4 h-4 mr-2" />
            Contact Us
          </Button>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center space-x-3">
          <ThemeToggle className="scale-90" />
          <HamburgerMenuElite
            isOpen={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
            isDark={isDark}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-800 ease-in-out ${isDark ? 'bg-gradient-to-b from-gray-800 to-gray-900' : 'bg-gradient-to-b from-[#FFF6EC] to-white'} shadow-lg ${mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="flex flex-col items-center py-6 space-y-4">
          {/* Company Dropdown (Mobile) */}
          <div className="w-full">
            <button
              onClick={() => setCompanyDropdownOpen(!companyDropdownOpen)}
              className={`${config.text.secondary} font-medium text-lg hover:${config.text.accent} transition-colors flex items-center justify-center w-full`}
            >
              Company
              <svg
                className={`ml-1 h-4 w-4 transition-transform duration-200 ${companyDropdownOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 9-7 7-7-7" />
              </svg>
            </button>

            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isDark ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg mt-2 mx-4 ${companyDropdownOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="py-2 space-y-1">
                <button onClick={() => { setMobileOpen(false); handleScrollAndNavigate("/company/overview"); }} className={`block w-full text-left px-4 py-2 ${config.text.secondary} hover:${config.text.accent} transition-colors text-base`}>
                  Company Overview
                </button>
                <button onClick={() => { setMobileOpen(false); handleScrollAndNavigate("/company/overview/#values"); }} className={`block w-full text-left px-4 py-2 ${config.text.secondary} hover:${config.text.accent} transition-colors text-base`}>
                  Our Core Values
                </button>
                <button onClick={() => { setMobileOpen(false); handleScrollAndNavigate("/company/overview/#why-us"); }} className={`block w-full text-left px-4 py-2 ${config.text.secondary} hover:${config.text.accent} transition-colors text-base`}>
                  Why Us?
                </button>
              </div>
            </div>
          </div>

          <button onClick={() => { setMobileOpen(false); handleScrollAndNavigate("/#solutions"); }} className={`${config.text.secondary} font-medium text-lg hover:${config.text.accent} transition-colors`}>
            Services
          </button>

          <button onClick={() => { setMobileOpen(false); handleScrollAndNavigate("/mission"); }} className={`${config.text.secondary} font-medium text-lg hover:${config.text.accent} transition-colors`}>
            Our Mission
          </button>

          <button onClick={() => { setMobileOpen(false); handleScrollAndNavigate("/careers"); }} className={`${config.text.secondary} font-medium text-lg hover:${config.text.accent} transition-colors`}>
            Careers
          </button>

          <Button
            className="bg-[#F24E1E] hover:bg-[#d63e13] text-white w-11/12 shadow-md hover:shadow-lg transition-all duration-300"
            onClick={() => {
              handleButtonClick("Contact Us");
              setMobileOpen(false);
              window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
            }}
          >
            <Phone className="w-4 h-4 mr-2" />
            Contact Us
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;