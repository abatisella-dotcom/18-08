import React from 'react';

function Button({ 
  children, 
  onClick, 
  type = 'button', 
  variant = 'primary', 
  className = '', 
  disabled = false 
}) {
  const baseStyle = "px-6 py-2.5 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-center inline-flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow-md focus:outline-none select-none text-sm md:text-base";
  
  const variants = {
    primary: "bg-[#8fc4ae] hover:bg-[#76a390] text-white border border-transparent",
    secondary: "bg-[#f8f2d7] hover:bg-[#eee7ca] text-[#2f3e46] border border-transparent",
    outline: "border-2 border-[#8fc4ae] text-[#2f3e46] hover:bg-[#8fc4ae] hover:text-white",
    coral: "bg-[#e28f83] hover:bg-opacity-90 text-white border border-transparent",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed transform-none shadow-none hover:shadow-none hover:translate-y-0' : ''} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
