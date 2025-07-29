import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Shield,
  Server,
  Video,
  Network,
  Cloud,
  Database,
  Lock,
  Camera,
  Fingerprint,
  Mic,
  Monitor,
  Headphones,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Star,
  Users,
  Award,
  Calendar,
  MessageCircle,
  ArrowRight,
  Globe,
} from "lucide-react";
import TrustBuildersSection from "../components/TrustBuildersSection";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Utility function for class names
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ")
}


function Home() {
  const location = useLocation();


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
      const hero = document.querySelector("#it")
      if (hero) {
        const heroHeight = hero.offsetHeight
        setShowScrollTop(window.scrollY > heroHeight * 0.5)
      } else {
        setShowScrollTop(window.scrollY > 300)
      }
    }
    window.addEventListener("it", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (location.hash === "#it") {
      setTimeout(() => {
        const el = document.getElementById("it");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 0);
    }
  }, [location]);
  useEffect(() => {
    if (location.hash === "#security") {
      setTimeout(() => {
        const el = document.getElementById("security");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 0);
    }
  }, [location]);
  useEffect(() => {
    if (location.hash === "#audio") {
      setTimeout(() => {
        const el = document.getElementById("audio");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 0);
    }
  }, [location]);

  useEffect(() => {
    if (location.hash === "#solutions") {
      // Timeout ensures DOM is ready
      setTimeout(() => {
        const el = document.getElementById("solutions");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 0);
    }
  }, [location]);
  const handleButtonClick = (action) => {
    console.log(`${action} clicked`);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      const hero = document.querySelector(".hero-section");
      if (hero) {
        const heroHeight = hero.offsetHeight;
        setShowScrollTop(window.scrollY > heroHeight * 0.5);
      } else {
        setShowScrollTop(window.scrollY > 300);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar scrolled={scrolled} handleButtonClick={handleButtonClick} />

      {/* Hero Section */}
      <section className="hero-section relative mt-11 pt-16 pb-12 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100" />
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800"
            alt="Modern tech control room"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="max-w-lg sm:max-w-3xl my-6 mx-auto text-center px-2">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-snug break-words">
              We Design Systems That Work <span className="text-[#ec5d32]">Intelligently</span>—
              <br className="block sm:hidden" />
              So You Can Focus on What Matters
            </h1>

            <p className="text-sm sm:text-lg text-gray-600 mb-5 sm:mb-8 leading-relaxed max-w-2xl mx-auto">
              From secure IT infrastructure to advanced building automation and AV ecosystems—
              we help businesses operate smarter, safer, and more connected.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              {/* Hero Section Buttons */}
              <Link
                to="#solutions"
                className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 sm:px-8 sm:py-3 rounded-md font-medium transition-colors text-xs sm:text-base shadow-lg flex items-center mx-auto"
              >
                <ArrowRight className="w-4 h-4 inline mr-2" />
                Explore Our Solutions
              </Link>
              {/* <Button
                size="lg"
                variant="outline"
                className="text-base sm:text-lg px-6 py-3 border-[#F24E1E] text-[#F24E1E] hover:bg-[#FFF6EC] bg-transparent"
                onClick={() => handleButtonClick("Book Consultation")}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book a Free Consultation
              </Button> */}
            </div>

            <div className="mt-6 sm:mt-10 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-gray-500">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
                Enterprise Grade Solutions
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
                24/7 Support
              </div>

            </div>
          </div>
        </div>

      </section>

      {/* Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-[#F24E1E] hover:bg-[#d63e13] text-white rounded-full shadow-lg p-3 transition-opacity duration-500 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <ArrowRight className="transform -rotate-90 w-6 h-6" />
        </button>
      )}

      {/* Solutions Section */}
      <section id="solutions" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div id="it" className="text-center mb-16">
            <p className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6 leading-tight drop-shadow-sm">
              Three Pillars of <span className="text-orange-500">Expertise</span>
            </p>

            <p className="text-5 sm:text-xl  text-gray-600 max-w-5xl mx-auto">
              Comprehensive technology solutions designed to transform how your business operates
            </p>
          </div>

          <div className="space-y-16">
            {/* IT Infrastructure */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Mobile: Image as background behind text */}
              <div className="relative w-full">
                <div className="block lg:hidden absolute inset-0 z-0 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                    alt="IT Infrastructure visualization"
                    className="w-full h-full object-cover opacity-20"
                  />
                </div>
                <div className="relative z-10 p-2 sm:p-0">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#F24E1E] rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                      <Server className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h3 className="text-base sm:text-2xl md:text-3xl font-bold text-gray-900">IT Infrastructure</h3>
                  </div>
                  <p className="text-xs sm:text-lg text-[#F24E1E] font-medium mb-2 sm:mb-4">
                    "Digital foundations built for agility and scale."
                  </p>
                  <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-xs sm:text-base">
                    Modern businesses need more than just devices—they need a scalable, secure digital backbone. We
                    deliver enterprise-grade IT solutions tailored to your goals.
                  </p>

                  <div className="space-y-4 sm:space-y-6 mb-4 sm:mb-8">
                    {/* Network Architecture */}
                    <div className="border-l-4 border-[#F24E1E] pl-2 sm:pl-4">
                      <div className="flex items-start mb-2 sm:mb-3">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#F24E1E] rounded-lg flex items-center justify-center mr-2 sm:mr-3 mt-1 flex-shrink-0">
                          <Network className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-xs sm:text-base">Network Architecture</h4>
                          <div className="text-gray-600 text-[10px] sm:text-sm space-y-1 mt-1">
                            <p>• LAN/WAN design and deployment</p>
                            <p>• High-performance Wi-Fi (mesh, enterprise-grade)</p>
                            <p>• VPNs, firewalls, SD-WAN configuration</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Server & Storage Solutions */}
                    <div className="border-l-4 border-[#F24E1E] pl-2 sm:pl-4">
                      <div className="flex items-start mb-2 sm:mb-3">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#F24E1E] rounded-lg flex items-center justify-center mr-2 sm:mr-3 mt-1 flex-shrink-0">
                          <Cloud className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-xs sm:text-base">Server & Storage Solutions</h4>
                          <div className="text-gray-600 text-[10px] sm:text-sm space-y-1 mt-1">
                            <p>• On-prem and cloud server setups (AWS, Azure, GCP)</p>
                            <p>• Virtualization: VMware, Proxmox, Hyper-V</p>
                            <p>• NAS/SAN storage with redundancy</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Endpoint & Access Security */}
                    <div className="border-l-4 border-[#F24E1E] pl-2 sm:pl-4">
                      <div className="flex items-start mb-2 sm:mb-3">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#F24E1E] rounded-lg flex items-center justify-center mr-2 sm:mr-3 mt-1 flex-shrink-0">
                          <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-xs sm:text-base">Endpoint & Access Security</h4>
                          <div className="text-gray-600 text-[10px] sm:text-sm space-y-1 mt-1">
                            <p>• SSO, LDAP, Azure AD</p>
                            <p>• Role-based access controls</p>
                            <p>• Patch and asset management</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Continuity & Recovery */}
                    <div className="border-l-4 border-[#F24E1E] pl-2 sm:pl-4">
                      <div className="flex items-start mb-2 sm:mb-3">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#F24E1E] rounded-lg flex items-center justify-center mr-2 sm:mr-3 mt-1 flex-shrink-0">
                          <Database className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-xs sm:text-base">Continuity & Recovery</h4>
                          <div className="text-gray-600 text-[10px] sm:text-sm space-y-1 mt-1">
                            <p>• Backup strategy (cloud/local/hybrid)</p>
                            <p>• Disaster recovery plans</p>
                            <p>• Monitoring and failover systems</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <blockquote className="border-l-4 border-[#F24E1E] pl-2 sm:pl-4 italic text-gray-700 mb-4 sm:mb-6 text-xs sm:text-base">
                    "We don't just install servers. We build systems that carry your ambitions."
                  </blockquote>
                  <Button
                    className="bg-[#F24E1E] hover:bg-[#d63e13] text-white text-xs sm:text-base"
                    onClick={() => handleButtonClick("IT Solutions")}
                  >
                    Learn More About IT Solutions
                  </Button>
                </div>
              </div>
              {/* Desktop: Image on side */}
              <div className="hidden lg:block relative">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                  alt="IT Infrastructure visualization"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>

            {/* Facilities Security */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative w-full lg:order-2">
                <div className="block lg:hidden absolute inset-0 z-0 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                    alt="Security system visualization"
                    className="w-full h-full object-cover opacity-20"
                  />
                </div>
                <div className="relative z-10 p-2 sm:p-0">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#F24E1E] rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                      <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h3 className="text-base sm:text-2xl md:text-3xl font-bold text-gray-900">Facilities Security</h3>
                  </div>
                  <p className="text-xs sm:text-lg text-[#F24E1E] font-medium mb-2 sm:mb-4">
                    "Smart environments that sense, protect, and evolve."
                  </p>
                  <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-xs sm:text-base">
                    We turn physical spaces into intelligent environments with integrated security systems that are proactive,
                    not reactive.
                  </p>

                  <div className="space-y-4 sm:space-y-6 mb-4 sm:mb-8">
                    {/* Surveillance Systems */}
                    <div className="border-l-4 border-[#F24E1E] pl-2 sm:pl-4">
                      <div className="flex items-start mb-2 sm:mb-3">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#F24E1E] rounded-lg flex items-center justify-center mr-2 sm:mr-3 mt-1 flex-shrink-0">
                          <Camera className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-xs sm:text-base">Surveillance Systems</h4>
                          <div className="text-gray-600 text-[10px] sm:text-sm space-y-1 mt-1">
                            <p>• IP CCTV: PTZ, fisheye, thermal</p>
                            <p>• VMS software and cloud-based archiving</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Access Control */}
                    <div className="border-l-4 border-[#F24E1E] pl-2 sm:pl-4">
                      <div className="flex items-start mb-2 sm:mb-3">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#F24E1E] rounded-lg flex items-center justify-center mr-2 sm:mr-3 mt-1 flex-shrink-0">
                          <Fingerprint className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-xs sm:text-base">Access Control</h4>
                          <div className="text-gray-600 text-[10px] sm:text-sm space-y-1 mt-1">
                            <p>• Biometrics: fingerprint, facial</p>
                            <p>• RFID, NFC, mobile credentials</p>
                            <p>• Zonal control and visitor workflow integration</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Building Management Systems */}
                    <div className="border-l-4 border-[#F24E1E] pl-2 sm:pl-4">
                      <div className="flex items-start mb-2 sm:mb-3">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#F24E1E] rounded-lg flex items-center justify-center mr-2 sm:mr-3 mt-1 flex-shrink-0">
                          <Lock className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-xs sm:text-base">Building Management Systems (BMS)</h4>
                          <div className="text-gray-600 text-[10px] sm:text-sm space-y-1 mt-1">
                            <p>• HVAC, fire alarm, lighting automation</p>
                            <p>• Central dashboard for energy and environment control</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Monitoring & Reporting */}
                    <div className="border-l-4 border-[#F24E1E] pl-2 sm:pl-4">
                      <div className="flex items-start mb-2 sm:mb-3">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#F24E1E] rounded-lg flex items-center justify-center mr-2 sm:mr-3 mt-1 flex-shrink-0">
                          <Monitor className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-xs sm:text-base">Monitoring & Reporting</h4>
                          <div id="audio" className="text-gray-600 text-[10px] sm:text-sm space-y-1 mt-1">
                            <p>• Real-time dashboards</p>
                            <p>• Remote diagnostics and alerts</p>
                            <p>• Compliance-ready audit trails</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <blockquote className="border-l-4 border-[#F24E1E] pl-2 sm:pl-4 italic text-gray-700 mb-4 sm:mb-6 text-xs sm:text-base">
                    "Security isn't about fear—it's about freedom to focus."
                  </blockquote>

                  <Button
                    className="bg-[#F24E1E] hover:bg-[#d63e13] text-white text-xs sm:text-base"
                    onClick={() => handleButtonClick("Security Solutions")}
                  >
                    Explore Security Solutions
                  </Button>
                </div>
              </div>

              <div className="hidden lg:block relative lg:order-1">
                <img
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                  alt="Security system visualization"

                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>

            {/* Audio & Video Conferencing */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative w-full">
                <div className="block lg:hidden absolute inset-0 z-0 rounded-lg overflow-hidden">
                  <img
                    src="video.png"
                    alt="AV conferencing setup"
                    className="w-full h-full object-cover opacity-20"
                  />
                </div>
                <div className="relative z-10 p-2 sm:p-0">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#F24E1E] rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                      <Video className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h3 className="text-base sm:text-2xl md:text-3xl font-bold text-gray-900">Audio & Video Conferencing</h3>
                  </div>
                  <p className="text-xs sm:text-lg text-[#F24E1E] font-medium mb-2 sm:mb-4">
                    "Spaces that connect with clarity, ease, and presence."
                  </p>
                  <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-xs sm:text-base">
                    Whether it's boardrooms or remote workspaces, we engineer communication environments that feel
                    effortless and immersive.
                  </p>

                  <div className="space-y-4 sm:space-y-6 mb-4 sm:mb-8">
                    {/* Room Design & Acoustics */}
                    <div className="border-l-4 border-[#F24E1E] pl-2 sm:pl-4">
                      <div className="flex items-start mb-2 sm:mb-3">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#F24E1E] rounded-lg flex items-center justify-center mr-2 sm:mr-3 mt-1 flex-shrink-0">
                          <Monitor className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-xs sm:text-base">Room Design & Acoustics</h4>
                          <div className="text-gray-600 text-[10px] sm:text-sm space-y-1 mt-1">
                            <p>• Sightline and acoustic optimization</p>
                            <p>• Lighting for engagement</p>
                            <p>• Noise control treatments</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Platform Integration */}
                    <div className="border-l-4 border-[#F24E1E] pl-2 sm:pl-4">
                      <div className="flex items-start mb-2 sm:mb-3">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#F24E1E] rounded-lg flex items-center justify-center mr-2 sm:mr-3 mt-1 flex-shrink-0">
                          <Headphones className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-xs sm:text-base">Platform Integration</h4>
                          <div className="text-gray-600 text-[10px] sm:text-sm space-y-1 mt-1">
                            <p>• Zoom, Teams, Webex</p>
                            <p>• AV control (Crestron, Extron)</p>
                            <p>• BYOD and calendar sync</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Hardware Setup */}
                    <div className="border-l-4 border-[#F24E1E] pl-2 sm:pl-4">
                      <div className="flex items-start mb-2 sm:mb-3">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#F24E1E] rounded-lg flex items-center justify-center mr-2 sm:mr-3 mt-1 flex-shrink-0">
                          <Mic className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-xs sm:text-base">Hardware Setup</h4>
                          <div className="text-gray-600 text-[10px] sm:text-sm space-y-1 mt-1">
                            <p>• PTZ cameras, ceiling mics, smart displays</p>
                            <p>• Wireless presentation, voice tracking</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <blockquote className="border-l-4 border-[#F24E1E] pl-2 sm:pl-4 italic text-gray-700 mb-4 sm:mb-6 text-xs sm:text-base">
                    "A great conversation shouldn't depend on your geography."
                  </blockquote>

                  <Button
                    className="bg-[#F24E1E] hover:bg-[#d63e13] text-white text-xs sm:text-base"
                    onClick={() => handleButtonClick("AV Solutions")}
                  >
                    Discover AV Solutions
                  </Button>
                </div>
              </div>

              <div className="hidden lg:block relative">
                <img
                  src="video.png"
                  alt="AV conferencing setup"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Builders */}
      <TrustBuildersSection />

      {/* Call to Action */}
      <section className="py-12 md:py-20 bg-gradient-to-br bg-[rgba(255,225,219,0.82)] text-[#1A355D]">
        <div className="container mx-auto px-2 sm:px-4 text-center max-w-7xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Ready to Future-Proof Your Business?</h2>
          <p className="text-base sm:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto opacity-90">
            Whether you're starting from scratch or upgrading legacy systems, our experts are ready to guide you through every step of your digital transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8">
            <a href="sales@procedoinfo.com">
              <Button
                size="lg"
                variant="default"
                className="text-lg px-6 py-3 bg-[#F24E1E] hover:bg-[#d63e13] text-white shadow-md"
                onClick={() => handleButtonClick("Schedule Audit")}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Inquiry
              </Button>
            </a>
            <a href="contact@procedoinfo.com">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-6 py-3 border-[#F24E1E] text-[#F24E1E] hover:bg-[#FFF6EC] hover:text-[#F24E1E] bg-transparent shadow-md"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
            </a>

          </div>
          {/* <div className="flex flex-wrap items-center justify-center gap-4 text-sm opacity-80">
            <span className="flex items-center gap-1"><span role="img" aria-label="chat">💬</span> <span className="text-[#F24E1E] font-semibold">Live Chat Available</span></span>
            <span className="flex items-center gap-1"><span role="img" aria-label="phone">📞</span> <span className="text-[#F24E1E] font-semibold">Instant Callback</span></span>
            <span className="flex items-center gap-1"><span role="img" aria-label="rocket">🚀</span> <span className="text-[#F24E1E] font-semibold">Quick Response</span></span>
          </div> */}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
