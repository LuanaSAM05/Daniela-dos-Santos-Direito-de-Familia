import { FaWhatsapp } from "react-icons/fa";
import { FloatButton } from "./styles";

export function WhatsAppFloat() {
  const phone = "5562981575092";
  const message = encodeURIComponent("Olá, Daniela! Gostaria de saber mais sobre seu atendimento jurídico.");
  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <FloatButton 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Falar com a advogada Daniela no WhatsApp"
      title="Falar no WhatsApp"
    >
      <FaWhatsapp />
    </FloatButton>
  );
}
