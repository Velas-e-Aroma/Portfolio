export default function Header({ page, setPage }) {
  return (
    <>
      <div className="w-full max-w-screen-xl mx-auto bg-gray-100 fixed top-0 z-10 ">
        <div className="flex items-center justify-between px-4 pt-2 pb-2 bg-white shadow-md">
          <div className="flex items-center gap-4">
            <img
              src={`${import.meta.env.BASE_URL}/logo.jpg`}
              alt="logo"
              className="h-[50px] rounded-xl transform transition-transform duration-300 hover:scale-110"
            />
            <h1 className="md:block hidden text-[#0d6533] font-bold font-mono text-lg tracking-wide">
              Velas e Aroma
            </h1>
          </div>

          <div className="w-[60%] relative flex items-center">
            <input
              type="text"
              placeholder="Pesquise por um item"
              className="border-b-2 border-gray-300 p-2 bg-gray-100 w-full focus:outline-none focus:border-[#0d6533] rounded-lg transition-all duration-300"
            />
            <button className="ml-2 w-[40px] absolute right-0 text-[#0d6533] transform transition-transform duration-300 hover:scale-110">
              <i className="fas fa-search"></i>
            </button>
          </div>

          <a
            href="https://github.com/vela-e-aroma/vela-e-aroma"
            className="flex items-center text-[#0d6533] hover:text-[#094d26] transition-colors duration-300"
          >
            <span className="md:block hidden font-semibold">Atendimento</span>
            <i className="fas fa-phone-square ms-1 text-lg"></i>
          </a>
        </div>

        <div className="flex flex-row justify-between gap-4 overflow-x-auto w-full py-2 px-6 bg-[#e3e6e6] shadow-lg rounded-lg">
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
                page === pageName ? 'font-bold text-[#0d6533]' : 'text-gray-700'
              } cursor-pointer transition-all duration-300 transform hover:scale-105 flex flex-col items-center justify-center`}
            >
              <spam className="text-base truncate">{label}</spam>
            </p>
          ))}
        </div>
      </div>
    </>
  );
}
