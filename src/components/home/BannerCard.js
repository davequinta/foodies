import React from 'react';

const BannerCard = () => {
  return (
    <div className="relative">
      <div className=" absolute bottom-16 right-10 text-4xl md:text-5xl  font-black tracking-wider w-64 md:w-100 text-right ">
        <span className="text-white ">
          LA COMIDA ES <span className="text-yellow-300"> NUESTRO ARTE</span>
        </span>
      </div>
      <img src="/banner-1.png" className="h-100 w-120 object-cover " />
    </div>
  );
};

export default BannerCard;
