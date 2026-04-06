import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Check, MapPin, Calendar, PawPrint, ArrowLeft, ArrowRight, User } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const steps = ["Branch", "Package", "Date & Time", "Pet & Owner Info", "Confirmation"];

const branches = [
  { name: "Kacharakanahalli", address: "Flat No. 1B-1, Iriss North, 2nd Cross" },
  { name: "Kammanahalli", address: "Near ABCD Park, Kammanahalli" },
];

const groomingPackages = [
  { name: "Small Breed Package", price: "₹1,000", pet: "Dog" },
  { name: "Large Breed Package", price: "₹1,250", pet: "Dog" },
  { name: "Hair Cut Package", price: "₹1,800", pet: "Dog" },
  { name: "Cat Basic Grooming", price: "₹1,000", pet: "Cat" },
  { name: "Cat Zero Cut Package", price: "₹1,800", pet: "Cat" },
  { name: "Cat Hair Cut Package", price: "₹1,500", pet: "Cat" },
];

const times = ["10:00 AM", "11:00 AM", "12:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"];

type FormData = {
  branch: string;
  package: string;
  date: string;
  time: string;
  petName: string;
  petBreed: string;
  petType: string;
  ownerName: string;
  ownerPhone: string;
  notes: string;
};

const BookServices = () => {
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState<FormData>({
    branch: "", package: "", date: "", time: "", petName: "", petBreed: "", petType: "Dog", ownerName: "", ownerPhone: "", notes: "",
  });
  const { toast } = useToast();

  const update = (k: keyof FormData, v: string) => {
    setForm({ ...form, [k]: v });
    if (errors[k]) {
      setErrors((prev) => { const next = { ...prev }; delete next[k]; return next; });
    }
  };

  const validateStep = (): boolean => {
    const e: Record<string, string> = {};
    if (step === 0 && !form.branch) e.branch = "Please select a branch.";
    if (step === 1 && !form.package) e.package = "Please select a package.";
    if (step === 2) {
      if (!form.date) e.date = "Please select a date.";
      if (!form.time) e.time = "Please select a time.";
    }
    if (step === 3) {
      if (!form.petName.trim()) e.petName = "Pet name is required.";
      if (!form.petBreed.trim()) e.petBreed = "Breed is required.";
      if (!form.ownerName.trim()) e.ownerName = "Your name is required.";
      if (!form.ownerPhone.trim()) e.ownerPhone = "Phone number is required.";
      else if (form.ownerPhone.replace(/\D/g, "").length < 10) e.ownerPhone = "Enter a valid phone number.";
    }
    setErrors(e);
    if (Object.keys(e).length > 0) {
      toast({ title: "Please fix the errors", description: "Some required fields are missing.", variant: "destructive" });
      return false;
    }
    return true;
  };

  const handleNext = () => { if (validateStep()) setStep(step + 1); };
  const progress = ((step + 1) / steps.length) * 100;
  const FieldError = ({ field }: { field: string }) => errors[field] ? <p className="text-sm text-destructive mt-1" role="alert">{errors[field]}</p> : null;

  const whatsappMsg = `Hi Cutie 6 Pet! I've booked a ${form.package} at your ${form.branch} branch on ${form.date} at ${form.time}. Pet: ${form.petName} (${form.petBreed}). Name: ${form.ownerName}. Phone: ${form.ownerPhone}.${form.notes ? ` Notes: ${form.notes}` : ""}`;
  const whatsappUrl = `https://wa.me/917947419026?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-hero py-12">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">Book an Appointment</h1>
            <p className="text-primary-foreground/80">Schedule a grooming session for your fur baby in just a few steps.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container max-w-2xl">
          <Progress value={progress} className="h-2 mb-8" aria-label={`Step ${step + 1} of ${steps.length}`} />

          <Card>
            <CardHeader><CardTitle>{steps[step]}</CardTitle></CardHeader>
            <CardContent>
              <div aria-live="polite">
                {step === 0 && (
                  <fieldset>
                    <legend className="sr-only">Select a branch</legend>
                    <div className="grid gap-3">
                      {branches.map((b) => (
                        <button key={b.name} onClick={() => update("branch", b.name)} aria-pressed={form.branch === b.name}
                          className={`p-4 rounded-lg border text-left transition-all ${form.branch === b.name ? "border-primary bg-brand-light ring-2 ring-primary/20" : "border-border hover:border-primary/50"}`}>
                          <MapPin className="w-4 h-4 mb-1 text-primary inline mr-2" aria-hidden="true" />
                          <span className="font-medium">{b.name}</span>
                          <p className="text-xs text-muted-foreground mt-1">{b.address}</p>
                        </button>
                      ))}
                    </div>
                    <FieldError field="branch" />
                  </fieldset>
                )}

                {step === 1 && (
                  <fieldset>
                    <legend className="sr-only">Select a grooming package</legend>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {groomingPackages.map((p) => (
                        <button key={p.name} onClick={() => update("package", p.name)} aria-pressed={form.package === p.name}
                          className={`p-4 rounded-lg border text-left transition-all ${form.package === p.name ? "border-primary bg-brand-light ring-2 ring-primary/20" : "border-border hover:border-primary/50"}`}>
                          <PawPrint className="w-4 h-4 mb-1 text-primary" aria-hidden="true" />
                          <p className="text-sm font-medium">{p.name}</p>
                          <p className="text-xs text-muted-foreground">{p.price} · {p.pet}</p>
                        </button>
                      ))}
                    </div>
                    <FieldError field="package" />
                  </fieldset>
                )}

                {step === 2 && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="service-date">Date *</Label>
                      <Input id="service-date" type="date" value={form.date} onChange={(e) => update("date", e.target.value)} min={new Date().toISOString().split("T")[0]} aria-invalid={!!errors.date} />
                      <FieldError field="date" />
                    </div>
                    <div>
                      <Label id="time-label">Time *</Label>
                      <div className="grid grid-cols-4 gap-2 mt-2" role="group" aria-labelledby="time-label">
                        {times.map((t) => (
                          <button key={t} onClick={() => update("time", t)} aria-pressed={form.time === t}
                            className={`py-2 px-3 rounded-lg border text-xs transition-all ${form.time === t ? "border-primary bg-brand-light ring-2 ring-primary/20" : "border-border hover:border-primary/50"}`}>
                            {t}
                          </button>
                        ))}
                      </div>
                      <FieldError field="time" />
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="pet-name-svc">Pet Name *</Label>
                        <Input id="pet-name-svc" value={form.petName} onChange={(e) => update("petName", e.target.value)} placeholder="e.g. Bruno" aria-invalid={!!errors.petName} />
                        <FieldError field="petName" />
                      </div>
                      <div>
                        <Label htmlFor="pet-breed-svc">Breed *</Label>
                        <Input id="pet-breed-svc" value={form.petBreed} onChange={(e) => update("petBreed", e.target.value)} placeholder="e.g. Labrador" aria-invalid={!!errors.petBreed} />
                        <FieldError field="petBreed" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="owner-name">Your Name *</Label>
                        <Input id="owner-name" value={form.ownerName} onChange={(e) => update("ownerName", e.target.value)} placeholder="Your full name" aria-invalid={!!errors.ownerName} />
                        <FieldError field="ownerName" />
                      </div>
                      <div>
                        <Label htmlFor="owner-phone">Phone Number *</Label>
                        <Input id="owner-phone" type="tel" value={form.ownerPhone} onChange={(e) => update("ownerPhone", e.target.value)} placeholder="+91 98765 43210" aria-invalid={!!errors.ownerPhone} />
                        <FieldError field="ownerPhone" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="pet-notes-svc">Special Notes</Label>
                      <Input id="pet-notes-svc" value={form.notes} onChange={(e) => update("notes", e.target.value)} placeholder="Allergies, temperament, special requests..." />
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="text-center py-8" role="status">
                    <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8 text-success" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Appointment Requested! 🎉</h3>
                    <div className="text-sm text-muted-foreground space-y-1 mb-6">
                      <p><strong>Package:</strong> {form.package}</p>
                      <p><strong>Branch:</strong> {form.branch}</p>
                      <p><strong>Date:</strong> {form.date} at {form.time}</p>
                      <p><strong>Pet:</strong> {form.petName} ({form.petBreed})</p>
                      <p><strong>Name:</strong> {form.ownerName}</p>
                      <p><strong>Phone:</strong> {form.ownerPhone}</p>
                      {form.notes && <p><strong>Notes:</strong> {form.notes}</p>}
                    </div>
                    <p className="text-sm text-muted-foreground mb-6">Please confirm your appointment by sending us a WhatsApp message:</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Button className="rounded-full bg-[hsl(142_70%_45%)] hover:bg-[hsl(142_70%_40%)] text-white" asChild>
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Confirm on WhatsApp</a>
                      </Button>
                      <Button variant="outline" className="rounded-full" asChild>
                        <Link to="/">Back to Home</Link>
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              {step < 4 && (
                <div className="flex justify-between mt-8">
                  <Button variant="outline" onClick={() => { setErrors({}); setStep(Math.max(0, step - 1)); }} disabled={step === 0} aria-label="Go back to previous step">
                    <ArrowLeft className="w-4 h-4 mr-1" aria-hidden="true" /> Back
                  </Button>
                  <Button onClick={handleNext} aria-label={step === 3 ? "Confirm booking" : "Go to next step"}>
                    {step === 3 ? "Confirm" : "Next"} <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default BookServices;
