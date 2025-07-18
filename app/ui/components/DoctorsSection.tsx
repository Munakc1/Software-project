"use client";
import React, { useState } from 'react';
import { Card, CardContent } from '@mui/material';
import { 
  Stethoscope, 
  BadgeCheck, 
  CalendarPlus,
  Star,
  ArrowRight,
  Search,
  Filter,
  MapPin,
  Phone,
  MessageSquare,
  Video,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { motion } from 'framer-motion';

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    credentials: "MD, FACC",
    experience: "12 years",
    rating: 4.9,
    image: "/doctors/dr-sarah.jpg",
    available: "Mon, Wed, Fri",
    languages: ["English", "Spanish"],
    telehealth: true,
    location: "Main Hospital"
  },
  // ... other doctors
];

const specialties = [
  "Cardiology",
  "Neurology",
  "Pediatrics",
  "Orthopedics",
  "Dermatology",
  "General Practice"
];

const DoctorsSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);
  const [showTelehealthOnly, setShowTelehealthOnly] = useState(false);

  const toggleSpecialty = (specialty: string) => {
    setSelectedSpecialties(prev => 
      prev.includes(specialty) 
        ? prev.filter(s => s !== specialty) 
        : [...prev, specialty]
    );
  };

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpecialty = selectedSpecialties.length === 0 || 
                           selectedSpecialties.includes(doctor.specialty);
    const matchesTelehealth = !showTelehealthOnly || doctor.telehealth;
    return matchesSearch && matchesSpecialty && matchesTelehealth;
  });

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-primary mb-4">
            Our Medical Professionals
          </h2>
          <p className="text-lg text-text max-w-2xl mx-auto">
            Meet our team of highly qualified healthcare providers dedicated to your well-being.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="mb-10 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Input 
                type="text" 
                placeholder="Search doctors by name or specialty..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border-secondary focus:ring-primary pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary" />
            </div>
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-secondary/20"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="w-5 h-5 mr-2" />
              Filters
              {showFilters ? <ChevronUp className="ml-2 w-4 h-4" /> : <ChevronDown className="ml-2 w-4 h-4" />}
            </Button>
          </div>

          {/* Expanded Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
              className="bg-white p-4 rounded-lg shadow-sm border border-secondary"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-primary mb-3">Specialties</h4>
                  <div className="flex flex-wrap gap-2">
                    {specialties.map(specialty => (
                      <Button
                        key={specialty}
                        variant={selectedSpecialties.includes(specialty) ? 'primary' : 'outline'}
                        size="sm"
                        onClick={() => toggleSpecialty(specialty)}
                        className="text-sm"
                      >
                        {specialty}
                      </Button>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-primary mb-3">Availability</h4>
                  <Button
                    variant={showTelehealthOnly ? 'primary' : 'outline'}
                    size="sm"
                    onClick={() => setShowTelehealthOnly(!showTelehealthOnly)}
                    className="flex items-center gap-2"
                  >
                    <Video className="w-4 h-4" />
                    Telehealth Only
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Doctors Grid */}
        {filteredDoctors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredDoctors.map((doctor, index) => (
              <motion.div
                key={doctor.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 h-full flex flex-col border border-secondary">
                  <div className="relative">
                    <div className="h-48 bg-secondary/10 flex items-center justify-center overflow-hidden">
                      <img 
                        src={doctor.image} 
                        alt={doctor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute top-4 right-4 bg-primary text-white px-2 py-1 rounded-full flex items-center text-sm">
                      <Star className="w-4 h-4 mr-1 fill-current" />
                      {doctor.rating}
                    </div>
                    {doctor.telehealth && (
                      <div className="absolute top-4 left-4 bg-accent text-white px-2 py-1 rounded-full flex items-center text-sm">
                        <Video className="w-4 h-4 mr-1" />
                        Telehealth
                      </div>
                    )}
                  </div>
                  
                  <CardContent className="flex-grow p-6">
                    <h3 className="font-bold text-primary text-xl mb-2">
                      {doctor.name}
                    </h3>
                    
                    <div className="flex items-center mb-2 text-primary">
                      <BadgeCheck className="w-5 h-5 mr-2" />
                      <span className="font-medium">{doctor.specialty}</span>
                    </div>
                    
                    <div className="space-y-2 mb-4 text-sm text-text">
                      <p><strong>Credentials:</strong> {doctor.credentials}</p>
                      <p><strong>Experience:</strong> {doctor.experience}</p>
                      <p className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-primary" />
                        {doctor.location}
                      </p>
                      <p><strong>Available:</strong> {doctor.available}</p>
                      <p><strong>Languages:</strong> {doctor.languages.join(', ')}</p>
                    </div>
                    
                    <div className="flex flex-col space-y-2 mt-4">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                        <CalendarPlus className="w-5 h-5 mr-2" />
                        Book Appointment
                      </Button>
                      <div className="grid grid-cols-2 gap-2">
                        <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-secondary/20">
                          <Phone className="w-4 h-4 mr-2" />
                          Call
                        </Button>
                        <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-secondary/20">
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Message
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-primary mb-2">
              No doctors found matching your criteria
            </h3>
            <p className="text-text mb-4">
              Try adjusting your filters or search terms
            </p>
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-secondary/20"
              onClick={() => {
                setSearchQuery('');
                setSelectedSpecialties([]);
                setShowTelehealthOnly(false);
              }}
            >
              Clear all filters
            </Button>
          </div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-secondary/10 rounded-lg p-8 text-center border border-secondary"
        >
          <h3 className="text-2xl font-bold text-primary mb-4">
            Can't find your preferred doctor?
          </h3>
          <p className="text-text mb-6 max-w-2xl mx-auto">
            Our team can help match you with the right specialist for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Request Doctor Match
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-secondary/20">
              Contact Support <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DoctorsSection;