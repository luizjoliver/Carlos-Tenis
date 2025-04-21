import styled from "styled-components";
import bgTennis from '../../assets/bgTennis.jpg';

export const SectionIntroduction = styled.section`
  height: 100vh;
  width: 100%;
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
              url(${bgTennis}) center/cover;

  @media (max-width: 1440px) {
    height: auto;
    min-height: 100vh;
  }
`;

export const ContentContainer = styled.article`
  width: 100%;
  height: calc(100% - 5rem);
  display: flex;
  gap: 2rem;
  align-items: end;
  justify-content: start;
  padding: 1rem 0 1rem 4rem;



  @media (max-width: 1440px) {
    align-items: center;
    padding: 2rem 1rem;
    justify-content: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 4rem 1rem 2rem;
    justify-content: flex-start;
    height: auto;
  }
`;

export const StartPresentation = styled.div`
  width: 100%;
  height: 85%;
  flex: 1 1 0%;
  max-width: 1400px;
  gap: 2rem;
  @media (max-width: 768px) {
    height: auto;
    display: flex;
    flex-direction: column;
    
  }
`;

export const CustomersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  padding-left: 4rem;
  width: 100%;
  height: 15%;
  
  div {
    border-radius: 100%;
    height: 76px;
    width: 76px;
    margin-left: -20px;
    
    &:first-child {
      margin-left: 0;
    }
    
    img {
      width: 100%;
      height: 100%;
      border-radius: 100%;
    }
  }

 

  @media (max-width: 1440px) {
    padding-left: 2rem;
    justify-content: center;
  }

  @media (max-width: 768px) {
    padding-left: 1rem;
    height: auto;
    margin-bottom: 1rem;

    div {
      height: 60px;
      width: 60px;
      margin-left: -15px;
    }
  }

  @media (max-width: 480px) {
    div {
      height: 50px;
      width: 50px;
      margin-left: -10px;
    }
  }
`;

export const CustomersInfo = styled.article`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
  
  h3 {
    color: #ffffff;
    font-size: 2rem;
    margin: 0;
  }
  
  span {
    color: #e5e5e5;
    font-size: 0.8rem;
    font-weight: 300;
  }

  @media (max-width: 768px) {
    margin-left: 1rem;
    
    h3 {
      font-size: 1.5rem;
    }
    
    span {
      font-size: 0.7rem;
    }
  }
`;

export const SellingContainer = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: start;
  padding-left: 4rem;

  h1, span {
    text-transform: uppercase;
    font-size: 9rem;
    color: ${(props) => props.theme.colors.white};
    font-family: "Special Gothic Condensed One", sans-serif;
    font-weight: 400;
    font-style: normal;
    line-height: 0.9;
    text-align: left;
  }

  p {
    width: 50%;
    color: ${(props) => props.theme.colors.white};
    opacity: 80%;
    font-size: 1.2rem;
    text-align: left;
  }

  button {
    display: flex;
    gap: 1rem;
    align-items: center;
  }



  @media (max-width: 1440px) {
    padding-left: 2rem;
    align-items: center;
    
    h1, span {
      font-size: 7rem;
      text-align: center;
    }

    p {
      width: 70%;
      text-align: center;
    }
  }

  @media (max-width: 1024px) {
    h1, span {
      font-size: 5rem;
    }

    p {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 768px) {
    padding-left: 1rem;
    height: auto;

    h1, span {
      font-size: 4rem;
    }

    p {
      width: 100%;
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    h1, span {
      font-size: 2.5rem;
    }

    p {
      font-size: 0.9rem;
    }

    button {
      font-size: 0.9rem;
      padding: 0.8rem 1.5rem;
      
      svg {
        width: 16px;
        height: 16px;
      }
    }
  }
`;