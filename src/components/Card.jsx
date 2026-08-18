import React from 'react';
import Button from './Button';
import { FaCartPlus, FaHeart } from 'react-icons/fa';

function Card({ 
  image, 
  title, 
  description, 
  price, 
  badge, 
  category, 
  buttonText = "Eu quero", 
  onButtonClick,
  className = "" 
}) {
  return (
    <div className={`bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full border border-slate-100 ${className}`}>
      <div className="relative overflow-hidden aspect-[4/3] bg-slate-100">
        {badge && (
          <span className="absolute top-4 left-4 z-10 bg-[#e28f83] text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">
            {badge}
          </span>
        )}
        {category && (
          <span className="absolute top-4 right-4 z-10 bg-white/90 text-[#2f3e46] text-[10px] sm:text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm backdrop-blur-xs">
            {category}
          </span>
        )}
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          loading="lazy"
        />
        <button 
          className="absolute bottom-4 right-4 bg-white/80 hover:bg-white text-[#e28f83] hover:text-red-500 p-2.5 rounded-full shadow-md backdrop-blur-xs transition-all duration-300 transform scale-0 group-hover:scale-100 cursor-pointer"
          aria-label="Adicionar aos favoritos"
        >
          <FaHeart size={14} />
        </button>
      </div>

      {/* Card */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg md:text-xl font-bold text-[#2f3e46] mb-2 group-hover:text-[#8fc4ae] transition-colors line-clamp-1">
          {title}
        </h3>
        <p className="text-slate-500 text-xs sm:text-sm mb-4 line-clamp-3 flex-grow leading-relaxed">
          {description}
        </p>

        {/* Footer  */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
          <div className="flex flex-col">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Valor</span>
            <span className="text-base sm:text-lg font-extrabold text-[#2f3e46]">{price}</span>
          </div>
          <Button 
            variant="primary" 
            onClick={onButtonClick}
            className="!px-4 !py-2 !text-xs"
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Card;
