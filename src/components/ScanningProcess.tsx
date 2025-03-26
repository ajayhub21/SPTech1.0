import React from "react";
import { motion } from "framer-motion";

const steps = [
  { title: "Document Preparation", description: "Organizing and removing staples for scanning." },
  { title: "Scanning", description: "High-quality digital images of documents." },
  { title: "Quality Control", description: "Reviewing scanned images for quality." },
  { title: "Delivery", description: "Providing files in your preferred format." },
];

const ScanningProcess: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-blue-400 mb-8">Our Scanning Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-blue-800 p-6 rounded-lg shadow-lg hover:scale-105 transition duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScanningProcess;
