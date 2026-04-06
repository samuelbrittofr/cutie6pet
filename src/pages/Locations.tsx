import { MapPin, Phone, Clock, Star, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const locations = [
  {
    id: "kacharakanahalli",
    name: "Cutie 6 Pet — Kacharakanahalli",
    address: "Flat No. 1B-1, Iriss North, No.14, 2nd Cross, Kacharakanahalli, Bengaluru 560084",
    phone: "079 4741 9026",
    email: "cutie6pet@gmail.com",
    hours: "10:00 AM – 8:00 PM (All days)",
    rating: 4.9,
    reviews: 37,
    mapUrl: "https://maps.google.com/?q=Cutie+6+Pet+Kacharakanahalli+Bangalore",
  },
  {
    id: "kammanahalli",
    name: "Cutie 6 Pet — Kammanahalli",
    address: "Near ABCD Park, Kammanahalli, Bengaluru",
    phone: "079 4741 9026",
    email: "cutie6pet@gmail.com",
    hours: "10:00 AM – 8:00 PM (All days)",
    rating: 4.9,
    reviews: 20,
    mapUrl: "https://maps.google.com/?q=Cutie+6+Pet+Kammanahalli+Bangalore",
  },
];

const Locations = () => (
  <div className="min-h-screen bg-background">
    <section className="bg-gradient-hero py-16 md:py-24">
      <div className="container text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">Our Branches</h1>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto">Visit us at either of our two Bangalore locations for professional pet grooming.</p>
        </motion.div>
      </div>
    </section>

    <section className="py-16">
      <div className="container max-w-3xl space-y-8">
        {locations.map((loc, i) => (
          <motion.div key={loc.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }}>
            <div className="bg-card rounded-xl p-8 shadow-card">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-brand-light flex items-center justify-center text-3xl shrink-0">🐾</div>
                <div>
                  <h2 className="text-xl font-bold">{loc.name}</h2>
                  <span className="flex items-center gap-1 text-sm font-medium text-accent mt-1">
                    <Star className="w-4 h-4 fill-accent" />{loc.rating} ({loc.reviews} reviews)
                  </span>
                </div>
              </div>

              <div className="space-y-3 text-sm text-muted-foreground mb-6">
                <p className="flex items-start gap-2"><MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />{loc.address}</p>
                <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" />{loc.phone}</p>
                <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" />{loc.email}</p>
                <p className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" />{loc.hours}</p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button className="rounded-full" asChild><Link to="/book">Book Appointment</Link></Button>
                <Button variant="outline" className="rounded-full" asChild>
                  <a href={loc.mapUrl} target="_blank" rel="noopener noreferrer">Get Directions</a>
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default Locations;
