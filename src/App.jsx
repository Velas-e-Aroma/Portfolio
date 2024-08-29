import { useEffect, useState } from 'react';
import ScrollToTopButton from './components/ScrollToTopButton';
import ResumeCatalog from './components/ResumeCatalog';
import Feed from './components/Feed';

export default function App() {
  const [page, setPage] = useState('home');
  const [bgColor, setBgColor] = useState('lg:bg-transparent');
  const [textColor, setTextColor] = useState('text-white');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 72) {
        setBgColor('lg:bg-white');
        setTextColor('text-[#564533]');
      } else {
        setBgColor('lg:bg-transparent');
        setTextColor('text-white');
      }
    };

    window.addEventListener('scroll', handleScroll);

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
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex-1 w-full max-w-[1440px] mx-auto border border-[#ccc] m-0 p-0">
      <nav
        className={`w-full ${bgColor} bg-white h-[50.57px] max-w-[1440px] mx-auto fixed top-0 z-10`}
      >
        <div className="max-w-[920px] mx-auto flex items-center justify-between  px-4 pt-1 pb-2 ">
          <div className="flex items-center gap-4">
            <img
              src={`${import.meta.env.BASE_URL}/logo.jpg`}
              alt="logo"
              className="h-[40px] rounded-lg transform transition-transform duration-300 hover:scale-110"
            />
            <h1
              className={`md:block hidden ${textColor} font-bold font-mono text-xl tracking-wide`}
            >
              Velas e Aroma
            </h1>
          </div>
          <div className=" gap-4 lg:flex hidden">
            {[
              { label: 'Home', pageName: 'home', icon: 'fas fa-home' },
              {
                label: 'Faça sua vela',
                pageName: 'order',
                icon: 'fas fa-shopping-cart',
              },
              { label: 'Sobre', pageName: 'about', icon: 'fas fa-info-circle' },
              { label: 'Catálogo', pageName: 'catalog', icon: 'fas fa-search' },
            ].map(({ label, pageName, icon }) => (
              <p
                key={pageName}
                onClick={() => setPage(pageName)}
                className={`${
                  page === pageName ? `font-bold ${textColor}` : `${textColor}`
                } cursor-pointer transition-all duration-300 transform hover:scale-105 flex flex-col items-center justify-center xl:text-[16px] lg:text-[14px] text-[14px]"`}
              >
                <spam className="text-base truncate">{label}</spam>
              </p>
            ))}
          </div>

          <button
            className={`flex justify-center items-center text-white bg-[#5b3119] lg:px-4 pe-[7px] ps-[3px] rounded-lg transition-colors duration-300 hover:bg-[#564533]`}
          >
            <span className="md:block hidden font-semibold">Atendimento</span>
            <i className="fas fa-phone-square ms-1 text-lg"></i>
          </button>
        </div>
      </nav>
      <div className="w-full m-0 p-0 h-screen overflow-hidden relative max-w-[1440px]">
        <img
          src={`${import.meta.env.BASE_URL}/wallpaperHome.png`}
          className="w-full object-cover object-center h-screen"
        />
        <div className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center xl:w-[60%] lg:w-[80%] w-[100%]">
          <h1 className="lg:text-5xl text-3xl font-bold lg:mb-10 sm:mb-5 mb-[10%] lg:px-0 px-2">
            Deixe seu ambiente mais aconchegante
          </h1>
          <a
            href=""
            className="lg:text-xl md:text-lg text-sm bg-[#f7f7f7] rounded-[30px] px-[25px] py-[10px] text-[#564533] hover:bg-[#564533] hover:text-[#f7f7f7]"
          >
            Compre agora sua vela
          </a>
          <p className="text-[#f7f7f7] lg:mt-7 sm:mt-5 mt-[10%] lg:text-xl text-[20px] px-16">
            Sempre temos vela e aroma para a sua casa
          </p>
        </div>
      </div>
      <div className="w-full m-0 p-0 relative max-w-[1440px] mt-[-50px] reveal">
        <ResumeCatalog />
      </div>
      <div className="w-full m-0 p-0 relative max-w-[1440px] reveal pb-10">
        <h2 className="text-[#564533] text-3xl font-bold text-center mt-10">
          Comentarios de quem ja comprou
        </h2>
        <div className="w-full m-0 p-0 reveal">
          <Feed />
        </div>
      </div>
      <div className="w-full m-0 p-0 max-w-[1440px] bg-[#564533] flex flex-col lg:flex-row justify-around items-center gap-4 p-2">
        <p className="text-[#fff]">© 2024 Todos os direitos reservados</p>
        <p className="text-[#fff]">
          Desenvolvido por{' '}
          <a href="https://github.com/MatheusChiodi" target='_blank' className='hover:text-[#ebebeb] font-bold'>
            MChiodi
          </a>
        </p>
      </div>

      <ScrollToTopButton />
    </div>
  );
}
