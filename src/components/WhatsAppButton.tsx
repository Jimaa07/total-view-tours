import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/50251082954"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center"
      aria-label="Abrir chat de WhatsApp"
    >
      <MessageCircle size={28} fill="currentColor" />
    </a>
  );
};

export default WhatsAppButton;
