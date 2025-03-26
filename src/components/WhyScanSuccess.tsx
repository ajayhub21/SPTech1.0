import React from 'react';
import {
  Scan as Scanner,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { useNavigate } from 'react-router-dom';

function WhyScanSuccess() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200">
  

  <section className="py-16 sm:py-24 px-4 md:px-8 lg:px-12">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-8">Success Stories</h2>
    <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
    <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-12">
      See how our document scanning solutions have helped organizations transform their operations
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[ 
        {
          title: "Healthcare Provider",
          description1: "A major hospital reduced patient record retrieval time from hours to seconds by digitizing over 500,000 medical records. This improved patient care by providing doctors with immediate access to complete medical histories.",
          description2: "The digital transformation also enabled secure sharing of patient information between departments and with other healthcare providers, improving coordination of care."
        },
        {
          title: "Financial Institution",
          description1: "A leading financial services company digitized millions of customer application forms and agreements, reducing processing time by 70% and improving customer satisfaction.",
          description2: "The digital workflow allowed for automated data extraction and validation, reducing errors and enabling faster decision-making for loan approvals and account openings."
        }
      ].map((story, index) => (
        <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900">{story.title}</h3>
          <p className="text-gray-700 mb-4">{story.description1}</p>
          <p className="text-gray-700">{story.description2}</p>
        </div>
      ))}
    </div>
  </div>
</section>


<section className="py-16 sm:py-24 px-4 md:px-8 lg:px-12 bg-white">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 sm:mb-12">Regulatory Compliance</h2>
    <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
    <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
      How document scanning helps meet regulatory requirements
    </p>
    
    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <p className="text-gray-700 mb-4">
        Many industries face strict regulatory requirements for document retention and security. Digital document management systems make compliance easier by:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-gray-700 max-w-7xl mx-auto px-6 sm:px-8">
        {[ 
          "Providing audit trails of document access and modifications",
          "Ensuring consistent retention policies across all documents",
          "Enabling quick responses to audit requests or legal discovery",
          "Implementing security controls that meet industry standards",
          "Facilitating disaster recovery and business continuity planning"
        ].map((feature, index) => (
          <div key={index} className="flex items-center justify-start transition-transform hover:scale-105">
            <CheckCircle className="h-6 w-6 text-blue-600" />
            <span className="ml-3 text-lg">{feature}</span>
          </div>
        ))}
      </div>
      <p className="text-gray-700 mt-6">
        Our document scanning solutions are designed with compliance in mind, helping your organization meet requirements while improving operational efficiency.
      </p>
    </div>
  </div>
</section>


      {/* Footer CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">
            Ready to Digitize Your Documents?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-12">
            Join thousands of satisfied clients who have transformed their document management with us.
          </p>
          <button onClick={() => navigate("/SPTech1.0/contact")}
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full transition-colors inline-flex items-center"
            aria-label="Get started with our document scanning services"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
}

export default WhyScanSuccess;
