import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Check, MapPin, Calendar, PawPrint, Sun, Moon, Scissors, GraduationCap, ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const steps = ["Location", "Service", "Date & Time", "Pet Info", "Review & Confirm"];
const locations = ["Downtown Seattle", "Capitol Hill", "Bellevue", "Fremont"];
const serviceOptions = [
  { name: "Daycare", icon: Sun, price: "$38/day" },
  { name: "Boarding", icon: Moon, price: "$65/night" },
  { name: "Grooming", icon: Scissors, price: "From $45" },
  { name: "Training", icon: GraduationCap, price: "$100/hr" },
];
const times = ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM"];

type FormData = {
  location: string;
  service: string;
  date: string;
  time: string;
  petName: string;
  petBreed: string;
  notes: string;
};

const BookServices = () => {
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState<FormData>({
    location: "", service: "", date: "", time: "", petName: "", petBreed: "", notes: "",
  });
  const { toast } = useToast();

  const update = (k: keyof FormData, v: string) => {
    setForm({ ...form, [k]: v });
    if (errors[k]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[k];
        return next;
      });
    }
  };

  const validateStep = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 0 && !form.location) {
      newErrors.location = "Please select a location.";
    }
    if (step === 1 && !form.service) {
      newErrors.service = "Please select a service.";
    }
    if (step === 2) {
      if (!form.date) newErrors.date = "Please select a date.";
      if (!form.time) newErrors.time = "Please select a time.";
    }
    if (step === 3) {
      if (!form.petName.trim()) newErrors.petName = "Pet name is required.";
      if (!form.petBreed.trim()) newErrors.petBreed = "Breed is required.";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      toast({
        title: "Please fix the errors",
        description: "Some required fields are missing.",
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
            <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">Book a Service</h1>
            <p className="text-primary-foreground/80">Schedule daycare, boarding, grooming, or training in just a few steps.</p>
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
                  <fieldset>
                    <legend className="sr-only">Select a service</legend>
                    <div className="grid grid-cols-2 gap-3">
                      {serviceOptions.map((s) => (
                        <button
                          key={s.name}
                          onClick={() => update("service", s.name)}
                          aria-pressed={form.service === s.name}
                          className={`p-4 rounded-lg border text-left transition-all ${form.service === s.name ? "border-primary bg-brand-light ring-2 ring-primary/20" : "border-border hover:border-primary/50"}`}
                        >
                          <s.icon className="w-5 h-5 mb-1 text-primary" aria-hidden="true" />
                          <p className="text-sm font-medium">{s.name}</p>
                          <p className="text-xs text-muted-foreground">{s.price}</p>
                        </button>
                      ))}
                    </div>
                    <FieldError field="service" />
                  </fieldset>
                )}
                {step === 2 && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="service-date">Date *</Label>
                      <Input
                        id="service-date"
                        type="date"
                        value={form.date}
                        onChange={(e) => update("date", e.target.value)}
                        min={new Date().toISOString().split("T")[0]}
                        aria-invalid={!!errors.date}
                      />
                      <FieldError field="date" />
                    </div>
                    <div>
                      <Label id="time-label">Time *</Label>
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
                {step === 3 && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="pet-name-svc">Pet Name *</Label>
                      <Input id="pet-name-svc" value={form.petName} onChange={(e) => update("petName", e.target.value)} placeholder="e.g. Bailey" aria-invalid={!!errors.petName} />
                      <FieldError field="petName" />
                    </div>
                    <div>
                      <Label htmlFor="pet-breed-svc">Breed *</Label>
                      <Input id="pet-breed-svc" value={form.petBreed} onChange={(e) => update("petBreed", e.target.value)} placeholder="e.g. Golden Retriever" aria-invalid={!!errors.petBreed} />
                      <FieldError field="petBreed" />
                    </div>
                    <div>
                      <Label htmlFor="pet-notes-svc">Special Notes</Label>
                      <Input id="pet-notes-svc" value={form.notes} onChange={(e) => update("notes", e.target.value)} placeholder="Any allergies, medications, etc." />
                    </div>
                  </div>
                )}
                {step === 4 && (
                  <div className="text-center py-8" role="status">
                    <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8 text-success" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Booking Confirmed! 🎉</h3>
                    <div className="text-sm text-muted-foreground space-y-1 mb-6">
                      <p><strong>Service:</strong> {form.service}</p>
                      <p><strong>Location:</strong> {form.location}</p>
                      <p><strong>Date:</strong> {form.date} at {form.time}</p>
                      <p><strong>Pet:</strong> {form.petName} ({form.petBreed})</p>
                      {form.notes && <p><strong>Notes:</strong> {form.notes}</p>}
                    </div>
                    <Button className="rounded-full" asChild>
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
