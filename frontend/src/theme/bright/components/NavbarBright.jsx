// src/components/Navbar.jsx
import React, { useState } from "react";
import { Phone } from "lucide-react";
import Button from "../../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../../../components/UnifiedThemeProvider";

const HamburgerMenuElite = ({ isOpen, onClick, color, className = "" }) => (
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
          className={`absolute top-1/2 left-1/2 w-6 h-0.5 transition-all duration-700 transform -translate-x-1/2 shadow-sm ${isOpen ? "rotate-45 -translate-y-1/2 w-7" : "-translate-y-2 rotate-0 w-6"}`}
          style={{
            backgroundColor: color,
            transformOrigin: "center",
            transitionDelay: isOpen ? "0.1s" : "0s",
          }}
        />
        {/* Middle Line */}
        <span
          className={`absolute top-1/2 left-1/2 w-6 h-0.5 transition-all duration-500 transform -translate-x-1/2 -translate-y-1/2 shadow-sm ${isOpen ? "opacity-0 scale-0 rotate-180" : "opacity-100 scale-100 rotate-0"}`}
          style={{
            backgroundColor: color,
            transformOrigin: "center",
            transitionDelay: isOpen ? "0s" : "0.2s",
          }}
        />
        {/* Bottom Line */}
        <span
          className={`absolute top-1/2 left-1/2 w-6 h-0.5 transition-all duration-700 transform -translate-x-1/2 shadow-sm ${isOpen ? "-rotate-45 -translate-y-1/2 w-7" : "translate-y-2 rotate-0 w-6"}`}
          style={{
            backgroundColor: color,
            transformOrigin: "center",
            transitionDelay: isOpen ? "0.1s" : "0s",
          }}
        />
      </div>
    </div>
  </button>
);

const NavbarBright = ({ scrolled, handleButtonClick }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const navigate = useNavigate();

  // theme
  const { colors, theme, toggleTheme } = useTheme();
  const primaryColor = (colors && colors.primary) || "#F24E1E";
  const navBg = (colors && colors.navBg) || "rgba(255,246,236,0.85)";
  const borderColor = (colors && colors.border) || "rgba(242,78,30,0.08)";
  const textColor = (colors && colors.text) || "#1F2937";

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
    <nav
      className="fixed top-0 w-full z-50 backdrop-blur-md transition-all duration-300"
      style={{
        background: navBg,
        borderBottom: `1px solid ${borderColor}`,
        paddingTop: scrolled ? 8 : 16,
        paddingBottom: scrolled ? 8 : 16,
      }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between max-w-7xl transition-all duration-300">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => handleScrollAndNavigate("/")}
            className="cursor-pointer"
          >
            <img
              src="/Procedo-logo4.png"
              alt="Procedo Logo"
              className={`transition-all duration-300 ${scrolled ? "w-34 md:w-39 h-10 md:h-13" : "w-38 md:w-40 h-11 md:h-14"}`}
              style={{
                filter: theme === "dark" ? "brightness(0.95) contrast(1.05)" : "none",
              }}
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
            <button
              className="flex items-center"
              style={{ color: textColor }}
            >
              <span className="hover:text-opacity-90" style={{ transition: "color 150ms" }}>Company</span>
              <svg
                className={`ml-1 h-4 w-4 transition-transform duration-200 ${companyDropdownOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{ color: textColor }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 9-7 7-7-7" />
              </svg>
            </button>

            <div
              className={`absolute top-full left-0 mt-2 w-56 rounded-lg shadow-xl z-50 transition-all duration-300 ease-out ${companyDropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}
              style={{
                background: colors.cardBg || "#fff",
                borderTop: `4px solid ${primaryColor}`,
                color: colors.secondaryText || textColor,
              }}
            >
              <div className="py-2">
                <button onClick={() => handleScrollAndNavigate("/company/overview")} className="block w-full text-left px-4 py-3 hover:bg-[#FFF6EC] hover:text-[#F24E1E] transition-colors">
                  Company Overview
                </button>
                <button onClick={() => navigate("/company/overview/#values")} className="block w-full text-left px-4 py-3 hover:bg-[#FFF6EC] hover:text-[#F24E1E] transition-colors">
                  Our Core Values
                </button>
                <button onClick={() => navigate("/company/overview/#why-us")} className="block w-full text-left px-4 py-3 hover:bg-[#FFF6EC] hover:text-[#F24E1E] transition-colors">
                  Why Us?
                </button>
              </div>
            </div>
          </div>

          <button onClick={() => handleScrollAndNavigate("/#solutions")} className="hover:underline underline-offset-4 transition-all" style={{ color: textColor }}>
            Services
          </button>

          <button onClick={() => handleScrollAndNavigate("/mission")} className="hover:underline underline-offset-4 transition-all" style={{ color: textColor }}>
            Our Mission
          </button>

          <button onClick={() => handleScrollAndNavigate("/career")} className="hover:underline underline-offset-4 transition-all" style={{ color: textColor }}>
            Careers
          </button>

          <Button
            className="text-white shadow-md hover:shadow-lg transition-all duration-300"
            onClick={handleResponsiveContact}
            style={{
              background: primaryColor,
              borderColor: primaryColor,
            }}
          >
            <Phone className="w-4 h-4 mr-2" />
            Contact Us
          </Button>

          {/* Theme toggle */}
          <button
            onClick={() => toggleTheme()}
            className="ml-2 px-3 py-1 rounded-md font-medium transition-all"
            style={{
              border: `1px solid ${borderColor}`,
              color: textColor,
              background: "transparent",
            }}
            title="Toggle theme"
          >
            {theme === "bright" ? "Dark" : "Bright"}
          </button>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <HamburgerMenuElite
            isOpen={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
            color={primaryColor}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-800 ease-in-out shadow-lg ${mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        style={{
          background: navBg,
          borderTop: `1px solid ${borderColor}`,
        }}
      >
        <div className="flex flex-col items-center py-6 space-y-4">
          {/* Company Dropdown (Mobile) */}
          <div className="w-full">
            <button
              onClick={() => setCompanyDropdownOpen(!companyDropdownOpen)}
              className="font-medium text-lg flex items-center justify-center w-full"
              style={{ color: textColor }}
            >
              Company
              <svg
                className={`ml-1 h-4 w-4 transition-transform duration-200 ${companyDropdownOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{ color: textColor }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 9-7 7-7-7" />
              </svg>
            </button>

            <div className={`overflow-hidden transition-all duration-300 ease-in-out rounded-lg mt-2 mx-4 ${companyDropdownOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`} style={{ background: colors.cardBg }}>
              <div className="py-2 space-y-1">
                <button onClick={() => { setMobileOpen(false); handleScrollAndNavigate("/company/overview"); }} className="block w-full text-left px-4 py-2 hover:text-[#F24E1E] transition-colors text-base" style={{ color: textColor }}>
                  Company Overview
                </button>
                <button onClick={() => { setMobileOpen(false); handleScrollAndNavigate("/company/overview/#values"); }} className="block w-full text-left px-4 py-2 hover:text-[#F24E1E] transition-colors text-base" style={{ color: textColor }}>
                  Our Core Values
                </button>
                <button onClick={() => { setMobileOpen(false); handleScrollAndNavigate("/company/overview/#why-us"); }} className="block w-full text-left px-4 py-2 hover:text-[#F24E1E] transition-colors text-base" style={{ color: textColor }}>
                  Why Us?
                </button>
              </div>
            </div>
          </div>

          <button onClick={() => { setMobileOpen(false); handleScrollAndNavigate("/#solutions"); }} className="font-medium text-lg transition-colors" style={{ color: textColor }}>
            Services
          </button>

          <button onClick={() => { setMobileOpen(false); handleScrollAndNavigate("/mission"); }} className="font-medium text-lg transition-colors" style={{ color: textColor }}>
            Our Mission
          </button>

          <button onClick={() => { setMobileOpen(false); handleScrollAndNavigate("/career"); }} className="font-medium text-lg transition-colors" style={{ color: textColor }}>
            Careers
          </button>

          <Button
            className="w-11/12 shadow-md hover:shadow-lg transition-all duration-300"
            onClick={() => {
              handleButtonClick("Contact Us");
              setMobileOpen(false);
              window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
            }}
            style={{
              background: primaryColor,
              color: "#fff",
              borderColor: primaryColor,
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

export default NavbarBright;
