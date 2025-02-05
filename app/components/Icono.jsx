import Image from "next/image";

export default function Icono({ src, alt }) {
  return (
    <div className="flex justify-center items-center w-16 h-16 bg-gray-800 rounded-lg p-2">
      <Image src={src} alt={alt} width={50} height={50} className="object-contain" />
    </div>
  );
}
