import React from "react";

const CapacityProject: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6 animate-fade-in">
          Ready to Start Your Scanning Project?
        </h2>
        <p className="text-xl mb-10 max-w-3xl mx-auto text-gray-200 animate-fade-in delay-200">
          Contact us today to discuss your document scanning needs and learn how our high-capacity scanning capabilities can benefit your organization.
        </p>
        <a
          href="/contact"
          className="bg-white text-blue-900 hover:bg-gray-200 font-bold py-3 px-10 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-in delay-400"
        >
          Get a Quote
        </a>
      </div>
    </section>
  );
};

export default CapacityProject;
