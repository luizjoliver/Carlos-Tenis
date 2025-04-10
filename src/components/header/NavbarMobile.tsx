import { ReactNode, useState } from 'react'
import { NavBarMobile } from './NavBarMobile.style'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'

export default function NavbarMobile({children}:{children:ReactNode}) {

    const [isOpen, setIsOpen] = useState(false)

    function handleClickMenu() {
        setIsOpen((prevState => !prevState))
    }

    return (
        <NavBarMobile>

            <GiHamburgerMenu onClick={handleClickMenu}  size={25}/>

            {isOpen ? (
                <>
                    <div className="overlay" onClick={handleClickMenu} />

                    <aside>
                        <IoMdClose onClick={handleClickMenu} size={28}/>
                        {children}
                    </aside>

                </>
            ) : null}

        </NavBarMobile>
    )
}
