import React from "react";
import { Target, Award } from "lucide-react";
import { motion } from "framer-motion";

const AboutMission: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold text-white mb-12 animate-fade-in">Our Mission & Vision</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            className="bg-white/10 p-8 rounded-lg shadow-md backdrop-blur-sm hover:bg-white/20 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <Target className="h-12 w-12 text-blue-500 mb-4 mx-auto" />
            <h3 className="text-3xl text-white mb-4">Our Mission</h3>
            <p className="text-blue-100">
              To provide high-quality document scanning and data processing services.
            </p>
          </motion.div>
          <motion.div
            className="bg-white/10 p-8 rounded-lg shadow-md backdrop-blur-sm hover:bg-white/20 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <Award className="h-12 w-12 text-blue-500 mb-4 mx-auto" />
            <h3 className="text-3xl text-white mb-4">Our Vision</h3>
            <p className="text-blue-100">
              To be the leading provider known for quality, innovation, and customer satisfaction.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutMission;
