import React, { useState } from "react";
import Navbar from "../components/NavbarDark";
import Footer from "../components/FooterDark";

const Privacy = () => {
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
                        Privacy <span className="text-orange-500">Policy</span>
                    </h1>

                    <p className="mb-6 text-lg">
                        At <strong>Procedo Infosystems Pvt. Ltd.</strong> ("we", "our", or "us"), your privacy is one of our top priorities. This Privacy Policy outlines how we collect, use, and safeguard the information you provide when using our website and services.
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-2">1. Information We Collect</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Personal details you voluntarily submit (such as name, email, phone number).</li>
                            <li>Technical data like IP address, browser type, device type, and time of visit.</li>
                            <li>Cookies and similar tracking technologies to improve your browsing experience.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-2">2. How We Use Your Information</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>To provide and maintain our services.</li>
                            <li>To respond to your inquiries or customer support requests.</li>
                            <li>To send updates, marketing material, or newsletters (only with your consent).</li>
                            <li>To analyze usage trends and improve website performance.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-2">3. Data Security</h2>
                        <p>
                            We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet is 100% secure.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-2">4. Third-Party Services</h2>
                        <p>
                            We may integrate third-party services such as analytics providers, payment processors (e.g., Stripe), or hosting platforms (e.g., Vercel, Azure). These services may collect data independently in accordance with their own privacy policies.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-2">5. Your Rights</h2>
                        <p>
                            You have the right to access, update, or delete your personal information. If you would like to exercise any of these rights, please contact us using the information below.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-2">6. Cookies</h2>
                        <p>
                            Our website may use cookies to remember preferences and collect analytics data. You can choose to disable cookies through your browser settings.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-2">7. Changes to This Policy</h2>
                        <p>
                            We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page, and the "Last Updated" date will be revised accordingly.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-2">8. Contact Us</h2>
                        <p>
                            If you have any questions or concerns regarding this Privacy Policy, please reach out to us at:
                            <br />
                            <strong>Email:</strong> contact@procedoinfo.co.in
                            <br/>
                            <strong>Ph No.:</strong> +91 9958896172
                        </p>
                    </section>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Privacy;
