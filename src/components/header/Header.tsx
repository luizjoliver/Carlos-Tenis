import { DivLogo, DivWhatsapp, StyledHeader } from "./Header.style";
import tennisBall from "../../assets/tennisBall.png";
import { ReactNode } from "react";
import Button from "../Button/Button";
import NavBarComponent from "./NavBar";

export default function Header({children}:{children:ReactNode}) {
  return (
    <StyledHeader >

      <DivLogo>
        <div>
          <img src={tennisBall } />
          <h2>CarlosTênis</h2>
        </div>
      </DivLogo>

      <NavBarComponent>
        {children}
      </NavBarComponent>
        
      <DivWhatsapp>
    
        <Button variant="secondary">
          Entre em contato
        </Button>

      </DivWhatsapp>

    </StyledHeader>
  )
}
