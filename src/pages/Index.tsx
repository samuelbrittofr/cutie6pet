import HeroSection from "@/components/home/HeroSection";
import TrustBadges from "@/components/home/TrustBadges";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import PetGallery from "@/components/home/PetGallery";
import StatsSection from "@/components/home/StatsSection";
import HowItWorks from "@/components/home/HowItWorks";
import CTASection from "@/components/home/CTASection";
import ScrollPetRunner from "@/components/home/ScrollPetRunner";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Cutie 6 Pet",
  description: "Professional pet grooming services for dogs and cats in Bangalore",
  url: "https://cutie6pet.com",
  telephone: "+91 81470 46518",
  email: "cutie6pet@gmail.com",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Flat No. 1B-1, Iriss North, 2nd Cross, Kacharakanahalli",
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      postalCode: "560084",
      addressCountry: "IN",
    },
  ],
  openingHours: "Mo-Su 10:00-20:00",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "37",
  },
  priceRange: "₹1,000 - ₹1,800",
};

const Index = () => (
  <>
    <ScrollPetRunner />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
    <HeroSection />
    <TrustBadges />
    <ServicesSection />
    <TestimonialsSection />
    <PetGallery />
    <StatsSection />
    <HowItWorks />
    <CTASection />
  </>
);

export default Index;
