
import { AboutContainerContent, AboutContent,  AboutInfoContainer,    AboutNavigation, AboutSectionStyled, AboutText, Container, Info } from "./About.style";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import aboutImg from "../../assets/about1.jpg";
import aboutImg2 from "../../assets/about2.jpg";
import Button from "../Button/Button";
import { BsArrowRightCircleFill } from "react-icons/bs";

export default function AboutSection() {
  return (

    <AboutSectionStyled>
      <Container>
        <AboutText>
          <h1>Sobre Meu Serviço</h1>

          <div>
            <FiArrowLeft size={25} className="arrowLeft" />
            <FiArrowRight size={25} className="arrowRight" />
          </div>
        </AboutText>

        <AboutContainerContent>

          <AboutContent>
            <div className="imagesWrapper">
              <img src={aboutImg2} alt="imagem 1" className="imgBottom" />
              <img src={aboutImg} alt="imagem 2" className="imgTop" />
            </div>

            <AboutInfoContainer>

              <Info>
                  <h2>Aula Tênis</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sint velit, delectus quisquam dicta odit dolores praesentium expedita illum consequatur rem. Odit ex blanditiis fuga illum sunt necessitatibus, quibusdam aperiam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum temporibus quos voluptas quod rerum, omnis vitae aliquam nihil perspiciatis magni illum, totam magnam. Eos, odio modi! Animi error corporis dolorum.</p>
                  
                  <div>
                    <Button variant="primary">
                        Faça parte
                      <BsArrowRightCircleFill size={20} />
                  </Button>
                  </div>
              </Info>

              
            </AboutInfoContainer>
          </AboutContent>

          <AboutNavigation role="navigation">

            <button>Aula</button>
            <button>Material</button>
            <button>Experiência</button>
            <button>Local</button>

          </AboutNavigation>

        </AboutContainerContent>

      </Container>
    </ AboutSectionStyled>
  )
}
