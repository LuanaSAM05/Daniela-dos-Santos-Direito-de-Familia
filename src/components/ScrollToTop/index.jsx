import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { ScrollButton } from "./styles";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  // Exibe o botão somente após rolar mais de 300px
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Rola a página suavemente para o topo
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return (
    <ScrollButton
      onClick={scrollToTop}
      $visible={visible}
      aria-label="Voltar ao topo da página"
      title="Voltar ao topo"
    >
      <FaArrowUp />
    </ScrollButton>
  );
}
