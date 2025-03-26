import React from 'react';
import { FileText, BarChart } from 'lucide-react';
import CountUp from 'react-countup';
import SpotlightCard from './SpotlightCard';

const data = [
  {
    icon: FileText,
    count: 100000,
    label: 'Answer Sheets Per Day',
    description: 'Booklet Scanning & Data Extraction',
  },
  {
    icon: BarChart,
    count: 500000,
    label: 'Documents Per Day',
    description: 'Variable Data Processing',
  },
];

const ProcessingCard = ({ icon: Icon, count, label, description }) => {
  return (
    <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
      <div className="text-center">
        <div className="w-16 h-16 mb-6 rounded-xl bg-blue-500/10 flex items-center justify-center mx-auto">
          <Icon className="w-8 h-8 text-blue-400" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">
          <CountUp start={0} end={count} duration={2.5} separator="," />
        </h3>
        <p className="text-xl sm:text-2xl font-bold text-white mb-4">{label}</p>
        <p className="text-gray-400 text-base sm:text-lg">{description}</p>
      </div>
    </SpotlightCard>
  );
};

const DailyProcessingCapacity = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Daily Processing Capacity</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.map((item, index) => (
            <ProcessingCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DailyProcessingCapacity;
