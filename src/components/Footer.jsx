import React from 'react';
import { Link } from 'react-router-dom';
import { FaPaw } from 'react-icons/fa';
import { companyDetails } from '../data/petData';

function Footer() {
  return (
    <footer className="bg-[#eaf4f1] text-slate-300 border-t-4 border-[#8fc4ae] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-6 mb-12">
        {/* Col 1: About */}
        <div className="flex flex-col items-center gap-4">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-[#8fc4ae] text-black p-2 rounded-2xl shadow-sm">
              <FaPaw size={20} />
            </div>
            <span className="text-xl sm:text-2xl font-black text-black tracking-tight">
              Makal<span className="text-[#8fc4ae] font-semibold">PetStore</span>
            </span>
          </Link>
          <p className="text-black text-sm md:text-base mt-4 max-w-xl mx-auto font-medium">
            {companyDetails.slogan}
          </p>
        </div>
      </div>
      
      <div className="text-center text-xs text-black">
        <p>&copy; {new Date().getFullYear()} Makal PetStore. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
