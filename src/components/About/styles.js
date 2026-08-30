import styled from "styled-components";

export const AboutSection = styled.section`
  padding: 100px 24px;
  background-color: #FFFFFF;
  position: relative;

  @media (max-width: 768px) {
    padding: 70px 20px;
  }
`;

export const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

export const AboutImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    right: -15px;
    width: 100%;
    height: 100%;
    border: 2px solid #C5A880;
    border-radius: 12px;
    z-index: 1;

    @media (max-width: 480px) {
      display: none;
    }
  }
`;

export const AboutImage = styled.img`
  width: 100%;
  max-width: 440px;
  height: 520px;
  object-fit: cover;
  object-position: center 20%;
  border-radius: 12px;
  position: relative;
  z-index: 2;
  box-shadow: 0 15px 35px rgba(11, 25, 44, 0.12);

  @media (max-width: 768px) {
    height: 400px;
  }

  @media (max-width: 480px) {
    height: 320px;
  }
`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SectionTag = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: #B38E5D;
  text-transform: uppercase;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: '';
    width: 24px;
    height: 2px;
    background-color: #B38E5D;
  }
`;

export const AboutTitle = styled.h2`
  font-size: 38px;
  color: #0B192C;
  font-weight: 700;
  line-height: 1.25;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

export const AboutText = styled.p`
  font-size: 16px;
  color: #475569;
  line-height: 1.8;
`;

export const HighlightBox = styled.div`
  background-color: #F8FAFC;
  border-left: 3px solid #C5A880;
  padding: 16px 20px;
  border-radius: 0 8px 8px 0;
  margin: 8px 0;
`;

export const HighlightText = styled.p`
  font-family: 'Playfair Display', serif;
  font-size: 17px;
  font-style: italic;
  color: #0B192C;
  line-height: 1.6;
`;

export const CredentialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 10px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const CredentialCard = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: #F8FAFC;
  padding: 14px 16px;
  border-radius: 8px;
  border: 1px solid #E2E8F0;
  transition: all 0.3s ease;

  &:hover {
    border-color: #C5A880;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(197, 168, 128, 0.15);
  }
`;

export const CredentialIcon = styled.div`
  color: #C5A880;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CredentialInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CredentialTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #0B192C;
`;

export const CredentialSub = styled.span`
  font-size: 12px;
  color: #64748B;
`;

export const AboutButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background-color: #0B192C;
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 600;
  padding: 14px 26px;
  border-radius: 4px;
  text-decoration: none;
  width: fit-content;
  margin-top: 10px;
  border: 1px solid transparent;
  transition: all 0.3s ease;

  &:hover {
    background-color: #152A4A;
    border-color: #C5A880;
    color: #C5A880;
    transform: translateY(-2px);
  }
`;
