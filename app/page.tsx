import HeroSection from './ui/components/Herosection';
import QuickService from './ui/components/QuickService';
import PatientTestimonials from './ui/components/PatientTestimonials';
import DoctorsSection from './ui/components/DoctorsSection';
import MobileAppPromotion from './ui/components/MobileAppPromotion';
import { SecurityAssuranceModule } from './ui/components/SecurityAssuranceModule';
import { HealthTipsSection } from './ui/components/HealthTipsSection';
import { InsurancePartners } from './ui/components/InsurancePartners';
import { EmergencyInformation } from './ui/components/EmergencyInformation';
import { InteractiveTools } from './ui/components/InteractiveTools';
import {FAQSection} from './ui/components/FAQSection';  
import {NewsletterSignup} from './ui/components/NewsletterSignup';  

export default function Home() {
  return (
    <main>
      <HeroSection />
      <QuickService />
      <PatientTestimonials />
      <DoctorsSection />
      <MobileAppPromotion />
      <SecurityAssuranceModule />
      <HealthTipsSection />
      <InsurancePartners />
      <EmergencyInformation />
      <InteractiveTools />
      <FAQSection />
      <NewsletterSignup />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
       
        {/* Add your page content here */}
      </div>
    </main>
  );
}