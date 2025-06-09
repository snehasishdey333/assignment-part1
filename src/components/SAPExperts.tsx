import Image from "next/image";
import React from "react";

const experts = [
  {
    name: "SAP FICO Consultant",
    match: 94,
    persona: "Analytical, structured, risk-aware",
    availability: "Immediate",
    domainFit: "BFSI, Manufacturing, 6+ years",
    referenceScore: "4.8/5 (based on 3 global clients)",
    readiness: "Ready in 48 hours",
    image: "/Rectangle 20.png",
  },
  {
    name: "SAP MM / Ariba Consultant",
    match: 98,
    persona: "Fast-learner, collaborative",
    availability: "Immediate",
    domainFit: "Pharma, Retail, 8+ years",
    referenceScore: "4.6/5 (based on 3 global clients)",
    readiness: "Ready in 24 hours",
    image: "/Rectangle 20 (1).png",
  },
  {
    name: "SAP SuccessFactors Lead",
    match: 93,
    persona: "Empathetic, outcome-focused",
    availability: "Immediate",
    domainFit: "Telecom, Public Sector, 6+ years",
    referenceScore: "5/5 (based on 3 global clients)",
    readiness: "Ready in 48 hours",
    image: "/Rectangle 20 (2).png",
  },
];

const SAPExperts = () => {
  return (
    <div className="bg-gradient-to-r from-blue-300 to-blue-800 text-white md:px-[160px] md:py-[80px]">
      <h2 className="text-4xl font-bold text-center mb-4">
        Meet Our Elite SAP Experts
      </h2>
      <p className="text-center text-lg mb-12">
        Selected experts with knowledge and a history of successful delivery
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {experts.map(
          (
            expert: {
              name: string;
              match: number;
              persona: string;
              availability: string;
              domainFit: string;
              referenceScore: string;
              readiness: string;
              image: string;
            },
            index: number
          ) => (
            <div
              key={index}
              className="bg-white text-black rounded-2xl overflow-hidden shadow-lg flex flex-col"
            >
              <div className="relative h-72 w-full">
                <Image
                  src={expert.image}
                  alt={expert.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <p className="font-semibold text-lg">Role: {expert.name}</p>
                <p className="mt-2 text-sm">JD Match: {expert.match}%</p>
                <div className="w-full bg-gray-200 h-2 rounded-full my-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: `${expert.match}%` }}
                  ></div>
                </div>
                <p className="text-sm mt-2">
                  <strong>Persona:</strong> {expert.persona}
                </p>
                <p className="text-sm">
                  <strong>Availability:</strong> {expert.availability}
                </p>
                <p className="text-sm">
                  <strong>Domain Fit:</strong> {expert.domainFit}
                </p>
                <p className="text-sm">
                  <strong>Reference Score:</strong> {expert.referenceScore}
                </p>
                <p className="text-sm">
                  <strong>Readiness:</strong> {expert.readiness}
                </p>
                <button className="mt-4 w-full py-2 bg-gray-900 text-white rounded-lg">
                  View Full Persona Report →
                </button>
              </div>
            </div>
          )
        )}
      </div>

      <div className="text-center mt-12">
        <button className="bg-yellow-400 text-black px-6 py-3 rounded-full hover:bg-yellow-300 transition font-bold">
          View More SAP Consultants →
        </button>
      </div>
    </div>
  );
};

export default SAPExperts;
