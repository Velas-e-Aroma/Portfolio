import { useState } from 'react';

// Lista de imagens para o slider (substitua pelos seus próprios produtos ou imagens)
const images = [
  'https://via.placeholder.com/300x200?text=Produto+1',
  'https://via.placeholder.com/300x200?text=Produto+2',
  'https://via.placeholder.com/300x200?text=Produto+3',
  'https://via.placeholder.com/300x200?text=Produto+4',
];

export default function Slide() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full mx-auto">
      {/* Slides */}
      <div className="h-[360px] w-full overflow-hidden relative">
        <img
          src={images[currentIndex]}
          alt="slide"
          className="w-full h-full object-cover"
        />
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-[#00000035] hover:bg-[#00000050] text-white rounded-full lg:w-[50px] md:w-[40px] w-[30px] lg:h-[50px] md:h-[40px] h-[30px]"
        style={{
          boxShadow:
            '0px 4px 6px -1px rgba(0, 0, 0, 0.2), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
        }}
      >
        <i className="fas fa-chevron-left"></i>
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-[#00000035] hover:bg-[#00000050] text-white rounded-full lg:w-[50px] md:w-[40px] w-[30px] lg:h-[50px] md:h-[40px] h-[30px]"
        style={{
          boxShadow:
            '0px 4px 6px -1px rgba(0, 0, 0, 0.2), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
        }}
      >
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
}
