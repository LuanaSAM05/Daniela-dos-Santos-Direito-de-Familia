import styled from "styled-components";
import { reveal, fadeUp } from "../../styles/animations";

export const FooterContainer = styled.footer`
  background-color: #060E18;
  color: #FFFFFF;
  padding: 60px 24px 30px;
  border-top: 1px solid rgba(197, 168, 128, 0.2);
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

export const FooterBrand = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  ${reveal(fadeUp, 0)}

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FooterLogoInitials = styled.div`
  font-family: 'Cinzel', serif;
  font-size: 28px;
  font-weight: 700;
  color: #C5A880;
  letter-spacing: 2px;
  border: 1.5px solid #C5A880;
  padding: 4px 12px;
  border-radius: 4px;
  background: rgba(197, 168, 128, 0.05);
`;

export const FooterBrandInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const FooterName = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 18px;
  font-weight: 600;
  color: #FFFFFF;
`;

export const FooterSub = styled.span`
  font-size: 13px;
  color: #C5A880;
  font-weight: 500;
`;

export const FooterLocation = styled.span`
  font-size: 13px;
  color: #94A3B8;
`;

export const FooterSocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  ${reveal(fadeUp, 140)}
`;

export const SocialIconButton = styled.a`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(197, 168, 128, 0.3);
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: #C5A880;
    color: #0B192C;
    border-color: #C5A880;
    transform: translateY(-3px) rotate(-6deg);
  }
`;

export const FooterDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.08);
  ${reveal(fadeUp, 220)}
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  font-size: 13px;
  color: #64748B;
  ${reveal(fadeUp, 300)}

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const CopyrightText = styled.p`
  margin: 0;
`;

export const FooterDevCredit = styled.span`
  color: #94A3B8;
  font-size: 12px;
`;