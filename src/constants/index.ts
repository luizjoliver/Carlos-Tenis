import client1 from "../assets/customers/customerum.jpg"
import client2 from "../assets/customers/customerdois.jpg"
import client3 from "../assets/customers/customertres.jpg"
import client4 from "../assets/customers/customerquatro.jpg"

import aboutFirst from "../assets/about1.jpg"
import aboutSecond from "../assets/about2.jpg"

import secondaboutFirst from "../assets/secondabout1.jpg"
import secondaboutSecond from "../assets/secondabout2.jpg"

import thirdaboutFirst from "../assets/thirdAbout1.jpg"
import thirdaboutSecond from "../assets/thirdAbout2.jpg"


import fourthaboutFirst from "../assets/fourthAbout1.jpg"
import fourthaboutSecond from "../assets/fourthAbout2.jpg"

import beginner from "../assets/plans/beginner.jpg"
import intermediate from "../assets/plans/intermediate.jpg"
import advanced from "../assets/plans/advanced.jpg"
import athlete from "../assets/plans/professional.jpg"

export const customersImg = [
    {
        id:1,
        url:client1
    },
    {
        id:2,
        url:client2
    },
    {
        id:3,
        url:client3
    },
    {
        id:4,
        url:client4
    }
]

export const ServiceInfos = [
    {
        id:1,
        firstImg:aboutFirst,
        secondImg:aboutSecond,
        title:'Aula',
        description:'Nossas aulas são pensadas para todos os níveis, desde iniciantes até jogadores avançados. Com metodologia prática, foco técnico e desenvolvimento estratégico, cada sessão é uma oportunidade única de evolução. O ambiente é acolhedor e dinâmico, permitindo que você aprenda no seu ritmo. Venha experimentar uma abordagem moderna que une técnica, disciplina e diversão em quadra.',
        buttonText:'Faça parte'
    },
    {
        id:2,
        firstImg:secondaboutFirst,
        secondImg:secondaboutSecond,
        title:'Material',
        description:'Oferecemos todo o suporte necessário para seu desempenho, incluindo raquetes, bolas profissionais e acessórios de alta qualidade. O material é revisado e adaptado conforme sua evolução. Aqui, você não precisa se preocupar em trazer nada — cuidamos para que você tenha a melhor experiência possível com equipamentos de ponta e atenção aos detalhes técnicos.',
        buttonText:'Testar'
    },
    {
        id:3,
        firstImg:thirdaboutFirst,
        secondImg:thirdaboutSecond,
        title:'Experiência',
        description:'Com anos de dedicação ao tênis, nosso treinador já formou atletas de diferentes idades e objetivos. A experiência acumulada em quadra garante uma leitura precisa de cada aluno, adaptando os treinos conforme suas necessidades. Mais que um instrutor, você terá um mentor pronto para te guiar com empatia, conhecimento técnico e paixão pelo esporte.',
        buttonText:'Experienciar'
    },
    {
        id:4,
        firstImg:fourthaboutFirst,
        secondImg:fourthaboutSecond,
        title:'Local',
        description:'As aulas acontecem em quadras confortáveis, bem cuidadas e de fácil acesso. O espaço é ideal para quem busca qualidade, tranquilidade e segurança ao praticar tênis. Seja para treinos individuais ou em grupo, o ambiente oferece a estrutura necessária para você se concentrar no seu desempenho e aproveitar cada momento em quadra.',
        buttonText:'Praticar'
    }
]

export const Plans = [
    {
        id: 1,
        imgSrc: beginner,
        title: "Iniciante",
        description: "Aulas básicas para iniciar no tênis: fundamentos, regras e prática orientada",
        frequency: 2
    },
    {
        id: 2,
        imgSrc: intermediate,
        title: "Regular",
        description: "Plano para evolução técnica com aulas semanais e preparação física",
        frequency: 3
    },
    {
        id: 3,
        imgSrc: advanced,
        title: "Experiente",
        description: "Treinos intensivos com foco em técnicas avançadas e estratégias de jogo",
        frequency: 4
    },   {
        id: 4,
        imgSrc: athlete, 
        title: "Atleta",
        description: "Treinamento completo com foco em alto rendimento, desempenho físico e torneios",
        frequency: 5
    }
]

interface Location {
    id: number;
    name: string;
    address: string;
    mapsUrl: string;
    schedule: {
      days: string;
      hours: string;
    };
  }

export const locations: Location[] = [
    {
        id: 1,
        name: 'Clube de Tênis Primavera',
        address: 'Av. das Palmeiras, 1500 - Águas claras',
        mapsUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1234567890!2d-46.567890!3d-23.567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDM0JzA0LjQiUyA0NsKwMzQnMDEuNiJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr',
        schedule: {
          days: 'Segunda à Quarta',
          hours: '08:00 - 20:00'
        }
      },
      {
        id: 2,
        name: 'Academia Top Spin',
        address: 'R. dos Backhands, 300 - Taguatinga centro',
        mapsUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.9876543210!2d-46.654321!3d-23.543210!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMyJzM1LjYiUyA0NsKwMzknMTAuMiJX!5e0!3m2!1spt-BR!2sbr!4v1234567890456!5m2!1spt-BR!2sbr',
        schedule: {
          days: 'Quinta e Sexta',
          hours: '13:00 - 18:00'
        }
      },

];