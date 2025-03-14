import CardCarousel from "../components/CardCarousel";

export default function proyect() {
  return (
    <div className="bg-stone-900 p-1 rounded-md shadow-[0px_5px_15px_rgba(0,0,0,1)]">
      <h1 className="p-2 font-bold text-purple-500 text-xl">Proyectos</h1>
      <div className="flex flex-col items-center lg:flex-row lg:flex-wrap lg:ml-8">
        <CardCarousel
          proyectos={{
            title: "Musep App",
            description:
              "Sistema administrativo para el Museo Histórico y Natural de Lavalle, desarrollado con JavaScript, Node.js, Express.js y Tailwind CSS. Permite registrar y gestionar piezas, administrar préstamos y hacer seguimiento de taxidermias realizadas en el museo.",
            images: ["/museo1.webp", "/museo2.webp", "/museo3.webp"],
            link: "https://github.com/Belen-Humbert/Museo-App-Nuevo.git",
          }}
        />

        <CardCarousel
          proyectos={{
            title: "TechStore",
            description:
              "Proyecto desarrolado para el espacio curricular de Programación III, un e-commerce funcional desarrollado con Python, Django, SQLite, Tailwind CSS y CSS puro.",
            images: [
              "/techStore1.webp",
              "/techStore2.webp",
              "/techStore3.webp",
            ],
            link: "https://github.com/Belen-Humbert/proyectoDjango.git",
          }}
        />

        <CardCarousel
          proyectos={{
            title: "AuditaWeb",
            description:
              "Proyecto desarrollado para el espacio curricular Arquitectura y Diseño de Interfaces utilzando tecnologías como JavaScript, React, Material UI y CSS Modules.",
            images: [
              "/auditaweb3.webp",
              "/auditaweb2.webp",
              "/auditaweb1.webp",
            ],
            link: "https://github.com/Belen-Humbert/proyecto-interfaces.git",
          }}
        />
      </div>
    </div>
  );
}
