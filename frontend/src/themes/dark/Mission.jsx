import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Target, Lightbulb, Users } from "lucide-react";

function DarkMission() {
  const handleButtonClick = (action) => {
    console.log(`${action} clicked`);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar scrolled={true} handleButtonClick={handleButtonClick} />
      
      {/* Hero Section */}
      <section className="relative mt-20 pt-20 pb-16 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-[#F24E1E]">Mission</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Illuminating the path to digital excellence in the modern era
            </p>
          </div>
        </div>
      </section>

      {/* Mission Content */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission Card 1 */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg shadow-black/40 hover:shadow-xl hover:shadow-black/50 transition-all border border-gray-700">
              <Target className="w-12 h-12 text-[#F24E1E] mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To be the leading provider of intelligent technology solutions that transform businesses and empower people in the digital age.
              </p>
            </div>

            {/* Mission Card 2 */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg shadow-black/40 hover:shadow-xl hover:shadow-black/50 transition-all border border-gray-700">
              <Lightbulb className="w-12 h-12 text-[#F24E1E] mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Innovation</h3>
              <p className="text-gray-300 leading-relaxed">
                We continuously innovate to deliver cutting-edge solutions that meet the evolving needs of modern businesses in a connected world.
              </p>
            </div>

            {/* Mission Card 3 */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg shadow-black/40 hover:shadow-xl hover:shadow-black/50 transition-all border border-gray-700">
              <Users className="w-12 h-12 text-[#F24E1E] mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Partnership</h3>
              <p className="text-gray-300 leading-relaxed">
                We build lasting partnerships with our clients, understanding their unique challenges and goals in every step.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default DarkMission;