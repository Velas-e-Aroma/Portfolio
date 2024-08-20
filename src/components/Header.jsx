export default function Header() {
  return (
    <>
      <div className="h-[72px] w-full flex items-center justify-between px-4  bg-gray-100 absolute z-10 ">
        <div className="flex items-center gap-4">
          <img
            src="/public/logo.jpg"
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
    </>
  );
}