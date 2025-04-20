
import { AboutContainerContent, AboutContent, AboutInfoContainer, AboutNavigation, AboutSectionStyled, AboutText, Container, Info } from "./About.style";
import Button from "../Button/Button";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { useState } from "react";
import { AboutInfos } from "../../constants";
import HeadingArrow from "../HeadingArrow/HeandingArrow";

type AboutInfoType = {

  id: number;
  firstImg: string;
  secondImg: string;
  title: string;
  description: string;
  buttonText: string;

}

export default function AboutSection() {

  const [aboutInfo, setAboutInfo] = useState<AboutInfoType>(AboutInfos[0])

  function handleClickArrow(direction: "left" | "right") {
    const currentIndex = aboutInfo.id - 1;
    const lastIndex = AboutInfos.length - 1;
  
    if (direction === "left") {
      const newIndex = currentIndex === 0 ? lastIndex : currentIndex - 1;
      setAboutInfo(AboutInfos[newIndex]);
    } else {
      const newIndex = currentIndex === lastIndex ? 0 : currentIndex + 1;
      setAboutInfo(AboutInfos[newIndex]);
    }
  }

  function handleClickTitle(id:number){
    console.log(id);
    
    setAboutInfo(AboutInfos[id - 1])
  }

  return (

    <AboutSectionStyled>
      <Container>
        <AboutText>

          <HeadingArrow handleClickArrow={handleClickArrow} title="Sobre meu serviço"/>

        </AboutText>

        <AboutContainerContent>

          <AboutContent>
            <div className="imagesWrapper">
              <img src={aboutInfo.secondImg} alt="imagem 1" className="imgBottom" />
              <img src={aboutInfo.firstImg} alt="imagem 2" className="imgTop" />
            </div>

            <AboutInfoContainer>

              <Info>
                <h2>{aboutInfo.title}</h2>
                <p>{aboutInfo.description}</p>

                <div>
                  <Button variant="primary">
                    {aboutInfo.buttonText}
                    <BsArrowRightCircleFill size={20} />
                  </Button>
                </div>
              </Info>


            </AboutInfoContainer>
          </AboutContent>

          <AboutNavigation role="navigation">

            {AboutInfos.map((info) => (
              <button onClick={() =>handleClickTitle(info.id)} className={`
           ${aboutInfo.title === info.title ? 'activedTitle' :''}     
                `}>{info.title}</button>
            ))}

          </AboutNavigation>

        </AboutContainerContent>

      </Container>
    </ AboutSectionStyled>
  )
}
