import { ReactNode } from 'react';
import { NavBarMobile } from './NavBarMobile.style'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'

type NavBarMobileProps = {
    isOpen:boolean;
    handleClickMenu: () => void
    children:ReactNode
}

export default function NavbarMobile({ children,isOpen, handleClickMenu }: NavBarMobileProps) {

  
    return (
        <NavBarMobile>

            <button
                aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={isOpen}
                aria-haspopup="true"
                onClick={handleClickMenu}
            >
                {isOpen ? <IoMdClose size={28} /> : <GiHamburgerMenu size={25} />}
            </button>

            {isOpen ? (
                <>
                    <div className="overlay" onClick={handleClickMenu} tabIndex={0}
                        aria-label="Fechar menu" />

                    <aside  >
                        <IoMdClose onClick={handleClickMenu} size={28} />
                                     {children}
                    </aside>

                </>
            ) : null}

        </NavBarMobile>
    )
}
