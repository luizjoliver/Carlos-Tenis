import { ReactNode } from "react";
import NavbarMobile from "./NavbarMobile";
import { NavBar } from "./Header.style";

export default function NavBarComponent({children}:{children:ReactNode}) {

  return (
    <>
      <NavBar>
            <ul>
              {children}
            </ul>
        </NavBar>
    
          <NavbarMobile>
            <ul>
              {children}
            </ul>
          </NavbarMobile>
    </>
  )
}
