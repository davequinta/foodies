import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import ThankuCard from '../thankuCard'
import POST_CONTACT from '../../../utils/requests/contact'
const ContactSectionContainer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSucess] = useState(false);

  const onSubmit = () => {
    postMessage();
  };


const postMessage = async () => {
    const messageResponse = await POST_CONTACT({ name, email, message });
    console.log('MESSAGE_RESPONSE', messageResponse);
    if(messageResponse.message) setSucess(true)
};



  return (
    <div id='contact' className="flex flex-col xl:flex-row h-130 lg:h-110 mb-23">

      <section className="relative p-12 bg-black h-130 lg:h-110  w-full text-white	text-center md:mb-4 flex flex-col items-center pt-20">

        {success ?<ThankuCard/>:<div className='justify-center'><div className="mb-8 md:mb-12">
          <Fade left><h1 className="text-4xl">Cuentanos tu experiencia </h1></Fade>
          <p className="text-xl text-center">
            Don't miss out on our great offers & receive deals from all our top
            restaurants via e-mail
          </p>
        </div>
        <form
          className="flex-col md:flex-row w-full md:w-110 "
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          <div className="justify-center lg:flex lg:space-x-12 ">
            <div>
              <div className="flex flex-col mb-5 text-left">
                <label htmlFor="#name">Nombre y Apellido</label>

                <input
                 value={name}
                  onChange={({ target: { value } }) => setName(value)}
                  id="name"
                  name="name"
                  type="text"
                  className="p-3 w-60"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col mb-5 text-left">
                <label>Correo electrónico</label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  className="p-3 w-60"
                  placeholder="j.doe@correo.com"
                  value={email}
                  onChange={({ target: { value } }) => setEmail(value)}
                />
              </div>
            </div>
            <div className="flex flex-col text-left">
              <label>Mensaje</label>
              <textarea
                id="message"
                name="message"
                maxLength="255"
                rows={4}
                cols={40}
                value={message}
                onChange={({ target: { value } }) => setMessage(value)}
                className="rounded-lg p-3 border-gray-400 h-full border-2"
                placeholder="El día de ahora mi experiencia fue..."
              />
            </div>
          </div>
          <div className="w-full mt-5 flex justify-center md:justify-end">
            <button
              className=" hover:bg-lightyellow align-right bg-primary p-4 rounded-lg text-black"
              type="submit"
            >
              <span className=''>Enviar comentarios</span>
            </button>
          </div>
        </form></div>}
      </section>
    </div>
  );
};

export default ContactSectionContainer;
