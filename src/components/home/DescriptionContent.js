import React from 'react';
import Link from 'next/link'
import Fade from 'react-reveal/Fade';

const DescriptionContent = () => (
  <div className="w-full h-full flex items-center">
    <div className="relative w-full">
      <div className=" hidden xl:block absolute ">
        <img src="/bg-line.png" />
      </div>
      <div className="flex flex-wrap text-left xl:px-20 px-10 py-23 mt-9">
        <Fade right><span className="text-3xl w-100">Quien es foodie</span></Fade>
        <Fade bottom><p className="text-base text-gray-500 mt-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p></Fade>
       <Link href="/#contact">
          <a><div className="flex mt-4 items-center">
                  <span className="text-xl text-black font-semibold">Contactanos</span>
                  <img src="/arrow-right.png" className="w-auto h-5 ml-5" />
                </div></a>
        </Link>
      </div>
    </div>
  </div>
);

export default DescriptionContent;
