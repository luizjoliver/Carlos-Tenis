import { ReactNode } from "react";
import { ButtonStyled } from "./Button.style";

type ButtonPropsType = {
  children:ReactNode;
  variant:'primary'| 'secondary'
}

export default function Button({children,variant}:ButtonPropsType) {
  return (
    <ButtonStyled variant={variant}>
          {children}
    </ButtonStyled>
  )
}
