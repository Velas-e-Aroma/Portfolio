export default function Wallpaper({ wallpaper }) {
  return (
    <div className="w-full bg-white rounded-md mt-[50px] h-[350px] relative">
      <img src={wallpaper} alt="wallpaper" className="w-full h-full" />
     
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 220"
        className="absolute bottom-0"
      >
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,128L30,122.7C60,117,120,107,180,122.7C240,139,300,181,360,202.7C420,224,480,224,540,197.3C600,171,660,117,720,96C780,75,840,85,900,117.3C960,149,1020,203,1080,186.7C1140,171,1200,85,1260,80C1320,75,1380,149,1410,186.7L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
