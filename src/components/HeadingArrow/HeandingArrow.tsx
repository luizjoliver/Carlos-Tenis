import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

type HeadingArrowProps = {
    handleClickArrow: (direction: "left" | "right") => void;
    title:string;
}

export default function HeadingArrow({handleClickArrow, title} : HeadingArrowProps) {

    return (
    <>

        <h1>{title}</h1>

        <div>
            <FiArrowLeft size={25} className="arrowLeft" onClick={() => handleClickArrow('left')} />
            <FiArrowRight size={25} className="arrowRight" onClick={() => handleClickArrow('right')} />
        </div>
    </>
    
    )
}
