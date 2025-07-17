import React from "react";

const Footer = () => (
  <footer className="bg-[#FFF6EC] text-[#F24E1E] py-12">
    <div className="container mx-auto px-4 max-w-7xl">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <div className="flex justify-center items-center space-x-2 mb-4">
            <img
              src="/Procedo-logo.png"
              alt="Procedo Logo"
              className="w-40 h-14 object-contain rounded-lg"
            />
          </div>
          <p className="text-[#1A355D] text-sm">
            Designing intelligent systems that empower businesses to focus on what matters most.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Solutions</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="#" className="hover:text-gray-700 transition-colors">
                IT Infrastructure
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-700 transition-colors">
                Facilities Security
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-700 transition-colors">
                AV Conferencing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-700 transition-colors">
                Support Services
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="#" className="hover:text-gray-700 transition-colors">
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
        <div>
          <h4 className="font-semibold mb-4">Connect</h4>
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
      <div className="border-t border-[#F24E1E] pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-[#1A355D] text-sm">© {new Date().getFullYear()} TechSystems. All rights reserved.</p>
        <div className="flex space-x-6 text-sm text-[#1A355D] mt-4 md:mt-0">
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