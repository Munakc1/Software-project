"use client";
import React, { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Alert, AlertTitle, AlertDescription } from '../../components/ui/alert';
import { Card, CardContent, CardTitle, CardDescription } from '../../components/ui/card';
import { 
  FileText as MedicalRecordsIcon,
  Syringe as VaccinationIcon,
  Pill as PrescriptionsIcon,
  CalendarCheck as AppointmentsIcon,
  Search,
  Bell,
  HelpCircle
} from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

const QuickAccessServices = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }
  };

  const services: ServiceCard[] = [
    {
      title: "Medical Records",
      description: "View & Download Your Medical Reports Instantly",
      icon: <MedicalRecordsIcon className="w-6 h-6" />,
      href: "/medical-records"
    },
    {
      title: "Vaccination",
      description: "Never Miss a Vaccine – Get Automated Reminders",
      icon: <VaccinationIcon className="w-6 h-6" />,
      href: "/vaccination"
    },
    {
      title: "Prescriptions & Lab Reports",
      description: "Manage Prescriptions Without Hassle",
      icon: <PrescriptionsIcon className="w-6 h-6" />,
      href: "/prescriptions"
    },
    {
      title: "Appointments",
      description: "Book Doctor Visits in 2 Clicks",
      icon: <AppointmentsIcon className="w-6 h-6" />,
      href: "/appointments"
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {showAlert && (
          <Alert className="mb-6 bg-[#CDEDDB] border-[#808000] text-[#808000]">
            <Bell className="h-4 w-4" />
            <AlertTitle>Search Initiated</AlertTitle>
            <AlertDescription>
              Searching for "{searchQuery}" in our services...
            </AlertDescription>
          </Alert>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center mb-10 font-bold text-3xl text-[#808000]">
            Quick Access Services
          </h2>
          
          {/* Search bar with animation */}
          <motion.form
            onSubmit={handleSearch}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10 max-w-md mx-auto"
          >
            <div className="flex gap-2">
              <Input 
                placeholder="Search services..." 
                className="border-[#BCB88A] focus:ring-[#808000] h-12"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button 
                type="submit"
                variant="primary" 
                className="h-12 px-6"
              >
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
            </div>
          </motion.form>
        </motion.div>
        
        {/* Services grid with staggered animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-[#BCB88A] bg-[#CDEDDB]">
                <CardContent className="flex flex-col items-center text-center p-6 flex-grow">
                  <div className="mb-4 p-3 bg-[#BCB88A] rounded-full shadow-sm text-[#808000]">
                    {service.icon}
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                  <div className="mt-auto pt-4 w-full">
                    <Button variant="primary" className="w-full">
                      Access Now →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Additional CTA with animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <h3 className="mb-4 text-2xl text-[#808000]">
            Can't find what you're looking for?
          </h3>
          <Button variant="primary" className="gap-2">
            <HelpCircle className="h-4 w-4" />
            Contact Support
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default QuickAccessServices;