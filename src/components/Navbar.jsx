import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { FaPaw, FaBars, FaTimes, FaCalendarAlt } from 'react-icons/fa';
import Button from './Button';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Fechar menu mobile ao mudar de rota
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Efeito de scroll para mudar estilos da navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/sobre', label: 'Sobre Nós' },
    { path: '/produtos', label: 'Produtos & Serviços' },
    { path: '/faq', label: 'FAQ' },
    { path: '/contato', label: 'Contato' }
  ];

  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md py-3 shadow-md border-b border-slate-100' 
        : 'bg-[#fcfbf7]/90 backdrop-blur-md py-5 border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-[#8fc4ae] text-white p-2 rounded-2xl shadow-sm group-hover:rotate-12 transition-transform duration-300">
            <FaPaw size={20} />
          </div>
          <span className="text-xl sm:text-2xl font-black text-[#2f3e46] tracking-tight">
            Makal<span className="text-[#8fc4ae] font-semibold">PetStore</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                `relative font-bold text-sm transition-colors cursor-pointer py-1.5 ${
                  isActive 
                    ? 'text-[#8fc4ae]' 
                    : 'text-slate-600 hover:text-[#8fc4ae]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#8fc4ae] rounded-full animate-fade-in"></span>
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* CTA Button Desktop */}
        <div className="hidden md:block">
          <Link to="/contato">
            <Button variant="primary" className="!text-sm flex items-center gap-2">
              <FaCalendarAlt size={14} />
              Agendar Horário
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-[#2f3e46] hover:text-[#8fc4ae] p-2 transition-colors cursor-pointer focus:outline-none"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-[350px] opacity-100 py-6' : 'max-h-0 opacity-0 pointer-events-none'
      }`}>
        <nav className="flex flex-col px-6 gap-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                `font-bold text-base py-2 border-b border-slate-50 transition-colors ${
                  isActive 
                    ? 'text-[#8fc4ae] pl-2 border-l-4 border-l-[#8fc4ae]' 
                    : 'text-slate-600 hover:text-[#8fc4ae] pl-0 border-l-0'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="mt-4">
            <Link to="/contato" className="block w-full">
              <Button variant="primary" className="w-full flex items-center justify-center gap-2">
                <FaCalendarAlt size={16} />
                Agendar Horário
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
