import Image from 'next/image'
import React from 'react'

const SkillsCapital = () => {
  return (
    <section className="bg-[#f5f7fc] md:px-[160px] md:py-[80px] text-center">
      <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
        India – SkillsCapital for SAP & Enterprise Talent
      </h1>
      <p className="mt-4 text-gray-600 text-base md:text-lg">
        India’s top SAP talent, combined with our AI-powered vetting, ensures unmatched expertise
      </p>

      <div className="mt-10 mx-auto max-w-5xl rounded-xl overflow-hidden shadow-md">
        <div className="relative w-full h-[400px] sm:h-[500px]">
          <Image
            src="/image 2144.png"
            alt="India Map SAP Talent"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0  bg-opacity-60 flex flex-col justify-center items-start px-6 md:px-12 text-left">
            <h2 className="text-white text-2xl md:text-4xl font-bold max-w-xl">
              Work with Elite SAP Consultants who have delivered projects for Fortune 500 Companies.
            </h2>
            <button className="mt-6 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-3 px-6 rounded-full text-sm md:text-base">
              Find Top SAP Talent Now →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsCapital