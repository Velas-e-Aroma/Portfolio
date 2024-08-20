import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Função que verifica a posição de rolagem
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Função para rolar até o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    // Adiciona um ouvinte de evento de rolagem
    window.addEventListener('scroll', toggleVisibility);

    // Remove o ouvinte de evento quando o componente é desmontado
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <div
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 z-10 bg-[#00000035] hover:bg-[#00000050] text-white rounded-full lg:w-[50px] md:w-[40px] w-[30px] lg:h-[50px] md:h-[40px] h-[30px] flex items-center justify-center cursor-pointer"
          style={{
            boxShadow:
              '0px 4px 6px -1px rgba(0, 0, 0, 0.2), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
          }}
        >
          <i className="fas fa-arrow-up"></i>
        </div>
      )}
    </>
  );
};

export default ScrollToTopButton;
