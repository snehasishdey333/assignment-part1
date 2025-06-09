import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const DeepVet360 = () => {
  interface SectionWrapperProps {
    title: string;
    imageSrc: string;
    features: { title: string; description: string }[];
    buttonText: string;
  }

  const SectionWrapper: React.FC<SectionWrapperProps> = ({
    title,
    imageSrc,
    features,
    buttonText,
  }) => (
    <div className="my-12 px-4 md:px-12">
      <div className="bg-gray-900 text-white py-2 px-4 rounded-xl inline-flex items-center justify-between w-full mb-2">
        <span className="text-white text-sm font-semibold">{title}</span>
        <button className="flex items-center bg-white text-gray-900 px-3 py-1 text-sm font-semibold border border-gray-300 rounded-4xl">
          Find Talent
          <div className="flex items-center justify-center rounded-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 h-8 w-8 ml-2">
            <ArrowRight className="h-4 w-4 text-black" />
          </div>
        </button>
      </div>
      <SectionCard
        title={title}
        imageSrc={imageSrc}
        features={features}
        buttonText={buttonText}
      />
    </div>
  );

  const SectionCard: React.FC<{
    imageSrc: string;
    title: string;
    features: { title: string; description: string }[];
    buttonText: string;
  }> = ({ imageSrc, title, features, buttonText }) => (
    <div className="bg-white rounded-2xl shadow-md p-4 space-y-4 h-full w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center h-full">
        <Image
          src={imageSrc}
          alt="section image"
          width={500}
          height={300}
          className="rounded-xl w-full h-auto"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-gray-100 p-4 rounded-xl shadow-sm h-full w-full"
            >
              <h3 className="font-semibold text-gray-700 text-left">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1 text-left">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center">
        <button className="mt-4 bg-yellow-400 hover:bg-yellow-300 text-sm font-bold px-6 py-2 rounded-full">
          {buttonText}
        </button>
      </div>
    </div>
  );

  return (
    <section className="bg-white min-h-screen md:px-[160px] md:py-[80px] text-center">
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold text-gray-800">
          AI-Powered Deep Vet 360
        </h1>
        <p className="text-sm text-gray-500 mt-2">Precision Hiring at Scale</p>
      </div>

      <SectionWrapper
        title="Advanced ML-Powered Precision MatchTM"
        imageSrc="/Rectangle 1360 (1).png"
        buttonText="Explore Our Vetting Process"
        features={[
          {
            title: "Continuously Learning Models",
            description:
              "Matching algorithms evolve with every project, improving accuracy over time.",
          },
          {
            title: "Trained on Real-World Data",
            description:
              "Models are trained on 20,000+ consultant profiles and 1,000+ client project outcomes.",
          },
          {
            title: "AI-Powered Precision",
            description:
              "Instantly identifies best-fit SAP consultants using advanced AI/ML algorithms.",
          },
          {
            title: "Optimized for Enterprise Needs",
            description:
              "Ensures high-relevance matches tailored to complex SAP delivery environments.",
          },
        ]}
      />
      <SectionWrapper
        title="Deep Tech AI-Driven Deep Vet"
        imageSrc="/Rectangle 1360.png"
        buttonText="Our Candidate Vetting Process"
        features={[
          {
            title: "End-to-End Fit Scoring",
            description:
              "Combines all layers into a unified candidate readiness score for decision-making.",
          },
          {
            title: "Verified by External Assessments",
            description:
              "Third-party evaluations validate core skills across SAP, ERP, and enterprise technologies.",
          },
          {
            title: "AI-Powered Matching",
            description:
              "Machine learning algorithms analyze SAP resumes and job descriptions to ensure precise skill alignment.",
          },
          {
            title: "Human Insights for Cultural Fit",
            description:
              "Industry experts assess soft skills and team compatibility for enterprise-ready placements.",
          },
        ]}
      />
      <SectionWrapper
        title="Cognitive NLP-Processed Talent Persona"
        imageSrc="/Rectangle 1360 (2).png"
        buttonText="Discover Our Vetting Process"
        features={[
          {
            title: "Bias-Free Evaluation",
            description:
              "Delivers data-backed insights that reduce hiring bias and enhance fairness.",
          },
          {
            title: "Expertise Depth Evaluation",
            description:
              "NLP algorithms extract and score domain knowledge and technical fluency in real time.",
          },
          {
            title: "AI-Assisted Behavioral Insights",
            description:
              "Natural Language Processing analyzes video interview responses to assess personality traits.",
          },
          {
            title: "Behavioral Fit Mapping",
            description:
              "Matches candidates to roles based on cognitive, interpersonal, and cultural alignment.",
          },
        ]}
      />
    </section>
  );
};

export default DeepVet360;
