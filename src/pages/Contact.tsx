import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, MessageCircle, Check } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_URL =
  "https://wa.me/918147046518?text=Hey%20Cutie%206%20Pet!%20I%27d%20like%20to%20enquire%20about%20your%20pet%20grooming%20services.%20Could%20you%20help%20me%20with%20the%20details%3F";

type ContactForm = {
  name: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
};

const emptyForm: ContactForm = {
  name: "",
  email: "",
  phone: "",
  topic: "",
  message: "",
};

const Contact = () => {
  const [form, setForm] = useState<ContactForm>(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  const handleNameChange = (value: string) => {
    const sanitized = value.replace(/[^A-Za-z\s]/g, "").replace(/\s{2,}/g, " ");
    setSubmitted(false);
    setForm((current) => ({ ...current, name: sanitized }));
  };

  const handlePhoneChange = (value: string) => {
    const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
    setSubmitted(false);
    setForm((current) => ({ ...current, phone: digitsOnly }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const lines = [
      "Hi Cutie 6 Pet! I'd like to send an enquiry:",
      "",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || "Not provided"}`,
      `Topic: ${form.topic}`,
      `Message: ${form.message}`,
    ];

    const whatsappUrl = `https://wa.me/918147046518?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

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
                {submitted && (
                  <div className="mb-6 rounded-2xl border border-success/20 bg-success/10 px-4 py-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-success/15">
                        <Check className="h-5 w-5 text-success" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Message Sent!</p>
                        <p className="text-sm text-muted-foreground">
                          Your enquiry has been prepared and sent through WhatsApp.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <Label htmlFor="contact-name">Name *</Label>
                      <Input
                        id="contact-name"
                        required
                        placeholder="Your name"
                        value={form.name}
                        onChange={(event) => handleNameChange(event.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="contact-email">Email *</Label>
                      <Input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={(event) => {
                          setSubmitted(false);
                          setForm((current) => ({ ...current, email: event.target.value }));
                        }}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <Label htmlFor="contact-phone">Phone</Label>
                      <Input
                        id="contact-phone"
                        type="tel"
                        inputMode="numeric"
                        pattern="[0-9]{10}"
                        maxLength={10}
                        placeholder="9876543210"
                        value={form.phone}
                        onChange={(event) => handlePhoneChange(event.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="contact-topic">Topic *</Label>
                      <select
                        id="contact-topic"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        required
                        value={form.topic}
                        onChange={(event) => {
                          setSubmitted(false);
                          setForm((current) => ({ ...current, topic: event.target.value }));
                        }}
                      >
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
                    <Label htmlFor="contact-message">Message *</Label>
                    <textarea
                      id="contact-message"
                      required
                      className="min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      placeholder="How can we help?"
                      value={form.message}
                      onChange={(event) => {
                        setSubmitted(false);
                        setForm((current) => ({ ...current, message: event.target.value }));
                      }}
                    />
                  </div>
                  <Button type="submit" className="rounded-full">
                    Send Message
                  </Button>
                </form>
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
                    <p className="text-sm text-muted-foreground">+91 81470 46518</p>
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
