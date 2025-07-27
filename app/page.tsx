import HeroSection from './ui/components/Herosection';

import PatientTestimonials from './ui/components/PatientTestimonials';

import MobileAppPromotion from './ui/components/MobileAppPromotion';




export default function Home() {
  return (
    <main>
      <HeroSection />
      <PatientTestimonials />
      <MobileAppPromotion />
    


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Add your page content here */}
      </div>
    </main>
  );
}
