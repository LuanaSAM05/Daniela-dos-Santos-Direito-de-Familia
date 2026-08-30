import styled from "styled-components";

export const ServicesSection = styled.section`
  padding: 100px 24px;
  background-color: #F8FAFC;
  position: relative;

  @media (max-width: 768px) {
    padding: 70px 20px;
  }
`;

export const ServicesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionHeader = styled.div`
  text-align: center;
  max-width: 700px;
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
  color: #B38E5D;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const SectionTitle = styled.h2`
  font-size: 38px;
  color: #0B192C;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

export const SectionSubtitle = styled.p`
  font-size: 16px;
  color: #64748B;
  line-height: 1.6;
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  width: 100%;

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const ServiceCard = styled.div`
  background-color: #FFFFFF;
  border-radius: 12px;
  padding: 36px 28px;
  border: 1px solid #E2E8F0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, #C5A880, #B38E5D);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(11, 25, 44, 0.08);
    border-color: rgba(197, 168, 128, 0.5);

    &::before {
      opacity: 1;
    }
  }
`;

export const CardTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const IconBox = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 10px;
  background-color: rgba(197, 168, 128, 0.12);
  color: #B38E5D;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  transition: all 0.3s ease;

  ${ServiceCard}:hover & {
    background-color: #0B192C;
    color: #C5A880;
  }
`;

export const CardTitle = styled.h3`
  font-size: 20px;
  color: #0B192C;
  font-weight: 600;
`;

export const CardDescription = styled.p`
  font-size: 14.5px;
  color: #475569;
  line-height: 1.7;
`;

export const CardLink = styled.a`
  margin-top: 24px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13.5px;
  font-weight: 600;
  color: #0B192C;
  text-decoration: none;
  transition: color 0.2s ease;

  span {
    color: #B38E5D;
    transition: transform 0.2s ease;
  }

  &:hover {
    color: #B38E5D;

    span {
      transform: translateX(4px);
    }
  }
`;
