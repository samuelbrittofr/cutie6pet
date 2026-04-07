import { MapPin, Phone, Clock, Star, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import aboutLogo from "@/assets/about-logo.png";

const location = {
  name: "Kacharakanahalli Branch",
  address:
    "Flat No. 1B-1, Iriss North, No.14, 2nd Cross, Kacharakanahalli, Bengaluru 560084",
  phone: "+91 99018 87525",
  email: "cutie6pet@gmail.com",
  hours: "10:00 AM - 8:00 PM (All days)",
  rating: 4.9,
  reviews: 37,
  mapUrl: "https://maps.google.com/?q=Cutie+6+Pet+Kacharakanahalli+Bangalore",
};

const Locations = () => (
  <div className="min-h-screen bg-background">
    <section className="py-16 md:py-20 border-b border-border">
      <div className="container text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Our Location</h1>
          <p className="text-muted-foreground text-base max-w-lg mx-auto">
            Visit our Kacharakanahalli branch in Bangalore.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-16 md:py-20">
      <div className="container max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="bg-card rounded-2xl p-8 md:p-10 border border-border">
            <div className="flex items-start gap-5 mb-6">
              <img
                src={aboutLogo}
                alt="Cutie 6 Pet logo"
                className="w-20 h-20 rounded-xl object-cover shrink-0"
                loading="lazy"
              />
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-foreground">{location.name}</h2>
                <span className="flex items-center gap-1 text-base font-medium text-amber mt-1">
                  <Star className="w-4 h-4 fill-current" />
                  {location.rating} ({location.reviews} reviews)
                </span>
              </div>
            </div>

            <div className="space-y-3 text-base text-muted-foreground mb-8">
              <p className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                {location.address}
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                {location.phone}
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                {location.email}
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                {location.hours}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/book">Book Appointment</Link>
              </Button>
              <Button variant="outline" asChild>
                <a href={location.mapUrl} target="_blank" rel="noopener noreferrer">
                  Get Directions
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  </div>
);

export default Locations;
