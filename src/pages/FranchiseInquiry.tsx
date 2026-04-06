import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const FranchiseInquiry = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "", city: "", state: "",
    liquidCapital: "", netWorth: "", timeline: "", experience: "", referral: "", terms: false,
  });

  const update = (k: string, v: any) => setForm({ ...form, [k]: v });

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center max-w-md">
          <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4"><Check className="w-8 h-8 text-success" /></div>
          <h1 className="text-2xl font-bold mb-2">Application Submitted!</h1>
          <p className="text-muted-foreground mb-6">Thank you for your interest in TailWaggers. A franchise advisor will contact you within 48 hours.</p>
          <Button className="rounded-full" asChild><Link to="/">Back to Home</Link></Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-hero py-12">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">Franchise Inquiry</h1>
            <p className="text-primary-foreground/80">Tell us about yourself and we'll get back to you within 48 hours.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container max-w-2xl">
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-8">
            <Card>
              <CardHeader><CardTitle>Personal Information</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div><Label>First Name *</Label><Input required value={form.firstName} onChange={(e) => update("firstName", e.target.value)} /></div>
                  <div><Label>Last Name *</Label><Input required value={form.lastName} onChange={(e) => update("lastName", e.target.value)} /></div>
                </div>
                <div><Label>Email *</Label><Input type="email" required value={form.email} onChange={(e) => update("email", e.target.value)} /></div>
                <div><Label>Phone *</Label><Input type="tel" required value={form.phone} onChange={(e) => update("phone", e.target.value)} /></div>
                <div className="grid grid-cols-2 gap-4">
                  <div><Label>City *</Label><Input required value={form.city} onChange={(e) => update("city", e.target.value)} /></div>
                  <div><Label>State *</Label><Input required value={form.state} onChange={(e) => update("state", e.target.value)} /></div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Financial Information</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div><Label>Available Liquid Capital *</Label>
                  <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" required value={form.liquidCapital} onChange={(e) => update("liquidCapital", e.target.value)}>
                    <option value="">Select range</option>
                    <option value="150-250k">$150,000 – $250,000</option>
                    <option value="250-500k">$250,000 – $500,000</option>
                    <option value="500k+">$500,000+</option>
                  </select>
                </div>
                <div><Label>Net Worth</Label>
                  <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" value={form.netWorth} onChange={(e) => update("netWorth", e.target.value)}>
                    <option value="">Select range</option>
                    <option value="500k-1m">$500,000 – $1,000,000</option>
                    <option value="1m-2m">$1,000,000 – $2,000,000</option>
                    <option value="2m+">$2,000,000+</option>
                  </select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Background</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div><Label>Target Timeline</Label>
                  <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" value={form.timeline} onChange={(e) => update("timeline", e.target.value)}>
                    <option value="">Select timeline</option>
                    <option value="3mo">Within 3 months</option>
                    <option value="6mo">3–6 months</option>
                    <option value="12mo">6–12 months</option>
                    <option value="12mo+">12+ months</option>
                  </select>
                </div>
                <div><Label>Relevant Experience</Label><Input value={form.experience} onChange={(e) => update("experience", e.target.value)} placeholder="Brief description of your background" /></div>
                <div><Label>How did you hear about us?</Label><Input value={form.referral} onChange={(e) => update("referral", e.target.value)} placeholder="e.g. Google, friend, trade show" /></div>
              </CardContent>
            </Card>

            <div className="flex items-start gap-2">
              <Checkbox id="terms" checked={form.terms} onCheckedChange={(v) => update("terms", !!v)} />
              <label htmlFor="terms" className="text-sm text-muted-foreground">I agree to the <a href="#" className="text-primary underline">terms and conditions</a> and understand this is an inquiry, not a commitment.</label>
            </div>

            <Button type="submit" size="lg" className="rounded-full w-full" disabled={!form.terms}>Submit Inquiry</Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default FranchiseInquiry;
