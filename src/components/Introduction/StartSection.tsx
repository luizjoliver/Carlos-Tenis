import Header from "../header/Header";
import { ContentContainer, CustomersContainer, CustomersInfo, SectionIntroduction, SellingContainer, StartPresentation } from "./StartSection.style";
import { customersImg } from "../../constants";
import Button from "../Button/Button";



export default function StartSection() {
  return (
    <SectionIntroduction>
      
      <Header/>

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
            <Button variant="primary" href="https://wa.me/5561999196605?text=Ol%C3%A1%20,%20quero%20fazer%20parte%20das%20suas%20aulas!" icon>
              Faça parte
            </Button>
          </SellingContainer>

        </StartPresentation>

       
      </ContentContainer>

    </SectionIntroduction>
  )
}
