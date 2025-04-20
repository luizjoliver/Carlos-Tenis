
import { ServiceContainerContent, ServiceContent, ServiceInfoContainer, ServiceNavigation, ServiceSectionStyled, ServiceText, Container, Info } from "./Service.style";
import Button from "../Button/Button";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { useState } from "react";
import { ServiceInfos } from "../../constants";
import HeadingArrow from "../HeadingArrow/HeandingArrow";

type ServiceInfoType = {

  id: number;
  firstImg: string;
  secondImg: string;
  title: string;
  description: string;
  buttonText: string;

}

export default function ServiceSection() {

  const [serviceInfo, setServiceInfo] = useState<ServiceInfoType>(ServiceInfos[0])

  function handleClickArrow(direction: "left" | "right") {
    const currentIndex = serviceInfo.id - 1;
    const lastIndex = ServiceInfos.length - 1;
  
    if (direction === "left") {
      const newIndex = currentIndex === 0 ? lastIndex : currentIndex - 1;
      setServiceInfo(ServiceInfos[newIndex]);
    } else {
      const newIndex = currentIndex === lastIndex ? 0 : currentIndex + 1;
      setServiceInfo(ServiceInfos[newIndex]);
    }
  }

  function handleClickTitle(id:number){
    console.log(id);
    
    setServiceInfo(ServiceInfos[id - 1])
  }

  return (

    <ServiceSectionStyled>
      <Container>
        <ServiceText>

          <HeadingArrow handleClickArrow={handleClickArrow} title="Sobre meu serviço"/>

        </ServiceText>

        <ServiceContainerContent>

          <ServiceContent>
            <div className="imagesWrapper">
              <img src={serviceInfo.secondImg} alt="imagem 1" className="imgBottom" />
              <img src={serviceInfo.firstImg} alt="imagem 2" className="imgTop" />
            </div>

            <ServiceInfoContainer>

              <Info>
                <h2>{serviceInfo.title}</h2>
                <p>{serviceInfo.description}</p>

                <div>
                  <Button variant="primary">
                    {serviceInfo.buttonText}
                    <BsArrowRightCircleFill size={20} />
                  </Button>
                </div>
              </Info>


            </ServiceInfoContainer>
          </ServiceContent>

          <ServiceNavigation role="navigation">

            {ServiceInfos.map((info) => (
              <button onClick={() =>handleClickTitle(info.id)} className={`
           ${serviceInfo.title === info.title ? 'activedTitle' :''}     
                `}>{info.title}</button>
            ))}

          </ServiceNavigation>

        </ServiceContainerContent>

      </Container>
    </ ServiceSectionStyled>
  )
}
