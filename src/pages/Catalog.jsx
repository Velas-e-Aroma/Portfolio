import { useEffect, useState } from 'react';
import Wallpaper from '../layout/Wallpaper';
import handleContactWhatsAppShop from '../utils/handleContactWhatsAppShop';
import catalog from '../context/catalog';

export default function Catalog() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          } else {
            entry.target.classList.remove('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  const [existText, setExistText] = useState(false);
  const [candleName, setCandleName] = useState('');
  const [candleNameMessage, setCandleNameMessage] = useState('');
  const [candleImage, setCandleImage] = useState('wallpaperShop.png');
  const [existFilter, setExistFilter] = useState(false);
  const [heightWallpaper, setHeightWallpaper] = useState('h-[300px]');

  const textWallpaper = (
    <div className="text-white absolute xl:top-[30%] lg:top-1/2 top-[250px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center xl:w-[60%] lg:w-[80%] w-[100%]">
      <h1 className="lg:text-5xl text-3xl font-bold lg:mb-10 sm:mb-5 mb-[10%] lg:px-0 px-2">
        Gostou da vela {candleName}
      </h1>
      <button
        onClick={() => handleContactWhatsAppShop(candleNameMessage)}
        className="lg:text-xl md:text-lg text-sm bg-[#f7f7f7] rounded-[30px] px-[25px] py-[10px] text-[#564533] hover:bg-[#564533] hover:text-[#f7f7f7]"
      >
        Compre agora e não perca a oportunidade
      </button>
      <p className="text-[#f7f7f7] lg:mt-7 sm:mt-5 mt-[10%] lg:text-xl text-[20px] px-16">
        A vela {candleName} é perfeita para você.
      </p>
    </div>
  );

  const handleSelectCandle = (name, nameMessage, image) => {
    setCandleName(name);
    setCandleNameMessage(nameMessage);
    setExistText(true);
    setCandleImage(image);
    setExistFilter(true);
    setHeightWallpaper('h-[500px]');
  };

  return (
    <div className="w-full bg-transparent border-[#ccc] border rounded-md pb-7">
      <div className={`${heightWallpaper} overflow-hidden`}>
        <Wallpaper
          image={candleImage}
          existText={existText}
          text={textWallpaper}
          existFilter={existFilter}
        />
      </div>
      <div className="w-full m-0 p-0 max-w-[940px] mx-auto reveal flex flex-wrap gap-4 md:justify-between justify-around lg:mt-[-100px] mt-[-40px] lg:px-0 px-4">
        {catalog.map((candle) => (
          <button
            key={candle.id}
            className="md:w-[200px] w-[150px] rounded-lg overflow-hidden shadowBox mb-4"
            onClick={handleSelectCandle.bind(
              null,
              candle.name,
              candle.nameMessage,
              `/catalog/${candle.img}`
            )}
          >
            <img
              src={`${import.meta.env.BASE_URL}/catalog/${candle.img}`}
              alt={candle.name}
              className="w-full object-cover object-center h-full"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
