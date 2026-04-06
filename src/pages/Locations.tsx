import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Search, MapPin, Phone, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const locations = [
  {
    id: "downtown-seattle",
    name: "TailWaggers Downtown Seattle",
    address: "456 Pine St, Seattle, WA 98101",
    phone: "(206) 555-1234",
    hours: "6:30 AM – 8:00 PM",
    distance: "0.8 mi",
    rating: 4.9,
    reviews: 312,
    services: ["Daycare", "Boarding", "Grooming", "Training"],
    image: "🏙️",
  },
  {
    id: "capitol-hill",
    name: "TailWaggers Capitol Hill",
    address: "789 Broadway E, Seattle, WA 98102",
    phone: "(206) 555-5678",
    hours: "7:00 AM – 7:00 PM",
    distance: "1.2 mi",
    rating: 4.8,
    reviews: 245,
    services: ["Daycare", "Grooming"],
    image: "🏘️",
  },
  {
    id: "bellevue",
    name: "TailWaggers Bellevue",
    address: "321 Bellevue Way NE, Bellevue, WA 98004",
    phone: "(425) 555-9012",
    hours: "6:00 AM – 9:00 PM",
    distance: "5.4 mi",
    rating: 4.9,
    reviews: 189,
    services: ["Daycare", "Boarding", "Grooming", "Training"],
    image: "🌲",
  },
  {
    id: "fremont",
    name: "TailWaggers Fremont",
    address: "102 N 36th St, Seattle, WA 98103",
    phone: "(206) 555-3456",
    hours: "7:00 AM – 7:30 PM",
    distance: "2.1 mi",
    rating: 4.7,
    reviews: 156,
    services: ["Daycare", "Boarding", "Training"],
    image: "🎨",
  },
];

const Locations = () => {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("zip") || "");

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">Find a Location Near You</h1>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">285+ locations nationwide. Search by zip code or city to find your nearest TailWaggers.</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <div className="relative flex-1">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Enter zip code or city"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-full bg-card text-foreground shadow-hero text-base focus:ring-2 focus:ring-primary outline-none"
                />
              </div>
              <Button size="lg" className="rounded-full px-8"><Search className="w-5 h-5 mr-2" /> Search</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16">
        <div className="container">
          <p className="text-muted-foreground mb-8">{locations.length} locations found near Seattle, WA</p>
          <div className="grid md:grid-cols-2 gap-6">
            {locations.map((loc, i) => (
              <motion.div key={loc.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                <Link to={`/locations/${loc.id}`} className="group block bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300">
                  <div className="flex gap-4">
                    <div className="w-16 h-16 rounded-xl bg-brand-light flex items-center justify-center text-3xl shrink-0">{loc.image}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{loc.name}</h3>
                        <span className="text-sm text-muted-foreground shrink-0">{loc.distance}</span>
                      </div>
                      <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1"><MapPin className="w-3.5 h-3.5" />{loc.address}</p>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{loc.hours}</span>
                        <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5" />{loc.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-3 flex-wrap">
                        <span className="flex items-center gap-1 text-sm font-medium text-accent"><Star className="w-4 h-4 fill-accent" />{loc.rating} ({loc.reviews})</span>
                        {loc.services.map((s) => (
                          <Badge key={s} variant="secondary" className="text-xs">{s}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Locations;
