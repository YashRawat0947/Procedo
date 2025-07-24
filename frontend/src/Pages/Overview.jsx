import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Award, Building2, CheckCircle, Clock, Globe, Monitor, Network, Shield, Target, Users, Zap, Sparkles, Star, Lock } from 'lucide-react';
import { useLocation } from 'react-router-dom';

function Overview() {
    const [scrolled, setScrolled] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.hash === "#values") {
            setTimeout(() => {
                const el = document.getElementById("values");
                if (el) el.scrollIntoView({ behavior: "smooth" });
            }, 0);
        }
    }, [location]);
    useEffect(() => {
        if (location.hash === "#why-us") {
            setTimeout(() => {
                const el = document.getElementById("why-us");
                if (el) el.scrollIntoView({ behavior: "smooth" });
            }, 0);
        }
    }, [location]);

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
        setTimeout(() => setIsVisible(true), 100);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
        const features = [
        { 
            icon: Lock, 
            title: "Enterprise-Grade Security", 
            desc: "Leveraging the latest advancements in security protocols and threat protection to safeguard your business operations." 
        },
        { 
            icon: Users, 
            title: "Expert Team", 
            desc: "Dedicated specialists committed to your project's success and long-term growth with industry-leading expertise." 
        },
        { 
            icon: Network, 
            title: "Collaborative Approach", 
            desc: "Working closely with you to tailor solutions to your exact business needs and strategic objectives." 
        },
        { 
            icon: Target, 
            title: "Measurable Results", 
            desc: "Focusing on delivering tangible business value and return on investment through proven methodologies." 
        }
    ];

    const values = [
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Security First",
            description: "We prioritize the protection of your critical infrastructure and data above all else, implementing enterprise-grade security measures in every solution.",
            gradient: "from-red-500 to-orange-500"
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Innovation",
            description: "Continuously advancing technology solutions to meet evolving business needs and stay ahead of industry trends.",
            gradient: "from-orange-500 to-amber-500"
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Collaboration",
            description: "Working closely with clients to understand their unique challenges and exceed their expectations through partnership.",
            gradient: "from-amber-500 to-yellow-500"
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: "Excellence",
            description: "Committed to delivering the highest quality solutions and maintaining industry-leading standards in all our services.",
            gradient: "from-yellow-500 to-orange-500"
        },
        {
            icon: <Globe className="w-8 h-8" />,
            title: "Scalability",
            description: "Building solutions that grow with your business, ensuring long-term value and adaptability to future needs.",
            gradient: "from-orange-500 to-red-500"
        },
        {
            icon: <Clock className="w-8 h-8" />,
            title: "Reliability",
            description: "Providing dependable solutions and support that businesses can count on, with 24/7 monitoring and maintenance.",
            gradient: "from-red-500 to-pink-500"
        }
    ];

    const stats = [
        { icon: <Building2 className="w-8 h-8" />, number: "500+", label: "Projects Delivered" },
        { icon: <Users className="w-8 h-8" />, number: "200+", label: "Happy Clients" },
        { icon: <Target className="w-8 h-8" />, number: "99.9%", label: "Uptime Guarantee" },
        { icon: <Award className="w-8 h-8" />, number: "10+", label: "Years Experience" }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-100 to-orange-50 via-white">
            <Navbar scrolled={scrolled} />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-100 to-orange-50 via-white py-30 sm:py-12 md:py-16 lg:py-20 xl:py-30 overflow-hidden min-h-screen flex items-center">
                {/* Decorative background shapes */}
                <div className="absolute -top-12 -left-12 sm:-top-24 sm:-left-24 w-36 h-36 sm:w-72 sm:h-72 bg-orange-100 rounded-full opacity-40 blur-2xl pointer-events-none z-0"></div>
                <div className="absolute -bottom-12 -right-12 sm:-bottom-24 sm:-right-24 w-24 h-24 sm:w-48 sm:h-48 bg-orange-200 rounded-full opacity-30 blur-xl pointer-events-none z-0"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                    <div className="flex flex-col items-center justify-center text-center">
                        {/* Main Heading */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 mb-0 sm:mb-8 leading-tight drop-shadow-sm">
                            Company
                            <span className="text-orange-500 block sm:inline"> Overview</span>
                        </h1>

                        {/* Content Container */}
                        <div className="w-full max-w-7xl">
                            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
                                    <div className="space-y-4 sm:space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg md:text-xl text-justify">
                                        {/* Main Introduction Paragraph */}
                                        <p className="first-letter:text-4xl sm:first-letter:text-5xl md:first-letter:text-6xl first-letter:font-bold first-letter:text-orange-500  first-letter:mt-1 sm:first-letter:mt-2">
                                            Procedo Infosystems Pvt. Ltd. is an infrastructure-first technology firm delivering integrated solutions across IT Infrastructure, Facilities Security, and Audio-Visual (AV) Systems. Our modular, enterprise-grade offerings are built to support secure operations, resilient growth, and seamless client engagement.
                                        </p>

                                        {/* Two Column Grid - Stacks on Mobile */}
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
                                            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 sm:p-6 rounded-r-xl transform hover:scale-[1.02] transition-transform duration-300">
                                                <p className="text-sm sm:text-base md:text-lg">
                                                    Whether deploying robust network architecture, securing workspaces with intelligent surveillance systems, or enabling modern communication through advanced AV integration—Procedo ensures each environment is tailored, scalable, and aligned with business continuity.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 border-l-4 border-gray-400 p-4 sm:p-6 rounded-r-xl transform hover:scale-[1.02] transition-transform duration-300">
                                                <p className="text-sm sm:text-base md:text-lg">
                                                    With a commitment to technical precision and implementation clarity, our solutions empower organizations to evolve confidently while protecting their assets, people, and digital workflows.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Call to Action Button */}
                                    <div id="values" className="mt-8 sm:mt-10 flex justify-center">
                                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 flex items-center group shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base">
                                            <span>Explore Our Services</span>
                                            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section  className="bg-gradient-to-bl from-orange-50 to-gray-100 via-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        {/* Section Header */}
                        <div className="text-center mb-12 sm:mb-16">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                                Our Core <span className="text-orange-500">Values</span>
                            </h2>
                            <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-4">
                                The principles that guide every solution we deliver and every partnership we build
                            </p>
                        </div>

                        {/* Values Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                            {values.map((value, index) => (
                                <div
                                    key={index}
                                    className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-white/50 hover:shadow-xl hover:border-orange-200 transition-all duration-300 hover:-translate-y-2 cursor-pointer group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                                    style={{
                                        transitionDelay: `${700 + index * 100}ms`
                                    }}
                                >
                                    {/* Icon Container */}
                                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-500 mb-4 sm:mb-6 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-md mx-auto sm:mx-0">
                                        {value.icon}
                                    </div>

                                    {/* Content */}
                                    <div className="text-center sm:text-left">
                                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-orange-500 transition-colors duration-300">
                                            {value.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                            {value.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Partner Section */}
            <section id='why-us' className="py-10 sm:py-16 md:py-20 bg-gradient-to-tr from-gray-100 to-orange-50 via-whit">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl border border-white/50 relative overflow-hidden">
                            {/* Subtle background decoration - responsive */}
                            <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-orange-50 rounded-full -translate-y-16 sm:-translate-y-24 md:-translate-y-32 translate-x-16 sm:translate-x-24 md:translate-x-32 opacity-50"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 bg-orange-100 rounded-full translate-y-12 sm:translate-y-18 md:translate-y-24 -translate-x-12 sm:-translate-x-18 md:-translate-x-24 opacity-30"></div>

                            <div className="relative z-10">
                                {/* Section Header */}
                                <div className="text-center mb-12 sm:mb-16">
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                                        Why Partner With <span className="text-orange-500 block sm:inline">Procedo?</span>
                                    </h2>
                                    <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-2">
                                        Experience the future of infrastructure-driven success with industry-leading expertise
                                    </p>
                                </div>

                                {/* Features Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                                    {features.map((item, index) => (
                                        <div
                                            key={index}
                                            className={`bg-white/60 backdrop-blur-sm border border-white/40 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:bg-white/80 hover:border-orange-200 hover:shadow-lg transition-all duration-300 group hover:scale-105 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                                            style={{
                                                transitionDelay: `${900 + index * 150}ms`
                                            }}
                                        >
                                            {/* Icon Container */}
                                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-orange-100 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:bg-orange-500 transition-all duration-300 shadow-md mx-auto sm:mx-0">
                                                <item.icon className="w-7 h-7 sm:w-8 sm:h-8 text-orange-500 group-hover:text-white transition-colors duration-300" />
                                            </div>

                                            {/* Content */}
                                            <div className="text-center sm:text-left">
                                                <h3 className="text-orange-500 font-bold text-lg sm:text-xl mb-3 sm:mb-4 group-hover:text-gray-900 transition-colors duration-300 leading-snug">
                                                    {item.title}
                                                </h3>
                                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scroll to top button */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg p-2 sm:p-3 transition-all duration-300 flex items-center justify-center"
                    aria-label="Scroll to top"
                >
                    <ArrowRight className="transform -rotate-90 w-5 h-5 sm:w-6 sm:h-6" />
                </button>
            )}

            <Footer />
        </div>
    );
}

export default Overview;