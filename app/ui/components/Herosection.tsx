"use client";
import React, { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Alert, AlertTitle, AlertDescription } from '../../components/ui/alert';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../components/ui/tabs';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CalendarDays, Stethoscope, ClipboardList, Syringe, Search, Bell } from 'lucide-react';

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [activeTab, setActiveTab] = useState('appointments');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }
  };

  const features = [
    { icon: <Stethoscope className="text-[#808000]" />, text: "Doctor Consultations" },
    { icon: <ClipboardList className="text-[#808000]" />, text: "Medical Records" },
    { icon: <Syringe className="text-[#808000]" />, text: "Vaccine Tracker" },
    { icon: <CalendarDays className="text-[#808000]" />, text: "Appointment Manager" },
  ];

  return (
    <section className="bg-white py-12 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {showAlert && (
          <Alert variant="medical" className="mb-6">
            <Bell className="h-4 w-4" />
            <AlertTitle>Search Initiated</AlertTitle>
            <AlertDescription>
              Searching for "{searchQuery}" in our provider network...
            </AlertDescription>
          </Alert>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Your <span className="text-[#808000]">Personalized</span> Health Portal
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600"
            >
              Secure access to medical records, virtual consultations, and 
              seamless healthcare management in one trusted platform.
            </motion.p>

            {/* Search Doctor Input */}
            <motion.form
              onSubmit={handleSearch}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex gap-2"
            >
              <Input 
                placeholder="Search doctors or specialties..."
                className="border-[#CDEDDB] focus:ring-[#808000] focus:border-[#808000] h-12"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button 
                type="submit"
                variant="primary" 
                className="h-12 px-6 bg-[#808000] hover:bg-[#6d6d00]"
              >
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
            </motion.form>

            {/* Medical Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="bg-[#CDEDDB]">
                <TabsTrigger value="appointments" className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  Appointments
                </TabsTrigger>
                <TabsTrigger value="records" className="flex items-center gap-2">
                  <ClipboardList className="h-4 w-4" />
                  Records
                </TabsTrigger>
              </TabsList>
              <TabsContent value="appointments" className="pt-4">
                <p className="text-gray-600">Manage your upcoming medical visits</p>
              </TabsContent>
              <TabsContent value="records" className="pt-4">
                <p className="text-gray-600">Access your complete medical history</p>
              </TabsContent>
            </Tabs>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 gap-4 pt-6"
            >
              {features.map((feature, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="flex items-center gap-3 justify-start h-auto p-3 hover:bg-[#CDEDDB]"
                >
                  <span className="bg-[#CDEDDB] p-2 rounded-full">
                    {feature.icon}
                  </span>
                  <span className="text-gray-700 font-medium">{feature.text}</span>
                </Button>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Image/Animation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-80 md:h-96 lg:h-[500px]"
          >
            <Image
              src="/images/medical-hero.png"
              alt="Doctor and patient using digital health app"
              fill
              className="object-contain"
              priority
            />
            
            {/* Floating Medical Card */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-10 -left-10 bg-white p-4 rounded-xl shadow-lg border border-[#CDEDDB]"
            >
              <div className="flex items-center gap-3">
                <div className="bg-[#CDEDDB] p-2 rounded-full">
                  <CalendarDays className="text-[#808000] h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">Dr. Smith</p>
                  <p className="text-xs text-gray-500">Today, 2:30 PM</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;