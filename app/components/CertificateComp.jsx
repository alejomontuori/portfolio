import React from 'react';

const CertificateCard = ({ icon, title, description, url }) => {
  return (
    <div className="max-w-sm overflow-hidden rounded-xl bg-stone-800 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="p-3">
        <div className="flex items-center gap-4">
          <h3 className="text-base font-semibold text-white">
            {title}
          </h3>
        </div>
        
        <p className="mt-4 text-base text-neutral-400">
          {description}
        </p>
        
        <div className="mt-4 border-t border-gray-200 pt-4">
          <a 
            href={url} 
            download={"CertificadoTSDS.pdf"}
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block rounded-full bg-purple-500 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors-transform duration-300 hover:scale-95 hover:bg-purple-700"
          >
            Ver Credencial
          </a>
        </div>
      </div>
    </div>
  );
};


export default CertificateCard;