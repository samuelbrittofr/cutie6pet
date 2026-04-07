import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Check, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_URL =
  "https://wa.me/919901887525?text=Hey%20Cutie%206%20Pet!%20%F0%9F%90%BE%20I%27d%20like%20to%20enquire%20about%20your%20pet%20grooming%20services.%20Could%20you%20help%20me%20with%20the%20details%3F";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Contact Us</h1>
            <p className="text-foreground/85 text-lg max-w-xl mx-auto">
              Have a question? We&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="mb-6 border-[hsl(142,71%,45%)]/20 bg-[hsl(142,71%,45%)]/5">
              <CardContent className="pt-6 flex flex-col sm:flex-row items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[hsl(142,71%,45%)]/10 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-7 h-7 text-[hsl(142,71%,45%)]" />
                </div>
                <div className="text-center sm:text-left flex-1">
                  <h3 className="font-semibold text-foreground mb-1">Fastest way to reach us</h3>
                  <p className="text-sm text-muted-foreground">
                    Get an instant reply on WhatsApp - we usually respond within minutes.
                  </p>
                </div>
                <Button className="bg-[hsl(142,71%,45%)] hover:bg-[hsl(142,71%,40%)] text-white shrink-0" asChild>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8 text-success" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">
                      We&apos;ll get back to you soon. You can also reach us on WhatsApp for a quicker response!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Name *</Label>
                        <Input required placeholder="Your name" />
                      </div>
                      <div>
                        <Label>Email *</Label>
                        <Input type="email" required placeholder="your@email.com" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Phone</Label>
                        <Input type="tel" placeholder="+91 98765 43210" />
                      </div>
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
                      <textarea
                        required
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm min-h-[120px]"
                        placeholder="How can we help?"
                      />
                    </div>
                    <Button type="submit" className="rounded-full">
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Kacharakanahalli</p>
                    <p className="text-sm text-muted-foreground">
                      Flat No. 1B-1, Iriss North, No.14, 2nd Cross, Kacharakanahalli, Bengaluru 560084
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Phone</p>
                    <p className="text-sm text-muted-foreground">+91 99018 87525</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Email</p>
                    <p className="text-sm text-muted-foreground">cutie6pet@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Hours</p>
                    <p className="text-sm text-muted-foreground">
                      10:00 AM - 8:00 PM
                      <br />
                      Open all days
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
