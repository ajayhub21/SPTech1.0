import React from 'react';
import { ArrowRight, ArrowLeft, Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  avatar: string;
}

const testimonials = [
  {
    name: "Healthcare Provider",
    role: "Medical Records Department",
    company: "Apollo Hospital",
    testimonial: "SP Technologies has been instrumental in our digital transformation journey. Their document scanning services have helped us improve efficiency and reduce costs. The team is professional, responsive, and delivers high-quality work consistently.",
    avatar: "https://cdn-icons-png.flaticon.com/128/8833/8833093.png" // Hospital/Medical Icon
  },
  {
    name: "Financial Institution",
    role: "Document Management Team",
    company: "Tata Capital Finance India Pvt Ltd",
    testimonial: "We've been working with SP Technologies for over 5 years, and they have consistently delivered exceptional service. Their attention to detail, commitment to quality, and ability to handle large volumes of documents have made them a valuable partner for our business.",
    avatar: "https://cdn-icons-png.flaticon.com/128/3144/3144456.png" // Finance/Banking Icon
  },
  {
    name: "Government Institution",
    role: "Administration Team",
    company: "Directorate of Technical Education (DOTE)",
    testimonial: "SP Technologies has greatly improved our document processing and archiving efficiency. Their secure and accurate handling of records has been invaluable.",
    avatar: "https://cdn-icons-png.flaticon.com/128/1828/1828501.png" // Government/Administration Icon
  },
  {
    name: "Automotive Finance",
    role: "Operations Lead",
    company: "Nissan Renault Financial Services India Pvt Ltd",
    testimonial: "Their document scanning and data processing solutions have streamlined our workflow, making operations more efficient and seamless.",
    avatar: "https://cdn-icons-png.flaticon.com/128/1048/1048310.png" // Automotive/Car Industry Icon
  }
];


const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  company,
  testimonial,
  avatar
}) => (
  <div className="bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 hover:scale-[1.02]">
    <Quote className="w-10 h-10 text-blue-500/20 mb-6" />
    <p className="text-gray-700 mb-6 min-h-[80px]">{testimonial}</p>
    <div className="flex items-center">
      <img
        src={avatar}
        alt={name}
        className="w-12 h-12 rounded-full object-cover mr-4"
        onError={(e) => {
          e.currentTarget.src = 'https://via.placeholder.com/48x48';
        }}
      />
      <div>
        <h4 className="font-semibold text-gray-900">{name}</h4>
        <p className="text-sm text-gray-500">{role}</p>
        <p className="text-sm text-blue-600">{company}</p>
      </div>
    </div>
  </div>
);

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Building Trust Through Exceptional Service
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={32}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard {...testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-800 hover:text-blue-600 transition-colors duration-300 z-10 hidden lg:flex">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-800 hover:text-blue-600 transition-colors duration-300 z-10 hidden lg:flex">
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-300">
            View All Success Stories
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};