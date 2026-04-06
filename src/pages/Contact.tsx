import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Check } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/917947419026?text=Hi%20Cutie%206%20Pet!%20I%20have%20a%20question.";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">Contact Us</h1>
            <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto">Have a question? We'd love to hear from you.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader><CardTitle>Send Us a Message</CardTitle></CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4"><Check className="w-8 h-8 text-success" /></div>
                    <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">We'll get back to you soon. You can also reach us on WhatsApp for a quicker response!</p>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div><Label>Name *</Label><Input required placeholder="Your name" /></div>
                      <div><Label>Email *</Label><Input type="email" required placeholder="your@email.com" /></div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div><Label>Phone</Label><Input type="tel" placeholder="+91 98765 43210" /></div>
                      <div>
                        <Label>Topic *</Label>
                        <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" required>
                          <option value="">Select topic</option>
                          <option>Booking Inquiry</option>
                          <option>Pricing</option>
                          <option>General Question</option>
                          <option>Feedback</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <Label>Message *</Label>
                      <textarea required className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm min-h-[120px]" placeholder="How can we help?" />
                    </div>
                    <Button type="submit" className="rounded-full">Send Message</Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-start gap-3"><MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" /><div><p className="font-medium text-sm">Kacharakanahalli</p><p className="text-sm text-muted-foreground">Flat No. 1B-1, Iriss North, No.14, 2nd Cross, Kacharakanahalli, Bengaluru 560084</p></div></div>
                <div className="flex items-start gap-3"><MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" /><div><p className="font-medium text-sm">Kammanahalli</p><p className="text-sm text-muted-foreground">Near ABCD Park, Kammanahalli, Bengaluru</p></div></div>
                <div className="flex items-start gap-3"><Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" /><div><p className="font-medium text-sm">Phone</p><p className="text-sm text-muted-foreground">079 4741 9026</p></div></div>
                <div className="flex items-start gap-3"><Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" /><div><p className="font-medium text-sm">Email</p><p className="text-sm text-muted-foreground">cutie6pet@gmail.com</p></div></div>
                <div className="flex items-start gap-3"><Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" /><div><p className="font-medium text-sm">Hours</p><p className="text-sm text-muted-foreground">10:00 AM – 8:00 PM<br />Open all days</p></div></div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <p className="text-sm text-muted-foreground mb-3">Prefer a quicker response?</p>
                <Button className="rounded-full bg-[hsl(142_70%_45%)] hover:bg-[hsl(142_70%_40%)] text-white" asChild>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
