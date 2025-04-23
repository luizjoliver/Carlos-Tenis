import { AboutPlan, ContainerPlan, ImagePlan, Plan, PlanDescription, PlanDetails, PlansContainerContent, PlanSectionStyled, PlanTitle, ImageContainer, Frequency } from './Plans.style';
import tennisBall from "../../assets/tennisBall.png";
import { Plans } from '../../constants';
import { useState } from 'react';
import HeadingArrow from '../HeadingArrow/HeandingArrow';
import Button from '../Button/Button';

export default function PlansSection() {
  const [currentPlan, setCurrentPlan] = useState(1);

  function handleClickArrow(direction: "left" | "right") {
    setCurrentPlan(prev => {
      const totalPlans = Plans.length;
      return direction === 'left' 
        ? (prev === 1 ? totalPlans : prev - 1)
        : (prev === totalPlans ? 1 : prev + 1);
    });
  }

  return (
    <PlanSectionStyled id='planos' aria-label="Planos de aulas disponíveis">
      <ContainerPlan>
        <AboutPlan>
          <HeadingArrow title='Planos' handleClickArrow={handleClickArrow}  aria-label="Navegação entre planos" />
        </AboutPlan>

        <PlansContainerContent role="list" aria-live="polite">
          {Plans.map((plan) => (
            <Plan
              key={plan.id}
              isActive={plan.id === currentPlan}
              onClick={() => setCurrentPlan(plan.id)}
              role="listitem"
              aria-current={plan.id === currentPlan ? "true" : "false"}
              tabIndex={0}
            >
              <Frequency aria-label={`Frequência: ${plan.frequency} vezes por semana`}>
                    <span>{plan.frequency}x/Semana</span>
                    <img src={tennisBall} alt="Ícone de bola de tênis" />
                  </Frequency>
              <PlanDescription>
                <PlanTitle>
                  <h1>{plan.title}</h1>
                </PlanTitle>

                <PlanDetails> 
                  <p>{plan.description}</p>
                  <Button variant={currentPlan === plan.id ? 'secondary' : 'primary'}
                    aria-label={`Selecionar plano ${plan.title}`} href='https://wa.me/5561999196605?text=Ol%C3%A1%20,%20Carlos%20,%20como%20funciona%20as%20aulas%20e%20planos?' >
                    Comprar Agora
                  </Button>
                </PlanDetails>
              </PlanDescription>

              <ImageContainer>
                <ImagePlan src={plan.imgSrc} alt={plan.title} />
              </ImageContainer>
            </Plan>
          ))}
        </PlansContainerContent>
      </ContainerPlan>
    </PlanSectionStyled>
  )
}