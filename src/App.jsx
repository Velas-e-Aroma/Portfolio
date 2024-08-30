import { useEffect, useState } from 'react';
import ScrollToTopButton from './components/ScrollToTopButton';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';

import contact from './context/contact';

export default function App() {
  const [page, setPage] = useState('Home');
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
      <Header
        page={page}
        setPage={setPage}
        bgColor={bgColor}
        textColor={textColor}
        contact={contact}
      />
      {page === 'Home' && <Home setPage={setPage} />}
      {page === 'Catalog' && <Catalog setPage={setPage} />}

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
