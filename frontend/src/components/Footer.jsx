import React from "react";

const Footer = () => (
  <footer className="bg-[#FFF6EC] text-[#F24E1E] py-10">
    <div className="container mx-auto px-4 max-w-7xl">
      {/* Main Footer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        {/* Logo & Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <img
              src="/Procedo-logo.png"
              alt="Procedo Logo"
              className="w-32 h-12 object-contain rounded-lg"
            />
          </div>
          <p className="text-[#1A355D] text-sm max-w-xs">
            Designing intelligent systems that empower businesses to focus on what matters most.
          </p>
        </div>
        
        {/* Solutions & Company - Side by side on mobile */}
        <div className="md:contents">
          <div className="grid grid-cols-2 gap-4 md:contents">
            {/* Solutions */}
            <div className="flex flex-col items-center md:items-start">
              <h4 className="font-semibold mb-3">Solutions</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#it" className="hover:text-gray-700 transition-colors">
                    IT Infrastructure
                  </a>
                </li>
                <li>
                  <a href="#security" className="hover:text-gray-700 transition-colors">
                    Facilities Security
                  </a>
                </li>
                <li>
                  <a href="#audio" className="hover:text-gray-700 transition-colors">
                    AV Conferencing
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Company */}
            <div className="flex flex-col items-center md:items-start">
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#about" className="hover:text-gray-700 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-700 transition-colors">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-700 transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-700 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Connect */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-semibold mb-3">Connect</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-gray-700 transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-700 transition-colors">
              Twitter
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-700 transition-colors">
              YouTube
            </a>
          </div>
        </div>
      </div>
      
      {/* Divider & Bottom Bar */}
      <div className="border-t border-[#F24E1E] pt-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-[#1A355D] text-xs sm:text-sm mb-3 md:mb-0 text-center md:text-left">
          © {new Date().getFullYear()} TechSystems. All rights reserved.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-xs sm:text-sm text-[#1A355D]">
          <a href="#" className="hover:text-[#F24E1E] transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-[#F24E1E] transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-[#F24E1E] transition-colors">
            Cookie Policy
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;