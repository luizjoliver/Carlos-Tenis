import { CarlosSectionStyled, ContentContainer, ImagePlaceholder, ProfessionalInfo, HighlightsGrid, HighlightItem } from './AboutSection.style';
import Button from "../Button/Button";
import { BsArrowRightCircleFill } from "react-icons/bs";

export default function AboutSection() {
  return (
    <CarlosSectionStyled>
      <ContentContainer>
        <ImagePlaceholder />
        
        <ProfessionalInfo>
          <h2>Carlos Silva</h2>
          <h3>Profissional de Tênis com 15+ anos de experiência</h3>
          
          <p>
            Formado em Educação Física com especialização em Tênis de Campo, atuo como instrutor 
            profissional há mais de uma década. Minha carreira inclui passagens por academias 
            de alto padrão e treinamento de atletas competitivos.
          </p>

          <HighlightsGrid>
            <HighlightItem>
              <span>15+</span>
              <p>Anos de Experiência</p>
            </HighlightItem>
            <HighlightItem>
              <span>1000+</span>
              <p>Alunos Treinados</p>
            </HighlightItem>
            <HighlightItem>
              <span>50+</span>
              <p>Torneios Orientados</p>
            </HighlightItem>
            <HighlightItem>
              <span>3</span>
              <p>Certificações Internacionais</p>
            </HighlightItem>
          </HighlightsGrid>

          <Button variant="secondary">
            Conheça minhas aulas
            <BsArrowRightCircleFill size={20} />
          </Button>
        </ProfessionalInfo>
      </ContentContainer>
    </CarlosSectionStyled>
  )
}