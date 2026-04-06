import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import heroImage from "@/assets/hero-dogs.jpg";
import happyDog from "@/assets/happy-dog.jpg";
import heroGrooming from "@/assets/hero-grooming.jpg";

const slides = [
  {
    image: heroImage,
    description: "Premium pet care at 285+ locations nationwide. Daycare, boarding, grooming, and training — all under one woof.",
  },
  { image: happyDog },
  { image: heroGrooming },
];

const HeroSection = () => {
  const [zipCode, setZipCode] = useState("");
  const [activeSlide, setActiveSlide] = useState(0);
  const navigate = useNavigate();

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const handleSearch = () => {
    navigate(zipCode ? `/locations?zip=${encodeURIComponent(zipCode)}` : "/locations");
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background slides - layered for true crossfade */}
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
            alt="Happy dogs at TailWaggers"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </motion.div>
      ))}

      {/* Content - static, not tied to slide transitions */}
      <div className="container relative z-10">
        <div className="max-w-2xl">
          <span className="inline-block bg-accent/20 text-accent-foreground backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-accent/40 tracking-wider uppercase">
            🐾 Premium Pet Care Since 2015
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-[clamp(3rem,8vw,5rem)] font-display leading-[1.1] mb-6 text-white">
            <span className="font-light italic">Where Every Tail</span>
            <br />
            <span className="text-accent font-bold">Wags Happy</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-xl">
            Premium pet care at 285+ locations nationwide. Daycare, boarding, grooming, and training — all under one woof.
          </p>

          {/* Glassmorphism search bar */}
          <div className="flex flex-col sm:flex-row max-w-md rounded-lg border border-white/20 bg-white/10 backdrop-blur-md p-2">
            <div className="relative flex-1 flex items-center gap-2 px-4">
              <MapPin className="w-5 h-5 text-white/60 shrink-0" />
              <input
                type="text"
                placeholder="Enter zip code or city"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                className="w-full bg-transparent text-white outline-none placeholder:text-white/50 py-3 sm:py-2 text-base"
              />
            </div>
            <Button
              className="bg-accent hover:bg-coral-hover text-accent-foreground rounded-md px-6 mt-2 sm:mt-0"
              onClick={handleSearch}
            >
              <Search className="w-4 h-4 mr-2" />
              Find Location
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
