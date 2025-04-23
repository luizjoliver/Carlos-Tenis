
  import { FaInstagram, FaWhatsapp } from "react-icons/fa";
  import { BiTennisBall } from "react-icons/bi";
import { Copyright, FooterContainer, FooterContent, FooterSection, SocialLinks, TennisBallIcon } from "./FooterComponent.style";
  
  export default function FooterComponent() {
    return (
      <FooterContainer>
        <TennisBallIcon>
          <BiTennisBall />
        </TennisBallIcon>
  
        <FooterContent>
          <FooterSection>
            <h4>Redes Sociais</h4>
            <SocialLinks>
              <a href="https://www.instagram.com/tennistv/?hl=pt" target="_blank" rel="noopener noreferrer" >
                <FaInstagram /> Instagram
              </a>
              <a href="https://wa.me/5561999196605" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp /> WhatsApp
              </a>
            </SocialLinks>
          </FooterSection>
  
          <FooterSection>
            <h4>Contato</h4>
            <p>CarlosErnaneTenis@gmail.com</p>
            <p>(61) 98469-4842</p>
            <p>Brasília - DF</p>
          </FooterSection>
  
          <FooterSection>
            <h4>Links Rápidos</h4>
            <nav>
            <a href="#servicos">Serviço</a>
              <a href="#planos">Planos</a>
              <a href="#sobre">Sobre</a>
              <a href="#localizacao">Locais</a>
            </nav>
          </FooterSection>
        </FooterContent>
  
        <Copyright>
          © {new Date().getFullYear()} Carlos Silva Tennis. Todos direitos reservados.
        </Copyright>
      </FooterContainer>
    )
  }