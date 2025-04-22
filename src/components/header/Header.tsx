import { DivLogo, DivWhatsapp, StyledHeader } from "./Header.style";
import tennisBall from "../../assets/tennisBall.png";
import { ReactNode } from "react";
import Button from "../Button/Button";
import NavBarComponent from "./NavBar";

export default function Header({children}:{children:ReactNode}) {
  return (
    <StyledHeader>

      <DivLogo aria-label="Logo Carlos Tênis">
        <a href="/" aria-label="Voltar para página inicial">
          <img src={tennisBall } alt="Ícone de bola de tênis" 
            role="presentation" />
         <h1>CarlosTênis</h1> 
        </a>
      </DivLogo>

      <NavBarComponent aria-label="Navegação principal">
        {children}
      </NavBarComponent>
        
      <DivWhatsapp aria-label="Contato">
    
        <Button variant="secondary">
          Entre em contato
        </Button>

      </DivWhatsapp>

    </StyledHeader>
  )
}
