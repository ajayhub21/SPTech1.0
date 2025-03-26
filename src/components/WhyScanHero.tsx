import React from "react";
import { CheckCircle } from "lucide-react";
import TiltedCard from "./TiltedCard";
import kotak12printer from "../assets/images/kotak12printer.jpg";

export const WhyScanHero = () => {
  return (
    <div className="relative min-h-screen bg-gray-800 bg-cover bg-center overflow-hidden">
      {/* Animated Background Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content Wrapper */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 pt-32 pb-16 flex flex-col lg:flex-row items-center lg:items-start">
        {/* Left Side Content */}
        <div className="lg:w-1/2 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Why Document Scanning Matters?
          </h1>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-blue-100 max-w-2xl">
            In today's digital age, paper documents are becoming increasingly
            obsolete. Document scanning offers a range of benefits that can
            transform how your business operates, from improved efficiency to
            enhanced security. At SP Technologies, we help businesses of all
            sizes transition from paper-based processes to streamlined digital
            workflows, unlocking new possibilities for collaboration,
            accessibility, and disaster recovery.
          </p>
        </div>

        {/* Right Side - Tilted Card */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex justify-center lg:justify-end">
          <TiltedCard
            imageSrc={kotak12printer} // ✅ Correct Image Source
            altText="High-Speed Document Scanner"
            captionText="Efficient Document Scanning"
            containerHeight="400px"
            containerWidth="400px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="text-white bg-black bg-opacity-75 rounded-lg p-2 text-sm">
                Our Story
              </p>
            }
          />
        </div>
      </div>

      {/* Features Grid */}
      <div className="mb-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-white max-w-7xl mx-auto px-6 sm:px-8">
        {[
          "Providing audit trails of document access and modifications",
          "Ensuring consistent retention policies across all documents",
          "Enabling quick responses to audit requests or legal discovery",
          "Implementing security controls that meet industry standards",
          "Facilitating disaster recovery and business continuity planning",
        ].map((feature, index) => (
          <div
            key={index}
            className="flex items-center justify-start transition-transform hover:scale-105"
          >
            <CheckCircle className="h-6 w-6 text-blue-300" />
            <span className="ml-3 text-lg">{feature}</span>
          </div>
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 h-24 w-24 bg-blue-400 rounded-full blur-2xl opacity-30 animate-pulse sm:h-48 sm:w-48 lg:h-56 lg:w-56" />
      <div className="absolute bottom-10 right-10 h-32 w-32 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse sm:h-56 sm:w-56 lg:h-72 lg:w-72" />
    </div>
  );
};
