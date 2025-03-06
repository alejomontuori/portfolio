import Icono from "./components/Icono";

export default function Home() {
  return (
    <div className="">
      <div className="bg-stone-900 p-1 rounded-md">
        <h1 className="text-white font-bold p-2">Sobre mi</h1>
        <p className="text-white p-2">
          ¡Hola! Soy Alejo, técnico en desarrollo de software, con experiencia en tecnologías como Python, Java, SQL,
          JavaScript, y Node.js, entre otras. Poseo conocimientos en modelado
          UML y me destaco por mis habilidades en colaboración en equipo,
          comunicación asertiva, y adaptabilidad, lo que me permite contribuir
          eficazmente a proyectos diversos. Actualmente, estoy en busca de
          oportunidades para aplicar y expandir mis habilidades en el desarrollo
          web y de software.
        </p>
      </div>
      <div className="bg-stone-900 p-1 mt-6 rounded-md">
        <h1 className="text-white font-bold p-2">Tecnologias</h1>
        <div className="flex flex-col items-center ps-8 p-2 lg:flex-col lg:items-center ">
          <h3 className="text-white font-semibold">
            Lenguajes de programacion
          </h3>
          <div className="flex flex-row flex-wrap">
            <Icono
              size={50}
              info={{
                dir: "/javascript.svg",
                nom: "Javascript",
              }}
            ></Icono>
            <Icono
              size={50}
              info={{
                dir: "/java.svg",
                nom: "Java",
              }}
            ></Icono>
            <Icono
              size={50}
              info={{
                dir: "/Php_dark.svg",
                nom: "Php",
              }}
            ></Icono>
            <Icono
              size={50}
              info={{
                dir: "/python.svg",
                nom: "Python",
              }}
            ></Icono>
            <Icono
              size={50}
              info={{
                dir: "/html5.svg",
                nom: "Html5",
              }}
            ></Icono>
            <Icono
              size={50}
              info={{
                dir: "/css_old.svg",
                nom: "Css",
              }}
            ></Icono>
          </div>
          <h3 className="mt-6 text-white font-semibold">
            Frameworks y Librerías
          </h3>
          <div className="flex flex-row flex-wrap">
            <Icono
              size={50}
              info={{
                dir: "/Express.js_dark.svg",
                nom: "Express",
              }}
            ></Icono>
            <Icono
              size={50}
              info={{
                dir: "/django.svg",
                nom: "Django",
              }}
            ></Icono>
            <Icono
              size={50}
              info={{
                dir: "/nodejs.svg",
                nom: "Node",
              }}
            ></Icono>
            <Icono
              size={50}
              info={{
                dir: "/React_dark.svg",
                nom: "React",
              }}
            ></Icono>
            <Icono
              size={50}
              info={{
                dir: "/tailwindcss.svg",
                nom: "Tailwind",
              }}
            ></Icono>
            <Icono
              size={50}
              info={{
                dir: "/bootstrap.svg",
                nom: "Bootstrap",
              }}
            ></Icono>
          </div>
          <h3 className="mt-6 text-white font-semibold">
              Base de datos
          </h3>
          <div className="flex flex-row flex-wrap">
          <Icono
              size={50}
              info={{
                dir: "/mysql.svg",
                nom: "MySql",
              }}
            ></Icono>
          <Icono
              size={50}
              info={{
                dir: "/sql-server.svg",
                nom: "SqlServer",
              }}
            ></Icono>
          </div>
          <h3 className="mt-6 text-white font-semibold">
          Control de Versiones
          </h3>
          <div className="flex flex-row flex-wrap">
          <Icono
              size={50}
              info={{
                dir: "/git.svg",
                nom: "Git",
              }}
            ></Icono>
          <Icono
              size={50}
              info={{
                dir: "/github-dark.svg",
                nom: "GitHub",
              }}
            ></Icono>
          </div>
        </div>
      </div>
    </div>
  );
}
