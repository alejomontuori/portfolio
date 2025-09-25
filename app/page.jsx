import Icono from "./components/Icono";
import CertificateCard from "./components/CertificateComp";

export default function Home() {
  return (
    <div className="">
      <div className="bg-stone-900 p-1 rounded-md shadow-[0px_5px_15px_rgba(0,0,0,1)]">
        <h1 className="text-purple-500 text-xl font-bold p-2">Sobre mi</h1>
        <p className="text-white p-2">
          ¡Hola! Soy Alejo, técnico en desarrollo de software. Me caracterizo
          por ser una persona proactiva y persistente, siempre enfocado en
          encontrar la solución más eficaz para cada desafío. Poseo una gran
          capacidad de adaptación, lo que me permite integrarme rápidamente a
          nuevos equipos y dinámicas de trabajo. Valoro la comunicación clara y
          el trabajo colaborativo como pilares para alcanzar los objetivos de
          cualquier proyecto. Actualmente, busco una oportunidad para aportar mi
          entusiasmo y mis habilidades a un equipo innovador en el área del
          desarrollo.
        </p>
      </div>
      <div className="bg-stone-900 p-1 mt-6 rounded-md shadow-[0px_5px_15px_rgba(0,0,0,1)]">
        <h1 className="text-purple-500 text-xl font-bold p-2">Tecnologias</h1>
        <div className="flex flex-col items-center ps-8 p-2 lg:flex-col lg:items-center ">
          <h3 className="text-purple-600 text-lg font-semibold">
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
          <h3 className="mt-6 text-purple-600 text-lg font-semibold">
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
                dir: "/nodejs.svg",
                nom: "Node",
              }}
            ></Icono>
            <Icono
              size={50}
              info={{
                dir: "/nextjs_icon_dark.svg",
                nom: "Next.js",
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
                dir: "/django.svg",
                nom: "Django",
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
          <h3 className="mt-6 text-purple-600 text-lg font-semibold">
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
          <h3 className="mt-6 text-purple-600 text-lg font-semibold">
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
          <h3 className="mt-6 text-purple-600 text-lg font-semibold">
            API y Herramientas
          </h3>
          <div className="flex flex-row flex-wrap">
            <Icono
              size={50}
              info={{
                dir: "/apirest.svg",
                nom: "Api Rest",
              }}
            ></Icono>
            <Icono
              size={50}
              info={{
                dir: "/postman.svg",
                nom: "Postman",
              }}
            ></Icono>
          </div>
        </div>
      </div>

      <div className="bg-stone-900 p-1 mt-6 rounded-md shadow-[0px_5px_15px_rgba(0,0,0,1)]">
        <h1 className="text-purple-500 text-xl font-bold p-2">Certificados</h1>
        <div className="grid grid-cols-1 gap-8 p-2 md:grid-cols-2 lg:grid-cols-3 justify-items-center items-start">
          <CertificateCard
            title="TÉCNICO SUPERIOR EN DESARROLLO DE SOFTWARE"
            description="Egresado en Instituto de Educación Superior N° 9-024 Lavalle - Mendoza"
            url="/CertificadoTSDS.pdf"
          />
          <CertificateCard
            title="AWS Educate Getting Started with Storage"
            description="En este curso aprendí a utilizar Amazon S3 como solución de almacenamiento en la nube, comprendiendo cómo crear buckets, gestionar objetos y aplicar configuraciones de seguridad."
            url="https://www.credly.com/badges/5e298573-12b4-4479-ba96-756cdde09c49/public_url"
          />
          <CertificateCard
            title="AWS Educate Getting Started with Compute"
            description="En este curso adquiri conocimentos sobre los diferentes tipos de cómputo disponibles en AWS y como crear y administrar instancias en Amazon EC2."
            url="https://www.credly.com/badges/cbdc5e3d-5f09-4ce6-9f57-7e4402a426c1/public_url"
          />
        </div>
      </div>
    </div>
  );
}
