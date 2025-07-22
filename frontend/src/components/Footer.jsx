import { Instagram, Linkedin, LinkedinIcon, LucideLinkedin, Mail, Phone, MessageCircle } from "lucide-react";
import React from "react";

const Footer = () => (
  <footer className="bg-[#FFF6EC] text-[#F24E1E] py-10">
    <div className="container mx-auto px-4 max-w-7xl">
      {/* Main Footer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
        {/* Logo & Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <img
              src="/Procedo-logo-2.png"
              alt="Procedo Logo"
              className="w-52 h-12 object-contain rounded-lg"
            />
          </div>
          <p className="text-[#1A355D] text-sm max-w-xs">
            Designing intelligent systems that empower businesses to focus on what matters most.
          </p>
        </div>

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
              <a href="#solutions" className="hover:text-gray-700 transition-colors">
                Solutions
              </a>
            </li>
            {/* <li>
              <a href="#" className="hover:text-gray-700 transition-colors">
                Careers
              </a>
            </li> */}
            {/* <li>
              <a href="#" className="hover:text-gray-700 transition-colors">
                Contact
              </a>
            </li> */}
          </ul>
        </div>

        {/* Contact Us */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-semibold mb-3">Contact Us</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm">
              <span className="bg-[#F24E1E]/10 rounded-full p-1">
                <Mail className="w-4 h-4 text-[#F24E1E]" />
              </span>
              <a href="mailto:rajeshrawat333@gmail.com" className="hover:text-gray-700 transition-colors text-gray-400">
                rajeshrawat333@gmail.com
              </a>
            </div>
            <div className="flex items-start gap-2 text-sm">
              <span className="bg-[#F24E1E]/10 rounded-full p-1 mt-0.5">
                <Phone className="w-4 h-4 text-[#F24E1E]" />
              </span>
              <div className="flex flex-col text-gray-400">
                <a href="tel:+917217776020" className="hover:text-gray-700 transition-colors">
                  +91 7217776020
                </a>
                <a href="tel:+919958896172" className="hover:text-gray-700 transition-colors">
                  +91 9958896172
                </a>
              </div>
            </div>
            <div className="mt-3">
              <a
                href="mailto:rajeshrawat333@gmail.com"
                className="bg-[#F24E1E] hover:bg-[#d63e13] text-white px-4 py-2 rounded-full font-medium transition-colors text-sm shadow-md flex items-center gap-2 w-fit"
              >
                <MessageCircle className="w-4 h-4" />
                Contact Now
              </a>
            </div>
          </div>
        </div>

        {/* Connect */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-semibold mb-3">Connect</h4>
          <div className="flex space-x-4">
            <a href="#" className="flex items-center text-gray-400 hover:text-gray-700 transition-colors">
              <LucideLinkedin className="w-6 h-6 mr-1" />
              {/* LinkedIn */}
            </a>
            <a href="#" className="flex items-center text-gray-400 hover:text-gray-700 transition-colors">
              <Instagram className="w-6 h-6 mr-1" />
              {/* Instagram */}
            </a>
            {/* 
              <a href="#" className="flex items-center text-gray-400 hover:text-gray-700 transition-colors">
                <Youtube className="w-4 h-4 mr-1" />
                YouTube
              </a> 
              */}
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