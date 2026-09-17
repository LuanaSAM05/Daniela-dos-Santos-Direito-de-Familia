import { FaWhatsapp, FaLinkedinIn, FaMapMarkerAlt, FaShieldAlt } from "react-icons/fa";

import { useScrollReveal } from "../../hooks/useScrollReveal";

import {
  ContactSection,
  ContactContainer,
  CTAWrapper,
  CTATag,
  CTATitle,
  CTAText,
  CTAButton,
  ContactInfoCards,
  ContactInfoCard,
  InfoIconBox,
  InfoTextGroup,
  InfoLabel,
  InfoValue,
  InfoValueText
} from "./styles";

export function Contact() {
  const { ref, isVisible } = useScrollReveal();

  const phone = "5562981575092";
  const message = encodeURIComponent("Olá, Daniela! Gostaria de conversar sobre o meu caso e conhecer as possibilidades de atendimento.");
  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;
  const linkedinUrl = "https://www.linkedin.com/in/daniela-dos-santos-6a808230b";

  const infoCards = [
    {
      id: 1,
      icon: <FaWhatsapp />,
      label: "Telefone / WhatsApp",
      value: <InfoValue href={whatsappUrl} target="_blank" rel="noopener noreferrer">(62) 9 8157-5092</InfoValue>
    },
    {
      id: 2,
      icon: <FaLinkedinIn />,
      label: "Perfil Profissional",
      value: <InfoValue href={linkedinUrl} target="_blank" rel="noopener noreferrer">Daniela dos Santos</InfoValue>
    },
    {
      id: 3,
      icon: <FaShieldAlt />,
      label: "Inscrição e Atuação",
      value: <InfoValueText>72.756 OAB/GO • Goiânia</InfoValueText>
    }
  ];

  return (
    <ContactSection id="contato" ref={ref} className={isVisible ? "is-visible" : ""}>
      <ContactContainer>
        {/* Bloco de Chamada Principal (CTA) */}
        <CTAWrapper>
          <CTATag>Atendimento Personalizado</CTATag>
          
          <CTATitle>
            Precisa de <span>orientação jurídica</span>?
          </CTATitle>
          
          <CTAText>
            Entre em contato para conversar sobre o seu caso e conhecer as possibilidades de atendimento com sigilo, empatia e estratégia.
          </CTAText>

          <CTAButton href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={20} />
            Falar pelo WhatsApp
          </CTAButton>
        </CTAWrapper>

        {/* Cards de Informações Rápidas */}
        <ContactInfoCards>
          {infoCards.map((card, index) => (
            <ContactInfoCard key={card.id} $delay={index * 100}>
              <InfoIconBox>{card.icon}</InfoIconBox>
              <InfoTextGroup>
                <InfoLabel>{card.label}</InfoLabel>
                {card.value}
              </InfoTextGroup>
            </ContactInfoCard>
          ))}
        </ContactInfoCards>
      </ContactContainer>
    </ContactSection>
  );
}