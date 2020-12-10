import React from 'react';

const ContactSectionContainer = () => {
  return (
    <div id='contact' className="flex flex-col xl:flex-row h-130 lg:h-110 mb-23">
      <section className="relative p-12 bg-black h-130 lg:h-110  w-full text-white	text-center md:mb-4 flex flex-col items-center">
        <div className="mb-8 md:mb-12">
          <h1 className="text-4xl">Cuentanos tu experiencia </h1>
          <p className="text-xl text-center">
            Don't miss out on our great offers & receive deals from all our top
            restaurants via e-mail
          </p>
        </div>
        <form
          className="flex-col md:flex-row w-full md:w-110 "
          onSubmit={(e) => {
            e.preventDefault();
            console.log('E', e);
          }}
        >
          <div className="justify-center lg:flex lg:space-x-12 ">
            <div>
              <div className="flex flex-col mb-5 text-left">
                <label htmlFor="#name">Nombre y Apellido</label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  className="p-3 w-60"
                  placeholder="John Doe"
                  maxLength="191"
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
                className="rounded-lg p-3 border-gray-400 h-full border-2"
                placeholder="El día de ahora mi experiencia fue..."
              />
            </div>
          </div>
          <div className="w-full mt-5 flex justify-center md:justify-end">
            <button
              className="align-right bg-primary p-4 rounded-lg text-black"
              type="submit"
            >
              <span>Enviar comentarios</span>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ContactSectionContainer;
