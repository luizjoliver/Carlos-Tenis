
  import { FaInstagram, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
  import { BiTennisBall } from "react-icons/bi";
import { Copyright, FooterContainer, FooterContent, FooterSection, SocialLinks, TennisBallIcon } from "./Footer.style";
  
  export default function Footer() {
    return (
      <FooterContainer>
        <TennisBallIcon>
          <BiTennisBall />
        </TennisBallIcon>
  
        <FooterContent>
          <FooterSection>
            <h4>Redes Sociais</h4>
            <SocialLinks>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaInstagram /> Instagram
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp /> WhatsApp
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaMapMarkerAlt /> Google Maps
              </a>
            </SocialLinks>
          </FooterSection>
  
          <FooterSection>
            <h4>Contato</h4>
            <p>professor@tenis.com.br</p>
            <p>(11) 99999-9999</p>
            <p>São Paulo - SP</p>
          </FooterSection>
  
          <FooterSection>
            <h4>Links Rápidos</h4>
            <nav>
              <a href="#planos">Planos</a>
              <a href="#sobre">Sobre</a>
              <a href="#locais">Locais</a>
            </nav>
          </FooterSection>
        </FooterContent>
  
        <Copyright>
          © {new Date().getFullYear()} Carlos Silva Tennis. Todos direitos reservados.
        </Copyright>
      </FooterContainer>
    )
  }