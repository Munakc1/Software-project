"use client";
import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Box, IconButton } from '@mui/material';

interface Testimonial {
  name: string;
  role: string;
  organization: string;
  content: string;
  rating: number;
  avatar: string;
}

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = [
    {
      name: "Emily Johnson",
      role: "Patient",
      organization: "Mindful Clinic",
      content: "Very good app. Well thought out about booking/rescheduling/canceling an appointment. Also, Doctor's feedback mechanism is good and describes all the basics in a good way.",
      rating: 5,
      avatar: "EJ"
    },
    {
      name: "Dr. Priya Sharma",
      role: "Senior Cardiologist",
      organization: "Apollo Hospital",
      content: "Very helpful. Far easier than doing same things on computer. Allows quick and easy search with speedy booking. Even maintains history of doctors visited.",
      rating: 5,
      avatar: "PS"
    },
    {
      name: "Rajesh Kumar",
      role: "Patient",
      organization: "Regular User",
      content: "Very easy to book, maintain history. Hassle free from older versions of booking appointment via telephone. Thanks for making it simple.",
      rating: 5,
      avatar: "RK"
    },
    {
      name: "Sunita Patel",
      role: "Patient",
      organization: "Regular User",
      content: "As a diabetes patient, having all my medical records in one place is incredible. I can easily share my history with specialists and track my progress over time.",
      rating: 5,
      avatar: "SP"
    },
    {
      name: "Dr. Kavya Reddy",
      role: "Pediatrician",
      organization: "Rainbow Children's Hospital",
      content: "The vaccination tracking and growth chart features are perfect for pediatric care. Parents love having digital access to their child's complete health record.",
      rating: 5,
      avatar: "KR"
    }
  ];

  // Auto-play functionality (3 seconds)
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section
      className="py-16 w-full bg-white"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">


        {/* Slider Container */}
        <div className="relative w-full">
          {/* Testimonial Card */}
          <div className=" w-full bg-[#F5F9F8] rounded-xl p-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center">
              {/* Quote Icon */}
              <Quote className="h-8 w-8 text-[#2A7F62] mb-6" />

              {/* Content */}
              <p className="text-lg text-[#2D3748] mb-8 leading-relaxed">
                "{testimonials[currentIndex].content}"
              </p>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-[#388E3C] text-[#388E3C]"
                  />
                ))}
              </div>

              {/* Author */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-[#3A5E6D] rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-semibold text-lg">
                    {testimonials[currentIndex].avatar}
                  </span>
                </div>
                <h4 className="font-semibold text-[#2D3748]">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-sm text-[#3A5E6D]">
                  {testimonials[currentIndex].role}
                </p>
                <p className="text-xs text-[#3A5E6D]">
                  {testimonials[currentIndex].organization}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}


          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-[#2A7F62] w-6' : 'bg-[#E2E8F0]'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;