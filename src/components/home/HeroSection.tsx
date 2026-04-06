import { Link } from "react-router-dom";
import { Scissors, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-dogs.jpg";
import happyDog from "@/assets/happy-dog.jpg";
import heroGrooming from "@/assets/hero-grooming.jpg";
import { useState, useEffect, useCallback } from "react";

const slides = [
  { image: heroImage },
  { image: happyDog },
  { image: heroGrooming },
];

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {slides.map((slide, i) => (
        <motion.div
          key={i}
          animate={{ opacity: activeSlide === i ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0"
          style={{ zIndex: activeSlide === i ? 1 : 0 }}
        >
          <img
            src={slide.image}
            alt="Pet grooming at Cutie 6 Pet"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </motion.div>
      ))}

      <div className="container relative z-10">
        <div className="max-w-2xl">
          <span className="inline-block bg-accent/20 text-accent-foreground backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-accent/40 tracking-wider uppercase">
            🐾 Bangalore's Favourite Pet Grooming Spot
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-[clamp(3rem,8vw,5rem)] font-display leading-[1.1] mb-6 text-white">
            <span className="font-light italic">Where Every Pet's</span>
            <br />
            <span className="text-accent font-bold">Personality Shines</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-xl">
            Expert grooming for dogs & cats with love and a gentle touch. From soothing spa baths to stylish trims — your fur baby deserves the best.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-accent hover:bg-coral-hover text-accent-foreground rounded-full text-base" asChild>
              <Link to="/book">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full text-base border-white/30 text-white hover:bg-white/10" asChild>
              <Link to="/services">
                <Scissors className="w-5 h-5 mr-2" />
                View Services & Prices
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Dot navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-3 rounded-full transition-all duration-300 ${
              activeSlide === i ? "bg-accent w-8" : "bg-white/50 w-3 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
