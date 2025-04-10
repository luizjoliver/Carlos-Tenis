import styled from "styled-components";

interface ButtonStyledProps {
  variant: 'primary' | 'secondary';
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  background-color: ${(props) => 
    props.variant === 'primary' 
      ? props.theme.colors.primary
      : props.theme.colors.secondary};
  color: ${(props) => 
    props.variant === 'primary' 
      ? props.theme.colors.black
      : props.theme.colors.text};
  padding: 1rem 2rem;
  border-radius: 5rem;
  border: none;
  cursor: pointer;
  font-family: inherit;
  position: relative;
  transition: all 0.2s ease;
  overflow: hidden;

  &:hover {
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: ${(props) => props.theme.colors.blackHover};
      opacity: 0.1;
      border-radius: 5rem;
    }

    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }
`;