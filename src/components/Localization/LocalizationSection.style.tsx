// LocalizationSection.style.ts
import styled from "styled-components";

export const LocalizationSectionStyled = styled.section`
  padding: 4rem 2rem;
  background: #f9f9f9;
`;

export const LocationsContainer = styled.div`
  display: flex;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  height: 600px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

export const LocationList = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;
  padding-right: 1rem;
`;

export const LocationItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;

  span {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${props => props.theme.colors.primary};
  }

  &:hover {
    transform: translateX(5px);
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  }

  &.active {
    border-color: ${props => props.theme.colors.primary};
    background: ${props => props.theme.colors.lightPrimary};
  }
`;

export const LocationInfo = styled.div`
  h3 {
    margin: 0;
    font-size: 1.1rem;
    color: #333;
  }

  p {
    margin: 0.5rem 0 0;
    font-size: 0.9rem;
    color: #666;
  }
`;

export const MapContainer = styled.div`
  flex: 2;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);



  iframe {
    min-height: 400px;
  }

  @media (max-width: 768px) {
    height: 400px;
  }
`;

export const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h2 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
    font-size: 1rem;
  }
`;

export const ScheduleInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-top: 1rem;
  padding: 0.8rem;
  background: ${props => props.theme.colors.lightBackground};
  border-radius: 6px;
  width: fit-content;

  .schedule-icon {
    color: ${props => props.theme.colors.primary};
    font-size: 1.2rem;
    display: flex;
    align-items: center;
  }

  .schedule-details {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;

    .days {
      font-size: 0.85rem;
      font-weight: 500;
      color: ${props => props.theme.colors.darkText};
    }

    .hours {
      font-size: 0.8rem;
      color: ${props => props.theme.colors.secondaryText};
      letter-spacing: 0.5px;
    }
  }

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
  }
`;