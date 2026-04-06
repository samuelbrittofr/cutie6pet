import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, PawPrint } from "lucide-react";
import { motion } from "framer-motion";
import happyDog from "@/assets/happy-dog.jpg";

const WHATSAPP_URL = "https://wa.me/917947419026?text=Hi%20Cutie%206%20Pet!%20I%27d%20like%20to%20book%20a%20grooming%20appointment%20for%20my%20pet.";

const CTASection = () => (
  <section className="relative overflow-hidden py-24">
    <div className="absolute inset-0 bg-gradient-to-br from-brand-deep via-primary to-brand-deep" />
    <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />
    <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-accent/10 blur-3xl" />

    <div className="container relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Ready to Pamper
            <br />
            <span className="text-accent">Your Fur Baby?</span>
          </h2>
          <p className="text-white/80 text-lg mb-8 leading-relaxed">
            Book a grooming appointment today and let your pet shine! We're just a click or call away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-accent hover:bg-coral-hover text-accent-foreground rounded-full text-base" asChild>
              <Link to="/book">
                Book Appointment <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full text-base border-white/30 text-white hover:bg-white/10" asChild>
              <a href="tel:07947419026">
                <Phone className="w-5 h-5 mr-2" /> Call Us
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="flex justify-center relative">
          <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
            <img src={happyDog} alt="Happy pet after grooming" className="w-full h-full object-cover" />
          </div>
          <motion.div animate={{ y: [-5, 5, -5] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }} className="absolute top-4 -left-4">
            <PawPrint className="w-8 h-8 text-accent/60" />
          </motion.div>
          <motion.div animate={{ y: [5, -5, 5] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="absolute bottom-8 -right-4">
            <PawPrint className="w-10 h-10 text-accent/40" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default CTASection;
