import React from "react";
import { Phone } from "lucide-react";
import Button from "./Button";

const Navbar = ({ scrolled, handleButtonClick }) => (
  <nav
    className={`
      fixed top-0 w-full z-50 border-b border-[rgba(242,78,30,0.08)]
      bg-[rgba(255,246,236,0.85)] backdrop-blur-md transition-all duration-300
      ${scrolled ? "py-2 shadow-md" : "py-4"}
    `}
  >
    <div className="container mx-auto px-4 flex items-center justify-between max-w-7xl transition-all duration-300">
      <div className="flex items-center space-x-3">
        <img
          src="/Procedo-logo.png"
          alt="Procedo Logo"
          className={scrolled ? "w-35 h-10 transition-all duration-300" : "w-40 h-12 transition-all duration-300"}
        />
      </div>
      <div className="hidden md:flex items-center space-x-8">
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
    </div>
  </nav>
);

export default Navbar;