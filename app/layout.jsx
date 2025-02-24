import "./global.css";
import Image from "next/image";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-neutral-900 overflow-scroll scrollbar-none">
        <main className="flex justify-center items-center p-4">
          <div className="w-full h-full p-4">
            {/* Contenedor principal con dirección de columna en móvil y fila en desktop */}
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Sidebar - ocupa todo el ancho en móvil, ancho fijo en desktop */}
              <aside className="grid justify-items-center w-full lg:w-80 rounded-l-xl p-4 bg-stone-800">
                <div className="flex flex-row items-center md:flex-row md:items-center lg:flex-col lg:items-center gap-4 lg:gap-0">
                  <div className="mb-0 lg:mb-4">
                    <Image
                      className="rounded-full"
                      src="/profil.jpg"
                      alt="Foto de Alejo Monturoi"
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="mb-0 lg:mb-6">
                    <h1 className="text-2xl  bg-clip-text text-purple-500 font-bold">
                      Alejo Montuori
                    </h1>
                    <p className="text-lg  bg-clip-text text-purple-600 font-semibold">
                      Software Developer
                    </p>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <ul className="space-y-4">
                    <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
                      <div className="text-center sm:text-left">
                        <p className=" bg-clip-text text-purple-500 font-bold">
                          Email
                        </p>
                        <p className=" bg-clip-text text-purple-600 font-semibold">
                          alejomontuori12@gmail.com
                        </p>
                      </div>
                    </li>
                    <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
                      <div className="text-center sm:text-left">
                        <p className=" bg-clip-text text-purple-500 font-bold">
                          Phone
                        </p>
                        <p className=" bg-clip-text text-purple-600 font-semibold">
                          +54 261-3601823
                        </p>
                      </div>
                    </li>
                    <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
                      <div className="text-center sm:text-left">
                        <p className=" bg-clip-text text-purple-500 font-bold">
                          Age
                        </p>
                        <p className=" bg-clip-text text-purple-600 font-semibold">
                          25
                        </p>
                      </div>
                    </li>
                    <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
                      <div className="text-center sm:text-left">
                        <p className=" bg-clip-text text-purple-500 font-bold">
                          Location
                        </p>
                        <p className=" bg-clip-text text-purple-600 font-semibold">
                          Mendoza, Argentina
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </aside>

              {/* Contenido principal */}
              <div className="p-4 bg-stone-800 rounded-r-xl w-full lg:max-w-6xl lg:h-full lg:overflow-y-scroll scrollbar">
                {/* Navegación */}
                <div className="flex justify-center w-full h-10 mb-6 lg:justify-center md:justify-end">
                  <nav className="w-auto px-4 rounded-2xl bg-neutral-900 sm:px-8">
                    <ul className="flex items-center gap-2 sm:gap-4">
                      <li>
                        <Link
                          href="/"
                          className="block px-3 py-2 text-purple-400 text-sm sm:text-base whitespace-nowrap"
                        >
                          About me
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/proyects"
                          className="block px-3 py-2 text-purple-400 text-sm sm:text-base whitespace-nowrap"
                        >
                          Projects
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/contacto"
                          className="block px-3 py-2 text-purple-400 text-sm sm:text-base whitespace-nowrap"
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                {/* Área de contenido */}
                <div className="max-w-6xl h-full flex justify-center">
                  <div className="w-full p-4">{children}</div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
