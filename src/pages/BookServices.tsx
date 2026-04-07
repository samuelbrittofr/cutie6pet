import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowLeft,
  ArrowRight,
  CalendarIcon,
  Check,
  MessageCircle,
  PawPrint,
} from "lucide-react";
import { motion } from "framer-motion";
import { addMonths, format, startOfDay } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const steps = ["Package", "Date & Time", "Your Details", "Confirmation"];

type PetType = "Dog" | "Cat";
type BreedScope = "all" | "small" | "large";

type GroomingPackage = {
  name: string;
  price: string;
  petType: PetType;
  breedScope: BreedScope;
};

type FormData = {
  package: string;
  date: Date | undefined;
  time: string;
  petName: string;
  petBreed: string;
  petBreedChoice: string;
  petType: PetType;
  ownerName: string;
  ownerPhone: string;
  notes: string;
};

const groomingPackages: GroomingPackage[] = [
  { name: "Small Breed", price: "Rs. 1,200", petType: "Dog", breedScope: "small" },
  {
    name: "Lottery Small Dog Package",
    price: "Rs. 1,450",
    petType: "Dog",
    breedScope: "small",
  },
  { name: "Large Breed", price: "Rs. 1,950", petType: "Dog", breedScope: "large" },
  { name: "Hair Cut Package", price: "Rs. 1,800", petType: "Dog", breedScope: "all" },
  { name: "Basic Grooming", price: "Rs. 1,000", petType: "Cat", breedScope: "all" },
  { name: "Hair Cut Package", price: "Rs. 1,500", petType: "Cat", breedScope: "all" },
  { name: "Zero Cut Package", price: "Rs. 1,800", petType: "Cat", breedScope: "all" },
];

const allDogBreeds = [
  "Labrador",
  "Golden Retriever",
  "German Shepherd",
  "Beagle",
  "Rottweiler",
  "Shih Tzu",
  "Pomeranian",
  "Cocker Spaniel",
  "Boxer",
  "Siberian Husky",
  "Pug",
  "Indie",
  "Great Dane",
  "Dachshund",
  "Doberman",
  "Tibetan Mastiff",
  "Rajapalayam",
  "Poodle",
  "Basset Hound",
  "Gaddi Kutta",
  "Bullmastiff",
  "Saint Bernard",
  "Chow Chow",
  "Border Collie",
  "Alaskan Malamute",
  "Kanni",
  "Jonangi",
  "Pandikona",
  "Chippiparai",
  "Banjara Hound",
  "Other",
];

const smallDogBreeds = [
  "Beagle",
  "Shih Tzu",
  "Pomeranian",
  "Pug",
  "Dachshund",
  "Other",
];

const largeDogBreeds = [
  "Labrador",
  "Golden Retriever",
  "German Shepherd",
  "Rottweiler",
  "Boxer",
  "Siberian Husky",
  "Great Dane",
  "Doberman",
  "Tibetan Mastiff",
  "Rajapalayam",
  "Gaddi Kutta",
  "Bullmastiff",
  "Saint Bernard",
  "Chow Chow",
  "Alaskan Malamute",
  "Other",
];

const catBreeds = [
  "Spotted Cat",
  "Bengal Cat",
  "Bombay Cat",
  "Maine Coon",
  "Persian Cat",
  "Siamese Cat",
  "Himalayan Cat",
  "Abyssinian",
  "Sphynx Cat",
  "Birman Cat",
  "Oriental Shorthair",
  "Turkish Van",
  "Ragdoll Cat",
  "Tonkinese Cat",
  "British Shorthair",
  "Scottish Fold",
  "Devon Rex",
  "Egyptian Mau",
  "Russian Blue",
  "Khao Manee",
  "Balinese",
  "Cornish Rex",
  "Singapura",
  "Manx",
  "Other",
];

const times = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
  "8:00 PM",
  "9:00 PM",
];

const lettersOnlyPattern = /^[A-Za-z\s]+$/;

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
    petBreedChoice: "",
    petType: "Dog",
    ownerName: "",
    ownerPhone: "",
    notes: "",
  });
  const { toast } = useToast();

  const today = startOfDay(new Date());
  const maxBookingDate = startOfDay(addMonths(today, 4));
  const isOtherBreed = form.petBreedChoice === "Other";
  const selectedPackage = useMemo(
    () =>
      groomingPackages.find(
        (pkg) => pkg.name === form.package && pkg.petType === form.petType,
      ),
    [form.package, form.petType],
  );
  const breedOptions = useMemo(() => {
    if (form.petType === "Cat") {
      return catBreeds;
    }

    if (selectedPackage?.breedScope === "small") {
      return smallDogBreeds;
    }

    if (selectedPackage?.breedScope === "large") {
      return largeDogBreeds;
    }

    return allDogBreeds;
  }, [form.petType, selectedPackage]);
  const breedHelperText = useMemo(() => {
    if (form.petType === "Cat") {
      return "Only cat breeds are shown for cat grooming packages.";
    }

    if (selectedPackage?.breedScope === "small") {
      return "This package is only for small dog breeds, so only small-breed options are shown here. If your dog is not listed, please choose the correct package instead.";
    }

    if (selectedPackage?.breedScope === "large") {
      return "This package is only for large dog breeds, so only large-breed options are shown here. If your dog is not listed, please choose the correct package instead.";
    }

    return "Choose your dog's breed from the dropdown. If you don't see it, select Other.";
  }, [form.petType, selectedPackage]);
  const dogPackages = groomingPackages.filter((pkg) => pkg.petType === "Dog");
  const catPackages = groomingPackages.filter((pkg) => pkg.petType === "Cat");

  const update = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setForm((current) => ({ ...current, [key]: value }));

    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  };

  const validateStep = () => {
    const nextErrors: Record<string, string> = {};

    if (step === 0 && !form.package) {
      nextErrors.package = "Please select a package.";
    }

    if (step === 1) {
      if (!form.date) nextErrors.date = "Please select a date.";
      if (!form.time) nextErrors.time = "Please select a time.";
    }

    if (step === 2) {
      if (!form.petName.trim()) {
        nextErrors.petName = "Pet name is required.";
      } else if (!lettersOnlyPattern.test(form.petName.trim())) {
        nextErrors.petName = "Pet name should only contain letters.";
      }

      if (!form.petBreed.trim()) {
        nextErrors.petBreed = "Breed is required.";
      } else if (!lettersOnlyPattern.test(form.petBreed.trim())) {
        nextErrors.petBreed = "Breed should only contain letters.";
      }

      if (!form.ownerName.trim()) {
        nextErrors.ownerName = "Your name is required.";
      } else if (!lettersOnlyPattern.test(form.ownerName.trim())) {
        nextErrors.ownerName = "Your name should only contain letters.";
      }

      if (!form.ownerPhone.trim()) {
        nextErrors.ownerPhone = "Phone number is required.";
      } else if (form.ownerPhone.length !== 10) {
        nextErrors.ownerPhone = "Enter a valid 10-digit phone number.";
      }
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
    if (validateStep()) {
      setStep((current) => current + 1);
    }
  };

  const FieldError = ({ field }: { field: string }) =>
    errors[field] ? (
      <p className="mt-1 text-sm text-destructive" role="alert">
        {errors[field]}
      </p>
    ) : null;

  const dateStr = form.date ? format(form.date, "PPP") : "";
  const whatsappLines = [
    "Hi Cutie 6 Pet! I'd like to confirm my booking:",
    "",
    `Package: ${form.package}`,
    `Pet Type: ${form.petType}`,
    "Branch: Kacharakanahalli",
    `Date: ${dateStr}`,
    `Time: ${form.time}`,
    `Pet: ${form.petName} (${form.petBreed})`,
    `Name: ${form.ownerName}`,
    `Phone: ${form.ownerPhone}`,
  ];

  if (form.notes) {
    whatsappLines.push(`Notes: ${form.notes}`);
  }

  const whatsappMsg = whatsappLines.join("\n");
  const whatsappUrl = `https://wa.me/919901887525?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <div className="min-h-screen bg-background">
      <section className="border-b border-border py-10">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="mb-1 text-2xl font-bold text-foreground md:text-3xl">
              Book an Appointment
            </h1>
            <p className="text-sm text-muted-foreground">
              Schedule a grooming session at our Kacharakanahalli branch.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-10">
        <div className="container max-w-2xl">
          <div className="mb-8">
            <div className="mb-3 flex items-center justify-between">
              {steps.map((label, index) => (
                <div key={label} className="flex flex-1 flex-col items-center">
                  <div
                    className={cn(
                      "mb-1.5 flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-colors",
                      index < step
                        ? "bg-primary text-primary-foreground"
                        : index === step
                          ? "bg-primary text-primary-foreground ring-2 ring-primary/30 ring-offset-2"
                          : "bg-muted text-muted-foreground",
                    )}
                  >
                    {index < step ? <Check className="h-4 w-4" /> : index + 1}
                  </div>
                  <span
                    className={cn(
                      "text-center text-[10px] leading-tight sm:text-xs",
                      index <= step ? "font-medium text-primary" : "text-muted-foreground",
                    )}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
            <div className="h-1 overflow-hidden rounded-full bg-muted">
              <motion.div
                className="h-full rounded-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: `${(step / (steps.length - 1)) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="border shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">{steps[step]}</CardTitle>
              </CardHeader>
              <CardContent>
                <div aria-live="polite">
                  {step === 0 && (
                    <fieldset>
                      <legend className="sr-only">Select a grooming package</legend>
                      <div className="space-y-6">
                        {[
                          { title: "Dog Grooming", packages: dogPackages },
                          { title: "Cat Grooming", packages: catPackages },
                        ].map((group) => (
                          <div key={group.title} className="space-y-3">
                            <div>
                              <h3 className="text-sm font-semibold text-foreground">{group.title}</h3>
                              <p className="text-xs text-muted-foreground">
                                Pick the right package so the breed list and pricing stay accurate.
                              </p>
                            </div>
                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                              {group.packages.map((pkg) => {
                                const isSelected =
                                  form.package === pkg.name && form.petType === pkg.petType;

                                return (
                                  <button
                                    key={`${pkg.petType}-${pkg.name}`}
                                    onClick={() => {
                                      update("package", pkg.name);
                                      update("petType", pkg.petType);
                                      update("petBreed", "");
                                      update("petBreedChoice", "");
                                    }}
                                    aria-pressed={isSelected}
                                    className={cn(
                                      "rounded-lg border p-4 text-left transition-all",
                                      isSelected
                                        ? "border-primary bg-primary/5 ring-1 ring-primary/30"
                                        : "border-border hover:border-muted-foreground/30",
                                    )}
                                  >
                                    <PawPrint className="mb-1 h-4 w-4 text-primary" aria-hidden="true" />
                                    <p className="text-sm font-medium text-foreground">{pkg.name}</p>
                                    <p className="text-xs text-muted-foreground">
                                      {pkg.price} · {pkg.petType}
                                    </p>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
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
                              className={cn(
                                "w-full justify-start text-left font-normal",
                                !form.date && "text-muted-foreground",
                              )}
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
                              disabled={(date) => date < today || date > maxBookingDate}
                              initialFocus
                              className="pointer-events-auto p-3"
                            />
                          </PopoverContent>
                        </Popover>
                        <p className="mt-2 text-xs text-muted-foreground">
                          Appointments can be booked from today up to {format(maxBookingDate, "PPP")}.
                        </p>
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
                                "rounded-lg border px-3 py-2.5 text-xs font-medium transition-all",
                                form.time === time
                                  ? "border-primary bg-primary/5 text-primary ring-1 ring-primary/30"
                                  : "border-border text-foreground hover:border-muted-foreground/30",
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
                            onChange={(event) =>
                              update("petName", sanitizeLettersOnly(event.target.value))
                            }
                            placeholder="e.g. Bruno"
                            aria-invalid={!!errors.petName}
                          />
                          <FieldError field="petName" />
                        </div>

                        <div>
                          <Label>Breed *</Label>
                          <Select
                            value={form.petBreedChoice}
                            onValueChange={(value) => {
                              update("petBreedChoice", value);
                              update("petBreed", value === "Other" ? "" : value);
                            }}
                          >
                            <SelectTrigger className="h-11 rounded-lg border-border bg-background/80 text-foreground shadow-sm">
                              <SelectValue
                                placeholder={`Select a ${form.petType.toLowerCase()} breed`}
                              />
                            </SelectTrigger>
                            <SelectContent className="rounded-xl border-border bg-popover/95 shadow-xl backdrop-blur-sm">
                              {breedOptions.map((breed) => (
                                <SelectItem key={breed} value={breed} className="rounded-lg">
                                  {breed}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>

                          {isOtherBreed && (
                            <Input
                              className="mt-3"
                              value={form.petBreed}
                              onChange={(event) =>
                                update("petBreed", sanitizeLettersOnly(event.target.value))
                              }
                              placeholder={`Enter your ${form.petType.toLowerCase()}'s breed`}
                              aria-invalid={!!errors.petBreed}
                            />
                          )}

                          <p className="mt-2 text-xs text-muted-foreground">{breedHelperText}</p>
                          <FieldError field="petBreed" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="owner-name">Your Name *</Label>
                          <Input
                            id="owner-name"
                            value={form.ownerName}
                            onChange={(event) =>
                              update("ownerName", sanitizeLettersOnly(event.target.value))
                            }
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
                            onChange={(event) =>
                              update("ownerPhone", sanitizePhoneNumber(event.target.value))
                            }
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
                    <div className="py-6 text-center" role="status">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-success/10"
                      >
                        <Check className="h-7 w-7 text-success" aria-hidden="true" />
                      </motion.div>
                      <h3 className="mb-2 text-lg font-bold text-foreground">
                        Appointment Ready!
                      </h3>
                      <div className="mx-auto mb-6 max-w-sm space-y-1 text-left text-sm text-muted-foreground">
                        <p>
                          <strong>Package:</strong> {form.package}
                        </p>
                        <p>
                          <strong>Pet Type:</strong> {form.petType}
                        </p>
                        <p>
                          <strong>Branch:</strong> Kacharakanahalli
                        </p>
                        <p>
                          <strong>Date:</strong> {dateStr} at {form.time}
                        </p>
                        <p>
                          <strong>Pet:</strong> {form.petName} ({form.petBreed})
                        </p>
                        <p>
                          <strong>Name:</strong> {form.ownerName}
                        </p>
                        <p>
                          <strong>Phone:</strong> {form.ownerPhone}
                        </p>
                        {form.notes && (
                          <p>
                            <strong>Notes:</strong> {form.notes}
                          </p>
                        )}
                      </div>
                      <p className="mb-2 text-sm text-muted-foreground">
                        Continue by confirming your appointment on WhatsApp.
                      </p>
                      <p className="mb-6 text-sm font-semibold text-foreground">
                        Your booking will only be considered valid once it is confirmed on WhatsApp.
                      </p>
                      <div className="flex flex-col justify-center gap-3 sm:flex-row">
                        <Button className="bg-success text-white hover:bg-success/90" asChild>
                          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                            <MessageCircle className="mr-2 h-4 w-4" />
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
                  <div className="mt-8 flex justify-between">
                    <Button
                      variant="outline"
                      onClick={() => {
                        setErrors({});
                        setStep(Math.max(0, step - 1));
                      }}
                      disabled={step === 0}
                    >
                      <ArrowLeft className="mr-1 h-4 w-4" /> Back
                    </Button>
                    <Button onClick={handleNext}>
                      {step === 2 ? "Confirm" : "Next"} <ArrowRight className="ml-1 h-4 w-4" />
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
