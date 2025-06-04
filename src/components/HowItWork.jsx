import React from "react";
import { FaClipboardList, FaFutbol, FaMapMarkerAlt, FaChartLine } from "react-icons/fa";

const steps = [
  {
    icon: <FaClipboardList className="text-4xl text-indigo-500" />,
    title: "Take the Quiz",
    description: "Answer a few fun questions to understand your child’s interests and personality.",
  },
  {
    icon: <FaFutbol className="text-4xl text-green-500" />,
    title: "Match with Sports",
    description: "We recommend the best sports based on your child’s natural strengths.",
  },
  {
    icon: <FaMapMarkerAlt className="text-4xl text-red-500" />,
    title: "Find Local Academies",
    description: "Discover nearby academies to get started with the right sport.",
  },
  {
    icon: <FaChartLine className="text-4xl text-blue-500" />,
    title: "Track Progress",
    description: "Monitor your child’s growth and get helpful tips along the way.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-white py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          How KLIMB Works
        </h2>
        <p className="text-gray-600 mb-10">
          A fun, step-by-step guide to help your child discover the right sport!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
