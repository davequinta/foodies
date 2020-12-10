import React from 'react';

const MenuHeaderImages = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-black pt-20 md:pt-10">
      <img
        src="/header/bg-menu-sm.png"
        className=" absolute w-1/2 h-full right-0 top-0 md:hidden"
      />
      <img
        src="/header/bg-menu-md.png"
        className=" absolute w-3/4 h-full right-0 top-0 hidden md:block xl:hidden"
      />
      <img
        src="/header/bg-menu-lg.png"
        className=" absolute w-full h-full right-0 top-0 hidden xl:block"
      />
      <img
        src="/header/hamburger-dark.png"
        className="relative z-10 h-64 md:h-56 xl:h-80 w-auto"
      />
    </div>
  );
};

export default MenuHeaderImages;
