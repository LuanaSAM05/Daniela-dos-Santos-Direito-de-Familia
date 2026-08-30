import styled from "styled-components";

export const WhyChooseSection = styled.section`
  padding: 100px 24px;
  background-color: #0B192C;
  color: #FFFFFF;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 10%;
    right: 10%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(197, 168, 128, 0.3), transparent);
  }

  @media (max-width: 768px) {
    padding: 70px 20px;
  }
`;

export const WhyChooseContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionHeader = styled.div`
  text-align: center;
  max-width: 720px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const SectionTag = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: #C5A880;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const SectionTitle = styled.h2`
  font-size: 38px;
  color: #FFFFFF;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

export const SectionSubtitle = styled.p`
  font-size: 16px;
  color: #94A3B8;
  line-height: 1.6;
`;

export const DifferentialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const DifferentialCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(197, 168, 128, 0.2);
  border-radius: 12px;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(197, 168, 128, 0.06);
    border-color: #C5A880;
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  }
`;

export const CardIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  background-color: rgba(197, 168, 128, 0.12);
  color: #C5A880;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  border: 1px solid rgba(197, 168, 128, 0.3);
`;

export const CardTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 20px;
  color: #FFFFFF;
  font-weight: 600;
`;

export const CardText = styled.p`
  font-size: 14.5px;
  color: #CBD5E1;
  line-height: 1.7;
`;
