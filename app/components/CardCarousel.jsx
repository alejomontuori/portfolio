"use client";

import React, { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const CardCarousel = ({ proyectos }) => {
  const autoplay = Autoplay({ delay: 3000, stopOnInteraction: false });

  const [emblaRef] = useEmblaCarousel({ loop: true }, [autoplay]);
  const [mostrar, setMostrar] = useState(false);

  return (
    <div className="w-full h-full m-8 py-4 md:w-1/2 md:h-auto lg:p-4 lg:w-2/5 lg:h-auto bg-stone-800 rounded-md">
      <h3 className="text-center lg:font-semibold text-white">
        {proyectos.title}
      </h3>
      <div className="sm:block sm:flex-row items-center">
        <p
          className={`text-sm sm:text-base text-neutral-400 transition-all duration-300 ease-in-out max-h-0 overflow-hidden ${
            mostrar ? "max-h-96 opacity-100 py-2" : "max-h-0 opacity-0"
          } sm:max-h-full sm:opacity-100 sm:overflow-visible`}
        >
          {proyectos.description}
        </p>
        <div className="sm:block flex justify-center items-center space-x-4 mt-3">
          <a
            href={proyectos.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-center font-semibold rounded-full px-0.5 hover:border border-purple-700 bg-purple-500"
          >
            Link a repositorio
          </a>
          <button
            className="sm:hidden text-sm text-center rounded-full font-semibold px-0.5 hover:border border-purple-700 bg-purple-500"
            onClick={() => setMostrar(!mostrar)}
          >
            {mostrar ? "Ocultar Descripcion ⬆️" : "Ver Descripcion ⬇️"}
          </button>
        </div>
      </div>

      {/* Carrusel */}
      <div
        ref={emblaRef}
        className="w-auto h-auto overflow-hidden mt-1 lg:w-full lg:h-40"
      >
        <div className="flex">
          {proyectos.images.map((src, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] w-full max-h-40 overflow-hidden"
            >
              <Image
                src={src}
                alt={`Imagen ${index + 2} de ${proyectos.title}`}
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;
