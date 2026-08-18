import React from 'react';
import { Link } from 'react-router-dom';
import { FaPaw, FaRegCheckCircle } from 'react-icons/fa';
import Button from './Button';
import Container from './Container';

function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#f8f2d7] via-[#f8f2d7]/50 to-[#fcfbf7] pt-10 pb-20 md:py-24">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-[#8fc4ae]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-[#e28f83]/10 rounded-full blur-3xl"></div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="flex flex-col gap-6 text-left max-w-xl mx-auto lg:mx-0">
            <span className="inline-flex items-center gap-1.5 self-start bg-[#8fc4ae]/15 text-[#76a390] font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-full border border-[#8fc4ae]/20">
              <FaPaw size={12} className="animate-spin-slow" /> O cuidado que eles merecem
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#2f3e46] leading-tight">
              Onde o amor pelo seu pet <span className="text-[#8fc4ae]">vira cuidado</span> premium.
            </h1>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Na Makal PetStore, proporcionamos uma experiência de bem-estar completa para cães e gatos. Da estética especializada à medicina veterinária preventiva, tratamos seu companheiro com o carinho que ele merece.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-2">
              <Link to="/produtos">
                <Button variant="primary" className="!px-8 !py-3.5 text-base flex items-center gap-2">
                  <FaPaw size={16} /> Ver Serviços & Produtos
                </Button>
              </Link>
              <Link to="/contato">
                <Button variant="outline" className="!px-8 !py-3.5 text-base">
                  Falar Conosco
                </Button>
              </Link>
            </div>

            {/* Highlight Badges */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-200/60 mt-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <FaRegCheckCircle className="text-[#8fc4ae] shrink-0" size={16} />
                <span>Veterinários 24h</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <FaRegCheckCircle className="text-[#8fc4ae] shrink-0" size={16} />
                <span>Estética Livre de Gaiolas</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <FaRegCheckCircle className="text-[#8fc4ae] shrink-0" size={16} />
                <span>Ingredientes Naturais</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <FaRegCheckCircle className="text-[#8fc4ae] shrink-0" size={16} />
                <span>Atendimento Humanizado</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Image with decorative frame */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[450px] aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white bg-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=800" 
                alt="Golden Retriever feliz na Makal PetStore" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              
              {/* Overlay floating badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md px-6 py-4 rounded-3xl shadow-lg border border-slate-100/50 flex items-center gap-4 animate-bounce-slow">
                <div className="bg-[#8fc4ae]/20 text-[#8fc4ae] p-3 rounded-full">
                  <FaPaw size={24} />
                </div>
                <div>
                  <div className="text-[#2f3e46] font-black text-lg">+10.000</div>
                  <div className="text-slate-500 text-xs font-bold uppercase tracking-wider">Pets Felizes Atendidos</div>
                </div>
              </div>
            </div>
            
            {/* Visual background details */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#f8f2d7] -z-10 rounded-full border-4 border-dashed border-[#8fc4ae]/30 animate-spin-slow"></div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Hero;
