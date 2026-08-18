import React, { useState, useEffect } from 'react';
import { FaPaw } from 'react-icons/fa';

function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      const removeTimer = setTimeout(() => {
        setVisible(false);
      }, 500); // 500ms transition time
      return () => clearTimeout(removeTimer);
    }, 1500); // Display time

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#f8f2d7] transition-opacity duration-500 ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="relative flex items-center justify-center mb-4">
        {/* Animated Waves */}
        <span className="absolute inline-flex h-24 w-24 rounded-full bg-[#8fc4ae] opacity-20 animate-ping"></span>
        <span className="absolute inline-flex h-16 w-16 rounded-full bg-[#8fc4ae] opacity-30 animate-pulse"></span>
        
        {/* Central Paw Icon */}
        <div className="relative bg-white p-5 rounded-full shadow-md border-2 border-[#8fc4ae] text-[#8fc4ae] animate-bounce">
          <FaPaw size={42} />
        </div>
      </div>
      <h2 className="text-xl font-black text-[#2f3e46] tracking-wide animate-pulse">
        Makal PetStore
      </h2>
      <p className="text-[10px] text-slate-400 mt-2 font-bold tracking-widest uppercase">
        Carregando amor e carinho...
      </p>
    </div>
  );
}

export default LoadingScreen;
