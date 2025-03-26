import React from 'react';
import {
  Upload,
  FileStack,
  ScanLine,
  FileType2,
  CheckCircle2,
  Send,
  ArrowRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const steps = [
  {
    icon: Upload,
    title: 'Document Collection',
    description: 'Submit your documents through multiple convenient channels - physical drop-off, mail, or secure digital upload.'
  },
  {
    icon: FileStack,
    title: 'Document Preparation',
    description: 'Our experts carefully sort and organize your documents, ensuring optimal scanning quality.'
  },
  {
    icon: ScanLine,
    title: 'Scanning Process',
    description: 'Using state-of-the-art scanners, we digitize your documents with the highest quality and security standards.'
  },
  {
    icon: FileType2,
    title: 'Data Conversion',
    description: 'Documents are converted into industry-standard formats (PDF, TIFF) and systematically organized.'
  },
  {
    icon: CheckCircle2,
    title: 'Quality Check',
    description: 'Rigorous quality control ensures perfect clarity, completeness, and accuracy of every scan.'
  },
  {
    icon: Send,
    title: 'Secure Delivery',
    description: 'Access your digital documents through secure cloud storage, encrypted email, or physical storage media.'
  }
];

function Step() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-800">
      {/* Hero Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-4">
            Document Scanning Made Simple
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Transform your physical documents into organized digital assets with our professional scanning service.
          </p>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 text-center mb-16">
          How It Works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative group bg-gray-800 p-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:bg-gray-750"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-blue-500/5 rounded-2xl blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />

                {/* Content */}
                <div className="relative">
                  <div className="w-16 h-16 mb-6 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                    {step.title}
                  </h3>

                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <button onClick={() => navigate("/SPTech1.0/contact")} className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
          <p className="mt-4 text-gray-600">
            Questions? Contact our team for a free consultation
          </p>
        </div>
      </div>
   
    </div>
  );
}

export default Step;
