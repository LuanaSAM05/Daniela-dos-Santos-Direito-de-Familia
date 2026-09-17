import { FaMapMarkerAlt, FaCheckCircle, FaLaptopHouse, FaHandshake } from "react-icons/fa";

import { useScrollReveal } from "../../hooks/useScrollReveal";

import {
  LocationSection,
  LocationContainer,
  LocationIconBox,
  LocationTitle,
  LocationText,
  RegionBadgeContainer,
  RegionBadge
} from "./styles";

export function Location() {
  const { ref, isVisible } = useScrollReveal();

  const badges = [
    { id: 1, icon: <FaCheckCircle />, text: "Goiânia - GO" },
    { id: 2, icon: <FaCheckCircle />, text: "Toda a Região Metropolitana" },
    { id: 3, icon: <FaLaptopHouse />, text: "Atendimento Online e Presencial" },
    { id: 4, icon: <FaHandshake />, text: "Horários Flexíveis" }
  ];

  return (
    <LocationSection ref={ref} className={isVisible ? "is-visible" : ""}>
      <LocationContainer>
        {/* Ícone de Localização */}
        <LocationIconBox>
          <FaMapMarkerAlt />
        </LocationIconBox>

        {/* Título e Texto da Seção */}
        <LocationTitle>Perto de você nos momentos que importam</LocationTitle>
        
        <LocationText>
          Atendimento em <strong>Goiânia/GO</strong> e <strong>região metropolitana</strong>, com escuta, acolhimento e orientação jurídica personalizada.
        </LocationText>

        {/* Badges de abrangência */}
        <RegionBadgeContainer>
          {badges.map((badge, index) => (
            <RegionBadge key={badge.id} $delay={index * 80}>
              <span>{badge.icon}</span> {badge.text}
            </RegionBadge>
          ))}
        </RegionBadgeContainer>
      </LocationContainer>
    </LocationSection>
  );
}