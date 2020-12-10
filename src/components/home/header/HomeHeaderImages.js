import React from 'react';

const HomeHeaderImages = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center pt-20 md:pt-0">
      <img
        src="/header/bg-home.png"
        className=" absolute w-full h-full right-0 top-0"
      />
      <img
        src="/header/hamburger-light.png"
        className="relative z-10 h-44 md:h-56 xl:h-64 w-auto"
      />
    </div>
  );
};

export default HomeHeaderImages;
