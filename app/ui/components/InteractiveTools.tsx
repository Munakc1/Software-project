import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "../../components/ui/alert";
import { 
  Stethoscope, 
  Calculator, 
  AlarmClock, 
  Syringe,
  ChevronDown,
  Search
} from "lucide-react";

export function InteractiveTools() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-[#808000] mb-6 flex items-center gap-2">
        <Stethoscope className="w-6 h-6" />
        Interactive Tools
      </h2>

      {/* Symptom Checker */}
      <div className="mb-8">
        <Alert className="bg-[#CDEDDB] border-[#BCB88A] mb-4">
          <AlertTitle className="flex items-center gap-2 text-[#808000]">
            <Stethoscope className="h-4 w-4" />
            Symptom Checker
          </AlertTitle>
          <AlertDescription className="mt-4">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-3 h-4 w-4 text-[#808000]" />
              <Input
                placeholder="Enter your symptoms..."
                className="pl-10 border-[#BCB88A] focus-visible:ring-[#808000]"
              />
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {['Fever', 'Headache', 'Cough', 'Fatigue', 'Nausea', 'Dizziness'].map(symptom => (
                <Button 
                  key={symptom}
                  variant="outline"
                  className="border-[#BCB88A] text-foreground hover:bg-[#CDEDDB]"
                >
                  {symptom}
                </Button>
              ))}
            </div>
            <Button className="bg-[#808000] hover:bg-[#6d6d00] text-white">
              Analyze Symptoms
            </Button>
          </AlertDescription>
        </Alert>
      </div>

      {/* BMI Calculator */}
      <div className="mb-8">
        <Alert className="bg-[#CDEDDB] border-[#BCB88A] mb-4">
          <AlertTitle className="flex items-center gap-2 text-[#808000]">
            <Calculator className="h-4 w-4" />
            BMI Calculator
          </AlertTitle>
          <AlertDescription className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-1">Height (cm)</label>
                <Input 
                  type="number" 
                  className="border-[#BCB88A] focus-visible:ring-[#808000]"
                  placeholder="170"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Weight (kg)</label>
                <Input 
                  type="number" 
                  className="border-[#BCB88A] focus-visible:ring-[#808000]"
                  placeholder="68"
                />
              </div>
            </div>
            <div className="bg-[#BCB88A] bg-opacity-20 p-3 rounded-lg mb-4">
              <p className="font-medium">Your BMI: <span className="text-[#808000]">--</span></p>
              <p className="text-sm">Category: <span className="text-[#808000]">Enter values to calculate</span></p>
            </div>
            <Button className="bg-[#808000] hover:bg-[#6d6d00] text-white">
              Calculate BMI
            </Button>
          </AlertDescription>
        </Alert>
      </div>

      {/* Medication Reminder */}
      <div className="mb-8">
        <Alert className="bg-[#CDEDDB] border-[#BCB88A] mb-4">
          <AlertTitle className="flex items-center gap-2 text-[#808000]">
            <AlarmClock className="h-4 w-4" />
            Medication Reminder
          </AlertTitle>
          <AlertDescription className="mt-4">
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Medication Name</label>
              <Input 
                className="border-[#BCB88A] focus-visible:ring-[#808000] mb-3"
                placeholder="e.g., Ibuprofen"
              />
              <label className="block text-sm font-medium mb-1">Dosage</label>
              <Input 
                className="border-[#BCB88A] focus-visible:ring-[#808000] mb-3"
                placeholder="e.g., 200mg"
              />
              <label className="block text-sm font-medium mb-1">Frequency</label>
              <div className="relative">
                <select className="flex h-10 w-full rounded-md border border-[#BCB88A] bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#808000]">
                  <option>Once daily</option>
                  <option>Twice daily</option>
                  <option>Three times daily</option>
                  <option>As needed</option>
                </select>
                <ChevronDown className="absolute right-3 top-3 h-4 w-4 opacity-50" />
              </div>
            </div>
            <Button className="bg-[#808000] hover:bg-[#6d6d00] text-white w-full">
              Set Reminder
            </Button>
          </AlertDescription>
        </Alert>
      </div>

      {/* Vaccination Scheduler */}
      <div>
        <Alert className="bg-[#CDEDDB] border-[#BCB88A] mb-4">
          <AlertTitle className="flex items-center gap-2 text-[#808000]">
            <Syringe className="h-4 w-4" />
            Vaccination Scheduler
          </AlertTitle>
          <AlertDescription className="mt-4">
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Vaccine Type</label>
              <div className="relative mb-3">
                <select className="flex h-10 w-full rounded-md border border-[#BCB88A] bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#808000]">
                  <option>Flu Vaccine</option>
                  <option>COVID-19 Booster</option>
                  <option>Tetanus</option>
                  <option>HPV</option>
                  <option>Travel Vaccines</option>
                </select>
                <ChevronDown className="absolute right-3 top-3 h-4 w-4 opacity-50" />
              </div>
              <label className="block text-sm font-medium mb-1">Preferred Date</label>
              <Input 
                type="date"
                className="border-[#BCB88A] focus-visible:ring-[#808000] mb-3"
              />
              <label className="block text-sm font-medium mb-1">Location Preference</label>
              <Input 
                className="border-[#BCB88A] focus-visible:ring-[#808000]"
                placeholder="Nearby clinic or pharmacy"
              />
            </div>
            <Button className="bg-[#808000] hover:bg-[#6d6d00] text-white w-full">
              Schedule Vaccination
            </Button>
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}