import React from 'react';
import {
  Scan as Scanner,
  Users,
  ArrowRight,
  FileCode,
  FileImage,
  FileCog,
  FileText,
  Database,
} from "lucide-react";
function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200">
  

      {/* Values Grid */}
      <section className="py-16 sm:py-24 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16">
          Value-Added Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
  {
    icon: <FileCode className="h-12 w-12 text-blue-600" />,
    title: "OCR Conversion",
    description:
      "Converting scanned documents into editable and searchable text using advanced Optical Character Recognition technology.",
  },
  {
    icon: <FileImage className="h-12 w-12 text-blue-600" />,
    title: "CAD Conversion",
    description:
      "Converting paper drawings and blueprints into digital CAD files that can be edited and used in modern design software.",
  },
  {
    icon: <FileCog className="h-12 w-12 text-blue-600" />,
    title: "Adobe PDF Conversion",
    description:
      "Converting various document formats into standardized, searchable PDF files for easy sharing and archiving.",
  },
  {
    icon: <FileText className="h-12 w-12 text-blue-600" />,
    title: "PDF to Word Conversions",
    description:
      "Converting PDF documents into editable Microsoft Word files while maintaining formatting and layout.",
  },
  {
    icon: <Database className="h-12 w-12 text-blue-600" />,
    title: "Data Conversion",
    description:
      "Converting data from one format to another, including database migrations and structured data extraction from documents.",
  },
].map((value, index) => (
              <div
                key={index}
                className="bg-white hover:bg-blue-50 p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="mb-6">{value.icon}</div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 text-base sm:text-lg">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-24 px-4 md:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mb-12">Meet Our Team</h2>
          <div className="flex items-center justify-center mb-6 sm:mb-12">
            <Users className="h-24 w-24 text-blue-600" />
          </div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          SP Technologies employs over 15 regular staff members who bring expertise and dedication to every project we undertake. These professionals are skilled in various aspects of document scanning, data processing, and quality control.

In addition to our core team, we work with more than 100 contract workers who help us manage large-scale projects and meet tight deadlines without compromising on quality.

Our team's diverse skills and experience enable us to handle projects of any size and complexity, ensuring that we deliver exceptional results for all our clients.
          </p>
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
          <button
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

export default About;
