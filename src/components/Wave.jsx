export default function Wave() {
  return (
    <div className="w-full h-[110px] md:mt-[-220px] mt-[-800px] z-[-1] relative md:block hidden">
      <div className="w-full h-[130px] bg-[#70b066]"></div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#70b066"
          fillOpacity="1"
          d="M0,32L40,69.3C80,107,160,181,240,192C320,203,400,149,480,154.7C560,160,640,224,720,245.3C800,267,880,245,960,234.7C1040,224,1120,224,1200,224C1280,224,1360,224,1400,224L1440,224L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
}
