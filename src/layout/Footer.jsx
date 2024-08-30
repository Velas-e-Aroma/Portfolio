export default function Footer() {
  return (
    <div className="w-full m-0 p-0 max-w-[1440px] bg-[#564533] flex flex-col lg:flex-row justify-around items-center gap-4 p-2">
      <p className="text-[#fff]">© 2024 Todos os direitos reservados</p>
      <p className="text-[#fff]">
        Desenvolvido por{' '}
        <a
          href="https://github.com/MatheusChiodi"
          target="_blank"
          className="hover:text-[#ebebeb] font-bold"
        >
          MChiodi
        </a>
      </p>
    </div>
  );
}
