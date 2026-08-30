import { FaWhatsapp, FaBalanceScale, FaAward } from "react-icons/fa";
import lawyerPhoto from "../../assets/daniela-about.jpeg";

import {
  HeroSection,
  HeroContainer,
  HeroContent,
  HeroBadge,
  HeroTitle,
  HeroSubtitle,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
  HeroImageContainer,
  ImageCard,
  LawyerImage,
  FloatingInfoBox,
  FloatingIcon,
  FloatingTextGroup,
  FloatingTitle,
  FloatingSubtitle
} from "./styles";

export function Hero() {
  const phone = "5562981575092";

  const message = encodeURIComponent(
    "Olá, Daniela! Gostaria de agendar uma conversa sobre meu caso."
  );

  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <HeroSection id="inicio">
      <HeroContainer>
        <HeroContent>
          <HeroBadge>
            <FaAward />
            Advocacia Especializada • OAB/GO 72.756
          </HeroBadge>

          <HeroTitle>
            Advocacia com acolhimento, <span>estratégia</span> e responsabilidade.
          </HeroTitle>

          <HeroSubtitle>
            Atuação jurídica especializada em Direito de Família, com atendimento
            próximo e individualizado.
          </HeroSubtitle>

          <ButtonGroup>
            <PrimaryButton
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={18} />
              Agende uma conversa
            </PrimaryButton>

            <SecondaryButton href="#sobre">
              Conheça meu trabalho
            </SecondaryButton>
          </ButtonGroup>
        </HeroContent>

        <HeroImageContainer>
          <ImageCard>
            <LawyerImage
              src={lawyerPhoto}
              alt="Dra. Daniela dos Santos - Advogada"
            />

            <FloatingInfoBox>
              <FloatingIcon>
                <FaBalanceScale />
              </FloatingIcon>

              <FloatingTextGroup>
                <FloatingTitle>Direito de Família</FloatingTitle>
                <FloatingSubtitle>
                  Atendimento ético e humanizado
                </FloatingSubtitle>
              </FloatingTextGroup>
            </FloatingInfoBox>
          </ImageCard>
        </HeroImageContainer>
      </HeroContainer>
    </HeroSection>
  );
}