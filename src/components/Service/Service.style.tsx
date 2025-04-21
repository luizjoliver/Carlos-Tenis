import styled from "styled-components";

export const ServiceSectionStyled = styled.section`
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.colors.secondary};
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1440px) {
    height: auto;
    padding: 4rem 0;
  }
`;

export const Container = styled.div`
  height: 80%;
  width: 100%;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const ServiceText = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  h1 {
    font-size: 3rem;
    font-family: "Quicksand", sans-serif;
    color: ${(props) => props.theme.colors.black};
  }
  
  div {
    display: flex;
    gap: 2rem;
  }

  .arrowLeft, .arrowRight {
    border-radius: 100%;
    cursor: pointer;
    opacity: 50%;
    
    &:hover {
      background-color: ${(props) => props.theme.colors.primary};
      opacity: 100%;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
  }

  @media (max-width: 480px) {
    
    h1 {
      font-size: 1.75rem;
    }
  }
`;

export const ServiceContainerContent = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (max-width: 1440px) {
    height: auto;
  }
`;

export const ServiceContent = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  gap: 2rem;

  @media (max-width: 1440px) {
    flex-direction: column;
    height: auto;
  }

  .imagesWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 50%;
    height: 100%;

    @media (max-width: 1440px) {
      width: 100%;
      height: 400px;
    }

    @media (max-width: 768px) {
      height: 300px;
    }

    .imgBottom, .imgTop {
      width: 280px;
      height: 260px;
      border-radius: 1rem;
      position: absolute;
      object-fit: cover;

      @media (max-width: 768px) {
        width: 220px;
        height: 200px;
      }
    }
    
    .imgTop {
      transform: rotate(10deg);
      
      @media (max-width: 1440px) {
        display: none;
      }
    }
    
    .imgBottom {
      transform: translate(-50%, 50%);
      
      @media (max-width: 1440px) {
        transform: none;
        position: relative;
      }
    }
  }
`;

export const ServiceInfoContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  @media (max-width: 1440px) {
    justify-content: center;
    padding: 2rem 0;
  }
`;

export const Info = styled.div`
  height: 80%;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  
  h2 {
    font-size: 2rem;
  }

  p {
    line-height: 1.6;
  }

  div {

    button {
      display: flex;
      gap: 1rem;
      align-items: center;
    }
  }

  @media (max-width: 1440px) {
    width: 90%;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 1rem;
    
    h2 {
      font-size: 1.5rem;
    }
    
    p {
      font-size: 0.9rem;
    }
  }
`;

export const ServiceNavigation = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;

  button {
    position: relative;
    background: transparent;
    border: 0;
    cursor: pointer;
    padding: 0.5rem;
    font-size: 1rem;
    color: ${(props) => props.theme.colors.black};
    transition: color 0.3s ease;
    
    &::before {
      content: '';
      position: absolute;
      top: -2px;
      left: 0;
      width: 0;
      height: 2px;
      background-color: ${(props) => props.theme.colors.primary};
      transition: width 0.3s ease;
    }

    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }

    /* Corrigido aqui */
    &.activedTitle {
      color: ${(props) => props.theme.colors.primaryFallBack};
      
      &::before {
        width: 100%;
      }
    }
  }

  @media (max-width: 768px) {
    button {
      font-size: 0.875rem;
    }
  }
`;