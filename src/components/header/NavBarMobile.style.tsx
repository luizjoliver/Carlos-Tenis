import styled from "styled-components";

export const NavBarMobile = styled.nav`
    display: flex;
    justify-content: flex-end;
    padding-right: 1rem;
    color: ${(props) => props.theme.colors.white};
    position: relative; 

    
    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: rgba(0, 0, 0, 0.5); 
        z-index: 998;
    }

  
    aside {
        position: fixed;
        top: 0;
        right: 0;
        width: 70%; 
        height: 100vh;
        background-color: ${(props) => props.theme.colors.primaryFallBack};
        z-index: 999;
        padding: 20px;
        box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2); 
        
       
        svg {
            position: absolute;
            top: 20px;
            right: 20px;
            cursor: pointer;
            font-size: 1.5rem;
            transition: transform 0.3s ease;
            
            &:hover {
                transform: scale(1.1);
            }
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
            margin-top: 3rem;
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }

        li {
            padding: 0.8rem 1rem;
            border-radius: 4px;
            transition: all 0.3s ease;
            
            &:hover {
                background: ${(props) => props.theme.colors.primary};
                transform: translateX(5px);
            }
        }

        a {
            color: ${(props) => props.theme.colors.white};
            text-decoration: none;
            font-size: 1.1rem;
            display: block;
            width: 100%;
            height: 100%;
        }
    }

    @media (min-width: 768px) {
        display: none;
    }
`;