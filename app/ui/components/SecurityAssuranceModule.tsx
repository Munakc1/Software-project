"use client";
import { 
  ShieldCheck, 
  Lock, 
  FileText,
  AlertTriangle,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';

export function SecurityAssuranceModule() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center bg-[#CDEDDB] rounded-full p-3 mb-4">
            <ShieldCheck className="h-8 w-8 text-[#808000]" />
          </div>
          <h2 className="text-3xl font-bold text-[#808000] mb-3">
            Security & Privacy Assurance
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your health data is protected with enterprise-grade security measures
          </p>
        </div>

        {/* Security Tabs */}
        <Tabs defaultValue="compliance" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 bg-[#CDEDDB] p-2 rounded-lg">
            <TabsTrigger 
              value="compliance" 
              className="data-[state=active]:bg-[#808000] data-[state=active]:text-white"
            >
              <FileText className="h-4 w-4 mr-2" />
              Compliance
            </TabsTrigger>
            <TabsTrigger 
              value="encryption" 
              className="data-[state=active]:bg-[#808000] data-[state=active]:text-white"
            >
              <Lock className="h-4 w-4 mr-2" />
              Encryption
            </TabsTrigger>
            <TabsTrigger 
              value="privacy" 
              className="data-[state=active]:bg-[#808000] data-[state=active]:text-white"
            >
              <ShieldCheck className="h-4 w-4 mr-2" />
              Privacy
            </TabsTrigger>
          </TabsList>

          {/* Compliance Tab */}
          <TabsContent value="compliance" className="mt-8">
            <div className="bg-[#CDEDDB] rounded-xl p-6">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#808000] mb-4 flex items-center">
                    <CheckCircle2 className="h-6 w-6 mr-2 text-[#808000]" />
                    HIPAA Compliant
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#808000] mr-2">✓</span>
                      Regular third-party audits
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#808000] mr-2">✓</span>
                      Business Associate Agreements
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#808000] mr-2">✓</span>
                      Employee training programs
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="h-40 w-40 bg-gray-100 flex items-center justify-center rounded-md">
                    <span className="text-gray-400">HIPAA Badge</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Encryption Tab */}
          <TabsContent value="encryption" className="mt-8">
            <div className="bg-[#CDEDDB] rounded-xl p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-[#808000] mb-4 flex items-center">
                    <Lock className="h-6 w-6 mr-2 text-[#808000]" />
                    Data Encryption
                  </h3>
                  <p className="text-gray-700 mb-4">
                    All health data is encrypted both in transit and at rest using:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#808000] mr-2">•</span>
                      AES-256 encryption standard
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#808000] mr-2">•</span>
                      TLS 1.3 for all communications
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#808000] mr-2">•</span>
                      Zero-knowledge architecture
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center">
                  <div className="h-32 bg-gray-100 rounded-md flex items-center justify-center mb-4">
                    <span className="text-gray-400">Encryption Visualization</span>
                  </div>
                  <Button className="bg-[#808000] hover:bg-[#6B6D00] text-white">
                    View Security Whitepaper <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Privacy Tab */}
          <TabsContent value="privacy" className="mt-8">
            <div className="bg-[#CDEDDB] rounded-xl p-6">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#808000] p-2 rounded-full">
                    <ShieldCheck className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#808000]">Data Minimization</h4>
                    <p className="text-gray-700">
                      We only collect what's necessary for your care and never sell your data.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#808000] p-2 rounded-full">
                    <AlertTriangle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#808000]">Breach Notification</h4>
                    <p className="text-gray-700">
                      Immediate alerts if any unauthorized access is detected.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md mt-4">
                  <h4 className="font-bold text-[#808000] mb-3">Request Your Data</h4>
                  <div className="flex gap-3">
                    <Input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="border-[#BCB88A] focus:ring-[#808000] flex-1"
                    />
                    <Button className="bg-[#808000] hover:bg-[#6B6D00] text-white">
                      Submit Request
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Alert Banner */}
        <div className="mt-12 border-l-4 border-[#808000] bg-[#CDEDDB] p-4 rounded-r-lg flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 text-[#808000] mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-[#808000]">Security Tip</h4>
            <p className="text-gray-700">
              Always verify you're on our official domain before entering credentials.
              <Button variant="link" className="text-[#808000] hover:text-[#6B6D00] p-0 ml-2 h-auto">
                Learn how to identify phishing <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}