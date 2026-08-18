import React from 'react';
import { Link } from 'react-router-dom';
import { FaPaw, FaHome } from 'react-icons/fa';
import Button from '../components/Button';
import Container from '../components/Container';

function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-[#fcfbf7] py-16 relative overflow-hidden">
      {/* Decorative Paw details */}
      <div className="absolute top-1/4 left-1/4 text-slate-200/50 -z-10 rotate-12">
        <FaPaw size={120} />
      </div>
      <div className="absolute bottom-1/4 right-1/4 text-slate-200/50 -z-10 -rotate-12">
        <FaPaw size={100} />
      </div>

      <Container className="text-center flex flex-col items-center gap-6 relative z-10 px-4">
        {/* Lost Dog Illustration Card */}
        <div className="relative mb-4 flex items-center justify-center">
          <div className="bg-white p-7 rounded-full border-4 border-[#e28f83] shadow-lg relative text-[#e28f83]">
            <FaPaw size={64} />
          </div>
        </div>

        {/* Error Code Tag */}
        <span className="bg-[#e28f83]/15 text-[#e28f83] font-black text-sm uppercase tracking-widest px-4 py-1.5 rounded-full">
          Erro 404
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2f3e46] tracking-tight max-w-xl leading-tight">
          Página não encontrada...
        </h1>
        
        <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
          Vamos voltar para a página inicial e começar a busca por lá?
        </p>

        <div className="mt-4 flex gap-4">
          <Link to="/">
            <Button variant="primary" className="!px-8 flex items-center gap-2">
              <FaHome size={16} /> Voltar para a Home
            </Button>
          </Link>
          <Link to="/produtos">
            <Button variant="secondary" className="!px-6">
              Ver Serviços
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default NotFound;
