import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Index from "./pages/Index";
import Locations from "./pages/Locations";
import LocationDetail from "./pages/LocationDetail";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import BookMeetGreet from "./pages/BookMeetGreet";
import BookServices from "./pages/BookServices";
import About from "./pages/About";
import Franchise from "./pages/Franchise";
import FranchiseInquiry from "./pages/FranchiseInquiry";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PlaceholderPage from "./pages/PlaceholderPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/locations/:id" element={<LocationDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:service" element={<ServiceDetail />} />
            <Route path="/book/meet-greet" element={<BookMeetGreet />} />
            <Route path="/book/services" element={<BookServices />} />
            <Route path="/about" element={<About />} />
            <Route path="/franchise" element={<Franchise />} />
            <Route path="/franchise/inquiry" element={<FranchiseInquiry />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/app" element={<PlaceholderPage />} />
            <Route path="/dashboard" element={<PlaceholderPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
