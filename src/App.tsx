import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
const Index = lazy(() => import("./pages/Index"));
const Services = lazy(() => import("./pages/Services"));
const Pricing = lazy(() => import("./pages/Pricing"));
const BookServices = lazy(() => import("./pages/BookServices"));
const BecomeGroomer = lazy(() => import("./pages/BecomeGroomer"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => (
  <BrowserRouter>
    <Header />
    <main className="min-h-screen pt-16">
      <Toaster />
      <Suspense fallback={<div className="min-h-[60vh] bg-background" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/locations" element={<Navigate to="/about" replace />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/book" element={<BookServices />} />
            <Route path="/become-a-groomer" element={<BecomeGroomer />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </Suspense>
    </main>
    <Footer />
    <WhatsAppButton />
  </BrowserRouter>
);

export default App;
