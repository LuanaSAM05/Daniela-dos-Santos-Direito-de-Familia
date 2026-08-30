import { FaMapMarkerAlt, FaCheckCircle, FaLaptopHouse, FaHandshake } from "react-icons/fa";
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
  return (
    <LocationSection>
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
          <RegionBadge>
            <span><FaCheckCircle /></span> Goiânia - GO
          </RegionBadge>
          <RegionBadge>
            <span><FaCheckCircle /></span> Toda a Região Metropolitana
          </RegionBadge>
          <RegionBadge>
            <span><FaLaptopHouse /></span> Atendimento Online e Presencial
          </RegionBadge>
          <RegionBadge>
            <span><FaHandshake /></span> Horários Flexíveis
          </RegionBadge>
        </RegionBadgeContainer>
      </LocationContainer>
    </LocationSection>
  );
}
