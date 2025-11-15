import { Instagram, Linkedin, LinkedinIcon, LucideLinkedin, Mail, Phone, MessageCircle, Copy, Check, FacebookIcon, Facebook } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { themeConfig } from "../config/themeConfig";

const Footer = () => {
  const [copiedItem, setCopiedItem] = useState(null);
  const { theme } = useTheme();
  const config = themeConfig[theme];
  const isDark = theme === 'dark';

  const copyToClipboard = async (text, itemId) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(itemId);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };
  const navigate = useNavigate();

  const handleScrollAndNavigate = (path) => {
    window.scrollTo({ behavior: "smooth" });
    setTimeout(() => {
      navigate(path);
    }, 300);
  };
  const handleScrollAndNavigateTop = (path) => {
    window.scrollTo({top: 0, behavior: "smooth" });
    setTimeout(() => {
      navigate(path);
    }, 300);
  };

  return (
    <footer className={`${config.bg.footer} ${config.text.accent} py-10 transition-colors duration-300`}>
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Main Footer Grid */}
        <div className="md:flex justify-between mb-4">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center text-center md:text-left mb-5">
            <div className="flex md:justify-center items-center space-x-2 mb-4">
              <img
                src="/Procedo-logo4.png"
                alt="Procedo Logo"
                className="w-39 h-12 rounded-lg"
              />
            </div>
            <p className={`${config.text.ctaPrimary} text-justify max-w-xs`}>
              Designing intelligent systems that empower businesses to focus on what matters most.
            </p>
          </div>

          {/* Solutions & Company - Side by side on mobile and desktop */}
          <div className="md:contents">
            <div className="grid grid-cols-2 gap-4 md:contents mb-4">
              {/* Solutions */}
              <div className="flex flex-col items-center md:items-start">
                <h4 className={`font-semibold mb-3 ${config.text.accent}`}>Solutions</h4>
                <ul className={`space-y-2 text-sm ${config.text.muted}`}>
                  <li>
                    <Link onClick={() => handleScrollAndNavigate("/#it")} className={`hover:${config.text.secondary} transition-colors`}>
                      IT Infrastructure
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => handleScrollAndNavigate("/#security")} className={`hover:${config.text.secondary} transition-colors`}>
                      Facilities Security
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => handleScrollAndNavigate("/#audio")} className={`hover:${config.text.secondary} transition-colors`}>
                      AV Conferencing
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div className="flex flex-col items-center md:items-start">
                <h4 className={`font-semibold mb-3 ${config.text.accent}`}>Company</h4>
                <ul className={`space-y-2 text-sm ${config.text.muted}`}>
                  <li>
                    <Link onClick={() => handleScrollAndNavigateTop("/company/overview")} className={`hover:${config.text.secondary} transition-colors`}>
                      Company Overview
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => handleScrollAndNavigate("/company/overview/#values")} className={`hover:${config.text.secondary} transition-colors`}>
                      Our Core Values
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => handleScrollAndNavigate("/company/overview/#why-us")} className={`hover:${config.text.secondary} transition-colors`}>
                      Why Us?
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Us & Connect - Single row on mobile, separate columns on desktop */}
          <div className="md:contents">
            <div className="flex w-auto justify-evenly md:contents mb-4">
              {/* Contact Us */}
              <div className="flex flex-col gap-2 items-center md:items-start">
                <h4 className={`font-semibold mb-1 text-xs md:text-base ${config.text.accent}`}>Contact Us</h4>
                <div className="space-y-2">
                  <div className="flex items-center text-[10px] md:text-sm group">
                    <span className={`${isDark ? 'bg-[#F24E1E]/20' : 'bg-[#F24E1E]/10'} rounded-full mr-2 p-0.5 md:p-1`}>
                      <Mail className="w-2.5 h-2.5 md:w-4 md:h-4 text-[#F24E1E]" />
                    </span>
                    <div className="flex items-center md:w-full w-38">
                      <a
                        href="mailto:contact@procedoinfo.com"
                        className={`hover:${config.text.secondary} transition-colors w-full ${config.text.muted} break-all`}
                      >
                        contact@procedoinfo.com
                      </a>
                      <button
                        onClick={() => copyToClipboard('contact@procedoinfo.com', 'email')}
                        className={`p-0.5 md:p-1 ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-200'} rounded transition-all duration-200 ${
                          copiedItem === 'email' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                        }`}
                        title="Copy email"
                      >
                        {copiedItem === 'email' ? (
                          <Check className="w-2.5 h-2.5 md:w-3 md:h-3 text-green-500" />
                        ) : (
                          <Copy className={`w-2.5 h-2.5 md:w-3 md:h-3 ${config.text.muted}`} />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="flex items-start gap-1 text-[10px] md:text-sm">
                    <span className={`${isDark ? 'bg-[#F24E1E]/20' : 'bg-[#F24E1E]/10'} rounded-full p-0.5 md:p-1 mt-0.5`}>
                      <Phone className="w-2.5 h-2.5 md:w-4 md:h-4 text-[#F24E1E]" />
                    </span>
                    <div className={`flex flex-col ${config.text.muted}`}>
                      <div className="flex items-center gap-1 group">
                        <a href="tel:+919958896172" className={`hover:${config.text.secondary} transition-colors`}>
                          +91 9958896172
                        </a>
                        <button
                          onClick={() => copyToClipboard('+91 9958896172', 'phone2')}
                          className={`p-0.5 md:p-1 ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-200'} rounded transition-all duration-200 ${
                            copiedItem === 'phone2' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                          }`}
                          title="Copy phone number"
                        >
                          {copiedItem === 'phone2' ? (
                            <Check className="w-2.5 h-2.5 md:w-3 md:h-3 text-green-500" />
                          ) : (
                            <Copy className={`w-2.5 h-2.5 md:w-3 md:h-3 ${config.text.muted}`} />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Connect */}
              <div className="flex-col items-center md:items-start w-1/2 md:w-auto">
                <h4 className={`text-center font-semibold mb-3 md:mb-0 text-xs md:text-base ${config.text.accent}`}>Connect</h4>
                <div className="flex md:flex-row md:gap-2 justify-center md:justify-center space-x-3 md:space-x-0 md:space-y-4">
                  <a href="https://www.linkedin.com/company/procedo-infosystems/" className={`flex items-center justify-center md:justify-start ${config.text.muted} hover:${config.text.secondary} transition-colors`}>
                    <LucideLinkedin className="w-5 h-5 md:w-6 md:h-6 md:mt-3 mr-1" />
                  </a>
                  <a href="https://www.facebook.com/share/1LU1ifAuQM/" className={`flex items-center justify-center md:justify-start ${config.text.muted} hover:${config.text.secondary} transition-colors`}>
                    <FacebookIcon className="w-5 h-5 md:w-6 md:h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider & Bottom Bar */}
        <div className={`border-t ${config.border.accent} pt-6 flex flex-col md:flex-row justify-center gap-4 items-center`}>
          <p className={`${config.text.ctaPrimary} text-xs sm:text-sm mb-3 md:mb-0 text-center md:text-left`}>
            © {new Date().getFullYear()} Procedo InfoSystems. All rights reserved.
          </p>
          <div className={`flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-xs sm:text-sm ${config.text.ctaPrimary}`}>
            <a href="/privacy" className={`hover:${config.text.accent} transition-colors`}>
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;