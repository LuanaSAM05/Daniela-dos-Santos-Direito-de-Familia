import { 
  FaUsers, 
  FaHeartBroken, 
  FaChild, 
  FaHandHoldingUsd, 
  FaRing, 
  FaScroll,
  FaArrowRight 
} from "react-icons/fa";
import {
  ServicesSection,
  ServicesContainer,
  SectionHeader,
  SectionTag,
  SectionTitle,
  SectionSubtitle,
  ServicesGrid,
  ServiceCard,
  CardTop,
  IconBox,
  CardTitle,
  CardDescription,
  CardLink
} from "./styles";

export function Services() {
  const phone = "5562981575092";

  // Lista de serviços com as descrições exatas solicitadas
  const servicesList = [
    {
      id: 1,
      icon: <FaUsers />,
      title: "Direito de Família",
      description: "Atuação jurídica em questões relacionadas às relações familiares com acolhimento e estratégia.",
      query: "Direito de Família"
    },
    {
      id: 2,
      icon: <FaHeartBroken />,
      title: "Divórcio",
      description: "Orientação jurídica durante processos de divórcio, buscando conduzir cada etapa com responsabilidade.",
      query: "Divórcio"
    },
    {
      id: 3,
      icon: <FaChild />,
      title: "Guarda e convivência",
      description: "Orientação sobre questões relacionadas à guarda e convivência familiar, priorizando o bem-estar dos filhos.",
      query: "Guarda e convivência"
    },
    {
      id: 4,
      icon: <FaHandHoldingUsd />,
      title: "Pensão alimentícia",
      description: "Orientação jurídica relacionada a pedidos, revisão e questões envolvendo pensão alimentícia.",
      query: "Pensão alimentícia"
    },
    {
      id: 5,
      icon: <FaRing />,
      title: "União estável",
      description: "Orientação jurídica em questões relacionadas ao reconhecimento e dissolução de união estável.",
      query: "União estável"
    },
    {
      id: 6,
      icon: <FaScroll />,
      title: "Inventário e questões sucessórias",
      description: "Orientação em questões relacionadas à sucessão e organização patrimonial familiar.",
      query: "Inventário e sucessão"
    }
  ];

  return (
    <ServicesSection id="atuacao">
      <ServicesContainer>
        {/* Cabeçalho da Seção */}
        <SectionHeader>
          <SectionTag>Especialidades</SectionTag>
          <SectionTitle>Áreas de Atuação</SectionTitle>
          <SectionSubtitle>
            Atuação jurídica com foco em soluções éticas, estratégicas e personalizadas para você e sua família.
          </SectionSubtitle>
        </SectionHeader>

        {/* Grid de Cards dos Serviços */}
        <ServicesGrid>
          {servicesList.map((service) => {
            const customMessage = encodeURIComponent(`Olá, Daniela! Gostaria de uma orientação sobre ${service.query}.`);
            const serviceWhatsappUrl = `https://wa.me/${phone}?text=${customMessage}`;

            return (
              <ServiceCard key={service.id}>
                <CardTop>
                  <IconBox>{service.icon}</IconBox>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardTop>

                <CardLink href={serviceWhatsappUrl} target="_blank" rel="noopener noreferrer">
                  Consultar sobre este tema <span><FaArrowRight size={12} /></span>
                </CardLink>
              </ServiceCard>
            );
          })}
        </ServicesGrid>
      </ServicesContainer>
    </ServicesSection>
  );
}
