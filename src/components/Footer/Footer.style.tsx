// footer.style.ts
import styled from "styled-components";


export const FooterContainer = styled.footer`
  background: ${props => props.theme.colors.footer};
  color: ${props => props.theme.colors.white};
  padding: 4rem 2rem 2rem;
  position: relative;
  overflow: hidden;
`;

export const TennisBallIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.1;
  z-index: 0;

  svg {
    font-size: 15rem;
    color: ${props => props.theme.colors.footerFallback};
  }
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

export const FooterSection = styled.div`
  h4 {
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
    color: ${props => props.theme.colors.lightPrimary};
    position: relative;
    padding-left: 1rem;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      height: 70%;
      width: 3px;
      background: ${props => props.theme.colors.primary};
    }
  }

  p, a {
    margin: 0.5rem 0;
    color: rgba(255,255,255,0.8);
    transition: color 0.3s ease;
  }

  a {
    display: block;
    text-decoration: none;

    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  a {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 1rem;

    svg {
      font-size: 1.2rem;
    }
  }
`;

export const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255,255,255,0.1);
  font-size: 0.9rem;
  color: rgba(255,255,255,0.7);
`;