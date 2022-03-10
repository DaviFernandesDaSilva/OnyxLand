export default function Footer() {
  return (
    <footer className="pb-4">
      <div className="max-w-6xl xl:max-w-6xl mx-auto divide-y divide-gray-200 px-4 sm:px-6 md:px-8">
        <ul className="Footer_nav__2rFid text-sm font-medium  sm:pb-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10">
          <li className="space-y-5 row-span-2">
            <h2 className="text-sm tracking-wide text-white uppercase font-bold">
              Empresa
            </h2>
            <ul className="space-y-4 text-md">
              <li>
                <a
                  className="text-white transition-colors duration-200 text-2xl"
                  href="/"
                >
                  Jobs
                </a>
              </li>
              <li>
                <a
                  className="text-white transition-colors duration-200 text-2xl"
                  href="/"
                >
                  Merchandising
                </a>
              </li>{" "}
              <li>
                <a
                  className="text-white transition-colors duration-200 text-2xl"
                  href="/"
                >
                  Marca
                </a>
              </li>{" "}
              <li>
                <a
                  className="text-white transition-colors duration-200 text-2xl"
                  href="/"
                >
                  Contatos
                </a>
              </li>
            </ul>
          </li>
          <li className="space-y-5 row-span-2">
            <h2 className="text-sm tracking-wide text-white uppercase font-bold">
              Notícias
            </h2>
            <ul className="space-y-4">
              <li>
                <a
                  className="text-white transition-colors duration-200 text-2xl"
                  href="/"
                >
                  Princiais Notícias
                </a>
              </li>
              <li>
                <a
                  className="text-white transition-colors duration-200 text-2xl"
                  href="/"
                >
                  Fórum
                </a>
              </li>
              <li>
                <a
                  className="text-white transition-colors duration-200 text-2xl"
                  href="/"
                >
                  Blog
                </a>
              </li>
            </ul>
          </li>
          <li className="space-y-5 row-span-2">
            <h2 className="text-sm tracking-wide text-white uppercase font-bold">
              Categorias
            </h2>
            <ul className="space-y-4">
              <li>
                <a
                  className="text-white transition-colors duration-200 text-2xl"
                  href="/"
                >
                  Monitores
                </a>
              </li>
              <li>
                <a
                  className="text-white transition-colors duration-200 text-2xl"
                  href="/"
                >
                  Periféricos
                </a>
              </li>
              <li>
                <a
                  className="text-white transition-colors duration-200 text-2xl"
                  href="/"
                >
                  Computadores
                </a>
              </li>
              <li>
                <a
                  className="text-white transition-colors duration-200 text-2xl"
                  href="/"
                >
                  Notebooks
                </a>
              </li>
            </ul>
          </li>
          <li className="space-y-5">
            <h2 className="text-sm tracking-wide text-white uppercase font-bold">
              Redes Sociais
            </h2>
            <ul className="space-y-4">
              <li>
                <a
                  className="text-white transition-colors duration-200 text-2xl"
                  href="/"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  className="text-white transition-colors duration-200 text-2xl"
                  href="/"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  className="text-white transition-colors duration-200 font-semibold text-2xl"
                  href="/"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="flex flex-col-reverse justify-between pt-5 pb-4 border-t lg:flex-row bg-top border-black">
          <ul className="flex flex-col space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <a
                href="/"
                className="text-md text-gray-300 transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Termos de Serviço
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-md text-gray-300 transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Politica de Privacidade
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-md text-gray-300 transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                AD Sense
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-md text-gray-300 transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Politica de Cookies
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-md text-gray-300 transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Parceiros
              </a>
            </li>
          </ul>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <a
              href="/"
              className="text-md text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold tracking-tight"
            >
              © 2022 Onyx Eletronics.
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
}
