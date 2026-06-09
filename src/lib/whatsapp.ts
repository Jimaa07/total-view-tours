export const WHATSAPP_PHONE = "50251082954";

export const getWhatsAppUrl = (message?: string) => {
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  if (typeof window !== "undefined") {
    const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
    if (!isMobile) {
      return `https://web.whatsapp.com/send?phone=${WHATSAPP_PHONE}${message ? `&text=${encodeURIComponent(message)}` : ""}`;
    }
  }
  return `https://wa.me/${WHATSAPP_PHONE}${text}`;
};
