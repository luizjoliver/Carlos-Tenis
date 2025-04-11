import styled from "styled-components";

export const AboutSectionStyled = styled.section`
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.colors.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  height: 80%;
  width: 100%;
  padding: 0 2rem;
`;

export const AboutText = styled.div`
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
    background-color: transparent;
    opacity: 50%;
    
    &:hover {
      background-color: ${(props) => props.theme.colors.primary};
      opacity: 100%;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 425px) {
    h1 {
      font-size: 1rem;
    }
  }
`;

export const AboutContainerContent = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  flex-direction: column;
`;

export const AboutContent = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  gap: 1rem;

  .imagesWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 40%;
    height: 100%;

    .imgBottom, .imgTop {
      width: 280px;
      height: 260px;
      border-radius: 1rem;
      position: absolute;
      object-fit: cover;
    }
    
    .imgTop {
      transform: rotate(10deg);
    
    }
    
    .imgBottom {
      transform: translate(-50%, 50%);
      
    }
  }
`;

export const AboutInfoContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
 
  /* background-color: pink; */
`;

export const Info = styled.div`
  height: 80%;
  width: 60%;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  
  h2{
    font-size:2rem;
  }
  div{
    width: 250px;
  
    button {
      display: flex;
      gap: 1rem;
      align-items: center;
    }
  }
`;

export const AboutNavigation = styled.div`
  width: 100%;
  height: 10%;
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