import { useEffect } from 'react';
import Wallpaper from '../layout/Home/Wallpaper';
import ResumeCatalog from '../layout/Home/ResumeCatalog';
import CommentsFromPurchased from '../layout/Home/CommentsFromPurchased';

import handleContactWhatsApp from '../utils/handleContactWhatsApp';

export default function Home({ setPage }) {
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

  const textWallpaper = (
    <div className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center xl:w-[60%] lg:w-[80%] w-[100%]">
      <h1 className="lg:text-5xl text-3xl font-bold lg:mb-10 sm:mb-5 mb-[10%] lg:px-0 px-2">
        Deixe seu ambiente mais aconchegante
      </h1>
      <button
        onClick={handleContactWhatsApp}
        className="lg:text-xl md:text-lg text-sm bg-[#f7f7f7] rounded-[30px] px-[25px] py-[10px] text-[#564533] hover:bg-[#564533] hover:text-[#f7f7f7]"
      >
        Compre agora sua vela
      </button>
      <p className="text-[#f7f7f7] lg:mt-7 sm:mt-5 mt-[10%] lg:text-xl text-[20px] px-16">
        Sempre temos vela e aroma para a sua casa
      </p>
    </div>
  );

  return (
    <>
      <Wallpaper
        image={'wallpaperHome.png'}
        existText={true}
        text={textWallpaper}
      />
      <div className="w-full m-0 p-0 relative max-w-[1440px] mt-[-50px] reveal">
        <ResumeCatalog setPage={setPage} />
      </div>
      <CommentsFromPurchased />
    </>
  );
}
