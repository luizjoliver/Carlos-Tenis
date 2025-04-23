import NavbarMobile from "./NavbarMobile";
import { NavBar } from "./Header.style";
import { useState } from "react";

export default function NavBarComponent() {

  const [isOpen, setIsOpen] = useState(false)

  function handleClickMenu() {
    setIsOpen((prevState => !prevState))
  }


  return (
    <>
      <NavBar role="navigation" aria-label="Navegação principal">
        <ul>
          <a href={"#servicos"}>Serviços</a >
          <a href={"#sobre"}>Sobre</a >
          <a href={"#planos"}>Planos</a >
          <a href={"#localizacao"}>Localização</a >
        </ul>
      </NavBar>

      <NavbarMobile aria-label="Navegação móvel" handleClickMenu={handleClickMenu} isOpen={isOpen}>
          <ul role="navigation">
            <a href={"#servicos"} onClick={handleClickMenu}>Serviços</a >
            <a href={"#sobre"} onClick={handleClickMenu}>Sobre</a >
            <a href={"#planos"} onClick={handleClickMenu}>Planos</a >
            <a href={"#localizacao"} onClick={handleClickMenu}>Localização</a >
          </ul>
      </NavbarMobile>



    </>
  )
}
