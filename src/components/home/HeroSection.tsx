import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import grooming1 from "@/assets/grooming-1.jpg";
import grooming2 from "@/assets/grooming-2.jpg";
import grooming3 from "@/assets/grooming-3.jpg";
import { useState, useEffect, useCallback } from "react";

const slides = [
  { image: grooming1 },
  { image: grooming2 },
  { image: grooming3 },
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
    <section className="relative min-h-[80vh] flex items-center overflow-hidden -mt-16 pt-16">
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
            className="w-full h-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </motion.div>
      ))}

      <div className="container relative z-10">
        <div className="max-w-xl">
          <p className="text-sm font-medium text-accent tracking-wide uppercase mb-3">
            Bangalore's Favourite Pet Grooming Spot
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-white">
            Professional Pet Grooming
            <br />
            <span className="text-accent">Your Pet Deserves</span>
          </h1>
          <p className="text-base text-white/80 mb-8 leading-relaxed max-w-md">
            Expert grooming for dogs & cats with love and a gentle touch. Two branches in Bangalore.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <Link to="/book">
                <Calendar className="w-4 h-4 mr-2" />
                Book Appointment
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
              <Link to="/pricing">View Prices</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeSlide === i ? "bg-accent w-6" : "bg-white/50 w-2 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
