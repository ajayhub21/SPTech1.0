import React, { useRef, useState } from "react";
import { Scan, Shield, Zap, Clock, Users, Globe, CloudOff, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

// SpotlightCard Component
const SpotlightCard = ({ children, className = "", spotlightColor = "rgba(255, 255, 255, 0.25)" }) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(0.6);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(0.6);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-3xl border border-neutral-800 bg-neutral-900 overflow-hidden p-8 shadow-lg ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />
      {children}
    </div>
  );
};

// Feature data
const features = [
  { icon: Scan, title: "High-Quality Scanning", description: "Sharp, high-resolution digital documents." },
  { icon: Shield, title: "Secure Data Handling", description: "Bank-grade encryption for your documents." },
  { icon: Zap, title: "Fast Turnaround", description: "Process up to 50,000 documents daily." },
  { icon: Clock, title: "On-Time Delivery", description: "Tasks completed as scheduled." },
  { icon: Users, title: "Enhanced Collaboration", description: "Real-time access from anywhere." },
  { icon: Globe, title: "Easy Accessibility", description: "Instant retrieval with powerful search." },
  { icon: CloudOff, title: "Disaster Prevention", description: "Backups for data loss protection." },
  { icon: TrendingUp, title: "Cost Reduction", description: "Cuts costs on storage and handling." },
];

// ScannerDocument Component
export const ScannerDocument = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-900 to-gray-900 text-white Scanner-Document-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-8 text-center text-blue-400">
          Why Choose SP Technology?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <SpotlightCard className="hover:scale-105 transition duration-300"  spotlightColor="rgba(0, 229, 255, 0.2)" >
                {React.createElement(feature.icon, { className: "h-10 w-10 text-blue-400 mb-4" })}
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
