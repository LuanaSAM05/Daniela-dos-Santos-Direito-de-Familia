import { FaHeart, FaUserCheck, FaBalanceScale, FaChessKnight } from "react-icons/fa";
import {
  WhyChooseSection,
  WhyChooseContainer,
  SectionHeader,
  SectionTag,
  SectionTitle,
  SectionSubtitle,
  DifferentialsGrid,
  DifferentialCard,
  CardIcon,
  CardTitle,
  CardText
} from "./styles";

export function WhyChoose() {
  const differentials = [
    {
      id: 1,
      icon: <FaHeart />,
      title: "Atendimento humanizado",
      text: "Cada situação é analisada considerando as particularidades, sentimentos e necessidades de cada cliente."
    },
    {
      id: 2,
      icon: <FaUserCheck />,
      title: "Atendimento individualizado",
      text: "Busca compreender a fundo cada caso antes de apresentar os caminhos jurídicos e estratégias possíveis."
    },
    {
      id: 3,
      icon: <FaBalanceScale />,
      title: "Ética e responsabilidade",
      text: "Atuação pautada pela transparência, seriedade e pelo compromisso com a ética profissional em cada etapa."
    },
    {
      id: 4,
      icon: <FaChessKnight />,
      title: "Estratégia jurídica",
      text: "Busca contínua por soluções jurídicas inteligentes, adequadas e seguras para a proteção dos seus direitos."
    }
  ];

  return (
    <WhyChooseSection id="diferenciais">
      <WhyChooseContainer>
        {/* Cabeçalho da Seção */}
        <SectionHeader>
          <SectionTag>Nossos Valores</SectionTag>
          <SectionTitle>Uma advocacia mais próxima de você</SectionTitle>
          <SectionSubtitle>
            Pilares que guiam uma atuação jurídica séria, acolhedora e focada no melhor interesse do cliente.
          </SectionSubtitle>
        </SectionHeader>

        {/* Grid com os 4 diferenciais */}
        <DifferentialsGrid>
          {differentials.map((item) => (
            <DifferentialCard key={item.id}>
              <CardIcon>{item.icon}</CardIcon>
              <CardTitle>{item.title}</CardTitle>
              <CardText>{item.text}</CardText>
            </DifferentialCard>
          ))}
        </DifferentialsGrid>
      </WhyChooseContainer>
    </WhyChooseSection>
  );
}
