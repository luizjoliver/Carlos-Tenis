import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { HeadingArrowContainer, Title, ArrowContainer } from "./HeadingArrow.style";

type HeadingArrowProps = {
    handleClickArrow: (direction: "left" | "right") => void;
    title: string;
}

export default function HeadingArrow({ handleClickArrow, title }: HeadingArrowProps) {
    return (
        <HeadingArrowContainer>
            <Title>{title}</Title>
            <ArrowContainer>
                <FiArrowLeft size={25} onClick={() => handleClickArrow('left')} />
                <FiArrowRight size={25} onClick={() => handleClickArrow('right')} />
            </ArrowContainer>
        </HeadingArrowContainer>
    )
}