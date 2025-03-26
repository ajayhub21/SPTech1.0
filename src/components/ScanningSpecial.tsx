import React from "react";
import { motion } from "framer-motion";
import { BookOpen, ShieldCheck } from "lucide-react";

export const ScanningSpecial = () => {
  const features = [
    { icon: BookOpen, title: "Fragile Documents", description: "Special techniques for preserving valuable documents." },
    { icon: ShieldCheck, title: "Confidential Info", description: "Secure protocols for handling sensitive data." },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4 text-blue-400">Special Document Handling</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-blue-800 p-8 rounded-lg shadow-lg hover:scale-105 transition duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <feature.icon className="h-10 w-10 text-white mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
