import { DivLogo, DivWhatsapp, StyledHeader } from "./Header.style";
import tennisBall from "../../assets/tennisBall.png";
import Button from "../Button/Button";
import NavBarComponent from "./NavBar";

export default function Header() {
  return (
    <StyledHeader>

      <DivLogo aria-label="Logo Carlos Tênis">
        <a href="/" aria-label="Voltar para página inicial">
          <img src={tennisBall } alt="Ícone de bola de tênis" 
            role="presentation" />
         <h1>CarlosTênis</h1> 
        </a>
      </DivLogo>

      <NavBarComponent aria-label="Navegação principal"/>
            
        
      <DivWhatsapp aria-label="Contato">
    
        <Button variant="secondary" href="https://wa.me/55619991966052?text=Ol%C3%A1%20,%20Carlos%20Ernane!">
          Entre em contato
        </Button>

      </DivWhatsapp>

    </StyledHeader>
  )
}
