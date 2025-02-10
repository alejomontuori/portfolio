import Image from "next/image";

export default function Icono({ info, size }) {
  return (
    <div className="w-16 border-4 border-yellow-300" >
      <Image
        src={info.dir}
        alt={info.nom}
        width={size}
        height={size}
        style={{ width: size, height: size }}
        className="object-contain"
      />
    </div>
  );
}
