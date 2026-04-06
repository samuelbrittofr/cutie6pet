import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/917947419026?text=Hi%20Cutie%206%20Pet!%20I%27d%20like%20to%20book%20a%20grooming%20appointment%20for%20my%20pet.%20%F0%9F%90%BE";

const WhatsAppButton = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[hsl(142_70%_45%)] hover:bg-[hsl(142_70%_40%)] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="w-7 h-7" />
  </a>
);

export default WhatsAppButton;
