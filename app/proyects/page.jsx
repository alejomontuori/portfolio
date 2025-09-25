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
              "E-commerce funcional desarrollado con Python, Django, SQLite, Tailwind CSS y CSS puro. Con rol de administrador para gestionar productos, usuarios y pedidos.",
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
            title: "Portfolio Personal",
            description:
              "Mi sitio web profesional desarrollado con Next.js para un rendimiento óptimo y navegación fluida, Tailwind CSS para un diseño moderno y responsivo, Resend para gestionar el envío de correos de contacto y finalmente el deploy en vercel.",
            images: [
              "/portfolio1.webp",
              "/portfolio2.webp",
              "/portfolio3.webp",
            ],
            link: "https://github.com/alejomontuori/portfolio",
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
        <CardCarousel
          proyectos={{
            title: "Bazar AyB - Landing Page",
            description:
              "Web desarrollada con React y TailwindCSS para un bazar local. Incluye catálogo de productos, sección sobre nosotros, contacto mediante WhatsApp e Instagram y diseño totalmente responsive. Desplegada en Netlify.",
            images: [
              "/bazar1.webp",
              "/bazar2.webp",
              "/bazar3.webp",
            ],
            link: "https://github.com/alejomontuori/webBazarAyB",
          }}
        />
      </div>
    </div>
  );
}
