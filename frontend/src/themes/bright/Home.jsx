import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Globe,
  Phone,
  TreeStructure,
  Cloud,
  Broadcast,
  CheckCircle,
  Thermometer,
} from "phosphor-react";
import {
  Shield,
  Video,
  Network,
  Database,
  Lock,
  Camera,
  Fingerprint,
  Mic,
  Monitor,
  Headphones,
  Mail,
  MapPin,
  Star,
  Users,
  Award,
  Calendar,
  MessageCircle,
  ArrowRight,
  Zap,
  Server,
} from "lucide-react";
import Button from "../../components/Button";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ServicesSection from "../../components/ServicesSection";

// Utility function for class names
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

function Home() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll event handler
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

  // Hash navigation effects
  useEffect(() => {
    const scrollToSection = (sectionId) => {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ 
            behavior: "smooth",
            block: "start"
          });
        }
      }, 100);
    };

    if (location.hash) {
      const sectionId = location.hash.replace('#', '');
      scrollToSection(sectionId);
    }
  }, [location]);

  // Button click handlers
  const handleButtonClick = (action) => {
    console.log(`${action} clicked`);
  };

  const handleServiceButtonClick = (serviceName) => {
    console.log(`Service clicked: ${serviceName}`);
    // You can add routing logic here, for example:
    // navigate(`/services/${serviceName.toLowerCase().replace(/\s+/g, '-')}`);
    
    // Or open a modal, contact form, etc.
    // setSelectedService(serviceName);
    // setShowServiceModal(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Custom animation configuration for ServicesSection
  const servicesAnimationConfig = {
    duration: 1.0,
    triggerStart: "top 75%",
    headerTriggerStart: "top 85%",
    serviceStagger: 0.12,
    ease: "power3.out"
  };

  // Custom styles for ServicesSection
  const servicesCustomStyles = {
    section: "bg-gradient-to-br from-gray-50 to-gray-100",
    container: "max-w-7xl",
    header: "mb-20"
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
              We Design Systems That Work{" "}
              <span className="text-[#ec5d32]">Intelligently</span>—
              <br className="block sm:hidden" />
              So You Can Focus on What Matters
            </h1>

            <p className="text-sm sm:text-lg text-gray-600 mb-5 sm:mb-8 leading-relaxed max-w-2xl mx-auto">
              From secure IT infrastructure to advanced building automation and
              AV ecosystems— we help businesses operate smarter, safer, and more
              connected.
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
          className="fixed bottom-6 right-6 z-50 bg-[#F24E1E] hover:bg-[#d63e13] text-white rounded-full shadow-lg p-3 transition-all duration-300 hover:scale-110 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <ArrowRight className="transform -rotate-90 w-6 h-6" />
        </button>
      )}

      {/* Enhanced Solutions Section with GSAP Animations */}
      <ServicesSection 
        onButtonClick={handleServiceButtonClick}
        customStyles={servicesCustomStyles}
        animationConfig={servicesAnimationConfig}
        className="relative z-10"
      />

      {/* Trust Builders Section (Uncomment when ready) */}
      {/* <TrustBuildersSection /> */}

      {/* Call to Action */}
      <section className="py-12 md:py-20 bg-gradient-to-br bg-[rgba(255,225,219,0.82)] text-[#1A355D] relative z-10">
        <div className="container mx-auto px-2 sm:px-4 text-center max-w-7xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Ready to Future-Proof Your Business?
          </h2>
          <p className="text-base sm:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto opacity-90">
            Whether you're starting from scratch or upgrading legacy systems,
            our experts are ready to guide you through every step of your
            digital transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8">
            <Button
              asChild
              size="lg"
              variant="default"
              className="text-lg px-6 py-3 bg-[#F24E1E] hover:bg-[#d63e13] text-white shadow-md hover:shadow-lg transition-all duration-300"
            >
              <a href="mailto:sales@procedoinfo.com" className="w-full flex items-center justify-center">
                <Calendar className="w-5 h-5 mr-2" />
                Inquiry
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-6 py-3 border-[#F24E1E] text-[#F24E1E] hover:bg-[#FFF6EC] hover:text-[#F24E1E] bg-transparent shadow-md hover:shadow-lg transition-all duration-300"
            >
              <a href="mailto:contact@procedoinfo.com" className="w-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;