"use client";
import {
  HelpCircle,
  UserPlus,
  CalendarCheck,
  FolderKey,
  Video,
  ChevronDown,
  Mail,
  ArrowRight
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';

export function FAQSection() {
  const faqCategories = [
    {
      icon: <UserPlus className="h-5 w-5 text-[#808000]" />,
      title: "Account Setup",
      questions: [
        {
          question: "How do I create an account?",
          answer: "Click 'Sign Up' and provide your basic information. You'll need a valid email and phone number."
        },
        {
          question: "Is there a mobile app?",
          answer: "Yes, our app is available on both iOS and Android platforms."
        }
      ]
    },
    {
      icon: <CalendarCheck className="h-5 w-5 text-[#808000]" />,
      title: "Appointment Booking",
      questions: [
        {
          question: "How do I book an appointment?",
          answer: "Navigate to 'Book Appointment' and select your preferred doctor and time slot."
        },
        {
          question: "Can I reschedule my appointment?",
          answer: "Yes, you can reschedule up to 24 hours before your appointment time."
        }
      ]
    },
    {
      icon: <FolderKey className="h-5 w-5 text-[#808000]" />,
      title: "Record Access",
      questions: [
        {
          question: "How do I access my medical records?",
          answer: "All records are available under 'Medical History' after login."
        },
        {
          question: "Can I share records with another provider?",
          answer: "Yes, use the 'Share Records' feature to authorize access."
        }
      ]
    },
    {
      icon: <Video className="h-5 w-5 text-[#808000]" />,
      title: "Telemedicine",
      questions: [
        {
          question: "How do virtual visits work?",
          answer: "After booking, you'll receive a link to join the video consultation at your appointment time."
        },
        {
          question: "What technology do I need?",
          answer: "You'll need a device with camera, microphone and stable internet connection."
        }
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center bg-[#CDEDDB] rounded-full p-3 mb-4">
            <HelpCircle className="h-8 w-8 text-[#808000]" />
          </div>
          <h2 className="text-3xl font-bold text-[#808000] mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find quick answers to common questions about our services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* FAQ Categories Tabs */}
          <Tabs defaultValue="account-setup">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-[#CDEDDB] p-2 rounded-lg gap-2 mb-8">
              {faqCategories.map((category) => (
                <TabsTrigger 
                  key={category.title}
                  value={category.title.toLowerCase().replace(' ', '-')}
                  className="data-[state=active]:bg-[#808000] data-[state=active]:text-white flex items-center gap-2"
                >
                  {category.icon}
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* FAQ Content */}
            {faqCategories.map((category) => (
              <TabsContent 
                key={category.title} 
                value={category.title.toLowerCase().replace(' ', '-')}
                className="space-y-4"
              >
                <div className="bg-[#CDEDDB] rounded-xl p-6">
                  {category.questions.map((item, index) => (
                    <div 
                      key={index} 
                      className="mb-6 last:mb-0 bg-white p-4 rounded-lg shadow-sm"
                    >
                      <h3 className="font-medium text-[#808000] mb-2">
                        {item.question}
                      </h3>
                      <p className="text-gray-600">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {/* Contact Support */}
          <div className="mt-12 bg-[#CDEDDB] rounded-xl p-8">
            <h3 className="text-2xl font-bold text-[#808000] mb-4 text-center">
              Still have questions?
            </h3>
            <p className="text-gray-700 mb-6 text-center">
              Our support team is ready to help you 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="border-[#BCB88A] focus:ring-[#808000] flex-1"
              />
              <Button className="bg-[#808000] hover:bg-[#6B6D00] text-white">
                Contact Support <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}