import React, { useState } from 'react';
import Section from '../components/Section';
import Container from '../components/Container';
import Title from '../components/Title';
import Button from '../components/Button';
import { companyDetails } from '../data/petData';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle, FaDirections, FaPaw } from 'react-icons/fa';

function Contato() {
  // Estados para gerenciar os campos do formulário
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [assunto, setAssunto] = useState('');
  const [mensagem, setMensagem] = useState('');

  // Estados de controle de feedback
  const [erros, setErros] = useState({});
  const [enviado, setEnviado] = useState(false);

  const validarForm = () => {
    let camposErros = {};
    if (!nome.trim()) camposErros.nome = "O nome é obrigatório.";
    if (!email.trim()) {
      camposErros.email = "O e-mail é obrigatório.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      camposErros.email = "Insira um e-mail válido.";
    }
    if (!assunto.trim()) camposErros.assunto = "O assunto é obrigatório.";
    if (!mensagem.trim()) camposErros.mensagem = "A mensagem é obrigatória.";
    
    setErros(camposErros);
    return Object.keys(camposErros).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validarForm()) {
      setEnviado(true);
      // Limpa os campos
      setNome('');
      setEmail('');
      setAssunto('');
      setMensagem('');
      // Fecha a tela de sucesso após 4 segundos
      setTimeout(() => setEnviado(false), 4000);
    }
  };

  return (
    <div>
      {/* 1. Header Banner */}
      <div className="bg-[#f8f2d7] py-12 md:py-16 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-36 h-36 bg-[#8fc4ae]/10 rounded-full blur-xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-36 h-36 bg-[#e28f83]/10 rounded-full blur-xl pointer-events-none"></div>
        
        <Container className="relative z-10">
          <span className="text-[#76a390] font-extrabold text-xs uppercase tracking-widest flex items-center justify-center gap-1.5 mb-2">
            <FaPaw size={12} /> Contato
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-[#2f3e46] tracking-tight">
            Fale Conosco
          </h1>
          <p className="text-slate-600 text-sm md:text-base mt-2 max-w-xl mx-auto font-medium">
            Estamos prontos para atender você e seu pet. Envie sua mensagem ou visite-nos!
          </p>
        </Container>
      </div>

      {/* 2. Conteúdo de Contato */}
      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Informações de Contato & Mapa Fictício */}
            <div className="flex flex-col gap-8 text-left">
              <div>
                <Title 
                  subtitle="Canais de Atendimento" 
                  title="Informações de Contato" 
                  center={false}
                  className="mb-6!"
                />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                  <div className="flex items-start gap-3.5 bg-[#fcfbf7] p-5 rounded-3xl border border-slate-100 shadow-2xs">
                    <div className="bg-[#8fc4ae]/15 text-[#76a390] p-3 rounded-2xl shrink-0">
                      <FaPhone size={18} />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-[#2f3e46] text-sm mb-0.5">Telefone</h4>
                      <p className="text-slate-500 text-xs sm:text-sm">{companyDetails.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 bg-[#fcfbf7] p-5 rounded-3xl border border-slate-100 shadow-2xs">
                    <div className="bg-[#8fc4ae]/15 text-[#76a390] p-3 rounded-2xl shrink-0">
                      <FaEnvelope size={18} />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-[#2f3e46] text-sm mb-0.5">E-mail</h4>
                      <p className="text-slate-500 text-xs sm:text-sm break-all">{companyDetails.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 bg-[#fcfbf7] p-5 rounded-3xl border border-slate-100 shadow-2xs sm:col-span-2">
                    <div className="bg-[#8fc4ae]/15 text-[#76a390] p-3 rounded-2xl shrink-0">
                      <FaMapMarkerAlt size={18} />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-[#2f3e46] text-sm mb-0.5">Endereço</h4>
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{companyDetails.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 bg-[#fcfbf7] p-5 rounded-3xl border border-slate-100 shadow-2xs sm:col-span-2">
                    <div className="bg-[#8fc4ae]/15 text-[#76a390] p-3 rounded-2xl shrink-0">
                      <FaClock size={18} />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-[#2f3e46] text-sm mb-0.5">Horário de Funcionamento</h4>
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{companyDetails.openingHours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mapa Fictício Estilizado com Tailwind */}
              <div className="flex flex-col gap-3">
                <h4 className="font-extrabold text-[#2f3e46] text-sm uppercase tracking-wider">Como nos encontrar (Localização)</h4>
                <div className="relative w-full h-64 bg-[#eae5d8] rounded-[2rem] overflow-hidden shadow-inner border border-slate-200 flex items-center justify-center group">
                  {/* Grid de Ruas do Mapa Fictício */}
                  <div className="absolute inset-0 bg-[radial-gradient(#d3cbb6_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
                  
                  {/* Linhas representando ruas */}
                  <div className="absolute w-full h-2 bg-white top-1/3 rotate-3 shadow-2xs"></div>
                  <div className="absolute w-full h-3 bg-white top-2/3 -rotate-2 shadow-2xs"></div>
                  <div className="absolute h-full w-2 bg-white left-1/3 -rotate-6 shadow-2xs"></div>
                  <div className="absolute h-full w-3 bg-white left-2/3 rotate-12 shadow-2xs"></div>
                  
                  {/* Rio Fictício (Área turquesa suave) */}
                  <div className="absolute bottom-0 right-0 w-32 h-16 bg-[#8fc4ae]/20 rounded-tl-full blur-md"></div>
                  
                  {/* Pin do Mapa Fictício */}
                  <div className="relative z-10 flex flex-col items-center animate-bounce-slow">
                    <div className="bg-[#e28f83] text-white p-3 rounded-full shadow-lg border-2 border-white">
                      <FaMapMarkerAlt size={22} />
                    </div>
                    <div className="bg-[#2f3e46] text-white text-[10px] font-bold px-2.5 py-1 rounded-md shadow-md mt-1 border border-white/10 uppercase tracking-wider">
                      Makal PetStore
                    </div>
                  </div>

                 
                </div>
              </div>
            </div>

            {/* Formulário de Contato */}
            <div className="bg-[#fcfbf7] border border-slate-100 rounded-[2.5rem] p-8 sm:p-10 shadow-sm flex flex-col justify-center relative">
              <Title 
                subtitle="Fale com a gente!" 
                title="Envie uma Mensagem" 
                center={false}
                className="mb-6!"
              />

              {enviado ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-8 rounded-3xl flex flex-col items-center text-center gap-4 animate-scale-up">
                  <FaCheckCircle className="text-emerald-500" size={56} />
                  <div>
                    <h3 className="text-xl font-bold mb-1.5">Mensagem Enviada!</h3>
                    <p className="text-sm text-emerald-600/95 leading-relaxed max-w-xs">
                      Obrigado pelo contato! Nossa equipe responderá sua mensagem por e-mail em até 24 horas.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
                  {/* Nome */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="nome" className="text-xs font-bold text-slate-500 uppercase tracking-wider">Nome Completo</label>
                    <input
                      type="text"
                      id="nome"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      placeholder="Ex: Ana Beatriz"
                      className={`bg-white border rounded-2xl px-4 py-3 text-sm focus:outline-none transition-colors text-[#2f3e46] ${erros.nome ? 'border-[#e28f83]' : 'border-slate-200 focus:border-[#8fc4ae]'}`}
                    />
                    {erros.nome && <span className="text-[#e28f83] text-xs font-semibold pl-1">{erros.nome}</span>}
                  </div>

                  {/* E-mail */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-bold text-slate-500 uppercase tracking-wider">E-mail de Contato</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Ex: ana@email.com"
                      className={`bg-white border rounded-2xl px-4 py-3 text-sm focus:outline-none transition-colors text-[#2f3e46] ${erros.email ? 'border-[#e28f83]' : 'border-slate-200 focus:border-[#8fc4ae]'}`}
                    />
                    {erros.email && <span className="text-[#e28f83] text-xs font-semibold pl-1">{erros.email}</span>}
                  </div>

                  {/* Assunto */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="assunto" className="text-xs font-bold text-slate-500 uppercase tracking-wider">Assunto</label>
                    <input
                      type="text"
                      id="assunto"
                      value={assunto}
                      onChange={(e) => setAssunto(e.target.value)}
                      placeholder="Ex: Dúvida sobre vacinas, Tosa higiênica, Parcerias"
                      className={`bg-white border rounded-2xl px-4 py-3 text-sm focus:outline-none transition-colors text-[#2f3e46] ${erros.assunto ? 'border-[#e28f83]' : 'border-slate-200 focus:border-[#8fc4ae]'}`}
                    />
                    {erros.assunto && <span className="text-[#e28f83] text-xs font-semibold pl-1">{erros.assunto}</span>}
                  </div>

                  {/* Mensagem */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="mensagem" className="text-xs font-bold text-slate-500 uppercase tracking-wider">Mensagem</label>
                    <textarea
                      id="mensagem"
                      rows="4"
                      value={mensagem}
                      onChange={(e) => setMensagem(e.target.value)}
                      placeholder="Digite sua mensagem detalhada aqui..."
                      className={`bg-white border rounded-2xl px-4 py-3 text-sm focus:outline-none transition-colors text-[#2f3e46] resize-none ${erros.mensagem ? 'border-[#e28f83]' : 'border-slate-200 focus:border-[#8fc4ae]'}`}
                    ></textarea>
                    {erros.mensagem && <span className="text-[#e28f83] text-xs font-semibold pl-1">{erros.mensagem}</span>}
                  </div>

                  {/* Botão de Envio */}
                  <Button type="submit" variant="primary" className="w-full !py-3 text-sm md:text-base mt-2">
                    Enviar Mensagem
                  </Button>
                </form>
              )}
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

export default Contato;
