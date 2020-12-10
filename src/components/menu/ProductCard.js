import React from 'react';

const ProductCard = ({ name, image, description, price, category }) => {
  return (
    <div className="h-100 w-80 text-center p-3">
      <div className="relative w-full h-full bg-white rounded-lg hover:shadow-lg">
        <img src={image} className="h-64 w-full rounded-lg" />
        <div className="w-full h-auto mt-2 flex flex-col items-center">
          <span className="text-lg font-normal">{name}</span>
          <p className="font-thin w-10/12 mt-3">{description}</p>
        </div>
        <div className="w-full absolute bottom-0 flex justify-between items-center p-3">
          <p className="font-thin font-sm text-gray-400">{category}</p>
          <div className="text-black font-black font-xl bg-primary p-2 rounded-lg">
            $<span> {price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
