import styled from "styled-components";

export const CarlosSectionStyled = styled.section`
  padding: 4rem 0;
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.light};
`;

export const ContentContainer = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  gap: 4rem;
  flex-direction: row;

  @media (max-width: 1440px) {
    flex-direction: column;
    align-items: center;
    max-width: 100%;
    padding: 2rem 1.5rem;
  }

  @media (max-width: 768px) {
    gap: 2rem;
    padding: 1rem;
  }
`;

export const ImagePlaceholder = styled.div`
  flex: 0 1 45%;
  background-color: black;
  border-radius: 8px;
  min-height: 500px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.2);
  max-width: 600px;

  @media (max-width: 1440px) {
    flex: 1 1 100%;
    width: 100%;
    max-width: 600px;
    min-height: 400px;
  }

  @media (max-width: 768px) {
    min-height: 300px;
  }
`;

export const ProfessionalInfo = styled.article`
  flex: 0 1 50%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h2 {
    font-size: 2.5rem;
    color: ${(props) => props.theme.colors.white};
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 400;
    opacity: 0.9;
    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }

  p {
    line-height: 1.6;
    opacity: 0.85;
    @media (max-width: 768px) {
      font-size: 0.95rem;
    }
  }

  @media (max-width: 1440px) {
    flex: 1 1 100%;
    width: 100%;
    max-width: 800px;
  }
`;

export const HighlightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin: 2rem 0;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
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
    @media (max-width: 768px) {
      font-size: 1.75rem;
    }
  }

  p {
    margin: 0;
    font-size: 0.9rem;
    @media (max-width: 768px) {
      font-size: 0.85rem;
    }
  }
`;