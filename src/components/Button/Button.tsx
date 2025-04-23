import { ReactNode, ComponentPropsWithoutRef } from "react";
import { ButtonStyled } from "./Button.style";
import { BsArrowRightCircleFill } from "react-icons/bs";

type ButtonPropsType = {
  children: ReactNode;
  variant: 'primary' | 'secondary';
  href?: string;
  icon?:boolean
} & ComponentPropsWithoutRef<'button'> & ComponentPropsWithoutRef<'a'>;

export default function Button({ children, variant, href, icon ,...props }: ButtonPropsType) {
  if (href && icon) {
    return (
      <ButtonStyled
        as="a"
        variant={variant}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
        <BsArrowRightCircleFill size={20} />
      </ButtonStyled>
    );
  }

  return (
    <ButtonStyled variant={variant} {...props} as="a" href={href}>
      {children}
    </ButtonStyled>
  );
}