import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { CheckCircle } from "phosphor-react";
import { Calendar, MessageCircle, ArrowRight } from "lucide-react";
import Button from "../../components/Button";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ServicesSection from "../../components/ServicesSection";

const cn = (...classes) => classes.filter(Boolean).join(" ");

function DarkHome() {
  const location = useLocation();
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

  useEffect(() => {
    const scrollToSection = (sectionId) => {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    };

    if (location.hash) {
      const sectionId = location.hash.replace('#', '');
      scrollToSection(sectionId);
    }
  }, [location]);

  const handleButtonClick = (action) => {
    console.log(`${action} clicked`);
  };

  const handleServiceButtonClick = (serviceName) => {
    console.log(`Service clicked: ${serviceName}`);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const servicesAnimationConfig = {
    duration: 1.0,
    triggerStart: "top 75%",
    headerTriggerStart: "top 85%",
    serviceStagger: 0.12,
    ease: "power3.out"
  };

  const servicesCustomStyles = {
    section: "bg-gradient-to-br from-gray-900 to-gray-800",
    container: "max-w-7xl",
    header: "mb-20"
  };

  return (
    <div className="min-h-screen bg-gray-900 transition-colors duration-300">
      <Navbar scrolled={scrolled} handleButtonClick={handleButtonClick} />

      {/* Hero Section - DARK THEME */}
      <section className="hero-section relative mt-11 pt-16 pb-12 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800"
            alt="Modern tech control room"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="max-w-lg sm:max-w-3xl my-6 mx-auto text-center px-2">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-snug break-words">
              We Design Systems That Work{" "}
              <span className="text-[#F24E1E]">Intelligently</span>—
              <br className="block sm:hidden" />
              So You Can Focus on What Matters
            </h1>

            <p className="text-sm sm:text-lg text-gray-300 mb-5 sm:mb-8 leading-relaxed max-w-2xl mx-auto">
              From secure IT infrastructure to advanced building automation and
              AV ecosystems— we help businesses operate smarter, safer, and more
              connected in the digital darkness.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                to="#solutions"
                className="bg-[#F24E1E] hover:bg-[#d63e13] text-white px-5 py-2 sm:px-8 sm:py-3 rounded-md font-medium transition-colors text-xs sm:text-base shadow-lg shadow-black/30 flex items-center mx-auto"
              >
                <ArrowRight className="w-4 h-4 inline mr-2" />
                Explore Our Solutions
              </Link>
            </div>

            <div className="mt-6 sm:mt-10 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-gray-400">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                Enterprise Grade Solutions
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
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
          className="fixed bottom-6 right-6 z-50 bg-[#F24E1E] hover:bg-[#d63e13] text-white rounded-full shadow-lg shadow-black/40 p-3 transition-all duration-300 hover:scale-110 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <ArrowRight className="transform -rotate-90 w-6 h-6" />
        </button>
      )}

      {/* Services Section */}
      <ServicesSection 
        onButtonClick={handleServiceButtonClick}
        customStyles={servicesCustomStyles}
        animationConfig={servicesAnimationConfig}
        className="relative z-10"
      />

      {/* Call to Action - DARK THEME */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-800 to-gray-900 text-gray-100 relative z-10">
        <div className="container mx-auto px-2 sm:px-4 text-center max-w-7xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white">
            Ready to Future-Proof Your Business?
          </h2>
          <p className="text-base sm:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto opacity-90 text-gray-300">
            Whether you're starting from scratch or upgrading legacy systems,
            our experts are ready to guide you through every step of your
            digital transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8">
            <Button
              asChild
              size="lg"
              variant="default"
              className="text-lg px-6 py-3 bg-[#F24E1E] hover:bg-[#d63e13] text-white shadow-lg shadow-black/30 hover:shadow-xl hover:shadow-black/40 transition-all duration-300"
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
              className="text-lg px-6 py-3 border-[#F24E1E] text-[#F24E1E] hover:bg-gray-800 bg-transparent shadow-lg shadow-black/30 hover:shadow-xl hover:shadow-black/40 transition-all duration-300"
            >
              <a href="mailto:contact@procedoinfo.com" className="w-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default DarkHome;