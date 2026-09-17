import styled from "styled-components";
import { reveal, fadeUp, fadeLeft, scaleIn } from "../../styles/animations";

export const HeroSection = styled.section`
  min-height: 100vh;
  padding: 130px 24px 80px;
  background: radial-gradient(circle at 80% 20%, #152A4A 0%, #0B192C 70%);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(197, 168, 128, 0.4), transparent);
  }

  @media (max-width: 968px) {
    padding: 110px 20px 60px;
    min-height: auto;
  }
`;

export const HeroContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 50px;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 40px;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 968px) {
    align-items: center;
  }
`;

export const HeroBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: rgba(197, 168, 128, 0.12);
  border: 1px solid rgba(197, 168, 128, 0.35);
  color: #C5A880;
  padding: 6px 14px;
  border-radius: 50px;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.5px;
  width: fit-content;
  ${reveal(fadeUp, 0)}

  @media (max-width: 968px) {
    margin: 0 auto;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 46px;
  line-height: 1.2;
  color: #FFFFFF;
  font-weight: 700;
  ${reveal(fadeUp, 200)}

  span {
    color: #C5A880;
    font-style: italic;
  }

  @media (max-width: 768px) {
    font-size: 34px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 17px;
  line-height: 1.7;
  color: #CBD5E1;
  max-width: 580px;
  ${reveal(fadeUp, 400)}

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 15px;
  flex-wrap: wrap;
  ${reveal(fadeUp, 600)}

  @media (max-width: 968px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: linear-gradient(135deg, #C5A880 0%, #B38E5D 100%);
  color: #0B192C;
  font-size: 15px;
  font-weight: 600;
  padding: 14px 28px;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(197, 168, 128, 0.25);

  &:hover {
    background: linear-gradient(135deg, #D4AF37 0%, #C5A880 100%);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(197, 168, 128, 0.4);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: #FFFFFF;
  font-size: 15px;
  font-weight: 500;
  padding: 14px 28px;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    border-color: #C5A880;
    color: #C5A880;
    background: rgba(197, 168, 128, 0.05);
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const HeroImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  ${reveal(fadeLeft, 250)}
`;

export const ImageCard = styled.div`
  position: relative;
  width: 100%;
  max-width: 420px;
  border-radius: 12px;
  padding: 12px;
  background: linear-gradient(145deg, rgba(197, 168, 128, 0.3), rgba(11, 25, 44, 0.8));
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  transition: transform 0.5s ease, box-shadow 0.5s ease;

  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 14px;
    background: linear-gradient(135deg, rgba(197, 168, 128, 0.6), transparent, rgba(197, 168, 128, 0.2));
    z-index: -1;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 26px 50px rgba(0, 0, 0, 0.5);
  }
`;

export const LawyerImage = styled.img`
  width: 100%;
  height: 480px;
  object-fit: cover;
  object-position: center 20%;
  border-radius: 8px;
  filter: brightness(0.98);

  @media (max-width: 768px) {
    height: 380px;
  }

  @media (max-width: 480px) {
    height: 320px;
  }
`;

export const FloatingInfoBox = styled.div`
  position: absolute;
  bottom: 25px;
  left: -20px;
  background: #0B192C;
  border: 1px solid #C5A880;
  padding: 14px 20px;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  gap: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  ${reveal(scaleIn, 1000)}

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 14px 30px rgba(0, 0, 0, 0.6);
  }

  @media (max-width: 968px) {
    left: 10px;
    bottom: 20px;
  }

  @media (max-width: 480px) {
    position: static;
    margin-top: 15px;
    width: 100%;
    justify-content: center;
  }
`;

export const FloatingIcon = styled.div`
  color: #C5A880;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FloatingTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const FloatingTitle = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: #FFFFFF;
  font-family: 'Playfair Display', serif;
`;

export const FloatingSubtitle = styled.span`
  font-size: 11px;
  color: #C5A880;
  font-weight: 500;
`;