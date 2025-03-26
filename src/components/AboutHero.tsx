import React from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";  // ✅ Import SpotlightCard

export const AboutHero: React.FC = () => {
  const scrollToNextSection = () => {
    const nextSection = document.querySelector(".about-story-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center overflow-hidden pt-20 md:pt-32 px-4">
      <motion.div
        className="absolute inset-0 bg-black/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="relative z-10 text-center max-w-md md:max-w-5xl px-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg animate-fade-in">
          About Us
        </h1>
        <p className="text-base md:text-xl text-gray-300 mb-8 drop-shadow-sm">
          Empowering businesses with cutting-edge document scanning and data processing solutions since 2012. Our commitment to quality, innovation, and customer satisfaction drives everything we do.
        </p>

        {/* Key Highlights Section with SpotlightCard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-md md:max-w-5xl mx-auto mb-8 md:mb-12">
          {[
            {
              title: "10+ Years of Experience",
              description: "Delivering excellence in document management and data processing.",
              delay: 0.2,
            },
            {
              title: "Customer-Centric Approach",
              description: "Personalized services designed to meet diverse business needs.",
              delay: 0.4,
            },
            {
              title: "Innovative Solutions",
              description: "Leveraging technology to streamline and optimize processes.",
              delay: 0.6,
            },
          ].map((highlight, index) => (
            <SpotlightCard
              key={index}
              className="hover:scale-105 transition-transform duration-300"
              spotlightColor="rgba(0, 229, 255, 0.2)"  // 🌟 Custom spotlight color
            >
              <motion.div
                className="p-4 md:p-6 rounded-lg text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: highlight.delay }}
              >
                <h3 className="text-lg md:text-2xl font-bold text-white mb-2">
                  {highlight.title}
                </h3>
                <p className="text-sm md:text-base text-gray-300">
                  {highlight.description}
                </p>
              </motion.div>
            </SpotlightCard>
          ))}
        </div>

        <button
          onClick={scrollToNextSection}
          className="mt-4 md:mt-6 p-2 md:p-3 rounded-full bg-white/20 hover:bg-white/30 transition duration-300 shadow-lg backdrop-blur-md animate-bounce"
          aria-label="Scroll Down"
        >
          <ChevronDown className="text-white w-6 h-6 md:w-8 md:h-8" />
        </button>
      </motion.div>
      <div className="absolute top-10 left-10 h-24 w-24 bg-blue-400 rounded-full blur-2xl opacity-30 animate-pulse sm:h-48 sm:w-48 lg:h-56 lg:w-56" />
      <div className="absolute bottom-10 right-10 h-32 w-32 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse sm:h-56 sm:w-56 lg:h-72 lg:w-72" />
    </div>
  );
};
