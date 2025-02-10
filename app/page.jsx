import Icono from "./components/Icono";

export default function Home() {
  return (
    <div className="">
      <div className="bg-stone-900 p-1 rounded-md">
        <h1 className="text-white font-bold p-2">About me</h1>
        <p className="text-white p-2">
          ¡Hola! Soy Alejo, técnico en desarrollo de software recientemente
          egresado, con experiencia en tecnologías como Python, Java, SQL,
          JavaScript, y Node.js, entre otras. Poseo conocimientos en modelado
          UML y me destaco por mis habilidades en colaboración en equipo,
          comunicación asertiva, y adaptabilidad, lo que me permite contribuir
          eficazmente a proyectos diversos. Actualmente, estoy en busca de
          oportunidades para aplicar y expandir mis habilidades en el desarrollo
          web y de software.
        </p>
      </div>
      <div className="bg-stone-900 p-1 mt-6 rounded-md">
        <h1 className="text-white font-bold p-2">Technologies</h1>
        <div className="ps-8 p-2">
          <h3 className="text-white font-semibold">Backend</h3>
          <Icono size={50} info={{
            dir: "/django.svg",
            nom: "django"
          }}></Icono>
        </div>
      </div>
    </div>
  );
}
