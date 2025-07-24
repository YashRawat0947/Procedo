import React, { useState } from "react";
import { Phone } from "lucide-react";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";

const HamburgerMenuElite = ({ isOpen, onClick, className = "" }) => (
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

  const handleScrollAndNavigate = (path) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      navigate(path);
    }, 300);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 border-b border-[rgba(242,78,30,0.08)] bg-[rgba(255,246,236,0.85)] backdrop-blur-md transition-all duration-300 ${scrolled ? "py-2 shadow-md" : "py-4"}`}>
      <div className="container mx-auto px-4 flex items-center justify-between max-w-7xl transition-all duration-300">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <button onClick={() => handleScrollAndNavigate("/")}>
            <img
              src="/Procedo-logo-2.png"
              alt="Procedo Logo"
              className={`transition-all duration-300 object-contain ${scrolled ? "w-42 h-10" : "w-50 h-13"}`}
            />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 text-[18px] font-medium w-3xl justify-evenly">
          {/* Company Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setCompanyDropdownOpen(true)}
            onMouseLeave={() => setCompanyDropdownOpen(false)}
          >
            <button className="text-gray-600 hover:text-[#F24E1E] transition-colors flex items-center">
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

            <div className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border-t-4 border-[#F24E1E] z-50 transition-all duration-300 ease-out ${companyDropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}>
              <div className="py-2">
                <button onClick={() => handleScrollAndNavigate("/company/overview")} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-[#FFF6EC] hover:text-[#F24E1E] transition-colors">
                  Company Overview
                </button>
                <button
                  onClick={() => navigate("/company/overview/#values")}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-[#FFF6EC] hover:text-[#F24E1E] transition-colors"
                >
                  Our Core Values
                </button>
                <button onClick={() => handleScrollAndNavigate("/company/strategic-partners")} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-[#FFF6EC] hover:text-[#F24E1E] transition-colors">
                  Our Strategic Partners
                </button>
                <button onClick={() => navigate("/company/overview/#why-us")} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-[#FFF6EC] hover:text-[#F24E1E] transition-colors">
                  Why Us?
                </button>
              </div>
            </div>
          </div>

          <button onClick={() => handleScrollAndNavigate("/#solutions")} className="text-gray-600 hover:text-[#F24E1E] hover:underline underline-offset-4 transition-all">
            Services
          </button>

          <button onClick={() => handleScrollAndNavigate("/mission")} className="text-gray-600 hover:text-[#F24E1E] hover:underline underline-offset-4 transition-all">
            Our Mission
          </button>

          <button onClick={() => handleScrollAndNavigate("/careers")} className="text-gray-600 hover:text-[#F24E1E] hover:underline underline-offset-4 transition-all">
            Careers
          </button>

          <Button
            className="bg-[#F24E1E] hover:bg-[#d63e13] text-white shadow-md hover:shadow-lg transition-all duration-300"
            onClick={() => {
              handleButtonClick("Contact Us");
              window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
            }}
          >
            <Phone className="w-4 h-4 mr-2" />
            Contact Us
          </Button>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <HamburgerMenuElite
            isOpen={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-800 ease-in-out bg-gradient-to-b from-[#FFF6EC] to-white shadow-lg ${mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="flex flex-col items-center py-6 space-y-4">
          {/* Company Dropdown (Mobile) */}
          <div className="w-full">
            <button
              onClick={() => setCompanyDropdownOpen(!companyDropdownOpen)}
              className="text-gray-700 font-medium text-lg hover:text-[#F24E1E] transition-colors flex items-center justify-center w-full"
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

            <div className={`overflow-hidden transition-all duration-300 ease-in-out bg-gray-50 rounded-lg mt-2 mx-4 ${companyDropdownOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="py-2 space-y-1">
                <button onClick={() => { setMobileOpen(false); handleScrollAndNavigate("/company/overview"); }} className="block w-full text-left px-4 py-2 text-gray-600 hover:text-[#F24E1E] transition-colors text-base">
                  Company Overview
                </button>
                <button onClick={() => { setMobileOpen(false); handleScrollAndNavigate("/company/overview/#values"); }} className="block w-full text-left px-4 py-2 text-gray-600 hover:text-[#F24E1E] transition-colors text-base">
                  Our Core Values
                </button>
                <button onClick={() => { setMobileOpen(false); handleScrollAndNavigate("/company/strategic-partners"); }} className="block w-full text-left px-4 py-2 text-gray-600 hover:text-[#F24E1E] transition-colors text-base">
                  Our Strategic Partners
                </button>
                <button onClick={() => { setMobileOpen(false); handleScrollAndNavigate("/company/overview/#why-us"); }} className="block w-full text-left px-4 py-2 text-gray-600 hover:text-[#F24E1E] transition-colors text-base">
                  Why Us?
                </button>
              </div>
            </div>
          </div>

          <button onClick={() => { setMobileOpen(false); handleScrollAndNavigate("/services"); }} className="text-gray-700 font-medium text-lg hover:text-[#F24E1E] transition-colors">
            Services
          </button>

          <button onClick={() => { setMobileOpen(false); handleScrollAndNavigate("/mission"); }} className="text-gray-700 font-medium text-lg hover:text-[#F24E1E] transition-colors">
            Our Mission
          </button>

          <button onClick={() => { setMobileOpen(false); handleScrollAndNavigate("/careers"); }} className="text-gray-700 font-medium text-lg hover:text-[#F24E1E] transition-colors">
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
