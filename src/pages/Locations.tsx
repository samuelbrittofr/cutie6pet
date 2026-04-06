import { MapPin, Phone, Clock, Star, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import shopExterior from "@/assets/shop-exterior.jpg";

const locations = [
  {
    id: "kacharakanahalli",
    name: "Kacharakanahalli Branch",
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
    name: "Kammanahalli Branch",
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
    <section className="py-12 border-b border-border">
      <div className="container text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Our Branches</h1>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">Visit us at either of our two Bangalore locations.</p>
        </motion.div>
      </div>
    </section>

    <section className="py-12">
      <div className="container max-w-3xl space-y-6">
        {locations.map((loc, i) => (
          <motion.div key={loc.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
            <div className="bg-card rounded-xl p-6 md:p-8 border border-border">
              <div className="flex items-start gap-4 mb-5">
                <img src={shopExterior} alt={`Cutie 6 Pet ${loc.name}`} className="w-16 h-16 rounded-lg object-cover shrink-0" loading="lazy" />
                <div>
                  <h2 className="text-lg font-bold text-foreground">{loc.name}</h2>
                  <span className="flex items-center gap-1 text-sm font-medium text-amber mt-0.5">
                    <Star className="w-3.5 h-3.5 fill-current" />{loc.rating} ({loc.reviews} reviews)
                  </span>
                </div>
              </div>

              <div className="space-y-2 text-sm text-muted-foreground mb-6">
                <p className="flex items-start gap-2"><MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />{loc.address}</p>
                <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" />{loc.phone}</p>
                <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" />{loc.email}</p>
                <p className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" />{loc.hours}</p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button size="sm" asChild><Link to="/book">Book Appointment</Link></Button>
                <Button size="sm" variant="outline" asChild>
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
