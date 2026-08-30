import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 85px;
  background-color: ${(props) => (props.$scrolled ? "#0B192C" : "rgba(11, 25, 44, 0.95)")};
  backdrop-filter: blur(8px);
  border-bottom: 1px solid ${(props) => (props.$scrolled ? "rgba(197, 168, 128, 0.25)" : "rgba(255, 255, 255, 0.08)")};
  z-index: 1000;
  transition: all 0.3s ease;
  box-shadow: ${(props) => (props.$scrolled ? "0 4px 20px rgba(0, 0, 0, 0.2)" : "none")};
`;

export const HeaderContent = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoArea = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  cursor: pointer;
`;

export const LogoInitials = styled.div`
  font-family: 'Cinzel', serif;
  font-size: 26px;
  font-weight: 700;
  color: #C5A880;
  letter-spacing: 2px;
  border: 1.5px solid #C5A880;
  padding: 2px 8px;
  border-radius: 4px;
  background: rgba(197, 168, 128, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const LogoTextGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LogoName = styled.span`
  font-family: 'Playfair Display', serif;
  font-size: 16px;
  font-weight: 600;
  color: #FFFFFF;
  letter-spacing: 0.5px;
  white-space: nowrap;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const LogoOAB = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  font-weight: 500;
  color: #C5A880;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: 868px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #E2E8F0;
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;

  &:hover {
    color: #C5A880;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 0%;
    height: 2px;
    background-color: #C5A880;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const HeaderButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #C5A880 0%, #B38E5D 100%);
  color: #0B192C;
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 4px;
  text-decoration: none;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(197, 168, 128, 0.2);

  &:hover {
    background: linear-gradient(135deg, #D4AF37 0%, #C5A880 100%);
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(197, 168, 128, 0.35);
  }

  @media (max-width: 868px) {
    display: none;
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: transparent;
  color: #C5A880;
  font-size: 24px;
  border: none;
  cursor: pointer;
  padding: 8px;

  @media (max-width: 868px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const MobileMenu = styled.div`
  display: none;

  @media (max-width: 868px) {
    display: ${(props) => (props.$isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 85px;
    left: 0;
    width: 100%;
    background-color: #0B192C;
    border-bottom: 2px solid #C5A880;
    padding: 24px;
    gap: 18px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  }
`;

export const MobileNavLink = styled.a`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #FFFFFF;
  text-decoration: none;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  transition: color 0.2s ease;

  &:hover {
    color: #C5A880;
  }
`;

export const MobileWhatsAppButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: linear-gradient(135deg, #C5A880 0%, #B38E5D 100%);
  color: #0B192C;
  font-size: 15px;
  font-weight: 600;
  padding: 14px;
  border-radius: 4px;
  text-decoration: none;
  margin-top: 8px;
  text-align: center;
`;
