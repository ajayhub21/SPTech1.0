import React from 'react';
import { 
  ScanLine, 
  FileText, 
  Clock, 
  ArrowRight, 
  Building2, 
  FileStack, 
  FileCheck, 
  Edit, 
  Camera, 
  BookOpen, 
  Briefcase, 
  Map, 
  Newspaper 
} from 'lucide-react';

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, features }) => {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-[1.02] hover:bg-white/10">
      <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6">
        <Icon className="w-8 h-8 text-blue-400" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-300 mb-6">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-400">
            <FileCheck className="w-5 h-5 text-blue-400 mr-3" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className="group flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300">
        Learn more
        <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
      </button>
    </div>
  );
};

const services = [
  {
    icon: ScanLine,
    title: "Bulk Document Scanning",
    description: "High-quality bulk scanning services with industry-leading speed and accuracy.",
    features: [
      "Up to 500,000 sheets per day",
      "600 DPI resolution",
      "Multi-format support (TIFF, JPG, PDF)",
      "Automatic document feeder"
    ]
  },
  {
    icon: FileText,
    title: "Digital Document Management",
    description: "Secure and efficient digital archiving for easy document retrieval.",
    features: [
      "OCR conversion for searchable PDFs",
      "Secure cloud storage",
      "Automated indexing",
      "Multi-user access with permission control"
    ]
  },
  {
    icon: Edit,
    title: "Data Processing & Conversion",
    description: "Comprehensive data conversion and processing solutions.",
    features: [
      "PDF to Word conversion",
      "OCR Scanning & Text Extraction",
      "CAD & Adobe PDF conversion",
      "Data indexing & metadata tagging"
    ]
  },
  {
    icon: Camera,
    title: "Image Processing & Editing",
    description: "Advanced photo and document image enhancement services.",
    features: [
      "Custom photo editing",
      "Image search & recognition",
      "High-quality document restoration",
      "Flexible formats for digital assets"
    ]
  }
];


const industries = [
  { icon: Building2, name: "Medical Records (Hospitals & Clinics)" },
  { icon: FileStack, name: "Banking & Financial Documents" },
  { icon: BookOpen, name: "Educational Institutions & Exam Papers" },
  { icon: Briefcase, name: "Corporate & Business Archives" },
  { icon: Map, name: "Engineering Drawings & Survey Scanning" },
  { icon: Newspaper, name: "Magazines & Historical Documents" }
];


export const Services: React.FC = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-900 to-blue-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Effortless Digital Transformation for Your Documents
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
          Convert your physical documents into secure, searchable digital assets with our advanced scanning and archiving solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        {/* Industries Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Industries We Serve</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {industries.map(({ icon: Icon, name }) => (
              <div 
                key={name}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 transition-all duration-300 hover:bg-white/10"
              >
                <Icon className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <p className="text-gray-300 font-medium">{name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center mx-auto">
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};