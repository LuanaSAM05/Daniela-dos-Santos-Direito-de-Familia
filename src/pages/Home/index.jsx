import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { About } from "../../components/About";
import { Services } from "../../components/Services";
import { WhyChoose } from "../../components/WhyChoose";
import { Location } from "../../components/Location";
import { Contact } from "../../components/Contact";
import { Footer } from "../../components/Footer";
import { WhatsAppFloat } from "../../components/WhatsAppFloat";
import { ScrollToTop } from "../../components/ScrollToTop";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Location />
      <Contact />
      <Footer />
      <ScrollToTop />
      <WhatsAppFloat />
    </HomeContainer>
  );
}
