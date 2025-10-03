import { ModernHeroSection } from "@/components/ModernHeroSection";
import { ModernAboutSection } from "@/components/ModernAboutSection";
import { ModernServicesSection } from "@/components/ModernServicesSection";
import { BookingSection } from "@/components/BookingSection";
import { ContactSection } from "@/components/ContactSection";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <ModernHeroSection />
      <ModernAboutSection />
      <ModernServicesSection />
      <BookingSection />
      <ContactSection />
    </div>
  );
}