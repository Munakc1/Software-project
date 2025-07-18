"use client";
import React, { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/card';
import { 
  Star, 
  StarHalf, 
  PlayCircle,
  MessageSquareQuote,
  UserCheck,
  Video
} from 'lucide-react';
import { motion } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  rating: number;
  content: string;
  photo: string;
  videoUrl?: string;
}

const PatientTestimonials = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'videos'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Diabetes Patient",
      rating: 5,
      content: "This portal transformed my healthcare experience. Managing my diabetes has never been easier with the automatic prescription refills and doctor messaging.",
      photo: "/images/patient1.jpg",
      videoUrl: "https://example.com/video1"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Cardiac Care",
      rating: 4.5,
      content: "The vaccination reminders saved me from missing my flu shot. The interface is so intuitive even for someone not tech-savvy like me.",
      photo: "/images/patient2.jpg"
    },
    {
      id: 3,
      name: "Priya Patel",
      role: "Pediatric Care",
      rating: 5,
      content: "As a mother of two, having all my children's medical records in one place with 24/7 access gives me peace of mind.",
      photo: "/images/patient3.jpg",
      videoUrl: "https://example.com/video2"
    },
  ];

  const filteredTestimonials = testimonials.filter(testimonial => 
    testimonial.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    testimonial.content.toLowerCase().includes(searchQuery.toLowerCase())
  ).filter(testimonial => 
    activeTab === 'all' || (activeTab === 'videos' && testimonial.videoUrl)
  );

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="w-4 h-4 fill-primary text-primary" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="w-4 h-4 fill-primary text-primary" />);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-primary" />);
    }
    
    return stars;
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-primary mb-4 flex justify-center items-center gap-2">
            <MessageSquareQuote className="w-8 h-8" />
            Patient Experiences
          </h2>
          <p className="text-lg text-text max-w-3xl mx-auto">
            Hear from our community of patients about their healthcare journeys
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="flex space-x-2">
            <Button 
              variant={activeTab === 'all' ? 'primary' : 'outline'}
              onClick={() => setActiveTab('all')}
              className="flex items-center gap-1"
            >
              <UserCheck className="w-4 h-4" />
              All Testimonials
            </Button>
            <Button 
              variant={activeTab === 'videos' ? 'primary' : 'outline'}
              onClick={() => setActiveTab('videos')}
              className="flex items-center gap-1"
            >
              <Video className="w-4 h-4" />
              Video Stories
            </Button>
          </div>
          
          <div className="w-full md:w-64">
            <Input
              placeholder="Search testimonials..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border-secondary focus:ring-primary"
            />
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-secondary bg-white">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img 
                        src={testimonial.photo} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                      />
                      {testimonial.videoUrl && (
                        <div className="absolute -bottom-1 -right-1 bg-accent rounded-full p-1">
                          <PlayCircle className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                    <div>
                      <CardTitle className="text-lg text-text">{testimonial.name}</CardTitle>
                      <CardDescription className="text-primary">
                        {testimonial.role}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex mt-2">
                    {renderStars(testimonial.rating)}
                    <span className="ml-2 text-sm text-text">
                      {testimonial.rating.toFixed(1)}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-text mb-4">"{testimonial.content}"</p>
                  {testimonial.videoUrl && (
                    <Button 
                      variant="outline" 
                      className="border-primary text-primary hover:bg-secondary/20 w-full"
                    >
                      <PlayCircle className="mr-2 w-4 h-4" />
                      Watch Story
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl text-primary mb-4">
            Ready to share your experience?
          </h3>
          <div className="flex justify-center gap-4">
            <Button variant="primary" className="gap-2">
              <MessageSquareQuote className="w-5 h-5" />
              Write a Review
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-secondary/20 gap-2">
              <Video className="w-5 h-5" />
              Record Video
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PatientTestimonials;