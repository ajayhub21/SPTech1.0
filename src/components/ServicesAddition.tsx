import React from "react";
import { FileImage, Database } from "lucide-react";
import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";  // ✅ Import SpotlightCard

const additionalFeatures = [
  { icon: FileImage, title: "Image Processing", description: "Enhance readability of scanned images." },
  { icon: FileImage, title: "Digital Image Creation", description: "High-quality digital conversions." },
  { icon: Database, title: "Document Management", description: "Organize and manage documents efficiently." },
];

const ServicesAddition: React.FC = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Additional Features</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {additionalFeatures.map((feature, index) => (
            <SpotlightCard
              key={index}
              className="hover:scale-105 transition-transform duration-300"
              spotlightColor="rgba(0, 229, 255, 0.2)"  // 🌟 Custom spotlight color
            >
              <motion.div
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <feature.icon className="h-12 w-12 text-blue-500 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesAddition;
