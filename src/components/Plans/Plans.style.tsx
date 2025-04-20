import styled from "styled-components";
import { AboutContainerContent, AboutSectionStyled, AboutText, Container } from "../About/About.style";

interface PlanProps {
    isActive?: boolean;
  }

export const PlanSectionStyled = styled(AboutSectionStyled)`

`;

export const ContainerPlan = styled(Container)`
  
`;

export const AboutPlan = styled(AboutText)`
 
`;

export const PlansContainerContent = styled(AboutContainerContent)`
  flex-direction: row;
  gap: 2rem;
`;

export const Plan = styled.div<PlanProps>`
  flex: 1;
  background-color: ${(props) => 
    props.isActive 
      ? props.theme.colors.primary 
      : props.theme.colors.third};
  border-radius: 14px;
  position: relative;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  overflow: hidden;

  & > img:first-child {
    height: 2rem;
    width: 2rem;
    position: absolute;
    right: 13px;
    top: 14px;
    z-index: 2;
  }

  .frequency {
    position: absolute;
    right: 50px;
    top: 18px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.primaryFallback};
    font-size: 0.9rem;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 667/1000;
  height:70%;
`;

export const ImagePlan = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
  border-radius: 0 0 14px 14px;
`;

export const PlanDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 1rem;
  height: 40%;

  h2 {
    font-size: 2rem;
    line-height: 1.2;
  }

  p {
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.5;
  }
  button {
    width: 50%;
  }
`;