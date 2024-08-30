import { useEffect, useState } from 'react';
import Wallpaper from '../layout/Home/Wallpaper';
import ResumeCatalog from '../layout/Home/ResumeCatalog';
import CommentsFromPurchased from '../layout/Home/CommentsFromPurchased';

export default function Home() {
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
    <>
      <Wallpaper />
      <div className="w-full m-0 p-0 relative max-w-[1440px] mt-[-50px] reveal">
        <ResumeCatalog />
      </div>
      <CommentsFromPurchased />
    </>
  );
}
