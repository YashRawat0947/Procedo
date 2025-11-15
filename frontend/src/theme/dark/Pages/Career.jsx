import React, { useState, useEffect } from 'react';
import Navbar from '../components/NavbarDark';
import Footer from '../components/FooterDark';
import { ArrowRight, CheckCircle, Briefcase, Users, Sparkles } from 'lucide-react';

function Career() {
    const [scrolled, setScrolled] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            setShowScrollTop(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const values = [
        'Innovation-driven culture that values creative solutions.',
        'Collaborative environment focused on continuous growth.',
        'Work-life balance with flexible opportunities.',
        'Challenging projects that make a real-world impact.',
    ];

    const roles = [
        {
            icon: <Users className="w-6 h-6" />,
            title: 'Data Scientist',
            description: 'Develop ML models, analyze complex data sets, and deliver actionable insights that drive business decisions.',
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: 'Full Stack Developer',
            description: 'Build and maintain scalable web applications with modern frontend and backend frameworks.',
        },
        {
            icon: <Users className="w-6 h-6" />, 
            title: 'Security Systems Specialist',
            description: 'Configure and maintain IP surveillance, access control, and BMS integration.',
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: 'Software Engineer',
            description: 'Design, develop, and optimize software systems that power secure, high-performance infrastructures.',
        },
        {
            icon: <Briefcase className="w-6 h-6" />, 
            title: 'Server & Security Engineer',
            description: `
                Handle on-prem/cloud server setups (AWS, Azure, GCP), virtualization with VMware/Proxmox/Hyper-V, and storage redundancy. 
                Manage endpoint security, access controls (SSO, LDAP, Azure AD), and lead backup/recovery initiatives with monitoring and failover strategies.`,
        },
        {
            icon: <Sparkles className="w-6 h-6" />, 
            title: 'AV Integration Expert',
            description: 'Deliver seamless AV experiences with platform and hardware integration.',
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-orange-50 via-white overflow-hidden relative">
            <Navbar scrolled={scrolled} />

            {/* Background Effects */}
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-gradient-to-r from-orange-100 to-orange-200 rounded-full opacity-40 blur-2xl pointer-events-none z-0 animate-pulse"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gradient-to-l from-orange-200 to-orange-100 rounded-full opacity-30 blur-3xl pointer-events-none z-0"></div>
            <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-orange-50 rounded-full opacity-50 blur-xl pointer-events-none z-0"></div>
            <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-br from-orange-100 to-transparent rounded-full opacity-60 blur-lg pointer-events-none z-0"></div>

            <div className="pt-32 pb-16 relative z-10">
                <div className="container mx-auto px-4 max-w-7xl">
                    {/* Hero Section */}
                    <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Join <span className="bg-gradient-to-r from-[#F24E1E] to-orange-500 bg-clip-text text-transparent">Our Team</span>
                        </h1>
                        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                            Help us build scalable digital infrastructure, secure smart environments, and immersive communication spaces.
                        </p>
                    </div>

                    {/* Current Openings */}
                    <div className={`grid md:grid-cols-3 gap-8 mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        {roles.map((role, index) => (
                            <div key={index} className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-500 group hover:-translate-y-2">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#F24E1E] to-orange-400 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    {role.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{role.title}</h3>
                                <p className="text-gray-600 text-sm">{role.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Why Work With Us */}
                    <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="bg-gradient-to-r from-white/60 to-orange-50/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Build Your Career at Procedo?</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                {values.map((value, index) => (
                                    <div key={index} className="flex items-center space-x-3 group">
                                        <CheckCircle className="w-5 h-5 text-[#F24E1E] group-hover:scale-110 transition-transform duration-300" />
                                        <span className="text-gray-700">{value}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="text-center mt-8">
                                <button className="bg-[#F24E1E] hover:bg-[#d63e13] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center group shadow-lg hover:shadow-xl">
                                    Apply Now
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll to top button */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 bg-[#F24E1E] hover:bg-[#d63e13] text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 group"
                >
                    <ArrowRight className="w-5 h-5 -rotate-90 group-hover:scale-110 transition-transform duration-300" />
                </button>
            )}

            <Footer />
        </div>
    );
}

export default Career;
