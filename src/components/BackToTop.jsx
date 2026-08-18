import React, { useState, useEffect } from 'react';
import { FaChevronUp } from 'react-icons/fa';

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-45 bg-[#8fc4ae] hover:bg-[#76a390] text-white p-3.5 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer hover:scale-105 active:scale-95 focus:outline-none flex items-center justify-center border border-white/10 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'}`}
      aria-label="Voltar ao topo"
    >
      <FaChevronUp size={18} />
    </button>
  );
}

export default BackToTop;
