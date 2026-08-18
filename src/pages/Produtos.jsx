import React, { useState } from 'react';
import Section from '../components/Section';
import Container from '../components/Container';
import Title from '../components/Title';
import Card from '../components/Card';
import Button from '../components/Button';
import { products } from '../data/petData';
import { FaSearch, FaTimes, FaPaw, FaInfoCircle } from 'react-icons/fa';

function Produtos() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [activeProductModal, setActiveProductModal] = useState(null);

  // Filtragem dos produtos com base na categoria selecionada e texto digitado
  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = ['Todos', 'Serviços', 'Produtos'];

  const openProductModal = (product) => {
    setActiveProductModal(product);
  };

  const closeProductModal = () => {
    setActiveProductModal(null);
  };

  return (
    <div>
      {/* 1. Header Banner */}
      <div className="bg-[#f8f2d7] py-12 md:py-16 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-36 h-36 bg-[#8fc4ae]/10 rounded-full blur-xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-36 h-36 bg-[#e28f83]/10 rounded-full blur-xl pointer-events-none"></div>
        
        <Container className="relative z-10">
          <span className="text-[#76a390] font-extrabold text-xs uppercase tracking-widest flex items-center justify-center gap-1.5 mb-2">
            <FaPaw size={12} /> Nosso Catálogo
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-[#2f3e46] tracking-tight">
            Nossos Produtos & Serviços
          </h1>
          <p className="text-slate-600 text-sm md:text-base mt-2 max-w-xl mx-auto font-medium">
            Tudo o que seu pet precisa em saúde, estética, lazer e nutrição.
          </p>
        </Container>
      </div>

      {/* 2. Filtros e Catálogo */}
      <Section className="bg-white">
        <Container>
          {/* Barra de Pesquisa e Filtros de Categoria */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 pb-6 border-b border-slate-100">
            {/* Abas de Categoria */}
            <div className="flex gap-2 bg-slate-50 p-1.5 rounded-full border border-slate-100 self-start">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#8fc4ae] text-white shadow-xs'
                      : 'text-slate-500 hover:text-[#2f3e46]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Caixa de Busca */}
            <div className="relative w-full md:max-w-xs">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                <FaSearch size={14} />
              </span>
              <input
                type="text"
                placeholder="Pesquisar no catálogo..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#fcfbf7] border border-slate-200 rounded-full pl-11 pr-4 py-2.5 text-sm focus:outline-none focus:border-[#8fc4ae] focus:bg-white transition-all text-[#2f3e46]"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-400 hover:text-[#2f3e46] cursor-pointer"
                  aria-label="Limpar pesquisa"
                >
                  <FaTimes size={14} />
                </button>
              )}
            </div>
          </div>

          {/* Grid de Cards */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <Card
                  key={product.id}
                  image={product.image}
                  title={product.title}
                  category={product.category}
                  price={product.price}
                  description={product.description}
                  badge={product.badge}
                  buttonText="Ver Detalhes"
                  onButtonClick={() => openProductModal(product)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-slate-50/50 rounded-[2.5rem] border border-dashed border-slate-200">
              <div className="bg-slate-100 p-4 rounded-full w-14 h-14 flex items-center justify-center mx-auto text-slate-400 mb-4">
                <FaInfoCircle size={24} />
              </div>
              <h3 className="text-lg font-bold text-[#2f3e46] mb-1">Nenhum resultado encontrado</h3>
              <p className="text-sm text-slate-400 max-w-xs mx-auto">
                Tente ajustar os filtros ou digitar um termo de busca diferente.
              </p>
              <Button 
                variant="outline" 
                onClick={() => { setSelectedCategory('Todos'); setSearchQuery(''); }}
                className="mt-6 text-xs"
              >
                Limpar Filtros
              </Button>
            </div>
          )}
        </Container>
      </Section>

      {/* 3. Product Detail Modal */}
      {activeProductModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#2f3e46]/60 backdrop-blur-xs p-4 animate-fade-in">
          <div className="bg-white w-full max-w-2xl rounded-[2.5rem] overflow-hidden shadow-2xl relative flex flex-col md:flex-row max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-y-visible">
            {/* Close Button */}
            <button 
              onClick={closeProductModal}
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-[#2f3e46] hover:text-[#e28f83] p-2.5 rounded-full shadow-md cursor-pointer transition-colors"
              aria-label="Fechar detalhes"
            >
              <FaTimes size={16} />
            </button>

            {/* Modal Image */}
            <div className="w-full md:w-1/2 aspect-video md:aspect-auto md:h-auto bg-slate-100">
              <img 
                src={activeProductModal.image} 
                alt={activeProductModal.title} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Modal Info */}
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-[#8fc4ae]/15 text-[#76a390] font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full">
                    {activeProductModal.category}
                  </span>
                  {activeProductModal.badge && (
                    <span className="bg-[#e28f83]/15 text-[#e28f83] font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full">
                      {activeProductModal.badge}
                    </span>
                  )}
                </div>
                <h2 className="text-2xl font-black text-[#2f3e46] mb-4">
                  {activeProductModal.title}
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {activeProductModal.description}
                </p>
              </div>

              <div>
                <div className="flex items-baseline gap-1.5 mb-5">
                  <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Preço Estimado</span>
                  <span className="text-2xl font-extrabold text-[#2f3e46] block">{activeProductModal.price}</span>
                </div>
                <div className="flex gap-3">
                  <Button 
                    variant="primary" 
                    className="flex-grow !py-3 text-sm"
                    onClick={() => {
                      alert(`Interesse registrado para: ${activeProductModal.title}. Redirecionando para agendamento.`);
                      closeProductModal();
                    }}
                  >
                    Fazer Agendamento
                  </Button>
                  <Button 
                    variant="secondary" 
                    className="!px-4 !py-3 text-sm"
                    onClick={closeProductModal}
                  >
                    Voltar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Produtos;
