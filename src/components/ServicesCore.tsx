import React from "react";
import { FileText, FileSearch, FileImage } from "lucide-react";
import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";  // ✅ Import SpotlightCard

const coreServices = [
  {
    icon: FileText,
    title: "Bulk Document Scanning",
    description: "Efficient and accurate scanning for large volumes of documents.",
  },
  {
    icon: FileSearch,
    title: "Document Scanning Solutions",
    description: "Tailored scanning solutions to meet your business needs.",
  },
  {
    icon: FileImage,
    title: "Engineering Drawings Scanning",
    description: "High-precision scanning for large-format drawings.",
  },
];

const ServicesCore: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900 text-white core-services-section">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Our Core Services</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {coreServices.map((service, index) => (
            <SpotlightCard
              key={index}
              className="hover:scale-105 transition-transform duration-300"
              spotlightColor="rgba(0, 229, 255, 0.2)"  // 🛠 Fixed missing quote here
            >
              <motion.div
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <service.icon className="w-12 h-12 text-blue-500 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCore;
