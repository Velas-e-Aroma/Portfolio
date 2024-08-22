import { useState } from 'react';

const images = [
  'https://instagram.faqa3-1.fna.fbcdn.net/v/t39.30808-6/456023311_431227023396137_5211017765883156553_n.jpg?stp=c0.114.1638.1820a_dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNjM4eDIwNDguc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.faqa3-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=oWQY1ED4z08Q7kNvgEoMsB0&_nc_gid=b1f788a3502b4318bfee23438a027fcc&edm=AEhyXUkAAAAA&ccb=7-5&ig_cache_key=MzQzODM2NTkzNDQ0OTIyODE5Ng%3D%3D.2-ccb7-5&oh=00_AYDQOFXI9Yo9tggBRxVt8cHEOybULjyYTTjCKhIl-kWo5g&oe=66CD8AD0&_nc_sid=8f1549',
  'https://instagram.faqa3-1.fna.fbcdn.net/v/t39.30808-6/455845224_431227083396131_5344108594411014671_n.jpg?stp=c0.114.1638.1820a_dst-jpg_e35_s720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNjM4eDIwNDguc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.faqa3-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=yKtLUPnaOeIQ7kNvgFzy-f2&edm=AEhyXUkAAAAA&ccb=7-5&ig_cache_key=MzQzODM2NTkzMzk3MDk3MTgwNw%3D%3D.2-ccb7-5&oh=00_AYDCQOuBI1wC98Vgq7lZid7jcqDq_zqadxHEGhMHd_ERPw&oe=66CD6518&_nc_sid=8f1549',
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
    <div className="relative w-full mx-auto mt-14">
      {/* Slides */}
      <div className="h-[420px] w-full overflow-hidden relative rounded-lg shadow-lg">
        <img
          src={images[currentIndex]}
          alt="slide"
          className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out"
        />
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#238d4343] hover:bg-[#238d4354] text-white rounded-full lg:w-[50px] md:w-[40px] w-[35px] lg:h-[50px] md:h-[40px] h-[35px] transition-all duration-300 transform hover:scale-105"
        style={{
          boxShadow:
            '0px 4px 15px -1px rgba(0, 0, 0, 0.3), 0px 4px 4px -2px rgba(0, 0, 0, 0.1)',
        }}
      >
        <i className="fas fa-chevron-left text-lg"></i>
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#238d4343] hover:bg-[#238d4354] text-white rounded-full lg:w-[50px] md:w-[40px] w-[35px] lg:h-[50px] md:h-[40px] h-[35px] transition-all duration-300 transform hover:scale-105"
        style={{
          boxShadow:
            '0px 4px 15px -1px rgba(0, 0, 0, 0.3), 0px 4px 4px -2px rgba(0, 0, 0, 0.1)',
        }}
      >
        <i className="fas fa-chevron-right text-lg"></i>
      </button>
    </div>
  );
}
