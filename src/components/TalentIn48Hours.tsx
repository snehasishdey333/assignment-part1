import React from "react";

const TalentIn48Hours = () => {
  return (
    <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white text-center py-16 px-6 rounded-xl">
      <h2 className="text-3xl md:text-5xl font-bold mb-4">
        Enterprise-Grade SAP Talent in 48 Hours
      </h2>
      <p className="mb-10 text-sm md:text-base">No Compromise on Quality</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "Instant Matching",
            desc: "Smart AI-driven selection of the top 1% of SAP consultants.",
            icon: "🔍",
          },
          {
            title: "Guaranteed Quality",
            desc: "All consultants undergo a thorough vetting process prior to deployment.",
            icon: "✅",
          },
          {
            title: "Seamless Replacements",
            desc: "Get a new consultant within 24 hours if needed.",
            icon: "🔄",
          },
        ].map(
          ({
            title,
            desc,
            icon,
          }: {
            title: string;
            desc: string;
            icon: string;
          }) => (
            <div
              key={title}
              className="bg-white text-black rounded-xl p-6 shadow"
            >
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="font-bold text-xl mb-2">{title}</h3>
              <p className="text-sm text-gray-700">{desc}</p>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default TalentIn48Hours;
