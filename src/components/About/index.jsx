import {
  FaGraduationCap,
  FaIdCard,
  FaHeart,
  FaMapMarkerAlt,
  FaWhatsapp
} from "react-icons/fa";

import aboutPhoto from "../../assets/daniela-hero.jpeg";

import { useScrollReveal } from "../../hooks/useScrollReveal";

import {
  AboutSection,
  AboutContainer,
  AboutImageWrapper,
  AboutImage,
  AboutContent,
  SectionTag,
  AboutTitle,
  AboutText,
  HighlightBox,
  HighlightText,
  CredentialsGrid,
  CredentialCard,
  CredentialIcon,
  CredentialInfo,
  CredentialTitle,
  CredentialSub,
  AboutButton
} from "./styles";

export function About() {
  const { ref, isVisible } = useScrollReveal();

  const phone = "5562981575092";

  const message = encodeURIComponent(
    "Olá, Daniela! Gostaria de conversar sobre meu caso."
  );

  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <AboutSection id="sobre" ref={ref} className={isVisible ? "is-visible" : ""}>
      <AboutContainer>
        <AboutImageWrapper>
          <AboutImage
            src={aboutPhoto}
            alt="Daniela dos Santos no exercício da advocacia"
          />
        </AboutImageWrapper>

        <AboutContent>
          <SectionTag>Conheça a Advogada</SectionTag>

          <AboutTitle>Sobre Daniela</AboutTitle>

          <AboutText $delay={260}>
            Sou advogada, formada em Direito pela{" "}
            <strong>UniGoiás em 2020</strong> e atuante na advocacia desde 2024,
            com especialização em <strong>Direito de Família</strong>. Minha
            trajetória profissional é guiada pelo compromisso com uma atuação
            ética, humanizada e responsável, especialmente em questões que
            envolvem relações familiares e momentos importantes na vida dos
            meus clientes.
          </AboutText>

          <HighlightBox>
            <HighlightText>
              "Acredito que a advocacia vai além da aplicação da lei: é também
              acolher, orientar e buscar soluções jurídicas com sensibilidade,
              responsabilidade e estratégia."
            </HighlightText>
          </HighlightBox>

          <AboutText $delay={400}>
            Busco oferecer um atendimento próximo e individualizado,
            compreendendo as particularidades de cada caso e trabalhando para
            alcançar as melhores soluções dentro das necessidades de cada
            cliente.
          </AboutText>

          <AboutText $delay={440}>
            Estou em constante aperfeiçoamento profissional e comprometida com
            uma atuação jurídica séria, ética e dedicada, construindo minha
            carreira com responsabilidade e paixão pelo Direito.
          </AboutText>

          <CredentialsGrid>
            <CredentialCard $delay={0}>
              <CredentialIcon>
                <FaIdCard />
              </CredentialIcon>

              <CredentialInfo>
                <CredentialTitle>OAB/GO 72.756</CredentialTitle>
                <CredentialSub>Registro Oficial Regular</CredentialSub>
              </CredentialInfo>
            </CredentialCard>

            <CredentialCard $delay={80}>
              <CredentialIcon>
                <FaGraduationCap />
              </CredentialIcon>

              <CredentialInfo>
                <CredentialTitle>UniGoiás (2020)</CredentialTitle>
                <CredentialSub>Bacharel em Direito</CredentialSub>
              </CredentialInfo>
            </CredentialCard>

            <CredentialCard $delay={160}>
              <CredentialIcon>
                <FaHeart />
              </CredentialIcon>

              <CredentialInfo>
                <CredentialTitle>Direito de Família</CredentialTitle>
                <CredentialSub>Atuação Especializada</CredentialSub>
              </CredentialInfo>
            </CredentialCard>

            <CredentialCard $delay={240}>
              <CredentialIcon>
                <FaMapMarkerAlt />
              </CredentialIcon>

              <CredentialInfo>
                <CredentialTitle>Goiânia / GO</CredentialTitle>
                <CredentialSub>E Região Metropolitana</CredentialSub>
              </CredentialInfo>
            </CredentialCard>
          </CredentialsGrid>

        </AboutContent>
      </AboutContainer>
    </AboutSection>
  );
}