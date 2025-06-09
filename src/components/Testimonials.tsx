import Image from 'next/image'
import React from 'react'

const testimonials=[
    {
      text: "We skipped 2 rounds of interviews because of the Persona report.",
      author: "CTO, AI SaaS",
    },
    {
      text: "The match accuracy is unreal. Like having our own vetting panel on demand.",
      author: "VP Engineering, EU Retail",
    },
    {
      text: "They understood our JD better than our own HR team.",
      author: "Co-founder, Series B Fintech",
    },
  ]

const Testimonials = () => {
  return (
    <section className="bg-[#f5f7fc] py-16 px-4 text-center md:px-[160px] md:py-[80px]">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
        Trusted by Global Enterprises & SAP Leaders
      </h2>
      <p className="mt-4 text-gray-600 text-base md:text-lg">
        Genuine outcomes from authentic teams that have experienced the change
      </p>

      <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-6">
        {testimonials.map((testimonial, i) => (
          <div key={i} className="bg-white rounded-xl shadow-md p-6 w-full md:w-[371px] h-[300px] flex items-start justify-center flex-col text-left">
            <div className="text-3xl text-gray-400">
                <Image src="/Vector.png" alt="Quote Icon" width={24} height={24} />
            </div>
            <p className="mt-4 text-gray-800 text-lg font-bold">“{testimonial.text}”</p>
            <p className="mt-4 text-gray-500 text-sm">~ {testimonial.author}</p>
          </div>
        ))}
      </div>

      <button className="mt-10 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-3 px-6 rounded-full text-sm md:text-base">
        See More Success Stories →
      </button>
    </section>
  )
}

export default Testimonials