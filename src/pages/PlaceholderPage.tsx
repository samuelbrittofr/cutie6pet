import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Construction } from "lucide-react";

const PlaceholderPage = () => {
  const location = useLocation();
  const pageName = location.pathname.split("/").filter(Boolean).map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(" / ") || "Page";

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <Construction className="w-16 h-16 text-primary mx-auto mb-6" />
        <h1 className="text-3xl font-display font-bold mb-3">{pageName}</h1>
        <p className="text-muted-foreground mb-8">This page is coming soon!</p>
        <Button asChild>
          <Link to="/"><ArrowLeft className="w-4 h-4 mr-2" /> Back to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default PlaceholderPage;
