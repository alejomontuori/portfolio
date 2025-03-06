"use client";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/send-email", {
      // Ruta corregida
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData), // Se envía sin `{ formData }`
    });

    const result = await response.json();

    if (result.success) {
      alert("Correo enviado correctamente");
    } else {
      alert("Error al enviar el correo: " + result.error);
    }
  };

  return (
    /*<form onSubmit={handleSubmit} className="flex flex-col">
      <input type="text" name="name" placeholder="Nombre" required className="mb-2 p-2 border" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" required className="mb-2 p-2 border" onChange={handleChange} />
      <textarea name="message" placeholder="Mensaje" required className="mb-2 p-2 border" onChange={handleChange}></textarea>
      <button type="submit" className="bg-purple-500 text-white p-2">Enviar</button>
    </form>*/
    <div className="bg-stone-900 p-1 rounded-md">
      <h1 className="p-2 font-bold text-white">Contacto</h1>
      <div className="flex flex-col items-center md:items-center sm:items-center sm:pt-0">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
          <div className="mt-8 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 mr-2 my-8 bg-stone-800 sm:rounded-lg">
                <h1 className="text-4xl sm:text-5xl text-purple-500 font-extrabold tracking-tight">
                  Contactame
                </h1>
                <p className="text-normal text-lg sm:text-2xl font-medium text-purple-600 mt-2">
                  Enviame un correo electronico
                </p>

                <div className="flex items-center mt-8 text-purple-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    className="w-8 h-8"
                  >
                    <path
                      fill="#a855f7"
                      d="M16 64C16 28.7 44.7 0 80 0L304 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L80 512c-35.3 0-64-28.7-64-64L16 64zM144 448c0 8.8 7.2 16 16 16l64 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-64 0c-8.8 0-16 7.2-16 16zM304 64L80 64l0 320 224 0 0-320z"
                    />
                  </svg>
                  <p className="ml-4 text-md tracking-wide font-semibold w-40">
                    +54 2613601823
                  </p>
                </div>

                <div className="flex items-center mt-4 text-purple-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="w-8 h-8"
                  >
                    <path
                      fill="#a855f7"
                      d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                    />
                  </svg>
                  <a
                    className="ml-4 text-md tracking-wide font-semibold w-40"
                    href="www.linkedin.com/in/alejo-montuoridev-9b26ba257"
                  >
                    Alejo Montuori
                  </a>
                </div>

                <div className="flex items-center mt-2 text-purple-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                    className="w-8 h-8"
                  >
                    {/*<!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->*/}
                    <path
                      fill="#a855f7"
                      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                    />
                  </svg>

                  <a
                    href="https://github.com/alejomontuori"
                    className="ml-4 text-md tracking-wide font-semibold w-40"
                  >
                    alejomontuori
                  </a>
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="p-6 flex flex-col justify-center"
              >
                <div className="flex flex-col">
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    onChange={handleChange}
                    className="w-100 mt-2 py-3 px-3 rounded-lg placeholder:text-stone-900 bg-purple-800 border border-purple-900 text-stone-900 font-semibold focus:border-purple-400 focus:outline-none"
                  />
                </div>

                <div className="flex flex-col mt-2">
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    className="w-100 mt-2 py-3 px-3 rounded-lg placeholder:text-stone-900 bg-purple-800 border border-purple-900 text-stone-900 font-semibold focus:border-purple-400 focus:outline-none"
                  />
                </div>

                <div className="flex flex-col mt-2">
                  <textarea
                    required
                    name="message"
                    placeholder="Mensaje"
                    onChange={handleChange}
                    className="w-100 mt-2 py-3 px-3 rounded-lg placeholder:text-stone-900 bg-purple-800 border border-purple-900 text-stone-900 font-semibold focus:border-purple-400 focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className=" bg-purple-900 text-stone-900 font-bold py-3 px-6 rounded-lg mt-3 hover:bg-purple-700 transition ease-in-out duration-300 lg:w-32"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
