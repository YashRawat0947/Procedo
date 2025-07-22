import { Instagram, Linkedin, LinkedinIcon, LucideLinkedin, Mail, Phone, MessageCircle, Copy, Check } from "lucide-react";
import React, { useState } from "react";

const Footer = () => {
  const [copiedItem, setCopiedItem] = useState(null);

  const copyToClipboard = async (text, itemId) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(itemId);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <footer className="bg-[#FFF6EC] text-[#F24E1E] py-10">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Main Footer Grid */}
        <div className="md:flex justify-between mb-4">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left mb-5">
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

          {/* Solutions & Company - Side by side on mobile and desktop */}
          <div className="md:contents">
            <div className="grid grid-cols-2 gap-4 md:contents mb-4">
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
            </div>
          </div>

          {/* Contact Us & Connect - Single row on mobile, separate columns on desktop */}
          <div className="md:contents">
            <div className="flex justify-between md:contents mb-4">
              {/* Contact Us */}
              <div className="flex flex-col items-center md:items-start">
                <h4 className="font-semibold mb-2 text-xs md:text-base">Contact Us</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-1 text-[10px] md:text-sm group">
                    <span className="bg-[#F24E1E]/10 rounded-full p-0.5 md:p-1">
                      <Mail className="w-2.5 h-2.5 md:w-4 md:h-4 text-[#F24E1E]" />
                    </span>
                    <div className="flex items-center gap-1">
                      <a
                        href="mailto:rajeshrawat333@gmail.com"
                        className="hover:text-gray-700 transition-colors text-gray-400 break-all"
                      >
                        rajeshrawat333@gmail.com
                      </a>
                      <button
                        onClick={() => copyToClipboard('rajeshrawat333@gmail.com', 'email')}
                        className={`p-0.5 md:p-1 hover:bg-gray-200 rounded transition-all duration-200 ${copiedItem === 'email' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                          }`}
                        title="Copy email"
                      >
                        {copiedItem === 'email' ? (
                          <Check className="w-2.5 h-2.5 md:w-3 md:h-3 text-green-500" />
                        ) : (
                          <Copy className="w-2.5 h-2.5 md:w-3 md:h-3 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="flex items-start gap-1 text-[10px] md:text-sm">
                    <span className="bg-[#F24E1E]/10 rounded-full p-0.5 md:p-1 mt-0.5">
                      <Phone className="w-2.5 h-2.5 md:w-4 md:h-4 text-[#F24E1E]" />
                    </span>
                    <div className="flex flex-col text-gray-400">
                      <div className="flex items-center gap-1 group">
                        <a href="tel:+917217776020" className="hover:text-gray-700 transition-colors">
                          +91 7217776020
                        </a>
                        <button
                          onClick={() => copyToClipboard('+91 7217776020', 'phone1')}
                          className={`p-0.5 md:p-1 hover:bg-gray-200 rounded transition-all duration-200 ${copiedItem === 'phone1' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                            }`}
                          title="Copy phone number"
                        >
                          {copiedItem === 'phone1' ? (
                            <Check className="w-2.5 h-2.5 md:w-3 md:h-3 text-green-500" />
                          ) : (
                            <Copy className="w-2.5 h-2.5 md:w-3 md:h-3 text-gray-400" />
                          )}
                        </button>
                      </div>
                      <div className="flex items-center gap-1 group">
                        <a href="tel:+919958896172" className="hover:text-gray-700 transition-colors">
                          +91 9958896172
                        </a>
                        <button
                          onClick={() => copyToClipboard('+91 9958896172', 'phone2')}
                          className={`p-0.5 md:p-1 hover:bg-gray-200 rounded transition-all duration-200 ${copiedItem === 'phone2' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                            }`}
                          title="Copy phone number"
                        >
                          {copiedItem === 'phone2' ? (
                            <Check className="w-2.5 h-2.5 md:w-3 md:h-3 text-green-500" />
                          ) : (
                            <Copy className="w-2.5 h-2.5 md:w-3 md:h-3 text-gray-400" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* <div className=" flex mt-2 justify-center">
                    <a
                      href="mailto:rajeshrawat333@gmail.com"
                      className="bg-[#F24E1E] hover:bg-[#d63e13] text-white px-2 py-1 md:px-4 md:py-2 rounded-full font-medium transition-colors text-[10px] md:text-sm shadow-md flex items-center gap-1 md:gap-2 w-fit"
                    >
                      <MessageCircle className="w-2.5 h-2.5 md:w-4 md:h-4" />
                      Contact Now
                    </a>
                  </div> */}
                </div>
              </div>
              {/* Connect */}
              <div className=" flex-col items-center md:items-start w-1/2 md:w-auto">
                <h4 className="font-semibold mb-3 text-xs md:text-base">Connect</h4>
                <div className="flex md:flex-row md:gap-2 md:justify-center space-x-3 md:space-x-0 md:space-y-4">
                  <a href="#" className="flex items-center justify-center md:justify-start text-gray-400 hover:text-gray-700 transition-colors">
                    <LucideLinkedin className="w-5 h-5 md:w-6 md:h-6 mt-3 mr-1" />
                    {/* LinkedIn */}
                  </a>
                  <a href="#" className="flex items-center justify-center md:justify-start text-gray-400 hover:text-gray-700 transition-colors">
                    <Instagram className="w-5 h-5 md:w-6 md:h-6 mr-1" />
                    {/* Instagram */}
                  </a>
                </div>
              </div>
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
}

export default Footer;