import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Badge } from '../components/Badge';

const About = () => {
  return (
    <div>
      <Navbar />
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are a team of dedicated professionals committed to delivering innovative solutions that empower businesses to thrive in a digital world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex flex-col items-center">
              <Badge className="mb-4 bg-emerald-100 text-emerald-800">Our Mission</Badge>
              <p className="text-gray-600">
                Our mission is to provide cutting-edge technology solutions that enhance operational efficiency and drive growth for our clients.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Badge className="mb-4 bg-emerald-100 text-emerald-800">Our Vision</Badge>
              <p className="text-gray-600">
                We envision a world where technology seamlessly integrates into everyday business processes, enabling organizations to focus on what matters most.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Join Us on Our Journey</h3>
            <p className="text-gray-600">
              Together, we can create solutions that not only meet the needs of today but also anticipate the challenges of tomorrow.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;