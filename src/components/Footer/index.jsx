import { FaWhatsapp, FaLinkedinIn } from "react-icons/fa";

import { useScrollReveal } from "../../hooks/useScrollReveal";

import {
  FooterContainer,
  FooterContent,
  FooterTop,
  FooterBrand,
  FooterLogoInitials,
  FooterBrandInfo,
  FooterName,
  FooterSub,
  FooterLocation,
  FooterSocialLinks,
  SocialIconButton,
  FooterDivider,
  FooterBottom,
  CopyrightText
} from "./styles";

export function Footer() {
  const { ref, isVisible } = useScrollReveal();

  const phone = "5562981575092";
  const message = encodeURIComponent("Olá, Daniela! Gostaria de conversar sobre meu caso.");
  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;
  const linkedinUrl = "https://www.linkedin.com/in/daniela-dos-santos-6a808230b";

  return (
    <FooterContainer ref={ref} className={isVisible ? "is-visible" : ""}>
      <FooterContent>
        {/* Topo do Footer */}
        <FooterTop>
          {/* Identificação da advogada */}
          <FooterBrand>
            <FooterLogoInitials>DS</FooterLogoInitials>
            <FooterBrandInfo>
              <FooterName>Daniela dos Santos</FooterName>
              <FooterSub>Advogada • OAB/GO 72.756</FooterSub>
              <FooterLocation>Goiânia/GO e região metropolitana</FooterLocation>
            </FooterBrandInfo>
          </FooterBrand>

          {/* Redes e Contato Rápido */}
          <FooterSocialLinks>
            <SocialIconButton 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Abrir conversa no WhatsApp"
              title="WhatsApp"
            >
              <FaWhatsapp />
            </SocialIconButton>

            <SocialIconButton 
              href={linkedinUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Acessar perfil no LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedinIn />
            </SocialIconButton>
          </FooterSocialLinks>
        </FooterTop>

        <FooterDivider />

        {/* Base do Footer */}
        <FooterBottom>
          <CopyrightText>
            © 2026 Daniela dos Santos. Todos os direitos reservados.
            <br />
            Desenvolvido por Luana Melo.
          </CopyrightText>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
}