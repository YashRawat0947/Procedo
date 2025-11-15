import React, { useState } from "react";
import Navbar from "../components/NavbarBright";
import Footer from "../components/FooterBright";

const TermsOfService = () => {
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
                        Terms of <span className="text-orange-500">Service</span>
                    </h1>

                    <p className="mb-6 text-lg">
                        These Terms of Service ("Terms") govern your access to and use of the services provided by <strong>Procedo Infosystems Pvt. Ltd.</strong> ("we", "us", or "our").
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-2">1. Acceptance of Terms</h2>
                        <p>
                            By accessing our website or using our services, you agree to be bound by these Terms and our Privacy Policy.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-2">2. Use of Services</h2>
                        <p>
                            You agree to use our services only for lawful purposes and in accordance with all applicable laws and regulations.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-2">3. Intellectual Property</h2>
                        <p>
                            All content on our site, including text, graphics, logos, and software, is the property of Procedo Infosystems or its licensors and is protected by copyright and trademark laws.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-2">4. Limitation of Liability</h2>
                        <p>
                            We are not liable for any damages resulting from the use or inability to use our services, including indirect or consequential losses.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-2">5. Termination</h2>
                        <p>
                            We reserve the right to suspend or terminate your access to our services at any time, without prior notice, for any reason.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-2">6. Changes to Terms</h2>
                        <p>
                            We may update these Terms from time to time. Any changes will be effective immediately upon posting on this page.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-2">7. Contact Us</h2>
                        <p>
                            For any questions regarding these Terms, please contact us at: <br />
                            <strong>Email:</strong> contact@procedoinfo.co.in
                        </p>
                    </section>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default TermsOfService;
