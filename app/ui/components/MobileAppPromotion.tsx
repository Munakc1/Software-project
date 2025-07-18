"use client";
import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, Tabs, Tab } from '@mui/material';
import { 
  Smartphone,
  Download,
  Apple,
  Play,
  ShieldCheck,
  Clock,
  Bell,
  HeartPulse,
  AlertCircle
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';

const MobileAppPromotion = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [email, setEmail] = useState('');

  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#808000]" />,
      title: "Secure Health Data",
      description: "End-to-end encryption for all your medical records"
    },
    {
      icon: <Clock className="w-8 h-8 text-[#808000]" />,
      title: "Instant Access",
      description: "View test results and prescriptions anytime, anywhere"
    },
    {
      icon: <Bell className="w-8 h-8 text-[#808000]" />,
      title: "Smart Reminders",
      description: "Never miss a medication or appointment again"
    },
    {
      icon: <HeartPulse className="w-8 h-8 text-[#808000]" />,
      title: "Health Tracking",
      description: "Monitor your vitals and health trends over time"
    }
  ];

  const healthAlerts = [
    {
      title: "Flu Season Alert",
      content: "Get your flu vaccine now - cases are rising in your area",
      severity: "high"
    },
    {
      title: "Medication Refill",
      content: "Your prescription for Metformin is due for refill in 3 days",
      severity: "medium"
    },
    {
      title: "Preventive Care",
      content: "Schedule your annual physical exam - covered by your insurance",
      severity: "low"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Typography variant="h3" component="h2" className="font-bold text-[#808000] mb-4 flex justify-center items-center">
            <Smartphone className="w-8 h-8 mr-3" /> Our Mobile App
          </Typography>
          <Typography variant="body1" className="text-gray-600 max-w-2xl mx-auto">
            Take your healthcare with you. Download our app for seamless access to all services.
          </Typography>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Mobile Screenshots */}
          <div className="flex-1 relative">
            <div className="bg-[#CDEDDB] rounded-3xl p-6 shadow-lg w-fit mx-auto">
              <div className="bg-black rounded-2xl overflow-hidden border-8 border-black relative">
                {/* Mock phone screen - replace with actual screenshots */}
                <div className="h-96 w-48 bg-gradient-to-b from-[#808000] to-[#BCB88A] flex items-center justify-center">
                  <Smartphone className="w-16 h-16 text-white" />
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* App Features */}
          <div className="flex-1">
            <div className="mb-8">
              <Typography variant="h5" component="h3" className="font-semibold text-[#808000] mb-4">
                Key Features
              </Typography>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <Card key={index} className="border border-[#BCB88A] bg-white hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-[#CDEDDB] p-2 rounded-full">
                          {feature.icon}
                        </div>
                        <div>
                          <Typography variant="h6" className="font-medium text-[#808000]">
                            {feature.title}
                          </Typography>
                          <Typography variant="body2" className="text-gray-600">
                            {feature.description}
                          </Typography>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Download Buttons */}
            <div className="mb-8">
              <Typography variant="h5" component="h3" className="font-semibold text-[#808000] mb-4">
                Download Now
              </Typography>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-black hover:bg-gray-800 text-white h-14">
                  <div className="flex items-center gap-2">
                    <Play className="w-6 h-6" />
                    <div className="text-left">
                      <div className="text-xs">GET IT ON</div>
                      <div className="text-lg">Google Play</div>
                    </div>
                  </div>
                </Button>
                <Button className="bg-black hover:bg-gray-800 text-white h-14">
                  <div className="flex items-center gap-2">
                    <Apple className="w-6 h-6" />
                    <div className="text-left">
                      <div className="text-xs">Download on the</div>
                      <div className="text-lg">App Store</div>
                    </div>
                  </div>
                </Button>
              </div>
            </div>

            {/* Email Signup */}
            <div>
              <Typography variant="h5" component="h3" className="font-semibold text-[#808000] mb-4">
                Get App Link via Email
              </Typography>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-[#BCB88A] focus:ring-[#808000] flex-1"
                />
                <Button className="bg-[#808000] hover:bg-[#6B6D00] text-white">
                  <Download className="w-5 h-5 mr-2" />
                  Send Link
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Health Alert Tabs */}
        <div className="mt-16 bg-[#CDEDDB] rounded-xl p-6">
          <Typography variant="h4" component="h3" className="font-bold text-[#808000] mb-6 flex items-center">
            <AlertCircle className="w-8 h-8 mr-3" /> Health Alerts
          </Typography>
          
          <Tabs 
            value={activeTab} 
            onChange={(e, newValue) => setActiveTab(newValue)}
            indicatorColor="primary"
            textColor="primary"
            className="mb-6"
          >
            <Tab label="All Alerts" className="text-[#808000]" />
            <Tab label="Medication" className="text-[#808000]" />
            <Tab label="Appointments" className="text-[#808000]" />
            <Tab label="Preventive Care" className="text-[#808000]" />
          </Tabs>
          
          <div className="space-y-4">
            {healthAlerts.map((alert, index) => (
              <Card key={index} className={`border-l-4 ${
                alert.severity === 'high' ? 'border-red-500' : 
                alert.severity === 'medium' ? 'border-amber-500' : 'border-[#808000]'
              }`}>
                <CardContent className="p-4">
                  <Typography variant="h6" className="font-medium">
                    {alert.title}
                  </Typography>
                  <Typography variant="body2" className="text-gray-600">
                    {alert.content}
                  </Typography>
                  <Button variant="outline" className="mt-3 border-[#808000] text-[#808000] hover:bg-[#808000] hover:text-white text-sm h-8">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppPromotion;