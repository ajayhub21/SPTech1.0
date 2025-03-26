import React from 'react';
import {  Shield,Users, Globe, CloudOff, TrendingUp } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const features = [
    {
      icon: Shield,
      title: 'Security & Protection',
      description: 'Scanned documents can be secured with passwords, access codes, and permission profiles, ensuring that sensitive information is only accessible to authorized personnel. Digital security measures provide a level of protection that physical documents simply cannot match, with detailed audit trails of who accessed what and when.',
    },
    {
      icon: TrendingUp,
      title: 'Business Efficiency',
      description: 'Consistent digital format ensures smooth operations across departments and reduces costs associated with physical document storage, retrieval, and management. Employees spend less time searching for information and more time on productive tasks, significantly improving overall operational efficiency.',
    },
    {
      icon: Users,
      title: 'Enhanced Collaboration',
      description: 'Digital documents enable real-time collaboration among team members, regardless of their physical location, reducing costs and cycle times for document-intensive processes. Multiple users can access, review, and edit the same document simultaneously, eliminating version control issues and streamlining approval workflows.',
    },
    {
      icon: Globe,
      title: 'Easy Accessibility',
      description: 'Documents are retrievable from anywhere worldwide in seconds, enabling remote work and providing immediate access to critical information when needed. Searchable text capabilities allow users to quickly find specific information within documents, eliminating the need to manually review pages of content.',
    },
    {
      icon: CloudOff,
      title: 'Disaster Prevention',
      description: 'Routine backups of digital documents eliminate risks of physical damage from fire, floods, or other disasters that could destroy paper records permanently. Digital documents can be part of your business continuity plan, ensuring that critical information remains accessible even in emergency situations.',
    },
    {
      icon: TrendingUp,
      title: 'Cost Reduction',
      description: 'Eliminating physical storage needs reduces costs associated with office space, filing cabinets, and document management personnel. Digital workflows reduce printing, copying, and shipping costs while improving process efficiency and reducing turnaround times.',
    },
  ];
  

export const WhyScanBenifits = () => {
  return (
    <section className="py-16 sm:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          Key Benefits of Document Scanning
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto sm:text-lg">
          Discover the key benefits of digitizing your documents
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <SpotlightCard
                key={feature.title}
                className="custom-spotlight-card"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                {/* Icon and Content */}
                <div className="text-center">
                  <div className="w-16 h-16 mb-6 rounded-xl bg-blue-500/10 flex items-center justify-center mx-auto">
                    <Icon className="w-8 h-8 text-blue-400" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">{feature.title}</h3>

                  <p className="text-gray-400 text-base sm:text-lg">{feature.description}</p>
                </div>

              
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
