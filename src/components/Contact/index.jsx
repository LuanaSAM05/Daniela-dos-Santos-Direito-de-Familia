import { FaWhatsapp, FaLinkedinIn, FaMapMarkerAlt, FaShieldAlt } from "react-icons/fa";
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
  const phone = "5562981575092";
  const message = encodeURIComponent("Olá, Daniela! Gostaria de conversar sobre o meu caso e conhecer as possibilidades de atendimento.");
  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;
  const linkedinUrl = "https://www.linkedin.com/in/daniela-dos-santos-6a808230b";

  return (
    <ContactSection id="contato">
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
          {/* Card WhatsApp / Telefone */}
          <ContactInfoCard>
            <InfoIconBox>
              <FaWhatsapp />
            </InfoIconBox>
            <InfoTextGroup>
              <InfoLabel>Telefone / WhatsApp</InfoLabel>
              <InfoValue href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                (62) 9 8157-5092
              </InfoValue>
            </InfoTextGroup>
          </ContactInfoCard>

          {/* Card LinkedIn */}
          <ContactInfoCard>
            <InfoIconBox>
              <FaLinkedinIn />
            </InfoIconBox>
            <InfoTextGroup>
              <InfoLabel>Perfil Profissional</InfoLabel>
              <InfoValue href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                Daniela dos Santos
              </InfoValue>
            </InfoTextGroup>
          </ContactInfoCard>

          {/* Card OAB & Atuação */}
          <ContactInfoCard>
            <InfoIconBox>
              <FaShieldAlt />
            </InfoIconBox>
            <InfoTextGroup>
              <InfoLabel>Inscrição e Atuação</InfoLabel>
              <InfoValueText>
                72.756 OAB/GO • Goiânia
              </InfoValueText>
            </InfoTextGroup>
          </ContactInfoCard>
        </ContactInfoCards>
      </ContactContainer>
    </ContactSection>
  );
}
