import React from 'react';

const MapCard = () => {
  return (
    <div className="flex flex-col">
      <img src="/food404.png" className="w-30" />
      <h1 className='text-center'>¡Platillo no encontrado!</h1>
      <p>Te invitamos a que verifiques si el nombre esta bien escrito o prueba buscando un nuevo platillo.</p>
    </div>
  );
};

export default MapCard;
