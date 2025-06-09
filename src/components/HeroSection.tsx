import React from "react";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const stats = [
    { number: "20,000+", label: "Vetted SAP Tech Consultants" },
    { number: "1000+", label: "Global Clients & SAP Projects" },
    { number: "10+ Years", label: "Average Experience per Consultant" },
    { number: "20M+", label: "Man-Hours of SAP Expertise" },
  ];

  return (
    <section className="relative bg-blue-900 text-white min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-[80vh] relative">
          {/* Left Content */}
          <div className="relative z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Unleash SAP & Tech
              <br />
              <span className="text-yellow-400">Excellence with AI/ML</span>
              <br />
              Talent Cloud
            </h1>

            <p className="text-lg sm:text-xl text-green-100 mb-12 leading-relaxed max-w-2xl">
              Find and deploy elite SAP consultants, managed teams, and
              consulting expertise instantly with AI-driven precision.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
              {stats.map(
                (
                  stat: {
                    number: string;
                    label: string;
                  },
                  index: number
                ) => (
                  <div key={index} className="text-center sm:text-left">
                    <div className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm sm:text-base text-green-100 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                )
              )}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
                Find SAP Experts Now
              </button>

              <button className="flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-green-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 group">
                Explore Talent Cloud
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Background Image */}
          {/* <div className="absolute inset-y-0 right-0 w-1/2 hidden lg:block">
            <Image height={100} width={100}
              src="/image 2150.png" 
              alt="SAP Technology"
              className="w-full min-h-screen object-cover object-center"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
