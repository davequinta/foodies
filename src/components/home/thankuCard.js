import React from 'react';
import Link from 'next/link'
const thankuCard = () => {
  return (
    <div className="flex flex-col text-white p-10 justify-center">
      <img src="/thank_you.png" className="w-20 text-center" />
      <h1 className='text-center'>Gracias por tus comentarios</h1>
      <p>Don't miss out on our great offers & Receive deals from all our
        top restaurants via e-mail.</p>

        <Link href="/menu">
              <button
              className=" bg-primary p-2 rounded-lg text-black w-25"
            >
              <span>Conoce nuestro menú</span>
            </button>
        </Link>
      
    </div>
  );
};

export default thankuCard;
