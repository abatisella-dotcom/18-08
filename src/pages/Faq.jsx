import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import Container from '../components/Container';
import Title from '../components/Title';
import Button from '../components/Button';
import { faq } from '../data/petData';
import { FaChevronDown, FaPaw, FaQuestionCircle } from 'react-icons/fa';

function Faq() {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div>
      {/* 1. Header Banner */}
      <div className="bg-[#8fc4ae] py-12 md:py-16 text-center relative overflow-hidden">
        <Container className="relative z-10">
          <span className="text-yellow-50 font-extrabold text-xs uppercase tracking-widest flex items-center justify-center gap-1.5 mb-2">
            <FaPaw size={18} /> As perguntas mais Frequentes
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            Dúvidas Frequentes (FAQ)
          </h1>
          <p className="text-yellow-50 text-sm md:text-base mt-4 max-w-xl mx-auto font-medium">
            Encontre respostas rápidas para as principais dúvidas sobre nossos atendimentos, produtos e serviços.
          </p>
        </Container>
      </div>

      {/* 2. FAQ Accordion Grid */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-4xl mx-auto flex flex-col gap-4 text-left">
            {faq.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div 
                  key={item.id} 
                  className={`border rounded-3xl overflow-hidden transition-all duration-300 ${
                    isOpen 
                      ? 'border-[#8fc4ae]/60 bg-[#8fc4ae] shadow-sm' 
                      : 'border-slate-200/60 bg-white hover:border-[#8fc4ae]/30 hover:shadow-xs'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(item.id)}
                    className={`w-full flex justify-between items-center px-6 py-5 text-left font-bold text-sm sm:text-base md:text-lg focus:outline-none transition-colors select-none cursor-pointer ${
                      isOpen ? 'text-yellow-50' : 'text-[#2f3e46]'
                    }`}
                  >
                    <span className="flex items-center gap-3 pr-4 leading-snug">
                      <FaQuestionCircle className={`shrink-0 transition-colors duration-300 ${isOpen ? 'text-white' : 'text-slate-400'}`} size={18} />
                      {item.question}
                    </span>
                    <FaChevronDown 
                      className={`shrink-0 transition-transform duration-300 ${isOpen ? 'transform rotate-180 text-white' : 'text-slate-400'}`} 
                      size={14} 
                    />
                  </button>

                  <div 
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      isOpen ? 'max-h-[500px] border-t border-slate-100' : 'max-h-0'
                    }`}
                  >
                    <div className={`px-6 py-5 text-xs sm:text-sm leading-relaxed ${isOpen ? 'text-white' : 'text-slate-500'}`}>
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* 3. CTA FAQ Section */}
      <Section className="bg-[#8fc4ae] pb-24!">
        <Container>
          <div className="bg-white rounded-[2.5rem] border border-slate-100 p-8 sm:p-12 shadow-sm max-w-3xl mx-auto text-center flex flex-col items-center gap-5">
            <div className="bg-[#8fc4ae]/15 text-[#76a390] p-4 rounded-full">
              <FaQuestionCircle size={28} />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2f3e46]">Ainda tem dúvidas sobre o cuidado com o seu pet?</h3>
            <p className="text-slate-500 text-sm leading-relaxed max-w-lg">
              Se você não encontrou a resposta que procurava nas perguntas frequentes, fique tranquilo! Entre em contato conosco e nossa equipe responderá você com toda atenção.
            </p>
            <Link to="/contato" className="mt-2">
              <Button variant="primary" >
                Entre em Contato
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}

export default Faq;
