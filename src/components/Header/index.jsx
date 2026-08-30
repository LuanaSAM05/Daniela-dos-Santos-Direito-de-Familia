import { useState, useEffect } from "react";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import {
  HeaderContainer,
  HeaderContent,
  LogoArea,
  LogoInitials,
  LogoTextGroup,
  LogoName,
  LogoOAB,
  Nav,
  NavLink,
  HeaderButton,
  MobileMenuButton,
  MobileMenu,
  MobileNavLink,
  MobileWhatsAppButton
} from "./styles";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Link direto do WhatsApp com mensagem inicial
  const phone = "5562981575092";
  const message = encodeURIComponent("Olá, Daniela! Gostaria de saber mais sobre seu atendimento jurídico.");
  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

  // Efeito simples para mudar a cor do header ao rolar a página
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <HeaderContainer $scrolled={scrolled}>
      <HeaderContent>
        {/* Logotipo DS com OAB */}
        <LogoArea href="#inicio">
          <LogoInitials>DS</LogoInitials>
          <LogoTextGroup>
            <LogoName>Daniela dos Santos</LogoName>
            <LogoOAB>OAB/GO 72.756</LogoOAB>
          </LogoTextGroup>
        </LogoArea>

        {/* Menu Desktop */}
        <Nav>
          <NavLink href="#inicio">Início</NavLink>
          <NavLink href="#sobre">Sobre</NavLink>
          <NavLink href="#atuacao">Atuação</NavLink>
          <NavLink href="#diferenciais">Diferenciais</NavLink>
          <NavLink href="#contato">Contato</NavLink>
        </Nav>

        {/* Botão de Ação Desktop */}
        <HeaderButton href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={16} />
          Fale comigo
        </HeaderButton>

        {/* Botão Hambúrguer Mobile */}
        <MobileMenuButton onClick={toggleMenu} aria-label="Abrir menu de navegação">
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
      </HeaderContent>

      {/* Menu Mobile */}
      <MobileMenu $isOpen={isOpen}>
        <MobileNavLink href="#inicio" onClick={closeMenu}>Início</MobileNavLink>
        <MobileNavLink href="#sobre" onClick={closeMenu}>Sobre</MobileNavLink>
        <MobileNavLink href="#atuacao" onClick={closeMenu}>Atuação</MobileNavLink>
        <MobileNavLink href="#diferenciais" onClick={closeMenu}>Diferenciais</MobileNavLink>
        <MobileNavLink href="#contato" onClick={closeMenu}>Contato</MobileNavLink>
        
        <MobileWhatsAppButton href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
          <FaWhatsapp size={18} />
          Fale comigo no WhatsApp
        </MobileWhatsAppButton>
      </MobileMenu>
    </HeaderContainer>
  );
}
