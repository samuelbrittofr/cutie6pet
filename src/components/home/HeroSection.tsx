import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import grooming1 from "@/assets/grooming-1.jpg";
import grooming2 from "@/assets/grooming-2.jpg";
import grooming3 from "@/assets/grooming-3.jpg";
import petDog from "@/assets/pet-dog-grooming.jpg";
import petCat from "@/assets/pet-cat-grooming.jpg";
import { useState, useEffect, useCallback } from "react";

const slides = [{ image: grooming1 }, { image: petDog }, { image: grooming2 }, { image: petCat }, { image: grooming3 }];

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden -mt-16 pt-16">
      <AnimatePresence initial={false}>
        {slides.map((slide, index) =>
          activeSlide === index ? (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0"
              style={{ zIndex: 1 }}
            >
              <img
                src={slide.image}
                alt="Pet grooming at Cutie 6 Pet"
                className="w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
            </motion.div>
          ) : null,
        )}
      </AnimatePresence>

      <div className="container relative z-10">
        <div className="max-w-xl">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm font-medium text-accent tracking-wide uppercase mb-3"
          >
            Bangalore&apos;s Favourite Pet Grooming Spot
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-white"
          >
            Professional Pet Grooming
            <br />
            <span className="text-accent">Your Pet Deserves</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-base text-white/80 mb-8 leading-relaxed max-w-md"
          >
            Expert grooming for dogs and cats with love and a gentle touch. Visit our Kacharakanahalli branch in Bangalore.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <Link to="/book">
                <Calendar className="w-4 h-4 mr-2" />
                Book Appointment
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white bg-white/10 hover:bg-white/20" asChild>
              <Link to="/pricing">View Prices</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeSlide === index ? "bg-accent w-6" : "bg-white/50 w-2 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
