import styled from "styled-components";
import { 
  ServiceContainerContent, 
  ServiceSectionStyled, 
  ServiceText, 
  Container 
} from "../Service/Service.style";

interface PlanProps {
  isActive?: boolean;
}

export const PlanSectionStyled = styled(ServiceSectionStyled)`
  padding: 4rem 0;
  background-color: ${props => props.theme.colors.secondary};

  @media (max-width: 1440px) {
    padding: 3rem 0;
  }

  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

export const ContainerPlan = styled(Container)`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const AboutPlan = styled(ServiceText)`
  margin-bottom: 3rem;

`;

export const PlansContainerContent = styled(ServiceContainerContent)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 0;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const Plan = styled.article<PlanProps>`
  background-color: ${props => 
    props.isActive 
      ? props.theme.colors.primary 
      : props.theme.colors.third};
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: 520px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  box-shadow: ${props => props.isActive 
    ? '0 4px 12px rgba(0,0,0,0.15)' 
    : '0 2px 8px rgba(0,0,0,0.1)'};
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.15);
  }

  @media (max-width: 1440px) {
    min-height: 320px;
  }

  @media (max-width: 1024px) {
    min-height: 200px;
  }

  @media (max-width: 768px) {
    min-height: 100px;
  }
`;

export const PlanDescription = styled.div`
  padding: 1.75rem;
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ImageContainer = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  flex: 1;
  min-height: 300px;

  @media (max-width: 768px) {
    min-height: 250px;
  }
`;

export const ImagePlan = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  aspect-ratio: 2/3;
  transition: transform 0.3s ease;

  ${Plan}:hover & {
    transform: scale(1.05);
  }

  @media (max-width: 1440px) {
    aspect-ratio: 3/4;
  }

  @media (max-width: 768px) {
    aspect-ratio: 1/1;
  }
`;

export const PlanTitle = styled.div`
  position: relative;
  margin-bottom: 1rem;

  h1 {
    margin: 0;
    font-size: 1.5rem;
    line-height: 1.3;
    color: ${props => props.theme.colors.text};
    max-width: 80%;
    font-weight: 700;
    padding-right: 100px;
  }

  @media (max-width: 1440px) {
      h1 {
      font-size: 1.3rem;
      padding-right: 80px;
    }
    }

  @media (max-width: 1024px) {
    h1 {
      font-size: 1.5rem;
      padding-right: 90px;
    }

    div {
      padding: 0.4rem 0.8rem;
      
      span {
        font-size: 0.85rem;
      }
      
      img {
        height: 22px;
        width: 22px;
      }
    }
  }

  @media (max-width: 480px) {
    h1 {

      padding-right: 80px;
    }

    div {
      padding: 0.3rem 0.6rem;
      
      span {
        font-size: 0.8rem;
      }
      
      img {
        height: 20px;
        width: 20px;
      }
    }
}
`;

export const Frequency = styled.div`
    position: absolute;
    top: 8px;
    right: 8px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: ${props => props.theme.colors.forth};
    padding: 0.5rem 1rem;
    border-radius: 20px;
    transform: translateY(-10%);

    span {
      color: ${props => props.theme.colors.white};
      font-weight: 600;
      font-size: 0.9rem;
      white-space: nowrap;
    }

    img {
      height: 24px;
      width: 24px;
      object-fit: contain;
    }

    @media (max-width: 1440px) {
      padding: 0.2rem 0.3rem;

    span{
      font-size: 0.7rem;
    }

   
  }

`

export const PlanDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex: 1;

  p {
    color: ${props => props.theme.colors.text};
    margin: 0;
    line-height: 1.6;
    font-weight: 500;
    font-size: 1.2rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    flex-grow: 1;
  }

  button {
    margin-top: auto;
    align-self: flex-start;
    font-weight: 600;
    width: 140px;
  }
  
  @media (max-width: 1440px) {
    p {
      font-size: 0.8rem;
    }
    button {
      font-size: 0.8rem;
      width: 120px;
    }
  }

  @media (max-width: 1024px) {
    p {
      font-size: 1rem;
    }

    button {
      width: 130px; 
    }
  }

  @media (max-width: 480px) {
    p {
      font-size: 0.85rem;
    }

    button {
      width: 120px;
    }
  }
`