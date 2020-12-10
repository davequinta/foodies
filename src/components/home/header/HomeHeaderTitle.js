import React from 'react';
import MarkedTitle from '../../common/MarkedTitle';

const HomeHeaderTitle = () => {
  return (
    <div className="flex flex-col   items-start  justify-center h-full ">
      <MarkedTitle
        normalTextUpper={'Un nuevo'}
        normalTextLower={' sabor esta en '}
        markedText={'la ciudad'}
        header
        home
      />
      <div className="w-10/12 xl:w-105 px-12 md:px-14 mt-8">
        <p className="text-gray-400 text-base  font-sans">
          Estamos a punto de descubrir un mundo lleno de sabores y de emociones
          inigualables.
        </p>
        <div className="flex mt-4 items-center">
          <span className="text-xl text-black font-semibold">Encuentranos</span>
          <img src="/arrow-right.png" className="w-auto h-5 ml-5" />
        </div>
      </div>
    </div>
  );
};

export default HomeHeaderTitle;
