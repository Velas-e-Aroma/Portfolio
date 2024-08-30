export default function Wallpaper() {
  return (
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
  );
}
