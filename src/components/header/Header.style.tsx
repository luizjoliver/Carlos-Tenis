import styled from "styled-components";

export const StyledHeader = styled.header`
    height:5rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "Quicksand", sans-serif;

    * {
        font-family: inherit;
    }
`

export const DivLogo = styled.div`

    width: 33%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    align-items: center;
    justify-content: start;
    padding-left: 2rem;

   div {
    display: flex;
    gap: 1rem;
    color: ${(props) => props.theme.colors.white};
    cursor: pointer;
    justify-content: center;
    align-items: center;
    font-size: 22px;
   } 

   img{
    height: 2rem;
    width: 2rem;
   }
`

export const NavBar = styled.header`
    display: flex;
    width: 33%;
    height: 100%;
    align-items: center;
    justify-content: center;

    ul{
        display: flex;
        justify-content: space-around;
        align-items: center;
        background: rgba(255, 255, 255, 0.25); 
        -webkit-backdrop-filter: blur(8px); 
        backdrop-filter: blur(8px); 
        height:70%;
        width: 70%;
        border-radius: 5rem;
        color: ${(props) => props.theme.colors.white};
            }
`

export const DivWhatsapp = styled.header`
    display: flex;
    flex-direction: row;
    width: 33%;
    height: 100%;
    align-items: center;
    justify-content: end;
    padding-right: 2rem;
    button{
        background-color: ${(props) => props.theme.colors.secondary};
        padding: 1rem 2rem;
        border-radius: 5rem;
         
    }
`