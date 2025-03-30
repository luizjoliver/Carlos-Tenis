import { Link } from "react-router";
import { DivLogo, DivWhatsapp, NavBar, StyledHeader } from "./Header.style";
import tennisBall from "../../assets/tennisBall.png"

export default function Header() {
  return (
    <StyledHeader >

      <DivLogo>
        <div>
          <img src={tennisBall } />
          <h2>CarlosTênis</h2>
        </div>
      </DivLogo>

      <NavBar>
        <ul>
          <Link to={"/"}>Sobre</Link >
          <Link to={"/"}>Experiência</Link >
          <Link to={"/"}>Planos</Link >
        </ul>
      </NavBar>

      <DivWhatsapp>
        <button>
          Entre em contato
        </button>
      </DivWhatsapp>

    </StyledHeader>
  )
}
