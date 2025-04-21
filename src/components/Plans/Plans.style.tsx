// Plans.style.ts
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
    max-width: 500px;
    margin: 0 auto;
  }
`;

export const Plan = styled.div<PlanProps>`
  background-color: ${props => 
    props.isActive 
      ? props.theme.colors.primary 
      : props.theme.colors.third};
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: 570px; // Altura principal aumentada
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
    min-height: 500px;
  }

  @media (max-width: 1024px) {
    min-height: 450px;
  }

  @media (max-width: 768px) {
    min-height: auto;
    height: auto;
    max-width: 100%;
    margin: 0 auto;
  }
`;

export const PlanDescription = styled.div`
  padding: 1.75rem;
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 1024px) {
    padding: 1.5rem;
    gap: 0.8rem;
  }

  @media (max-width: 768px) {
    padding: 1.25rem;
    gap: 0.6rem;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  flex: 1;
  min-height: 340px; // Aumentado para compensar a altura total

  @media (max-width: 1024px) {
    min-height: 280px;
  }

  @media (max-width: 768px) {
    min-height: 220px;
    max-height: 280px;
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
    font-size: 1.6rem; // Aumentado
    line-height: 1.3;
    color: ${props => props.theme.colors.text};
    max-width: 80%;
    font-weight: 700;
    padding-right: 100px;
  }

  @media (max-width: 1440px) {
    h1 {
      font-size: 1.4rem;
      padding-right: 90px;
    }
  }

  @media (max-width: 1024px) {
    h1 {
      font-size: 1.3rem;
      padding-right: 80px;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 0.75rem;
    
    h1 {
      font-size: 1.2rem;
      padding-right: 70px;
      line-height: 1.25;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.1rem;
      padding-right: 60px;
    }
  }
`;

export const Frequency = styled.div`
  position: absolute;
  top: 12px;
  right: 8px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: ${props => props.theme.colors.forth};
  padding: 0.6rem 1.2rem; // Aumentado
  border-radius: 20px;
  transform: translateY(-10%);
  z-index: 1;

  span {
    color: ${props => props.theme.colors.white};
    font-weight: 600;
    font-size: 1rem; // Aumentado
    white-space: nowrap;
  }

  img {
    height: 26px; // Aumentado
    width: 26px;
    object-fit: contain;
  }

  @media (max-width: 1024px) {
    padding: 0.5rem 1rem;
    
    span {
      font-size: 0.9rem;
    }
    
    img {
      height: 24px;
      width: 24px;
    }
  }

  @media (max-width: 768px) {
    top: 10px;
    right: 6px;
    padding: 0.4rem 0.8rem;
    
    span {
      font-size: 0.8rem;
    }
    
    img {
      height: 20px;
      width: 20px;
    }
  }

  @media (max-width: 480px) {
    top: 8px;
    right: 4px;
    padding: 0.3rem 0.6rem;
    
    span {
      font-size: 0.75rem;
    }
    
    img {
      height: 18px;
      width: 18px;
    }
  }
`;

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
    font-size: 1rem; // Aumentado
    display: -webkit-box;
    -webkit-line-clamp: 4; // Mais linhas
    -webkit-box-orient: vertical;
    overflow: hidden;
    flex-grow: 1;
  }

  button {
    margin-top: auto;
    align-self: flex-start;
    font-weight: 600;
    width: 150px; // Aumentado
    padding: 0.9rem; // Aumentado
  }

  @media (max-width: 1440px) {
    p {
      font-size: 0.95rem;
    }
    
    button {
      font-size: 0.95rem;
    }
  }

  @media (max-width: 1024px) {
    gap: 1.2rem;
    
    p {
      font-size: 0.9rem;
      -webkit-line-clamp: 3;
    }

    button {
      width: 140px;
      padding: 0.8rem;
    }
  }

  @media (max-width: 768px) {
    gap: 1rem;
    
    p {
      font-size: 0.85rem;
      line-height: 1.5;
      -webkit-line-clamp: 2;
    }

    button {
      width: 100%;
      max-width: 180px;
      padding: 0.7rem;
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    gap: 0.8rem;
    
    p {
      font-size: 0.8rem;
    }

    button {
      max-width: 160px;
      padding: 0.6rem;
    }
  }
`;