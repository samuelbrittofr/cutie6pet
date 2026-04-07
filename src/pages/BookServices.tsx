import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Check, PawPrint, ArrowLeft, ArrowRight, CalendarIcon, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const steps = ["Package", "Date & Time", "Your Details", "Confirmation"];

const groomingPackages = [
  { name: "Small Breed Package", price: "₹1,000", pet: "Dog" },
  { name: "Large Breed Package", price: "₹1,250", pet: "Dog" },
  { name: "Hair Cut Package (Dog)", price: "₹1,800", pet: "Dog" },
  { name: "Cat Basic Grooming", price: "₹1,000", pet: "Cat" },
  { name: "Cat Zero Cut Package", price: "₹1,800", pet: "Cat" },
  { name: "Cat Hair Cut Package", price: "₹1,500", pet: "Cat" },
];

const times = ["10:00 AM", "11:00 AM", "12:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"];
const lettersOnlyPattern = /^[A-Za-z\s]+$/;

type FormData = {
  package: string;
  date: Date | undefined;
  time: string;
  petName: string;
  petBreed: string;
  petType: string;
  ownerName: string;
  ownerPhone: string;
  notes: string;
};

const sanitizeLettersOnly = (value: string) =>
  value.replace(/[^A-Za-z\s]/g, "").replace(/\s{2,}/g, " ").trimStart();

const sanitizePhoneNumber = (value: string) => value.replace(/\D/g, "").slice(0, 10);

const BookServices = () => {
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState<FormData>({
    package: "",
    date: undefined,
    time: "",
    petName: "",
    petBreed: "",
    petType: "Dog",
    ownerName: "",
    ownerPhone: "",
    notes: "",
  });
  const { toast } = useToast();

  const update = (key: keyof FormData, value: FormData[keyof FormData]) => {
    setForm({ ...form, [key]: value });
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  };

  const validateStep = (): boolean => {
    const nextErrors: Record<string, string> = {};

    if (step === 0 && !form.package) nextErrors.package = "Please select a package.";

    if (step === 1) {
      if (!form.date) nextErrors.date = "Please select a date.";
      if (!form.time) nextErrors.time = "Please select a time.";
    }

    if (step === 2) {
      if (!form.petName.trim()) nextErrors.petName = "Pet name is required.";
      else if (!lettersOnlyPattern.test(form.petName.trim())) nextErrors.petName = "Pet name should only contain letters.";

      if (!form.petBreed.trim()) nextErrors.petBreed = "Breed is required.";
      else if (!lettersOnlyPattern.test(form.petBreed.trim())) nextErrors.petBreed = "Breed should only contain letters.";

      if (!form.ownerName.trim()) nextErrors.ownerName = "Your name is required.";
      else if (!lettersOnlyPattern.test(form.ownerName.trim())) nextErrors.ownerName = "Your name should only contain letters.";

      if (!form.ownerPhone.trim()) nextErrors.ownerPhone = "Phone number is required.";
      else if (form.ownerPhone.length !== 10) nextErrors.ownerPhone = "Enter a valid 10-digit phone number.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
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
    if (validateStep()) setStep(step + 1);
  };

  const FieldError = ({ field }: { field: string }) =>
    errors[field] ? (
      <p className="text-sm text-destructive mt-1" role="alert">
        {errors[field]}
      </p>
    ) : null;

  const dateStr = form.date ? format(form.date, "PPP") : "";
  const whatsappMsg = `Hi Cutie 6 Pet! I'd like to confirm my booking:\n\n📦 Package: ${form.package}\n📍 Branch: Kacharakanahalli\n📅 Date: ${dateStr}\n⏰ Time: ${form.time}\n🐾 Pet: ${form.petName} (${form.petBreed})\n👤 Name: ${form.ownerName}\n📞 Phone: ${form.ownerPhone}${form.notes ? `\n📝 Notes: ${form.notes}` : ""}`;
  const whatsappUrl = `https://wa.me/919901887525?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <div className="min-h-screen bg-background">
      <section className="py-10 border-b border-border">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-1">Book an Appointment</h1>
            <p className="text-muted-foreground text-sm">Schedule a grooming session at our Kacharakanahalli branch.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-10">
        <div className="container max-w-2xl">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              {steps.map((label, index) => (
                <div key={label} className="flex flex-col items-center flex-1">
                  <div
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mb-1.5 transition-colors",
                      index < step
                        ? "bg-primary text-primary-foreground"
                        : index === step
                          ? "bg-primary text-primary-foreground ring-2 ring-primary/30 ring-offset-2"
                          : "bg-muted text-muted-foreground",
                    )}
                  >
                    {index < step ? <Check className="w-4 h-4" /> : index + 1}
                  </div>
                  <span
                    className={cn(
                      "text-[10px] sm:text-xs text-center leading-tight",
                      index <= step ? "text-primary font-medium" : "text-muted-foreground",
                    )}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
            <div className="h-1 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(step / (steps.length - 1)) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
            <Card className="border shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">{steps[step]}</CardTitle>
              </CardHeader>
              <CardContent>
                <div aria-live="polite">
                  {step === 0 && (
                    <fieldset>
                      <legend className="sr-only">Select a grooming package</legend>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {groomingPackages.map((pkg) => (
                          <button
                            key={pkg.name}
                            onClick={() => update("package", pkg.name)}
                            aria-pressed={form.package === pkg.name}
                            className={cn(
                              "p-4 rounded-lg border text-left transition-all",
                              form.package === pkg.name
                                ? "border-primary bg-primary/5 ring-1 ring-primary/30"
                                : "border-border hover:border-muted-foreground/30",
                            )}
                          >
                            <PawPrint className="w-4 h-4 mb-1 text-primary" aria-hidden="true" />
                            <p className="text-sm font-medium text-foreground">{pkg.name}</p>
                            <p className="text-xs text-muted-foreground">{pkg.price} · {pkg.pet}</p>
                          </button>
                        ))}
                      </div>
                      <FieldError field="package" />
                    </fieldset>
                  )}

                  {step === 1 && (
                    <div className="space-y-6">
                      <div>
                        <Label className="mb-2 block">Select Date *</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn("w-full justify-start text-left font-normal", !form.date && "text-muted-foreground")}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {form.date ? format(form.date, "PPP") : "Pick a date"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={form.date}
                              onSelect={(date) => update("date", date)}
                              disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                              initialFocus
                              className="p-3 pointer-events-auto"
                            />
                          </PopoverContent>
                        </Popover>
                        <FieldError field="date" />
                      </div>
                      <div>
                        <Label className="mb-2 block">Select Time *</Label>
                        <div className="grid grid-cols-4 gap-2" role="group">
                          {times.map((time) => (
                            <button
                              key={time}
                              onClick={() => update("time", time)}
                              aria-pressed={form.time === time}
                              className={cn(
                                "py-2.5 px-3 rounded-lg border text-xs font-medium transition-all",
                                form.time === time
                                  ? "border-primary bg-primary/5 ring-1 ring-primary/30 text-primary"
                                  : "border-border hover:border-muted-foreground/30 text-foreground",
                              )}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                        <FieldError field="time" />
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="pet-name-svc">Pet Name *</Label>
                          <Input
                            id="pet-name-svc"
                            value={form.petName}
                            onChange={(event) => update("petName", sanitizeLettersOnly(event.target.value))}
                            placeholder="e.g. Bruno"
                            aria-invalid={!!errors.petName}
                          />
                          <FieldError field="petName" />
                        </div>
                        <div>
                          <Label htmlFor="pet-breed-svc">Breed *</Label>
                          <Input
                            id="pet-breed-svc"
                            value={form.petBreed}
                            onChange={(event) => update("petBreed", sanitizeLettersOnly(event.target.value))}
                            placeholder="e.g. Labrador"
                            aria-invalid={!!errors.petBreed}
                          />
                          <FieldError field="petBreed" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="owner-name">Your Name *</Label>
                          <Input
                            id="owner-name"
                            value={form.ownerName}
                            onChange={(event) => update("ownerName", sanitizeLettersOnly(event.target.value))}
                            placeholder="Your full name"
                            aria-invalid={!!errors.ownerName}
                          />
                          <FieldError field="ownerName" />
                        </div>
                        <div>
                          <Label htmlFor="owner-phone">Phone Number *</Label>
                          <Input
                            id="owner-phone"
                            type="tel"
                            inputMode="numeric"
                            maxLength={10}
                            value={form.ownerPhone}
                            onChange={(event) => update("ownerPhone", sanitizePhoneNumber(event.target.value))}
                            placeholder="9876543210"
                            aria-invalid={!!errors.ownerPhone}
                          />
                          <FieldError field="ownerPhone" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="pet-notes-svc">Special Notes (optional)</Label>
                        <Input
                          id="pet-notes-svc"
                          value={form.notes}
                          onChange={(event) => update("notes", event.target.value)}
                          placeholder="Allergies, temperament, special requests..."
                        />
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="text-center py-6" role="status">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="w-14 h-14 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4"
                      >
                        <Check className="w-7 h-7 text-success" aria-hidden="true" />
                      </motion.div>
                      <h3 className="text-lg font-bold text-foreground mb-2">Appointment Requested!</h3>
                      <div className="text-sm text-muted-foreground space-y-1 mb-6 text-left max-w-sm mx-auto">
                        <p><strong>Package:</strong> {form.package}</p>
                        <p><strong>Branch:</strong> Kacharakanahalli</p>
                        <p><strong>Date:</strong> {dateStr} at {form.time}</p>
                        <p><strong>Pet:</strong> {form.petName} ({form.petBreed})</p>
                        <p><strong>Name:</strong> {form.ownerName}</p>
                        <p><strong>Phone:</strong> {form.ownerPhone}</p>
                        {form.notes && <p><strong>Notes:</strong> {form.notes}</p>}
                      </div>
                      <p className="text-sm text-muted-foreground mb-6">Confirm your appointment via WhatsApp:</p>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button className="bg-success hover:bg-success/90 text-white" asChild>
                          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Confirm on WhatsApp
                          </a>
                        </Button>
                        <Button variant="outline" asChild>
                          <Link to="/">Back to Home</Link>
                        </Button>
                      </div>
                    </div>
                  )}
                </div>

                {step < 3 && (
                  <div className="flex justify-between mt-8">
                    <Button
                      variant="outline"
                      onClick={() => {
                        setErrors({});
                        setStep(Math.max(0, step - 1));
                      }}
                      disabled={step === 0}
                    >
                      <ArrowLeft className="w-4 h-4 mr-1" /> Back
                    </Button>
                    <Button onClick={handleNext}>
                      {step === 2 ? "Confirm" : "Next"} <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BookServices;
