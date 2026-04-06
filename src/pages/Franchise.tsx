import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, TrendingUp, DollarSign, Users, MapPin, ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { icon: TrendingUp, value: "$131B", label: "US Pet Industry (2024)" },
  { icon: DollarSign, value: "$1.2M", label: "Avg Annual Revenue" },
  { icon: Users, value: "67%", label: "Pet Ownership Rate" },
  { icon: MapPin, value: "285+", label: "Open Locations" },
];

const investment = [
  { item: "Initial Franchise Fee", range: "$45,000" },
  { item: "Build-Out & Equipment", range: "$250,000 – $450,000" },
  { item: "Working Capital", range: "$50,000 – $100,000" },
  { item: "Total Investment", range: "$345,000 – $595,000" },
];

const testimonials = [
  { name: "Mike T.", location: "Denver, CO", text: "Best business decision I ever made. Corporate support is incredible and the brand recognition opens doors.", rating: 5 },
  { name: "Rachel & Tom S.", location: "Nashville, TN", text: "We hit profitability in 14 months. The training program prepared us for everything.", rating: 5 },
  { name: "Priya K.", location: "Portland, OR", text: "As a first-time business owner, the franchise model gave me confidence. I now own 3 locations.", rating: 5 },
];

const checklist = ["Passion for pets and community", "Minimum $150K liquid capital", "Strong leadership skills", "Willingness to follow proven systems", "Community involvement mindset", "Business or management experience preferred"];

const regions = [
  { name: "West Coast", territories: 12 },
  { name: "Southwest", territories: 18 },
  { name: "Midwest", territories: 25 },
  { name: "Southeast", territories: 22 },
  { name: "Northeast", territories: 15 },
  { name: "Mountain", territories: 20 },
];

const Franchise = () => (
  <div className="min-h-screen bg-background">
    <section className="bg-gradient-hero py-16 md:py-24">
      <div className="container text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Badge className="mb-4 bg-accent/20 text-accent-foreground border-accent/30">Franchise Opportunity</Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">Own a TailWaggers Franchise</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">Join the fastest-growing pet care franchise in America. Proven model, premium brand, and a $131B industry.</p>
          <Button size="lg" className="rounded-full" asChild><Link to="/franchise/inquiry">Start Your Application <ArrowRight className="w-5 h-5 ml-2" /></Link></Button>
        </motion.div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-16 bg-secondary">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
              <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center mx-auto mb-3"><s.icon className="w-6 h-6 text-primary" /></div>
              <p className="text-2xl md:text-3xl font-bold">{s.value}</p>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Investment */}
    <section className="py-16">
      <div className="container max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Investment Overview</h2>
        <Card>
          <CardContent className="pt-6 divide-y divide-border">
            {investment.map((row) => (
              <div key={row.item} className={`flex justify-between py-4 ${row.item === "Total Investment" ? "font-bold text-primary" : ""}`}>
                <span>{row.item}</span><span>{row.range}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-16 bg-secondary">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Franchisee Stories</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="flex gap-0.5 mb-3">{Array.from({ length: t.rating }).map((_, j) => <Star key={j} className="w-4 h-4 fill-accent text-accent" />)}</div>
                  <p className="text-sm text-muted-foreground mb-4">"{t.text}"</p>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Checklist & Territories */}
    <section className="py-16">
      <div className="container grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6">Ideal Candidate</h2>
          <ul className="space-y-3">
            {checklist.map((c) => <li key={c} className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 text-success shrink-0" />{c}</li>)}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-6">Available Territories</h2>
          <div className="grid grid-cols-2 gap-3">
            {regions.map((r) => (
              <div key={r.name} className="flex items-center justify-between p-3 rounded-lg bg-card border border-border">
                <span className="text-sm font-medium">{r.name}</span>
                <Badge variant="secondary">{r.territories} open</Badge>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 bg-gradient-hero">
      <div className="container text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">Ready to Get Started?</h2>
        <p className="text-primary-foreground/80 mb-8">Fill out our inquiry form and a franchise advisor will be in touch within 48 hours.</p>
        <Button size="lg" variant="secondary" className="rounded-full" asChild><Link to="/franchise/inquiry">Apply Now <ArrowRight className="w-5 h-5 ml-2" /></Link></Button>
      </div>
    </section>
  </div>
);

export default Franchise;
