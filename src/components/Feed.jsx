import React, { useEffect, useRef } from 'react';

const Feed = () => {
  const comments = [
    { text: "Ótimo produto! Deixou minha casa super aconchegante.", author: "Maria S." },
    { text: "Amei o aroma, realmente faz diferença no ambiente!", author: "João P." },
    { text: "Entrega rápida e produto de qualidade, recomendo.", author: "Ana R." },
    { text: "Minha casa está muito mais agradável com essa vela.", author: "Carlos M." },
    { text: "Excelente atendimento e produtos maravilhosos.", author: "Fernanda T." },
  ];

  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: 1,
          behavior: 'smooth',
        });
      }
    };

    const intervalId = setInterval(scroll, 20); // Ajuste o tempo para controlar a velocidade do scroll

    return () => clearInterval(intervalId); // Limpeza do intervalo ao desmontar o componente
  }, []);

  return (
    <div className="w-full m-0 p-0 relative max-w-[1420px] h-[300px] mt-10 overflow-hidden lg:px-0 px-4">
      <div
        ref={scrollRef}
        className="flex space-x-8 overflow-x-auto no-scrollbar"
      >
        {comments.map((comment, index) => (
          <div
            key={index}
            className="min-w-[350px] bg-white p-6 rounded-lg shadow-lg border border-[#e5e5e5]"
          >
            <p className="text-lg italic text-[#564533]">"{comment.text}"</p>
            <p className="text-right mt-4 text-[#7d6a58] font-semibold">
              - {comment.author}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;