import { Link } from "react-router";
import Header from "../header/Header";
import { ContentContainer, CustomersContainer, CustomersInfo, SectionIntroduction, SellingContainer, StartPresentation } from "./StartSection.style";
import { customersImg } from "../../constants";
import Button from "../Button/Button";
import { BsArrowRightCircleFill } from "react-icons/bs";



export default function StartSection() {
  return (
    <SectionIntroduction>
      <Header>
        <Link to={"/"}>Sobre</Link >
        <Link to={"/"}>Experiência</Link >
        <Link to={"/"}>Planos</Link >
        <Link to={"/"}>Localização</Link >
      </Header>

      <ContentContainer>

        <StartPresentation>
          <CustomersContainer>
            {customersImg.map((image) => (
              <div key={image.id}>
                <img src={image.url} alt={`Cliente ${image.id}`} />
              </div>
            ))}
            <CustomersInfo>
              <h3>150+</h3>
              <span>Alunos Satisfeitos</span>
            </CustomersInfo>
          </CustomersContainer>

          <SellingContainer>
            <h1>
              seu inicio<br />
              <span >começa aqui !</span>
            </h1>
            <p>
              Venha fazer parte do meu time de alunos e transforme seu jogo de tênis com aulas personalizadas, focadas no seu ritmo, objetivos e nível de experiência. Aqui, cada aluno recebe atenção individualizada para evoluir com confiança, técnica e motivação.
            </p>
            <Button variant="primary" >
              Faça parte
              <BsArrowRightCircleFill size={20} />
            </Button>
          </SellingContainer>

        </StartPresentation>

       
      </ContentContainer>

    </SectionIntroduction>
  )
}
