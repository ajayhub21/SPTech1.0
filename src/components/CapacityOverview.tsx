import React from "react";

const CapacityOverview: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gray-800 bg-cover bg-center overflow-hidden capacity-story-section">
      {/* Animated Background Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content Wrapper */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 pt-32 pb-16 flex flex-col lg:flex-row items-center lg:items-start">
        {/* Left Side Content */}
        <div className="lg:w-1/2 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            High-Volume Scanning Capacity
          </h1>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto sm:mx-0">
            At SP Technologies, we have invested in building substantial scanning capacity to handle projects of any size. Our infrastructure and skilled workforce enable us to process large volumes of documents efficiently without compromising on quality.
          </p>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto sm:mx-0">
            Whether you need to digitize thousands or millions of documents, our team has the resources and expertise to complete your project on time and within budget.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex justify-center lg:justify-end">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Scanning Operations"
              className="w-full h-auto transform transition duration-300 hover:scale-105"
            />
          </div>
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
          <div key={index} className="flex items-center justify-start transition-transform hover:scale-105">
            <span className="h-6 w-6 text-blue-300 mr-3">✔</span>
            <span className="text-lg">{feature}</span>
          </div>
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 h-24 w-24 bg-blue-400 rounded-full blur-2xl opacity-30 animate-pulse sm:h-48 sm:w-48 lg:h-56 lg:w-56" />
      <div className="absolute bottom-10 right-10 h-32 w-32 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse sm:h-56 sm:w-56 lg:h-72 lg:w-72" />
    </section>
  );
};

export default CapacityOverview;
