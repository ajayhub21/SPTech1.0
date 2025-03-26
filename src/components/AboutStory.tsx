import React from "react";
import { motion } from "framer-motion";
import officeImage from "../assets/images/kotak12printer.jpg";
import TiltedCard from "./TiltedCard";

export const AboutStory: React.FC = () => {
  console.log("Image path:", officeImage); // Debugging

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-blue-900 py-10 md:py-20 pt-20 about-story-section">
      <motion.div
        className="absolute inset-0 bg-black/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center gap-12">
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-200 mb-6">
            Our Journey
          </h1>
          <p className="text-base md:text-lg text-blue-100 mb-4">
            Established in 2012, SP Technologies has grown from a small startup to a leading provider of document scanning and data processing services.
          </p>
          <p className="text-base md:text-lg text-blue-100 mb-4">
            Our mission is to simplify data management for businesses of all sizes through innovative and reliable solutions.
          </p>
          <p className="text-base md:text-lg text-blue-100 mb-4">
            We pride ourselves on a customer-first approach, delivering personalized services with uncompromising quality and efficiency.
          </p>
          <p className="text-base md:text-lg text-blue-100 mb-4">
            Today, we serve a diverse portfolio of clients, helping them transform how they manage and process information.
          </p>
          {/* <button className="mt-4 md:mt-6 px-4 md:px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition duration-300 shadow-lg">
            Learn More
          </button> */}
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <TiltedCard
            imageSrc={officeImage}
            altText="Office Environment"
            captionText="Our Workspace"
            containerHeight="300px"
            containerWidth="250px"
            imageHeight="250px"
            imageWidth="250px"
            rotateAmplitude={8}
            scaleOnHover={1.05}
          />
        </motion.div>
      </div>
    </div>
  );
};
