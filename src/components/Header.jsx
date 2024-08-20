export default function Header({ page, setPage }) {
  return (
    <>
      <div className="w-full max-w-screen-xl mx-auto bg-gray-100 fixed top-0 z-10 ">
        <div className="flex items-center justify-between px-4 pt-1 ">
          <div className="flex items-center gap-4">
            <img
              src={`${import.meta.env.BASE_URL}/logo.jpg`}
              alt="logo"
              className="h-[50px] rounded-lg"
            />
            <h1 className="md:block hidden">Velas e Aroma</h1>
          </div>

          <div className="w-[60%] relative">
            <input
              type="text"
              placeholder="Search"
              className="border-b border-b-gray-900 p-1 bg-gray-100 w-full focus:outline-none rounded-md"
            />
            <button className="ml-2 w-[40px] absolute right-0">
              <i className="fas fa-search"></i>
            </button>
          </div>
          <a
            href="https://github.com/vela-e-aroma/vela-e-aroma"
            className="flex items-center"
          >
            <span className="md:block hidden">Atendimento</span>
            <i className="fas fa-phone-square ms-3"></i>
          </a>
        </div>
        <div className="flex flex-row justify-between mt-[10px] gap-4 overflow-x-auto w-full py-1 px-4 bg-[#e3e6e6]">
          {[
            { label: 'Home', pageName: 'home', icon: 'fas fa-home' },
            { label: 'Catálogo', pageName: 'catalog', icon: 'fas fa-search' },
            { label: 'Sobre', pageName: 'about', icon: 'fas fa-info-circle' },
            {
              label: 'Monte sua vela',
              pageName: 'order',
              icon: 'fas fa-shopping-cart',
            },
          ].map(({ label, pageName, icon }) => (
            <p
              key={pageName}
              onClick={() => setPage(pageName)}
              className={`${
                page === pageName ? 'font-bold' : ''
              } cursor-pointer`}
            >
              <spam className="sm:block hidden">{label}</spam>

              <i className={`${icon} sm:hidden block`}></i>
            </p>
          ))}
        </div>
      </div>
    </>
  );
}
