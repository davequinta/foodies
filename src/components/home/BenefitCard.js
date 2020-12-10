import React from 'react';
import Fade from 'react-reveal/Fade';

const BenefitCard = ({ index, title, description }) => {
  return (
    <div className="w-full lg:w-96 flex flex-col justify-center items-center text-center px-5 mb-20 z-10">
      <div className="rounded-full h-16 w-16 flex items-center justify-center bg-primary text-white font-bold text-3xl">
        <span>{`0${index + 1}`}</span>
      </div>
      <Fade top><h5 className="my-4 font-extrabold text-2xl">{title}</h5></Fade>
      <Fade bottom><p className="text-xl">{description}</p></Fade>
    </div>
  );
};

export default BenefitCard;
