import { useParams, Link } from "react-router-dom";
import { MapPin, Phone, Clock, Star, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const locationData: Record<string, any> = {
  "downtown-seattle": {
    name: "TailWaggers Downtown Seattle",
    address: "456 Pine St, Seattle, WA 98101",
    phone: "(206) 555-1234",
    hours: { weekday: "6:30 AM – 8:00 PM", weekend: "8:00 AM – 6:00 PM" },
    rating: 4.9,
    reviews: 312,
    services: [
      { name: "Daycare", price: "$38/day", desc: "Full-day supervised play" },
      { name: "Boarding", price: "$65/night", desc: "Overnight stays in private suites" },
      { name: "Grooming", price: "From $45", desc: "Bath, haircut, nails" },
      { name: "Training", price: "$100/hr", desc: "1-on-1 obedience training" },
    ],
    staff: [
      { name: "Sarah M.", role: "Location Manager", years: 8 },
      { name: "Jake R.", role: "Head Trainer", years: 5 },
      { name: "Lisa K.", role: "Lead Groomer", years: 6 },
    ],
    testimonials: [
      { text: "My dog Bailey absolutely loves coming here. The staff is amazing!", author: "Amanda P.", rating: 5 },
      { text: "Best boarding experience we've ever had. Daily updates were a nice touch.", author: "Chris D.", rating: 5 },
    ],
    promo: "New clients: First daycare day FREE with any package booking!",
  },
};

const fallback = locationData["downtown-seattle"];

const LocationDetail = () => {
  const { id } = useParams();
  const loc = locationData[id || ""] || { ...fallback, name: `TailWaggers ${(id || "location").replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())}` };

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-hero py-16">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link to="/locations" className="text-primary-foreground/70 hover:text-primary-foreground text-sm flex items-center gap-1 mb-4"><ArrowLeft className="w-4 h-4" /> Back to Locations</Link>
            <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">{loc.name}</h1>
            <div className="flex flex-wrap gap-4 text-primary-foreground/80 text-sm">
              <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{loc.address}</span>
              <span className="flex items-center gap-1"><Phone className="w-4 h-4" />{loc.phone}</span>
              <span className="flex items-center gap-1"><Star className="w-4 h-4 fill-accent text-accent" />{loc.rating} ({loc.reviews} reviews)</span>
            </div>
            <div className="flex gap-3 mt-6">
              <Button className="rounded-full" asChild><Link to="/book/meet-greet">Book Meet & Greet</Link></Button>
              <Button variant="secondary" className="rounded-full" asChild><Link to="/book/services">Book Services</Link></Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Services */}
            <Card>
              <CardHeader><CardTitle>Services & Pricing</CardTitle></CardHeader>
              <CardContent>
                <div className="divide-y divide-border">
                  {loc.services.map((s: any) => (
                    <div key={s.name} className="flex items-center justify-between py-4">
                      <div><p className="font-medium">{s.name}</p><p className="text-sm text-muted-foreground">{s.desc}</p></div>
                      <Badge variant="secondary" className="text-sm">{s.price}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Reviews */}
            <Card>
              <CardHeader><CardTitle>Recent Reviews</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                {loc.testimonials.map((t: any, i: number) => (
                  <div key={i} className="p-4 bg-secondary rounded-lg">
                    <div className="flex items-center gap-1 mb-2">{Array.from({ length: t.rating }).map((_, j) => <Star key={j} className="w-4 h-4 fill-accent text-accent" />)}</div>
                    <p className="text-sm mb-2">"{t.text}"</p>
                    <p className="text-xs text-muted-foreground">— {t.author}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {/* Hours */}
            <Card>
              <CardHeader><CardTitle className="text-lg">Hours</CardTitle></CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Mon–Fri</span><span>{loc.hours.weekday}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Sat–Sun</span><span>{loc.hours.weekend}</span></div>
              </CardContent>
            </Card>

            {/* Staff */}
            <Card>
              <CardHeader><CardTitle className="text-lg">Our Team</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                {loc.staff.map((s: any) => (
                  <div key={s.name} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center text-sm font-medium text-primary">{s.name.charAt(0)}</div>
                    <div><p className="text-sm font-medium">{s.name}</p><p className="text-xs text-muted-foreground">{s.role} · {s.years} yrs</p></div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Promo */}
            <div className="bg-accent/10 border border-accent/30 rounded-xl p-5">
              <p className="font-semibold text-sm mb-1">🎉 Special Offer</p>
              <p className="text-sm text-muted-foreground">{loc.promo}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationDetail;
