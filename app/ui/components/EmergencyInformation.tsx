import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "../../components/ui/alert";
import { Ambulance, AlertCircle, Hospital, PhoneCall } from "lucide-react";

export function EmergencyInformation() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-[#808000] mb-6 flex items-center gap-2">
        <AlertCircle className="w-6 h-6" />
        Emergency Information
      </h2>

      {/* Emergency Contacts Section */}
      <div className="mb-8">
        <Alert className="bg-[#CDEDDB] border-[#BCB88A] mb-4">
          <AlertTitle className="flex items-center gap-2 text-[#808000]">
            <PhoneCall className="h-4 w-4" />
            Emergency Contact Numbers
          </AlertTitle>
          <AlertDescription className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <div>
              <p className="font-medium">Police</p>
              <p className="text-lg">100</p>
            </div>
            <div>
              <p className="font-medium">Ambulance</p>
              <p className="text-lg">108</p>
            </div>
            <div>
              <p className="font-medium">Fire</p>
              <p className="text-lg">101</p>
            </div>
            <div>
              <p className="font-medium">Poison Control</p>
              <p className="text-lg">+1-800-222-1222</p>
            </div>
          </AlertDescription>
        </Alert>

        <Button className="bg-[#808000] hover:bg-[#6d6d00] text-white">
          <PhoneCall className="mr-2 h-4 w-4" />
          Call Emergency Services
        </Button>
      </div>

      {/* Hospital Locator */}
      <div className="mb-8">
        <Alert className="bg-[#CDEDDB] border-[#BCB88A] mb-4">
          <AlertTitle className="flex items-center gap-2 text-[#808000]">
            <Hospital className="h-4 w-4" />
            Nearby Hospital Locator
          </AlertTitle>
          <AlertDescription className="mt-2">
            <div className="flex gap-2 mb-4">
              <Input 
                className="border-[#BCB88A] focus-visible:ring-[#808000]"
                placeholder="Enter your location"
              />
              <Button className="bg-[#808000] hover:bg-[#6d6d00] text-white">
                Search
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-[#BCB88A] p-3 rounded-lg">
                <p className="font-medium">City General Hospital</p>
                <p className="text-sm">1.2 miles away</p>
                <p className="text-sm">123 Main St, Your City</p>
                <Button variant="link" className="text-[#808000] p-0 h-auto">
                  Get Directions →
                </Button>
              </div>
              <div className="border border-[#BCB88A] p-3 rounded-lg">
                <p className="font-medium">Community Medical Center</p>
                <p className="text-sm">2.5 miles away</p>
                <p className="text-sm">456 Oak Ave, Your City</p>
                <Button variant="link" className="text-[#808000] p-0 h-auto">
                  Get Directions →
                </Button>
              </div>
            </div>
          </AlertDescription>
        </Alert>
      </div>

      {/* First Aid Guides */}
      <div>
        <Alert className="bg-[#CDEDDB] border-[#BCB88A] mb-4">
          <AlertTitle className="flex items-center gap-2 text-[#808000]">
            <Ambulance className="h-4 w-4" />
            First Aid Quick Guides
          </AlertTitle>
          <AlertDescription>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              {[
                { title: "CPR", icon: <Ambulance className="text-[#808000]" /> },
                { title: "Choking", icon: <AlertCircle className="text-[#808000]" /> },
                { title: "Bleeding", icon: <AlertCircle className="text-[#808000]" /> },
                { title: "Burns", icon: <AlertCircle className="text-[#808000]" /> },
                { title: "Fractures", icon: <AlertCircle className="text-[#808000]" /> },
                { title: "Allergic Reactions", icon: <AlertCircle className="text-[#808000]" /> },
              ].map((item) => (
                <Button 
                  key={item.title}
                  variant="outline"
                  className="border-[#BCB88A] flex flex-col items-center justify-center h-24 hover:bg-[#CDEDDB]"
                >
                  <span className="mb-2">{item.icon}</span>
                  {item.title}
                </Button>
              ))}
            </div>
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}