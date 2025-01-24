import "./global.css";
import Image from "next/image";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-neutral-900">
        <main className="min-h-screen flex justify-center items-center p-4">
          <div className="w-full h-full max-w-4xl p-4">
            {/* Contenedor principal con dirección de columna en móvil y fila en desktop */}
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Sidebar - ocupa todo el ancho en móvil, ancho fijo en desktop */}
              <aside className="grid justify-items-center w-full lg:w-80 rounded-l-xl p-4 bg-stone-800">
                <div className="flex flex-row lg:flex-col lg:items-start gap-4 lg:gap-0">
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
                    <h1 className="text-2xl text-transparent bg-clip-text text-purple-500 font-bold">
                      Alejo Montuori
                    </h1>
                    <p className="text-lg text-transparent bg-clip-text text-purple-600 font-semibold">
                      Software Developer
                    </p>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <ul className="space-y-4">
                    <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
                      <div className="text-center sm:text-left">
                        <p className="text-transparent bg-clip-text text-purple-500 font-bold">
                          Email
                        </p>
                        <p className="text-transparent bg-clip-text text-purple-600 font-semibold">
                          alejomontuori12@gmail.com
                        </p>
                      </div>
                    </li>
                    <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
                      <div className="text-center sm:text-left">
                        <p className="text-transparent bg-clip-text text-purple-500 font-bold">
                          Phone
                        </p>
                        <p className="text-transparent bg-clip-text text-purple-600 font-semibold">
                          +54 261-3601823
                        </p>
                      </div>
                    </li>
                    <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
                      <div className="text-center sm:text-left">
                        <p className="text-transparent bg-clip-text text-purple-500 font-bold">
                          Age
                        </p>
                        <p className="text-transparent bg-clip-text text-purple-600 font-semibold">
                          25
                        </p>
                      </div>
                    </li>
                    <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
                      <div className="text-center sm:text-left">
                        <p className="text-transparent bg-clip-text text-purple-500 font-bold">
                          Location
                        </p>
                        <p className="text-transparent bg-clip-text text-purple-600 font-semibold">
                          Mendoza, Argentina
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </aside>

              {/* Contenido principal */}
              <div className="flex-1 p-4 bg-stone-800 rounded-r-xl">
                {/* Navegación */}
                <div className="flex justify-center lg:justify-end sm:justify-end items-center h-10">
                  <nav className="flex w-auto rounded-xl bg-purple-500 h-full px-8 items-center mb-6">
                    <ul className="flex flex-row sm:flex-row justify-center sm:justify-end gap-4 sm:gap-4items-center">
                      <li>
                        <Link
                          href="/"
                          className="w-full sm:w-auto px-4 py-2 hover:text-blue-600 transition-colors"
                        >
                          About me
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/proyects"
                          className="w-full sm:w-auto px-4 py-2 hover:text-blue-600 transition-colors"
                        >
                          Projects
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/contacto"
                          className="w-full sm:w-auto px-4 py-2 hover:text-blue-600 transition-colors"
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                {/* Área de contenido */}
                <div className="flex justify-center">
                  <div className="w-full border-4 border-yellow-400 p-4">
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
