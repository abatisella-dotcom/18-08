import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Importação das páginas
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Produtos from './pages/Produtos';
import Contato from './pages/Contato';
import Faq from './pages/Faq';
import NotFound from './pages/NotFound';

// Importação de componentes globais
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import BackToTop from './components/BackToTop';

// Helper para rolar a página ao topo em cada mudança de rota
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Mudança instantânea para evitar transições esquisitas
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="min-h-screen bg-[#fcfbf7] flex flex-col font-sans select-none antialiased">
      {/* Tela de Loading Inicial */}
      <LoadingScreen />

      {/* Helper de scroll para transição de rotas */}
      <ScrollToTop />

      {/* Barra de Navegação Fixa (Navbar) */}
      <Navbar />

      {/* Conteúdo Principal (Rotas dinâmicas) */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contato" element={<Contato />} />
          {/* Rota curinga para erro 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Botão de Voltar ao Topo */}
      <BackToTop />

      {/* Rodapé (Footer) */}
      <Footer />
    </div>
  );
}

export default App;
