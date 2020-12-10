import React from 'react';

const RestaurantCard = ({name, opening_time, closing_time, address}) => {
  return (
    <div className="flex flex-row pb-2">
        <div className='border-solid border-2 border-black flex flex-col space-x-4 px-8 w-100 hover:bg-rescard hover:border-0'>
          <h1>{name}</h1>
          <p>Abierto de: {opening_time}md - {closing_time}pm</p>
          <p>{address}</p>
        </div>
    </div>
  );
};

export default RestaurantCard;
