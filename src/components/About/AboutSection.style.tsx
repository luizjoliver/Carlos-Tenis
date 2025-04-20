// CarlosSection.style.ts
import styled from "styled-components";

export const CarlosSectionStyled = styled.section`
  padding: 4rem 0;
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.light};
`;

export const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  padding: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ImagePlaceholder = styled.div`
  background-color: black;
  border-radius: 8px;
  min-height: 500px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.2);

  @media (max-width: 768px) {
    min-height: 300px;
  }
`;

export const ProfessionalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  h2 {
    font-size: 2.5rem;
    color: ${(props) => props.theme.colors.white};
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 400;
    opacity: 0.9;
  }

  p {
    line-height: 1.6;
    opacity: 0.85;
  }
`;

export const HighlightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin: 2rem 0;
`;

export const HighlightItem = styled.div`
  text-align: center;
  padding: 1.5rem;
  background: rgba(0,0,0,0.1);
  border-radius: 8px;

  span {
    display: block;
    font-size: 2rem;
    font-weight: 700;
    color: ${(props) => props.theme.colors.secondary};
    margin-bottom: 0.5rem;
  }

  p {
    margin: 0;
    font-size: 0.9rem;
  }
`;