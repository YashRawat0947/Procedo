import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CookiePolicy = () => {
    const [scrolled, setScrolled] = useState(false)
    const [showScrollTop, setShowScrollTop] = useState(false)
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }
    return (
        <div className="min-h-screen bg-gradient-to-bl from-orange-50 to-gray-100 via-white overflow-hidden relative">
            <Navbar scrolled={scrolled} />
            <div className="bg-white text-gray-800 px-6 py-30 sm:px-12 lg:px-36">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-3xl sm:text-5xl font-extrabold mb-8 text-gray-900 drop-shadow-sm">
                        Cookie <span className="text-orange-500">Policy</span>
                    </h1>

                    <p className="mb-6 text-lg">
                        This Cookie Policy explains how <strong>Procedo Infosystems Pvt. Ltd.</strong> uses cookies and similar technologies to enhance your experience on our website.
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-2">1. What Are Cookies?</h2>
                        <p>
                            Cookies are small text files stored on your device to collect standard internet log information and visitor behavior information.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-2">2. How We Use Cookies</h2>
                        <p>We use cookies to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Understand how you use our website</li>
                            <li>Improve site functionality and performance</li>
                            <li>Remember your preferences</li>
                            <li>Provide relevant content or ads</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-2">3. Types of Cookies We Use</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Essential Cookies:</strong> Required for core functionality.</li>
                            <li><strong>Analytics Cookies:</strong> Help us analyze site usage and performance.</li>
                            <li><strong>Preference Cookies:</strong> Remember your settings and preferences.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-2">4. Managing Cookies</h2>
                        <p>
                            You can set your browser to not accept cookies or delete them manually. However, some features of our site may not function properly without cookies.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-2">5. Updates to This Policy</h2>
                        <p>
                            We may update this Cookie Policy occasionally. Please review it regularly to stay informed.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-2">6. Contact Us</h2>
                        <p>
                            For more information about our use of cookies, reach out to us at:
                            <br />
                            <strong>Email:</strong> contact@procedoinfo.co.in
                            <br />
                            <strong>Ph No.:</strong> contact@procedoinfo.co.in
                        </p>
                    </section>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default CookiePolicy;
