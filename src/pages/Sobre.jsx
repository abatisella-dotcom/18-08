import React from 'react';
import Section from '../components/Section';
import Container from '../components/Container';
import Title from '../components/Title';
import { companyDetails } from '../data/petData';
import { FaEye, FaBullseye, FaGem, FaPaw } from 'react-icons/fa';
import Anabe from '../assets/img/anabe.png'
import AnaKoso from '../assets/img/eu.png'
import MariaManso from '../assets/img/manso.jpg'
import MariaDias from '../assets/img/mariaLuisa.png'



// Lista das nossas representantes com imagens preparadas
const equipeCards = [
  {
    id: 1,
    titulo: 'AnaBê',
    capa: Anabe,
  },
  {
    id: 2,
    titulo: 'Ana Koso',
    capa: AnaKoso,
  },
  {
    id: 3,
    titulo: 'Maria Manso',
    capa: MariaManso,
  },

  {
    id: 4,
    titulo: 'Maria Dias',
    capa: MariaDias,
  }
];

function Sobre() {
  // Mapeamos ícones institucionais para Missão, Visão e Valores
  const coreIcons = {
    Missão: <FaBullseye className="text-[#e28f83] shrink-0" size={28} />,
    Visão: <FaEye className="text-[#8fc4ae] shrink-0" size={28} />,
    Valores: <FaGem className="text-[#8fc4ae] shrink-0" size={28} />
  };

  return (
    <div>
      {/* 1. Header Banner */}
      <div className="bg-[#8fc4ae] py-12 md:py-16 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-36 h-36 bg-[#8fc4ae]/10 rounded-full blur-xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-36 h-36 bg-[#e28f83]/10 rounded-full blur-xl pointer-events-none"></div>

        <Container className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Conheça as responsáveis pelo seu pet!
          </h1>
          <p className="text-slate-600 text-sm md:text-base mt-2 max-w-xl mx-auto font-medium text-white">
            Conheça o amor e a dedicação por trás do nosso espaço de bem-estar animal.
          </p>
        </Container>
      </div>
      {/* 3. Seção Meninas*/}
      <Section className="bg-white">
        <Container className="flex flex-col items-center justify-center">
          

          {/* Div decorativa em Tailwind */}
          <div className="bg-white rounded-[50px] w-full max-w-[750px] text-[#64b6ac] mb-10 flex justify-center items-center"></div>

          {/* Grid de Cards em Tailwind */}
          <div className="flex flex-wrap justify-center items-center gap-6 w-full max-w-6xl">
            {equipeCards.map((item) => (
              <div
                key={item.id}
                className=" rounded-3xl p-6  hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center w-56 hover:-translate-y-1 group"
              >
                <div className="w-50 h-50 rounded-full overflow-hidden border-4 border-[#64b6ac] shadow-sm mb-4">
                  <img
                    src={item.capa}
                    alt={item.titulo}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#2f3e46] group-hover:text-[#64b6ac] transition-colors">
                  {item.titulo}
                </h3>
               
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 2. Missão, Visão e Valores */}
      <Section className="bg-[#fcfbf7]">
        <Container>
          <Title
            subtitle="Diretrizes Institucionais"
            title="Missão, Visão e Valores"
            center={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            {/* Card Missão */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col hover:-translate-y-1">
              <div className="mb-4 bg-[#e28f83]/10 text-[#e28f83] p-3 rounded-2xl self-start">
                {coreIcons.Missão}
              </div>
              <h3 className="text-xl font-bold text-[#2f3e46] mb-3">Missão</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {companyDetails.mission}
              </p>
            </div>

            {/* Card Visão */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col hover:-translate-y-1">
              <div className="mb-4 bg-[#8fc4ae]/10 text-[#76a390] p-3 rounded-2xl self-start">
                {coreIcons.Visão}
              </div>
              <h3 className="text-xl font-bold text-[#2f3e46] mb-3">Visão</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {companyDetails.vision}
              </p>
            </div>

            {/* Card Valores */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col hover:-translate-y-1">
              <div className="mb-4 bg-[#8fc4ae]/10 text-[#76a390] p-3 rounded-2xl self-start">
                {coreIcons.Valores}
              </div>
              <h3 className="text-xl font-bold text-[#2f3e46] mb-3">Nossos Valores</h3>
              <ul className="flex flex-col gap-2.5">
                {companyDetails.values.slice(0, 3).map((val, i) => (
                  <li key={i} className="text-left">
                    <span className="text-slate-500 text-sm leading-relaxed">
                      <span className="w-1.5 h-1.5 bg-[#8fc4ae] rounded-full shrink-0"></span>
                      {val.title}
                    </span>
                    <span className="text-xs text-slate-500 block pl-3">{val.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

    </div>
  );
}

export default Sobre;
