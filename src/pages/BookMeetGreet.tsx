import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Check, MapPin, Calendar, PawPrint, User, ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const steps = ["Location", "Date & Time", "Pet Info", "Your Info", "Confirmation"];
const locations = ["Downtown Seattle", "Capitol Hill", "Bellevue", "Fremont"];
const times = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"];
const stepIcons = [MapPin, Calendar, PawPrint, User, Check];

type FormData = {
  location: string;
  date: string;
  time: string;
  petName: string;
  petBreed: string;
  petAge: string;
  petWeight: string;
  ownerName: string;
  ownerEmail: string;
  ownerPhone: string;
};

const BookMeetGreet = () => {
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState<FormData>({
    location: "", date: "", time: "", petName: "", petBreed: "", petAge: "",
    petWeight: "", ownerName: "", ownerEmail: "", ownerPhone: "",
  });
  const { toast } = useToast();

  const update = (key: keyof FormData, val: string) => {
    setForm({ ...form, [key]: val });
    // Clear error for this field when user interacts
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  };

  const validateStep = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 0 && !form.location) {
      newErrors.location = "Please select a location.";
    }
    if (step === 1) {
      if (!form.date) newErrors.date = "Please select a date.";
      if (!form.time) newErrors.time = "Please select a time.";
    }
    if (step === 2) {
      if (!form.petName.trim()) newErrors.petName = "Pet name is required.";
      if (!form.petBreed.trim()) newErrors.petBreed = "Breed is required.";
      if (!form.petAge.trim()) newErrors.petAge = "Age is required.";
      if (!form.petWeight.trim()) newErrors.petWeight = "Weight is required.";
      else if (isNaN(Number(form.petWeight)) || Number(form.petWeight) <= 0)
        newErrors.petWeight = "Please enter a valid weight.";
    }
    if (step === 3) {
      if (!form.ownerName.trim()) newErrors.ownerName = "Full name is required.";
      if (!form.ownerEmail.trim()) newErrors.ownerEmail = "Email is required.";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.ownerEmail))
        newErrors.ownerEmail = "Please enter a valid email.";
      if (!form.ownerPhone.trim()) newErrors.ownerPhone = "Phone number is required.";
      else if (form.ownerPhone.replace(/\D/g, "").length < 10)
        newErrors.ownerPhone = "Please enter a valid phone number.";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      toast({
        title: "Please fix the errors",
        description: "Some required fields are missing or invalid.",
        variant: "destructive",
      });
      return false;
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const progress = ((step + 1) / steps.length) * 100;

  const FieldError = ({ field }: { field: string }) =>
    errors[field] ? (
      <p className="text-sm text-destructive mt-1" role="alert">{errors[field]}</p>
    ) : null;

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-hero py-12">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">Book a Free Meet & Greet</h1>
            <p className="text-primary-foreground/80">Let your pup explore our facility and meet the team — completely free!</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container max-w-2xl">
          {/* Progress */}
          <div className="mb-8" role="navigation" aria-label="Booking progress">
            <Progress value={progress} className="h-2 mb-4" aria-label={`Step ${step + 1} of ${steps.length}`} />
            <div className="flex justify-between">
              {steps.map((s, i) => {
                const Icon = stepIcons[i];
                return (
                  <div key={s} className={`flex flex-col items-center gap-1 ${i <= step ? "text-primary" : "text-muted-foreground"}`}>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs ${i < step ? "bg-primary text-primary-foreground" : i === step ? "border-2 border-primary" : "border border-muted-foreground/30"}`}
                      aria-current={i === step ? "step" : undefined}
                    >
                      {i < step ? <Check className="w-4 h-4" aria-hidden="true" /> : <Icon className="w-3.5 h-3.5" aria-hidden="true" />}
                    </div>
                    <span className="text-xs hidden sm:block">{s}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <Card>
            <CardHeader><CardTitle>{steps[step]}</CardTitle></CardHeader>
            <CardContent>
              <div aria-live="polite">
                {step === 0 && (
                  <fieldset>
                    <legend className="sr-only">Select a location</legend>
                    <div className="grid grid-cols-2 gap-3">
                      {locations.map((l) => (
                        <button
                          key={l}
                          onClick={() => update("location", l)}
                          aria-pressed={form.location === l}
                          className={`p-4 rounded-lg border text-sm text-left transition-all ${form.location === l ? "border-primary bg-brand-light ring-2 ring-primary/20" : "border-border hover:border-primary/50"}`}
                        >
                          <MapPin className="w-4 h-4 mb-1 text-primary" aria-hidden="true" />{l}
                        </button>
                      ))}
                    </div>
                    <FieldError field="location" />
                  </fieldset>
                )}
                {step === 1 && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="date-input">Preferred Date</Label>
                      <Input
                        id="date-input"
                        type="date"
                        value={form.date}
                        onChange={(e) => update("date", e.target.value)}
                        min={new Date().toISOString().split("T")[0]}
                        aria-invalid={!!errors.date}
                        aria-describedby={errors.date ? "date-error" : undefined}
                      />
                      <FieldError field="date" />
                    </div>
                    <div>
                      <Label id="time-label">Preferred Time</Label>
                      <div className="grid grid-cols-4 gap-2 mt-2" role="group" aria-labelledby="time-label">
                        {times.map((t) => (
                          <button
                            key={t}
                            onClick={() => update("time", t)}
                            aria-pressed={form.time === t}
                            className={`py-2 px-3 rounded-lg border text-xs transition-all ${form.time === t ? "border-primary bg-brand-light ring-2 ring-primary/20" : "border-border hover:border-primary/50"}`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                      <FieldError field="time" />
                    </div>
                  </div>
                )}
                {step === 2 && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="pet-name">Pet Name *</Label>
                      <Input id="pet-name" value={form.petName} onChange={(e) => update("petName", e.target.value)} placeholder="e.g. Bailey" aria-invalid={!!errors.petName} />
                      <FieldError field="petName" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="pet-breed">Breed *</Label>
                        <Input id="pet-breed" value={form.petBreed} onChange={(e) => update("petBreed", e.target.value)} placeholder="e.g. Golden Retriever" aria-invalid={!!errors.petBreed} />
                        <FieldError field="petBreed" />
                      </div>
                      <div>
                        <Label htmlFor="pet-age">Age *</Label>
                        <Input id="pet-age" value={form.petAge} onChange={(e) => update("petAge", e.target.value)} placeholder="e.g. 3 years" aria-invalid={!!errors.petAge} />
                        <FieldError field="petAge" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="pet-weight">Weight (lbs) *</Label>
                      <Input id="pet-weight" value={form.petWeight} onChange={(e) => update("petWeight", e.target.value)} placeholder="e.g. 65" aria-invalid={!!errors.petWeight} />
                      <FieldError field="petWeight" />
                    </div>
                  </div>
                )}
                {step === 3 && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="owner-name">Full Name *</Label>
                      <Input id="owner-name" value={form.ownerName} onChange={(e) => update("ownerName", e.target.value)} placeholder="John Smith" aria-invalid={!!errors.ownerName} />
                      <FieldError field="ownerName" />
                    </div>
                    <div>
                      <Label htmlFor="owner-email">Email *</Label>
                      <Input id="owner-email" type="email" value={form.ownerEmail} onChange={(e) => update("ownerEmail", e.target.value)} placeholder="john@email.com" aria-invalid={!!errors.ownerEmail} />
                      <FieldError field="ownerEmail" />
                    </div>
                    <div>
                      <Label htmlFor="owner-phone">Phone *</Label>
                      <Input id="owner-phone" type="tel" value={form.ownerPhone} onChange={(e) => update("ownerPhone", e.target.value)} placeholder="(206) 555-1234" aria-invalid={!!errors.ownerPhone} />
                      <FieldError field="ownerPhone" />
                    </div>
                  </div>
                )}
                {step === 4 && (
                  <div className="text-center py-8" role="status">
                    <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8 text-success" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">You're All Set! 🎉</h3>
                    <p className="text-muted-foreground mb-4">
                      Your meet & greet has been scheduled at <strong>{form.location}</strong> on{" "}
                      <strong>{form.date}</strong> at <strong>{form.time}</strong> for <strong>{form.petName}</strong>.
                    </p>
                    <p className="text-sm text-muted-foreground">A confirmation email has been sent to {form.ownerEmail}.</p>
                    <Button className="rounded-full mt-6" asChild>
                      <Link to="/">Back to Home</Link>
                    </Button>
                  </div>
                )}
              </div>

              {step < 4 && (
                <div className="flex justify-between mt-8">
                  <Button variant="outline" onClick={() => { setErrors({}); setStep(Math.max(0, step - 1)); }} disabled={step === 0} aria-label="Go back to previous step">
                    <ArrowLeft className="w-4 h-4 mr-1" aria-hidden="true" /> Back
                  </Button>
                  <Button onClick={handleNext} aria-label={step === 3 ? "Confirm booking" : "Go to next step"}>
                    {step === 3 ? "Confirm Booking" : "Next"} <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
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

export default BookMeetGreet;
