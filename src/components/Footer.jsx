import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPaw, FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebookF, FaWhatsapp, FaTwitter } from 'react-icons/fa';
import Button from './Button';
import { companyDetails } from '../data/petData';

function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-[#2f3e46] text-slate-300 border-t-4 border-[#8fc4ae] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Col 1: About */}
        <div className="flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-[#8fc4ae] text-white p-2 rounded-2xl shadow-sm">
              <FaPaw size={20} />
            </div>
            <span className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Makal<span className="text-[#8fc4ae] font-semibold">PetStore</span>
            </span>
          </Link>
          <p className="text-sm leading-relaxed text-slate-400">
            {companyDetails.slogan}
          </p>
          <div className="flex items-center gap-3 mt-2">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white/5 hover:bg-[#8fc4ae] hover:text-white p-2.5 rounded-full transition-all duration-300 text-slate-400 cursor-pointer" aria-label="Instagram">
              <FaInstagram size={16} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white/5 hover:bg-[#8fc4ae] hover:text-white p-2.5 rounded-full transition-all duration-300 text-slate-400 cursor-pointer" aria-label="Facebook">
              <FaFacebookF size={16} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-white/5 hover:bg-[#8fc4ae] hover:text-white p-2.5 rounded-full transition-all duration-300 text-slate-400 cursor-pointer" aria-label="Twitter">
              <FaTwitter size={16} />
            </a>
            <a href="https://wa.me/5511998765432" target="_blank" rel="noopener noreferrer" className="bg-white/5 hover:bg-[#8fc4ae] hover:text-white p-2.5 rounded-full transition-all duration-300 text-slate-400 cursor-pointer" aria-label="WhatsApp">
              <FaWhatsapp size={16} />
            </a>
          </div>
        </div>

        {/* Col 4: Newsletter */}
        <div>
          <h3 className="text-white text-lg font-bold mb-5 relative pb-2">
            Novidades & Dicas
            <span className="absolute bottom-0 left-0 w-8 h-1 bg-[#8fc4ae] rounded-full"></span>
          </h3>
          <p className="text-sm text-slate-400 mb-4 leading-relaxed">
            Cadastre seu e-mail para receber cupons de desconto especiais e dicas de cuidados pet.
          </p>
          {subscribed ? (
            <div className="bg-[#8fc4ae]/10 border border-[#8fc4ae]/30 text-[#8fc4ae] text-sm px-4 py-3 rounded-2xl">
              ✓ Inscrição realizada com sucesso!
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/5 border border-slate-700 text-white rounded-2xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#8fc4ae] transition-colors placeholder:text-slate-500"
              />
              <Button type="submit" variant="primary" className="!py-2 text-xs">
                Inscrever-se
              </Button>
            </form>
          )}
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-700/60 text-center text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} Makal PetStore. Todos os direitos reservados.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-[#8fc4ae] transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-[#8fc4ae] transition-colors">Política de Privacidade</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
