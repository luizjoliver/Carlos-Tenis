import { CarlosSectionStyled, ContentContainer, ImagePlaceholder, ProfessionalInfo, HighlightsGrid, HighlightItem } from './AboutSection.style';
import Button from "../Button/Button";
import { BsArrowRightCircleFill } from "react-icons/bs";

export default function AboutSection() {
  return (
    <CarlosSectionStyled id='sobre' aria-label="Seção sobre o profissional">
      <ContentContainer>
        <ImagePlaceholder   aria-label="Foto de Carlos Silva"/>
        
        <ProfessionalInfo>
          <h2>Carlos Silva</h2>
          <h3>Profissional de Tênis com 10+ anos de experiência</h3>
          
          <p>
            Formado em Educação Física com especialização em Tênis de Campo, atuo como instrutor 
            profissional há mais de uma década. Minha carreira inclui passagens por academias 
            de alto padrão e treinamento de atletas competitivos.
          </p>

          <HighlightsGrid  role="region" aria-label="Destaques profissionais">
            <HighlightItem role="article" aria-labelledby="experiencia">
              <span>15+</span>
              <p>Anos de Experiência</p>
            </HighlightItem>
            <HighlightItem role="article" aria-labelledby="estudantes">
              <span>300+</span>
              <p>Alunos Treinados</p>
            </HighlightItem>
            <HighlightItem  role="article" aria-labelledby="torneios">
              <span>15+</span>
              <p>Torneios Orientados</p>
            </HighlightItem>
            <HighlightItem role="article" aria-labelledby="certificação">
              <span>3</span>
              <p>Certificações</p>
            </HighlightItem>
          </HighlightsGrid>

          <Button variant="secondary"  aria-label="Conhecer aulas disponíveis" >
            Conheça minhas aulas
            <BsArrowRightCircleFill size={20} />
          </Button>
        </ProfessionalInfo>
      </ContentContainer>
    </CarlosSectionStyled>
  )
}