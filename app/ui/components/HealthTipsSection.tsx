"use client";
import { 
  Newspaper,
  CalendarCheck,
  ShieldPlus,
  ChevronRight,
  ArrowRight,
   AlertTriangle
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';

export function HealthTipsSection() {
  const healthTips = [
    {
      category: "Preventive Care",
      icon: <ShieldPlus className="h-5 w-5 text-[#808000]" />,
      title: "Annual Health Checkups",
      content: "Schedule your yearly comprehensive health screening to detect potential issues early.",
      action: "Book Now"
    },
    {
      category: "Seasonal",
      icon: <CalendarCheck className="h-5 w-5 text-[#808000]" />,
      title: "Monsoon Health Advisory",
      content: "Protect yourself from waterborne diseases this rainy season with these precautions.",
      action: "View Tips"
    },
    {
      category: "Articles",
      icon: <Newspaper className="h-5 w-5 text-[#808000]" />,
      title: "Managing Stress Effectively",
      content: "Learn 5 evidence-based techniques to reduce daily stress and improve mental health.",
      action: "Read More"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center bg-[#CDEDDB] rounded-full p-3 mb-4">
            <Newspaper className="h-8 w-8 text-[#808000]" />
          </div>
          <h2 className="text-3xl font-bold text-[#808000] mb-3">
            Health Tips & News
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay informed with the latest health recommendations and seasonal advisories
          </p>
        </div>

        {/* Tabs Navigation */}
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="bg-[#CDEDDB] p-2 rounded-lg">
            <TabsTrigger 
              value="all" 
              className="data-[state=active]:bg-[#808000] data-[state=active]:text-white"
            >
              All Topics
            </TabsTrigger>
            <TabsTrigger 
              value="preventive" 
              className="data-[state=active]:bg-[#808000] data-[state=active]:text-white"
            >
              Preventive Care
            </TabsTrigger>
            <TabsTrigger 
              value="seasonal" 
              className="data-[state=active]:bg-[#808000] data-[state=active]:text-white"
            >
              Seasonal
            </TabsTrigger>
            <TabsTrigger 
              value="articles" 
              className="data-[state=active]:bg-[#808000] data-[state=active]:text-white"
            >
              Articles
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Health Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {healthTips.map((tip, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow border border-[#BCB88A]">
              <CardHeader className="flex flex-row items-center space-y-0 space-x-3 pb-2">
                <div className="bg-[#CDEDDB] p-2 rounded-full">
                  {tip.icon}
                </div>
                <CardTitle className="text-lg text-[#808000]">
                  {tip.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{tip.content}</p>
                <Button 
                  variant="outline" 
                  className="border-[#808000] text-[#808000] hover:bg-[#808000] hover:text-white"
                >
                  {tip.action} <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-[#CDEDDB] rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-[#808000] mb-3">
            Get Health Tips Directly
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Subscribe to our monthly newsletter for curated health advice and seasonal reminders
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Your email address" 
              className="border-[#BCB88A] focus:ring-[#808000] flex-1"
            />
            <Button className="bg-[#808000] hover:bg-[#6B6D00] text-white">
              Subscribe <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>

        {/* Emergency Alert (Optional) */}
        <div className="mt-8 border-l-4 border-[#808000] bg-[#CDEDDB] p-4 rounded-r-lg flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 text-[#808000] mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-[#808000]">Flu Season Alert</h4>
            <p className="text-gray-700">
              Get your flu vaccine now - cases are rising in your area.
              <Button variant="link" className="text-[#808000] hover:text-[#6B6D00] p-0 ml-2 h-auto">
                Find vaccination centers <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}