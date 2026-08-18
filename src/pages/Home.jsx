import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft, FaCheck, FaAward, FaHeart, FaShieldAlt } from 'react-icons/fa';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Container from '../components/Container';
import Title from '../components/Title';
import Card from '../components/Card';
import Button from '../components/Button';
import { products, testimonials, highlights } from '../data/petData';

function Home() {
  // Estado para controlar o carrossel de depoimentos
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Auto-play para o carrossel (a cada 6 segundos)
  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrevSlide = () => {
    setCarouselIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNextSlide = () => {
    setCarouselIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Pegamos apenas 3 produtos em destaque para exibir na Home
  const featuredProducts = products.slice(0, 3);

  // Mapeamos os ícones do highlights
  const highlightIcons = [
    <FaHeart className="text-[#e28f83] shrink-0" size={32} />,
    <FaAward className="text-[#8fc4ae] shrink-0" size={32} />,
    <FaShieldAlt className="text-[#8fc4ae] shrink-0" size={32} />
  ];

  return (
    <div>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Destaques (Highlights) */}
      <Section className="bg-white">
        <Container>
          <Title 
            subtitle="Nossos Diferenciais" 
            title="Por que escolher a Makal PetStore?" 
            center={true} 
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            {highlights.map((item, idx) => (
              <div 
                key={item.id} 
                className="bg-[#fcfbf7] p-8 rounded-3xl border border-slate-100 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-1"
              >
                <div className="mb-4 bg-white p-4 rounded-2xl shadow-xs group-hover:scale-110 transition-transform duration-300">
                  {highlightIcons[idx]}
                </div>
                <h3 className="text-xl font-bold text-[#2f3e46] mb-3 group-hover:text-[#8fc4ae] transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 3. Cards Section (Featured Products/Services) */}
      <Section className="bg-[#fcfbf7]">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <Title 
              subtitle="Nossos Destaques" 
              title="Destaques do Catálogo" 
              center={false}
              className="mb-0!"
            />
            <Link to="/produtos">
              <Button variant="outline" className="text-sm">
                Ver Catálogo Completo
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card 
                key={product.id}
                image={product.image}
                title={product.title}
                category={product.category}
                price={product.price}
                description={product.description}
                badge={product.badge}
                buttonText="Ver Detalhes"
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. Carousel (Testimonials) */}
      <Section className="bg-white overflow-hidden relative">
        {/* Background bubbles */}
        <div className="absolute top-1/2 left-4 -translate-y-1/2 w-48 h-48 bg-[#8fc4ae]/5 rounded-full blur-2xl pointer-events-none"></div>
        <div className="absolute top-1/3 right-4 w-64 h-64 bg-[#f8f2d7]/20 rounded-full blur-2xl pointer-events-none"></div>

        <Container className="relative z-10">
          <Title 
            subtitle="Clientes Satisfeitos" 
            title="Quem ama, confia e recomenda" 
            center={true} 
          />

          {/* Carousel Wrapper */}
          <div className="max-w-3xl mx-auto mt-6 relative px-4 sm:px-12">
            <div className="bg-[#fcfbf7] rounded-[2.5rem] border border-slate-100 p-8 sm:p-12 shadow-md relative min-h-[300px] flex items-center justify-center">
              {/* Quote Icon */}
              <div className="absolute top-6 left-8 text-[#8fc4ae]/10">
                <FaQuoteLeft size={72} />
              </div>

              {/* Slider Testimonial content */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <img 
                  src={testimonials[carouselIndex].image} 
                  alt={testimonials[carouselIndex].name} 
                  className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md mb-6"
                />
                <p className="text-slate-600 italic text-base md:text-lg leading-relaxed mb-6 px-2 sm:px-6">
                  "{testimonials[carouselIndex].text}"
                </p>
                <h4 className="text-[#2f3e46] font-extrabold text-base md:text-lg mb-1">
                  {testimonials[carouselIndex].name}
                </h4>
                <span className="text-[#76a390] font-bold text-xs uppercase tracking-wider">
                  Tutor(a) do {testimonials[carouselIndex].petName}
                </span>
              </div>
            </div>

            {/* Slider Controls (Left / Right Arrows) */}
            <button 
              onClick={handlePrevSlide}
              className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-[#8fc4ae] text-[#2f3e46] hover:text-white p-3.5 rounded-full shadow-md border border-slate-100/50 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer z-20 focus:outline-none"
              aria-label="Depoimento anterior"
            >
              <FaChevronLeft size={16} />
            </button>
            <button 
              onClick={handleNextSlide}
              className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-[#8fc4ae] text-[#2f3e46] hover:text-white p-3.5 rounded-full shadow-md border border-slate-100/50 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer z-20 focus:outline-none"
              aria-label="Próximo depoimento"
            >
              <FaChevronRight size={16} />
            </button>

            {/* Slide Indicators (Dots) */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCarouselIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    index === carouselIndex ? 'w-8 bg-[#8fc4ae]' : 'w-2.5 bg-slate-200 hover:bg-slate-300'
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* 5. CTA Section */}
      <Section className="bg-[#fcfbf7] pb-24!">
        <Container>
          <div className="bg-gradient-to-br from-[#8fc4ae] to-[#76a390] rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-xl">
            {/* Visual paw print background details */}
            <div className="absolute top-0 left-0 -translate-x-12 -translate-y-12 text-white/5 pointer-events-none">
              <FaChevronLeft size={250} className="rotate-45" />
            </div>
            
            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight">
                Seu melhor amigo em boas mãos. Agende um horário!
              </h2>
              <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed">
                Quer dar aquele banho caprichado, realizar um check-up preventivo ou tirar dúvidas sobre alimentação? Fale com nossa equipe! Estamos prontos para atender você e seu companheiro.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-2">
                <Link to="/contato">
                  <Button variant="secondary" className="!px-8 !py-3.5 text-base text-[#2f3e46]">
                    Entrar em Contato
                  </Button>
                </Link>
                <Link to="/faq">
                  <Button variant="outline" className="!px-8 !py-3.5 text-base border-white! text-white hover:bg-white hover:text-[#8fc4ae]">
                    Dúvidas Frequentes
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

export default Home;
