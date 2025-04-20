import { AboutPlan, ContainerPlan, ImageContainer, ImagePlan, Plan, PlanDescription, PlansContainerContent, PlanSectionStyled } from './Plans.style';
import tennisBall from "../../assets/tennisBall.png";
import HeadingArrow from '../HeadingArrow/HeandingArrow';
import { Plans } from '../../constants';
import { useState } from 'react';

export default function PlansSection() {
  const [currentPlan, setCurrentPlan] = useState(1);

  function handleClickArrow(direction: "left" | "right") {
    setCurrentPlan(prev => {
      const totalPlans = Plans.length;
      
      if(direction === 'left') {
        return prev === 1 ? totalPlans : prev - 1;
      }
      
      return prev === totalPlans ? 1 : prev + 1;
    });
  }

  return (
    <PlanSectionStyled>
      <ContainerPlan>
        <AboutPlan>
          <HeadingArrow title='Planos' handleClickArrow={handleClickArrow} />
        </AboutPlan>

        <PlansContainerContent>
          {Plans.map((plan) => (
            <Plan 
              key={plan.id}
              isActive={plan.id === currentPlan}
            >
              <img src={tennisBall} alt="Ícone de bola de tênis" />
              <PlanDescription>
                <h2>{plan.title}</h2>
                <p>{plan.description}</p>
                <div className="frequency">
                  {plan.frequency}x/semana
                </div>
              </PlanDescription>

              <ImageContainer>
                <ImagePlan src={plan.imgSrc} alt={`Plano ${plan.title}`} />
              </ImageContainer>
            </Plan>
          ))}
        </PlansContainerContent>
      </ContainerPlan>
    </PlanSectionStyled>
  )
}