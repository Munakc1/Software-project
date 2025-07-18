"use client";
import { 
  ShieldCheck,
  BadgeCheck,
  Search,
  ChevronRight,
  HelpCircle
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import Image from 'next/image';

const insuranceProviders = [
  { name: "UnitedHealth", logo: "/insurance/unitedhealth.png" },
  { name: "Aetna", logo: "/insurance/aetna.png" },
  { name: "BlueCross", logo: "/insurance/bluecross.png" },
  { name: "Cigna", logo: "/insurance/cigna.png" },
  { name: "Humana", logo: "/insurance/humana.png" },
];

export function InsurancePartners() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center bg-[#CDEDDB] rounded-full p-3 mb-4">
            <ShieldCheck className="h-8 w-8 text-[#808000]" />
          </div>
          <h2 className="text-3xl font-bold text-[#808000] mb-3">
            Insurance Partners
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We work with most major insurance providers to make your healthcare accessible
          </p>
        </div>

        <Tabs defaultValue="providers" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 bg-[#CDEDDB] p-2 rounded-lg">
            <TabsTrigger 
              value="providers" 
              className="data-[state=active]:bg-[#808000] data-[state=active]:text-white"
            >
              <BadgeCheck className="h-4 w-4 mr-2" />
              Accepted Providers
            </TabsTrigger>
            <TabsTrigger 
              value="verification" 
              className="data-[state=active]:bg-[#808000] data-[state=active]:text-white"
            >
              <Search className="h-4 w-4 mr-2" />
              Coverage Verification
            </TabsTrigger>
          </TabsList>

          {/* Providers Tab */}
          <TabsContent value="providers" className="mt-8">
            <div className="bg-[#CDEDDB] rounded-xl p-8">
              <h3 className="text-2xl font-bold text-[#808000] mb-6 text-center">
                Our Accepted Insurance Plans
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {insuranceProviders.map((provider, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-center h-24"
                  >
                    <Image
                      src={provider.logo}
                      alt={provider.name}
                      width={120}
                      height={80}
                      className="object-contain h-full w-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Verification Tab */}
          <TabsContent value="verification" className="mt-8">
            <div className="bg-[#CDEDDB] rounded-xl p-8">
              <h3 className="text-2xl font-bold text-[#808000] mb-6 text-center">
                Verify Your Insurance Coverage
              </h3>
              <div className="max-w-md mx-auto">
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Insurance Provider</label>
                    <Input 
                      type="text" 
                      placeholder="e.g. BlueCross" 
                      className="border-[#BCB88A] focus:ring-[#808000]"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Member ID</label>
                    <Input 
                      type="text" 
                      placeholder="Your insurance ID" 
                      className="border-[#BCB88A] focus:ring-[#808000]"
                    />
                  </div>
                  <Button className="w-full bg-[#808000] hover:bg-[#6B6D00] text-white mt-4">
                    Verify Coverage <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Help Alert */}
        <div className="mt-8 border-l-4 border-[#808000] bg-[#CDEDDB] p-4 rounded-r-lg flex items-start gap-3">
          <HelpCircle className="h-5 w-5 text-[#808000] mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-[#808000]">Need Help?</h4>
            <p className="text-gray-700">
              Our insurance specialists are available to assist you.
              <Button variant="link" className="text-[#808000] hover:text-[#6B6D00] p-0 ml-2 h-auto">
                Contact Support <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}