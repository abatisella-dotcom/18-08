import React from 'react';
import { FaPaw } from 'react-icons/fa';

function Title({ title, subtitle, center = true, className = "" }) {
  return (
    <div className={`mb-12 flex flex-col ${center ? 'items-center text-center' : 'items-start text-left'} ${className}`}>
      {subtitle && (
        <span className="text-[#8fc4ae] font-bold uppercase tracking-widest text-xs sm:text-sm mb-2 flex items-center gap-1.5">
          <FaPaw className="text-xs text-[#8fc4ae] animate-bounce" /> {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#2f3e46] tracking-tight relative pb-4">
        {title}
        <span className={`absolute bottom-0 h-1.5 w-16 bg-[#8fc4ae] rounded-full ${center ? 'left-1/2 -translate-x-1/2' : 'left-0'}`}></span>
      </h2>
    </div>
  );
}

export default Title;
