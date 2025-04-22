import styled from "styled-components";

export const HeadingArrowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 3rem;

`;

export const Title = styled.h1`
  margin: 0;
  font-size: 2rem;

  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
  }
`;

export const ArrowContainer = styled.div`
  display: flex !important;
  gap: 1rem;
 
  @media (max-width: 768px) {
    display: none !important;
  }

  & > * {
    cursor: pointer;
    transition: color 0.3s;
   
    &:hover {
      background-color: ${props => props.theme.colors.primary};;
      border-radius: 100%;
    }
  }
`;