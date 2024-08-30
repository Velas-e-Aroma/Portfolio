import handleContactWhatsApp from '../utils/handleContactWhatsApp';

export default function Header({ bgColor, textColor, setPage, page, contact }) {
  return (
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
            {contact[0].nameShop}
          </h1>
        </div>
        <div className=" gap-4 lg:flex hidden">
          {[
            { label: 'Home', pageName: 'Home', icon: 'fas fa-home' },
            {
              label: 'Faça sua vela',
              pageName: 'Order',
              icon: 'fas fa-shopping-cart',
            },
            { label: 'Sobre', pageName: 'About', icon: 'fas fa-info-circle' },
            { label: 'Catálogo', pageName: 'Catalog', icon: 'fas fa-search' },
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
          onClick={() => handleContactWhatsApp()}
        >
          <span className="md:block hidden font-semibold">Atendimento</span>
          <i className="fas fa-phone-square ms-1 text-lg"></i>
        </button>
      </div>
    </nav>
  );
}
