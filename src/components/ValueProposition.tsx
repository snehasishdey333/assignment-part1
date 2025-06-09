import Image from "next/image";
import React from "react";

const ValueProposition = () => {
  return (
    <section className="relative bg-[#0f1b37] text-white px-4 py-16 text-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg-people.png"
          alt="Team Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="opacity-20"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Reinforce Value Proposition
        </h2>
        <p className="text-base md:text-lg text-gray-300 mb-8">
          AI-Powered SAP Talent Cloud – Instant, Pre-Vetted, Guaranteed
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-3 px-6 rounded-full text-sm md:text-base">
            Find SAP Experts Now
          </button>
          <button className="text-white font-semibold text-sm md:text-base border-b border-white hover:text-yellow-400 transition">
            Join Our Talent Pool →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
