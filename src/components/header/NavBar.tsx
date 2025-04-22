import { ReactNode } from "react";
import NavbarMobile from "./NavbarMobile";
import { NavBar } from "./Header.style";

export default function NavBarComponent({children}:{children:ReactNode}) {

  return (
    <>
      <NavBar role="navigation" aria-label="Navegação principal">
            <ul>
              {children}
            </ul>
        </NavBar>
    
          <NavbarMobile  aria-label="Navegação móvel">
            <ul role="menu">
              {children}
            </ul>
          </NavbarMobile>
    </>
  )
}
