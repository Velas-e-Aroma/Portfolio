export default function Wallpaper({ wallpaper }) {
  return (
    <div className="w-full bg-white rounded-md mt-[60px] md:h-[450px] h-[300px] relative">
      <img src={`${import.meta.env.BASE_URL}/${wallpaper}`} alt="wallpaper" className="w-full h-full object-cover" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 310"
        className="absolute bottom-0"
      >
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,192L60,202.7C120,213,240,235,360,234.7C480,235,600,213,720,218.7C840,224,960,256,1080,272C1200,288,1320,288,1380,288L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
     
    </div>
  );
}
