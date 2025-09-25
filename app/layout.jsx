import "./global.css";
import Image from "next/image";
import Link from "next/link";
import Squares from "./components/Squares";
import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-neutral-900 lg:scrollbar">
        <div className="fixed w-full h-full inset-0 -z-10">
          <Squares
            speed={0.5}
            squareSize={40}
            direction="down" // up, down, left, right, diagonal
            borderColor="#9333ea"
            hoverFillColor="#9333ea"
          />
        </div>
        <main className="flex justify-center items-center p-4">
          <div className="w-full h-full p-4">
            {/* Contenedor principal con dirección de columna en móvil y fila en desktop */}
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Sidebar - ocupa todo el ancho en móvil, ancho fijo en desktop */}
              <aside className="grid justify-items-center w-full lg:h-screen lg:w-80 rounded-lg p-4 bg-stone-800">
                <div className="flex flex-row items-center md:flex-row md:items-center lg:flex-col lg:items-center gap-4 lg:gap-0">
                  <div className="mb-0 lg:mb-4">
                    <Image
                      className="rounded-full"
                      src="/perfil2.jpg"
                      alt="Foto de Alejo Monturoi"
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="mb-0 lg:mb-6">
                    <h1 className="text-2xl bg-clip-text text-purple-500 font-bold">
                      Alejo Montuori
                    </h1>
                    <p className="text-lg  bg-clip-text text-purple-600 font-semibold">
                      Software Developer
                    </p>
                  </div>
                  <a
                    href="/CV_alejoMontuori.pdf"
                    download="CV_alejoMontuori.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-500 text-sm text-center font-semibold -mt-2 px-1 py-1 rounded-lg hover:border border-purple-700 hover:bg-purple-700 hover:scale-105 transition-all duration-300 ease-in-out"
                  >
                    Descargar CV
                  </a>
                </div>
                <div className="hidden lg:block">
                  <ul className="space-y-4">
                    <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
                      <div className="text-center sm:text-left">
                        <p className=" bg-clip-text text-purple-500 font-bold">
                          Correo
                        </p>
                        <p className=" bg-clip-text text-purple-600 font-semibold">
                          alejomontuori12@gmail.com
                        </p>
                      </div>
                    </li>
                    <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
                      <div className="text-center sm:text-left">
                        <p className=" bg-clip-text text-purple-500 font-bold">
                          Telefono
                        </p>
                        <p className=" bg-clip-text text-purple-600 font-semibold">
                          +54 261-3601823
                        </p>
                      </div>
                    </li>
                    <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
                      <div className="text-center sm:text-left">
                        <p className=" bg-clip-text text-purple-500 font-bold">
                          Edad
                        </p>
                        <p className=" bg-clip-text text-purple-600 font-semibold">
                          25
                        </p>
                      </div>
                    </li>
                    <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
                      <div className="text-center sm:text-left">
                        <p className=" bg-clip-text text-purple-500 font-bold">
                          Ubicación
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
              <div className="p-4 bg-stone-800 rounded-lg w-full lg:max-w-6xl lg:h-auto">
                {/* Navegación */}
                <div className="sticky top-2 z-50 flex xs:w-96 w-full h-10 mb-6 justify-center sm:justify-center lg:justify-center">
                  <nav className="w-auto lg:px-4 rounded-2xl bg-purple-600 shadow-[0px_5px_15px_rgba(147,51,234,0.6)]">
                    <ul className="flex items-center space-x-2 pt-0.5 lg:py-0 lg:space-x-6">
                      <li>
                        <Link
                          href="/"
                          className="block px-3 py-2 text-stone-900 hover:bg-purple-900 transition-colors font-bold text-sm rounded-full sm:text-base whitespace-nowrap"
                        >
                          Sobre mi
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/proyects"
                          className="block px-3 py-2 text-stone-900 hover:bg-purple-900 transition-colors font-bold text-sm rounded-full sm:text-base whitespace-nowrap"
                        >
                          Proyectos
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/contacto"
                          className="block px-3 py-2 text-stone-900  hover:bg-purple-900 transition-colors font-bold text-sm rounded-full sm:text-base whitespace-nowrap"
                        >
                          Contacto
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
