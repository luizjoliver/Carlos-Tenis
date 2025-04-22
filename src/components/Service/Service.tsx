
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

    <ServiceSectionStyled id="servicos">
      <Container>
        <ServiceText>

          <HeadingArrow handleClickArrow={handleClickArrow} title="Sobre meu serviço"
           aria-label="Navegação entre serviços"/>

        </ServiceText>

        <ServiceContainerContent>

          <ServiceContent>
          <figure className="imagesWrapper" aria-label="Demonstração visual do serviço">
              <img src={serviceInfo.secondImg}  alt={`Ilustração Principal do serviço ${serviceInfo.title}`} className="imgBottom" />
              <img src={serviceInfo.firstImg}  alt={`Ilustração secundária do serviço ${serviceInfo.title}`} className="imgTop" />
          </figure>

            <ServiceInfoContainer>

              <Info>
                <h2>{serviceInfo.title}</h2>
                <p>{serviceInfo.description}</p>

                <div>
                  <Button variant="primary" aria-label={`Acessar ${serviceInfo.buttonText}`}>
                    {serviceInfo.buttonText}
                    <BsArrowRightCircleFill size={20} />
                  </Button>
                </div>
              </Info>


            </ServiceInfoContainer>
          </ServiceContent>

          <ServiceNavigation role="navigation" 
            aria-label="Seleção de serviços">

            {ServiceInfos.map((info) => (
              <button onClick={() =>handleClickTitle(info.id)} className={`
           ${serviceInfo.title === info.title ? 'activedTitle' :''}     
                `}
                role="tab"
                aria-selected={serviceInfo.title === info.title}
                aria-controls={`service-${info.id}`}
                >{info.title}</button>
            ))}

          </ServiceNavigation>

        </ServiceContainerContent>

      </Container>
    </ ServiceSectionStyled>
  )
}
