import React from 'react';
import { Scan, Shield, Zap, Clock, Users, Globe, CloudOff, TrendingUp } from 'lucide-react';
import SpotlightCard from "../components/SpotlightCard";  // ✅ Correct path


const features = [
  {
    icon: Scan,
    title: 'High-Quality Scanning',
    description: 'Advanced scanning technology ensures sharp, high-resolution digital documents.',
  },
  {
    icon: Shield,
    title: 'Secure Data Handling',
    description: 'Bank-grade encryption protects your confidential documents.',
  },
  {
    icon: Zap,
    title: 'Fast Turnaround Times',
    description: 'Process up to 50,000 documents daily with lightning-fast speed.',
  },
  {
    icon: Clock,
    title: 'On-Time Completion',
    description: 'Reliable delivery, ensuring tasks are completed as scheduled.',
  },
  {
    icon: Users,
    title: 'Enhanced Collaboration',
    description: 'Real-time access allows teams to collaborate seamlessly from anywhere.',
  },
  {
    icon: Globe,
    title: 'Easy Accessibility',
    description: 'Retrieve documents instantly from anywhere with powerful search features.',
  },
  {
    icon: CloudOff,
    title: 'Disaster Prevention',
    description: 'Backups protect against data loss from fire, floods, or system failures.',
  },
  {
    icon: TrendingUp,
    title: 'Cost Reduction',
    description: 'Digitization cuts costs on storage, printing, and document handling.',
  },
];

export const Features = () => {
  return (
    <section className="py-16 sm:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Why Choose SP Technology?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto sm:text-lg">
            We combine cutting-edge technology with decades of experience to deliver exceptional document digitization
            services.
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
