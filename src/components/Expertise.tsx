import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Expertise = () => {
  return (
    <section className="text-center bg-white md:px-[160px] md:py-[80px]">
      <h2 className="text-3xl md:text-5xl font-bold mb-2 text-black">
        Source & Deploy SAP Expertise Seamlessly
      </h2>
      <p className="text-gray-600 mb-10 mt-6">
        Our AI-driven platform powers three key engagement models
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "SAP Consultants",
            desc: "Pre-vetted, ready-to-deploy SAP talent for on-demand projects & implementations.",
            btn: "Explore SAP Consultants",
            img: "/Rectangle 1358.png",
          },
          {
            title: "Managed Teams",
            desc: "Scalable, fully managed SAP teams for end-to-end project delivery.",
            btn: "Browse Managed Teams",
            img: "/Rectangle 1358 (1).png",
          },
          {
            title: "SAP Consulting",
            desc: "SAP consulting and integration solutions to accelerate transformation.",
            btn: "Access Top SAP Consulting",
            img: "/Rectangle 1358 (2).png",
          },
        ].map(
          ({
            title,
            desc,
            btn,
            img,
          }: {
            title: string;
            desc: string;
            btn: string;
            img: string;
          }) => (
            <div key={title} className="bg-white rounded-xl shadow pb-6">
              <Image
                height={100}
                width={100}
                src={img}
                alt={title}
                className="rounded-t-xl w-full h-52 object-fill mb-4"
              />
              <h3 className="font-semibold text-xl px-4 text-left mb-4 text-black">
                {title}
              </h3>
              <p className="px-4 text-sm text-left text-gray-600 mb-4">
                {desc}
              </p>
              <button className="bg-gray-900 text-white px-5 py-2 mt-2 rounded-full">
                <div>
                  {btn}
                  <ArrowRight className="inline ml-2 h-4 w-4" />
                </div>
              </button>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Expertise;
