export default function Main() {
  return (
    <section className="text-white body-font">
      <div className="max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-40 items-center text-center">
          <h1 className="mb-5 sm:text-6xl text-5xl items-center Avenir xl:w-2/2 text-white">
          Seu sonho se encontra aqui!
          </h1>
          <p className="mb-4 xl:w-3/4 text-white text-lg">
            Onyx se trata de uma plataforma e-commerce de produtos eletrônicos
          </p>
          <div className="flex justify-center">
            <a
              className="inline-flex items-center px-5 py-3 mt-2 font-medium text-white transition duration-500 ease-in-out"
              href="https://github.com/Davipbr15/Onyxland/"
            >
              <span className="justify-center btn41-43 btn-41">Saiba Mais</span>
            </a>
          </div>
        </div>
        <div className="xl:mr-44 sm:mr-0 sm:mb-28 mb-0 lg:mb-0 mr-48 md:pl-10">
          <img
            className="w-80 md:ml-1 ml-24"
            alt="iPhone-12"
            src="/images/iPhone-12-Mockup.png"
          ></img>
        </div>
      </div>
      <section className="mx-auto">
        <div className="container px-5 mx-auto lg:px-24 ">
          <div className="flex flex-col w-full mb-4 text-left lg:text-center">
            <h1 className="mb-8 text-2xl Avenir font-semibold text-white">
              Reconhecido pelas melhores companias do mercado
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-16 mb-16 text-center lg:grid-cols-4">
            <div className="flex items-center justify-center">
              <img
                src="/images/Google-Logo.webp"
                alt="Google Logo"
                className="block object-contain h-16 greyC"
              ></img>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/images/Shopify-Logo.svg"
                alt="Shopify Logo"
                className="block object-contain h-16 greyC"
              ></img>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/images/Cloudflare-Logo.svg"
                alt="Cloudflare Logo"
                className="block object-contain h-16 greyC"
              ></img>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/images/PayPal-Logo.png"
                alt="Paypal Logo"
                className="block object-contain h-16 greyC"
              ></img>
            </div>
          </div>
        </div>
      </section>
      <div className="grr max-w-7xl pt-20 mx-auto text-center">
        <h1 className="mb-8 text-6xl Avenir font-semibold text-white">
          Compre no conforto da sua casa
        </h1>
        <h1 className="mb-8 text-2xl Avenir font-semibold text-gray-100 text-center">
          A plataforma ONYX se encontra disponivel para PC, Android e IOS.
        </h1>

        <div className="flex flex-row items-center justify-center mx-auto mb-8 gap-5">
        <a href="#" tabIndex="0"><img class="bn46" src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"alt="bn45"/></a>
        <a href="#" tabIndex="0"><img class="bn45" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="bn45"/></a>
         
        </div>
        <div className="container flex flex-col items-center justify-center mx-auto rounded-lg ">
        <img
            className="object-cover object-center w-1/3 mb-10 g327 border rounded-lg shadow-md"
            alt="Placeholder Image"
            src="./images/onix.png"
          ></img>
        </div>
      </div>
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="py-24 md:py-36">
            <h1 className="mb-5 text-6xl Avenir font-semibold text-white">
              Fique por dentro de todas as ofertas
            </h1>
            <h1 className="mb-9 text-2xl font-semibold text-gray-10">
              Coloque seu e-mail para recebimentos diários sobre as principais ofertas do dia
            </h1>
            <input
              placeholder="fulanodetal@exemplo.com"
              name="email"
              type="email"
              autoComplete="email"
              className="border border-gray-600 w-1/4 pr-2 pl-2 py-3 mt-2 rounded-md text-gray-800 font-semibold hover:border-gray-900"
            ></input>{" "}
            <a
              className="inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-gray-900"
              href="/"
            >
              <span className="justify-center">Assinar</span>
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}
