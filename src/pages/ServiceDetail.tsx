import { useParams, Link } from "react-router-dom";
import { Sun, Moon, Scissors, GraduationCap, Check, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const serviceData: Record<string, any> = {
  daycare: {
    icon: Sun, title: "Daycare", color: "bg-amber-light text-amber",
    tagline: "A fun-filled day of play and socialization for your pup.",
    desc: "Our daycare program provides a safe, supervised environment where dogs can play, socialize, and burn off energy. Climate-controlled indoor playrooms with outdoor access ensure your pet stays comfortable year-round.",
    features: ["Supervised open play groups", "Indoor & outdoor play areas", "Climate-controlled environment", "Webcam access for pet parents", "Flexible drop-off/pick-up times", "Report cards sent daily", "Water stations & rest areas", "Size-appropriate play groups"],
    pricing: [
      { name: "Single Day", price: "$38" },
      { name: "5-Day Package", price: "$170", note: "Save $20" },
      { name: "10-Day Package", price: "$320", note: "Save $60" },
      { name: "Monthly Unlimited", price: "$599", note: "Best value" },
    ],
    locations: 285,
  },
  boarding: {
    icon: Moon, title: "Boarding", color: "bg-brand-light text-brand-deep",
    tagline: "A home away from home for your furry family member.",
    desc: "Our boarding suites provide a comfortable overnight stay with included playtime sessions, daily photo updates, and personalized care. Each suite is private, clean, and designed for your pet's comfort.",
    features: ["Private luxury suites", "Included playtime sessions", "Daily photo & video updates", "Medication administration", "Bedtime snacks", "Late checkout available", "Personal belongings welcome", "24/7 staff on site"],
    pricing: [
      { name: "Standard Suite", price: "$65/night" },
      { name: "Deluxe Suite", price: "$85/night", note: "Extra space" },
      { name: "VIP Suite", price: "$110/night", note: "Premium amenities" },
      { name: "Extended Stay (7+)", price: "$55/night", note: "Per night" },
    ],
    locations: 260,
  },
  grooming: {
    icon: Scissors, title: "Spa & Grooming", color: "bg-success-light text-success",
    tagline: "Professional grooming to keep your pet looking and feeling great.",
    desc: "Our certified groomers provide breed-specific cuts, de-shedding treatments, nail care, teeth brushing, and specialty spa services. Every visit includes a gentle bath with premium shampoo.",
    features: ["Certified professional groomers", "Breed-specific styling", "De-shedding treatments", "Nail trim & filing", "Teeth brushing", "Ear cleaning", "Blueberry facial", "Pawdicure spa package"],
    pricing: [
      { name: "Bath & Brush", price: "$45" },
      { name: "Full Groom", price: "$75+" },
      { name: "Puppy's First Groom", price: "$35" },
      { name: "Spa Package", price: "$95", note: "Most popular" },
    ],
    locations: 270,
  },
  training: {
    icon: GraduationCap, title: "Training", color: "bg-secondary text-coral",
    tagline: "Build a stronger bond through professional training.",
    desc: "Our certified trainers use positive reinforcement methods to help your dog learn manners, build confidence, and strengthen your bond. Programs available for all ages and skill levels.",
    features: ["Certified professional trainers", "Positive reinforcement methods", "1-on-1 private sessions", "Group classes available", "Puppy kindergarten", "Behavior modification", "CGC test preparation", "Board & train programs"],
    pricing: [
      { name: "Private Session", price: "$100/hr" },
      { name: "4-Session Package", price: "$360", note: "Save $40" },
      { name: "Group Class (6 wk)", price: "$200" },
      { name: "Board & Train (2 wk)", price: "$2,500" },
    ],
    locations: 180,
  },
};

const ServiceDetail = () => {
  const { service } = useParams();
  const data = serviceData[service || ""] || serviceData.daycare;

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-hero py-16">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link to="/services" className="text-primary-foreground/70 hover:text-primary-foreground text-sm flex items-center gap-1 mb-4"><ArrowLeft className="w-4 h-4" /> All Services</Link>
            <div className="flex items-center gap-4 mb-4">
              <div className={`w-14 h-14 rounded-xl ${data.color} flex items-center justify-center`}><data.icon className="w-7 h-7" /></div>
              <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground">{data.title}</h1>
            </div>
            <p className="text-primary-foreground/80 text-lg max-w-2xl">{data.tagline}</p>
            <p className="text-primary-foreground/60 text-sm mt-2">Available at {data.locations}+ locations</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">About This Service</h2>
              <p className="text-muted-foreground leading-relaxed">{data.desc}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">What's Included</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {data.features.map((f: string) => (
                  <div key={f} className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 text-success shrink-0" />{f}</div>
                ))}
              </div>
            </div>
            <div className="flex gap-3">
              <Button className="rounded-full" asChild><Link to="/book/services">Book Now</Link></Button>
              <Button variant="outline" className="rounded-full" asChild><Link to="/locations">Find Location</Link></Button>
            </div>
          </div>

          <Card>
            <CardHeader><CardTitle>Pricing</CardTitle></CardHeader>
            <CardContent className="divide-y divide-border">
              {data.pricing.map((p: any) => (
                <div key={p.name} className="flex items-center justify-between py-3">
                  <div>
                    <p className="font-medium text-sm">{p.name}</p>
                    {p.note && <Badge variant="secondary" className="text-xs mt-1">{p.note}</Badge>}
                  </div>
                  <span className="font-semibold text-primary">{p.price}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
