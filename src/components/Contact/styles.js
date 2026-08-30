import styled from "styled-components";

export const ContactSection = styled.section`
  padding: 100px 24px;
  background: radial-gradient(circle at 50% 50%, #132238 0%, #0B192C 100%);
  color: #FFFFFF;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 70px 20px;
  }
`;

export const ContactContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
`;

export const CTAWrapper = styled.div`
  text-align: center;
  max-width: 760px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
`;

export const CTATag = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: #C5A880;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const CTATitle = styled.h2`
  font-size: 42px;
  color: #FFFFFF;
  font-weight: 700;
  line-height: 1.2;

  span {
    color: #C5A880;
  }

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const CTAText = styled.p`
  font-size: 17px;
  color: #CBD5E1;
  line-height: 1.7;
  max-width: 640px;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: linear-gradient(135deg, #C5A880 0%, #B38E5D 100%);
  color: #0B192C;
  font-size: 16px;
  font-weight: 600;
  padding: 16px 36px;
  border-radius: 4px;
  text-decoration: none;
  margin-top: 10px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(197, 168, 128, 0.35);

  &:hover {
    background: linear-gradient(135deg, #D4AF37 0%, #C5A880 100%);
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(197, 168, 128, 0.5);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const ContactInfoCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;

  @media (max-width: 868px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const ContactInfoCard = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(197, 168, 128, 0.2);
  border-radius: 10px;
  padding: 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.3s ease;

  &:hover {
    border-color: #C5A880;
    background: rgba(197, 168, 128, 0.08);
  }
`;

export const InfoIconBox = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  background: rgba(197, 168, 128, 0.15);
  color: #C5A880;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  flex-shrink: 0;
`;

export const InfoTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const InfoLabel = styled.span`
  font-size: 12px;
  color: #94A3B8;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 500;
`;

export const InfoValue = styled.a`
  font-size: 15px;
  color: #FFFFFF;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #C5A880;
  }
`;

export const InfoValueText = styled.span`
  font-size: 15px;
  color: #FFFFFF;
  font-weight: 600;
`;
