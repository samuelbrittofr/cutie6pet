import { Link } from "react-router-dom";
import { Calendar, Heart, PawPrint } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroTopPets from "@/assets/hero-top-pets-v3.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden -mt-16 pt-16 bg-[#f3f3f3]">
      <div className="absolute inset-0 z-0 flex items-center justify-center px-4 sm:px-8 md:px-12">
        <img
          src={heroTopPets}
          alt="Cutie 6 Pet hero pets"
          className="h-full w-full max-w-[1400px] object-contain object-center"
          style={{
            WebkitMaskImage:
              "radial-gradient(circle at center, black 58%, transparent 88%), linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 88%, transparent 100%)",
            maskImage:
              "radial-gradient(circle at center, black 58%, transparent 88%), linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 88%, transparent 100%)",
            WebkitMaskComposite: "source-in",
            maskComposite: "intersect",
          }}
        />
        <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#f3f3f3] via-[#f3f3f3]/75 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-[#f3f3f3] via-[#f3f3f3]/75 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#f3f3f3] via-[#f3f3f3]/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#f3f3f3] via-[#f3f3f3]/70 to-transparent" />
        <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-[#ffb84d]/40 blur-3xl" />
        <div className="absolute -right-20 bottom-16 h-72 w-72 rounded-full bg-[#5b2ca0]/25 blur-3xl" />
        <motion.div
          className="pointer-events-none absolute left-6 top-24 hidden md:block text-[#ff9f2f]/70"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <PawPrint size={24} />
          <PawPrint size={18} className="ml-8 mt-3" />
          <PawPrint size={14} className="ml-1 mt-2" />
        </motion.div>
        <motion.div
          className="pointer-events-none absolute right-8 top-28 hidden md:block text-[#ff9f2f]/70"
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <PawPrint size={24} />
          <PawPrint size={18} className="ml-8 mt-3" />
          <PawPrint size={14} className="ml-1 mt-2" />
        </motion.div>
        <motion.div
          className="pointer-events-none absolute left-10 bottom-20 hidden lg:block text-[#ff9f2f]/65"
          animate={{ y: [0, 6, 0], rotate: [0, 4, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <PawPrint size={22} />
          <PawPrint size={16} className="ml-7 mt-3" />
          <PawPrint size={13} className="ml-1 mt-2" />
        </motion.div>
        <motion.div
          className="pointer-events-none absolute left-6 top-[42%] hidden lg:block text-[#ff9f2f]/60"
          animate={{ y: [0, -5, 0], x: [0, 3, 0] }}
          transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <PawPrint size={18} />
          <PawPrint size={14} className="ml-5 mt-2" />
          <PawPrint size={12} className="ml-1 mt-2" />
        </motion.div>
        <motion.div
          className="pointer-events-none absolute right-10 bottom-24 hidden lg:block text-[#ff9f2f]/65"
          animate={{ y: [0, -6, 0], rotate: [0, -4, 0] }}
          transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <PawPrint size={22} />
          <PawPrint size={16} className="ml-7 mt-3" />
          <PawPrint size={13} className="ml-1 mt-2" />
        </motion.div>
        <motion.div
          className="pointer-events-none absolute right-6 top-[44%] hidden lg:block text-[#ff9f2f]/60"
          animate={{ y: [0, 5, 0], x: [0, -3, 0] }}
          transition={{ duration: 6.1, repeat: Infinity, ease: "easeInOut" }}
        >
          <PawPrint size={18} />
          <PawPrint size={14} className="ml-5 mt-2" />
          <PawPrint size={12} className="ml-1 mt-2" />
        </motion.div>
        <motion.div
          className="pointer-events-none absolute left-8 top-[33%] hidden xl:block text-[#ff6b81]/75"
          animate={{ y: [0, -6, 0], scale: [1, 1.06, 1] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Heart size={18} fill="currentColor" />
          <Heart size={13} fill="currentColor" className="ml-6 mt-2" />
          <Heart size={11} fill="currentColor" className="ml-1 mt-2" />
        </motion.div>
        <motion.div
          className="pointer-events-none absolute right-8 top-[34%] hidden xl:block text-[#ff6b81]/75"
          animate={{ y: [0, 6, 0], scale: [1, 1.06, 1] }}
          transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Heart size={18} fill="currentColor" />
          <Heart size={13} fill="currentColor" className="ml-6 mt-2" />
          <Heart size={11} fill="currentColor" className="ml-1 mt-2" />
        </motion.div>
        <motion.div
          className="pointer-events-none absolute left-6 top-[52%] hidden lg:flex flex-col gap-2 text-2xl"
          animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <span role="img" aria-label="dog">
            🐶
          </span>
          <span role="img" aria-label="cat" className="ml-6">
            🐱
          </span>
          <span role="img" aria-label="dog" className="ml-2">
            🐕
          </span>
        </motion.div>
        <motion.div
          className="pointer-events-none absolute right-6 top-[54%] hidden lg:flex flex-col gap-2 text-2xl"
          animate={{ y: [0, 8, 0], rotate: [0, -2, 0] }}
          transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <span role="img" aria-label="cat">
            🐱
          </span>
          <span role="img" aria-label="dog" className="ml-6">
            🐶
          </span>
          <span role="img" aria-label="cat" className="ml-2">
            🐈
          </span>
        </motion.div>
        <motion.div
          className="pointer-events-none absolute left-8 bottom-10 hidden xl:block opacity-70"
          animate={{ y: [0, -4, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="72" height="28" viewBox="0 0 72 28" fill="none">
            <circle cx="10" cy="8" r="7" stroke="#fdf7eb" strokeWidth="3" />
            <circle cx="10" cy="20" r="7" stroke="#fdf7eb" strokeWidth="3" />
            <circle cx="62" cy="8" r="7" stroke="#fdf7eb" strokeWidth="3" />
            <circle cx="62" cy="20" r="7" stroke="#fdf7eb" strokeWidth="3" />
            <rect x="14" y="8" width="44" height="12" rx="6" stroke="#fdf7eb" strokeWidth="3" />
          </svg>
        </motion.div>
        <motion.div
          className="pointer-events-none absolute right-8 bottom-10 hidden xl:block opacity-70"
          animate={{ y: [0, 4, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="72" height="28" viewBox="0 0 72 28" fill="none">
            <circle cx="10" cy="8" r="7" stroke="#fdf7eb" strokeWidth="3" />
            <circle cx="10" cy="20" r="7" stroke="#fdf7eb" strokeWidth="3" />
            <circle cx="62" cy="8" r="7" stroke="#fdf7eb" strokeWidth="3" />
            <circle cx="62" cy="20" r="7" stroke="#fdf7eb" strokeWidth="3" />
            <rect x="14" y="8" width="44" height="12" rx="6" stroke="#fdf7eb" strokeWidth="3" />
          </svg>
        </motion.div>
        <motion.div
          className="pointer-events-none absolute left-[41%] top-[28%] hidden xl:block"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="120" height="90" viewBox="0 0 120 90" fill="none" className="opacity-55">
            <ellipse cx="45" cy="45" rx="34" ry="24" stroke="#6b6b6b" strokeWidth="2" strokeDasharray="7 8" />
            <ellipse cx="76" cy="44" rx="34" ry="24" stroke="#6b6b6b" strokeWidth="2" strokeDasharray="7 8" />
          </svg>
        </motion.div>
        <motion.div
          className="pointer-events-none absolute right-[33%] top-[20%] hidden xl:block"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 7.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="88" height="88" viewBox="0 0 88 88" fill="none" className="opacity-50">
            <circle cx="44" cy="44" r="26" stroke="#6b6b6b" strokeWidth="2" strokeDasharray="6 7" />
          </svg>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/15" />
      </div>

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
            className="text-base text-white/85 mb-8 leading-relaxed max-w-md"
          >
            Expert grooming for dogs and cats with love and a gentle touch. Visit our Kacharakanahalli branch in Bangalore.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Button size="lg" className="h-16 px-10 text-lg bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <Link to="/book">
                <Calendar className="w-4 h-4 mr-2" />
                Book Appointment
              </Link>
            </Button>

            <Button size="lg" variant="outline" className="h-16 px-10 text-lg border-white/30 text-white bg-white/10 hover:bg-white/20" asChild>
              <Link to="/pricing">View Prices</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
