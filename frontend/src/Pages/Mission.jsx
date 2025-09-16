import {
    Eye,
    Target,
    Shield,
    Zap,
    Users,
    CheckCircle,
    Award,
    Globe,
    Clock,
    Star,
    ArrowRight,
    Calendar,
    Phone,
} from "lucide-react"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Mission = () => {
    const [scrolled, setScrolled] = useState(false)
    const [showScrollTop, setShowScrollTop] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10)
            const hero = document.querySelector(".hero-section")
            if (hero) {
                const heroHeight = hero.offsetHeight
                setShowScrollTop(window.scrollY > heroHeight * 0.5)
            } else {
                setShowScrollTop(window.scrollY > 300)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Navbar scrolled={scrolled} />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-100 to-orange-50 via-white py-40 overflow-hidden">
                {/* Decorative background shapes */}
                <div className="absolute -top-24 -left-24 w-72 h-72 bg-orange-100 rounded-full opacity-40 blur-2xl pointer-events-none z-0"></div>
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-orange-200 rounded-full opacity-30 blur-3xl pointer-events-none z-0"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="flex flex-col items-center justify-center">

                        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 sm:mb-6 leading-tight drop-shadow-sm">
                            Our <span className="text-orange-500">Mission</span> & Vision
                        </h1>
                        <p className="text-base sm:text-xl text-gray-700 max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
                            We believe technology should enable, not complicate. Our mission is to deliver integrated IT, security, and AV solutions that empower organizations to thrive in a rapidly evolving world.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center mb-6">
                            <div className="flex items-center gap-2 bg-white/80 rounded-lg px-4 py-2 shadow text-gray-700 text-xs sm:text-sm">
                                <Shield className="w-4 h-4 text-orange-500" />
                                Security-First Approach
                            </div>
                            <div className="flex items-center gap-2 bg-white/80 rounded-lg px-4 py-2 shadow text-gray-700 text-xs sm:text-sm">
                                <Zap className="w-4 h-4 text-orange-500" />
                                Innovation & Scalability
                            </div>

                        </div>
                        <p className="text-xs sm:text-base text-gray-500 max-w-xl mx-auto mb-8">
                            From secure IT infrastructure to intelligent building automation and immersive AV, we help you create environments where people and ideas flourish—today and tomorrow.
                        </p>
                        <Link
                            to="/#solutions"
                            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 sm:px-8 sm:py-3 rounded-md font-medium transition-colors text-xs sm:text-base shadow-lg flex items-center mx-auto"
                        >
                            <ArrowRight className="w-4 h-4 inline mr-2" />
                            Explore Our Solutions
                        </Link>
                    </div>
                </div>
            </section>

            {/* Scroll To Top Button */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 bg-[#F24E1E] hover:bg-[#d63e13] text-white rounded-full shadow-lg p-2 sm:p-3 transition-opacity duration-500 flex items-center justify-center"
                    aria-label="Scroll to top"
                >
                    <ArrowRight className="transform -rotate-90 w-5 h-5 sm:w-6 sm:h-6" />
                </button>
            )}
            {/* Vision & Mission Cards */}
            <section className="py-10 sm:py-20">
                <div className="container mx-auto px-2 sm:px-4">
                    <div className="grid lg:grid-cols-2 gap-6 sm:gap-12 max-w-6xl mx-auto">
                        {/* Vision Card */}
                        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 sm:p-8">
                            <div className="flex items-center mb-4 sm:mb-6">
                                <div className="w-8 h-8 sm:w-12 sm:h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                                    <Eye className="w-4 h-4 sm:w-6 sm:h-6 text-orange-500" />
                                </div>
                                <h2 className="text-xl sm:text-3xl font-bold text-gray-900">Vision</h2>
                            </div>
                            <p className="text-sm sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                                To be a leading provider of integrated infrastructure and facility security solutions that enable
                                efficient, secure, and collaborative environments across industries.
                            </p>
                            <div className=" pt-4 sm:pt-6">
                                <h3 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">Key Focus Areas:</h3>
                                <ul className="space-y-1 sm:space-y-2">
                                    <li className="flex items-center text-gray-600">
                                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-1.5 sm:mr-2" />
                                        <span className="text-xs sm:text-base">Industry Leadership</span>
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-1.5 sm:mr-2" />
                                        <span className="text-xs sm:text-base">Integrated Solutions</span>
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-1.5 sm:mr-2" />
                                        <span className="text-xs sm:text-base">Cross-Industry Impact</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Mission Card */}
                        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 sm:p-8">
                            <div className="flex items-center mb-4 sm:mb-6">
                                <div className="w-8 h-8 sm:w-12 sm:h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                                    <Target className="w-4 h-4 sm:w-6 sm:h-6 text-orange-500" />
                                </div>
                                <h2 className="text-xl sm:text-3xl font-bold text-gray-900">Mission</h2>
                            </div>
                            <p className="text-sm sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                                Deliver innovative, modular services in IT, facilities security, and audio-visual systems, with an
                                emphasis on scalability, compliance, and reliability. We align advanced technology with operational
                                clarity, helping businesses safeguard what matters while empowering seamless interaction.
                            </p>
                            <div className="pt-4 sm:pt-6">
                                <h3 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">Service Pillars:</h3>
                                <ul className="space-y-1 sm:space-y-2">
                                    <li className="flex items-center text-gray-600">
                                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-1.5 sm:mr-2" />
                                        <span className="text-xs sm:text-base">IT Infrastructure</span>
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-1.5 sm:mr-2" />
                                        <span className="text-xs sm:text-base">Facility Security</span>
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-1.5 sm:mr-2" />
                                        <span className="text-xs sm:text-base">Audio-Visual Systems</span>
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-1.5 sm:mr-2" />
                                        <span className="text-xs sm:text-base">Telecom Infrastructure visualization</span>
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-1.5 sm:mr-2" />
                                        <span className="text-xs sm:text-base">Power & Precision Systems</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Areas Section */}
            {/* <section className="bg-white py-10 sm:py-20">
                <div className="container mx-auto px-2 sm:px-4">
                    <div className="text-center mb-8 sm:mb-16">
                        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
                            How We <span className="text-orange-500">Deliver</span> Our Mission
                        </h2>
                        <p className="text-sm sm:text-xl text-gray-600 max-w-3xl mx-auto">
                            Our comprehensive approach to infrastructure and security solutions spans multiple domains
                        </p>
                    </div>

                    <div className="grid gap-4 sm:gap-8 max-w-6xl mx-auto lg:grid-cols-3">
                        <div className="bg-gray-50 rounded-lg p-4 sm:p-8">
                            <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">IT Infrastructure</h3>
                            <ul className="space-y-2 sm:space-y-3">
                                <li className="flex items-start">
                                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mr-2 sm:mr-3 mt-0.5" />
                                    <span className="text-xs sm:text-base text-gray-700">Network Design & Implementation</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mr-2 sm:mr-3 mt-0.5" />
                                    <span className="text-xs sm:text-base text-gray-700">Cloud Migration & Management</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mr-2 sm:mr-3 mt-0.5" />
                                    <span className="text-xs sm:text-base text-gray-700">Cybersecurity Solutions</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mr-2 sm:mr-3 mt-0.5" />
                                    <span className="text-xs sm:text-base text-gray-700">Data Backup & Recovery</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-4 sm:p-8">
                            <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">Facility Security</h3>
                            <ul className="space-y-2 sm:space-y-3">
                                <li className="flex items-start">
                                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mr-2 sm:mr-3 mt-0.5" />
                                    <span className="text-xs sm:text-base text-gray-700">Access Control Systems</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mr-2 sm:mr-3 mt-0.5" />
                                    <span className="text-xs sm:text-base text-gray-700">Video Surveillance</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mr-2 sm:mr-3 mt-0.5" />
                                    <span className="text-xs sm:text-base text-gray-700">Intrusion Detection</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mr-2 sm:mr-3 mt-0.5" />
                                    <span className="text-xs sm:text-base text-gray-700">Fire & Life Safety</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-4 sm:p-8">
                            <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">Audio-Visual Systems</h3>
                            <ul className="space-y-2 sm:space-y-3">
                                <li className="flex items-start">
                                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mr-2 sm:mr-3 mt-0.5" />
                                    <span className="text-xs sm:text-base text-gray-700">Conference Room Solutions</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mr-2 sm:mr-3 mt-0.5" />
                                    <span className="text-xs sm:text-base text-gray-700">Digital Signage</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mr-2 sm:mr-3 mt-0.5" />
                                    <span className="text-xs sm:text-base text-gray-700">Sound Systems</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mr-2 sm:mr-3 mt-0.5" />
                                    <span className="text-xs sm:text-base text-gray-700">Lighting Control</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section> */}




            <Footer />
        </div>
    )
}

export default Mission