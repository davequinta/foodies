import React from 'react';
//TODO: Yellow background title component
const MarkedTitle = ({
  normalTextUpper,
  normalTextLower,
  markedText,
  header,
  home,
}) => {
  return (
    <div
      className={`text-black text-3xl xl:text-4xl  font-black text-${
        header ? 'left' : 'center'
      } flex justify-center tracking-wider pl-8 text-${
        home ? 'black' : 'white'
      }`}
    >
      <div className="w-max lg:leading-6 xl:leading-8 break-word ">
        <h1 className="relative z-20 px-5">{normalTextUpper}</h1>
        <h1 className="relative z-20 px-5">{normalTextLower}</h1>
        <h1
          className={`bg-primary px-5 lg:py-${
            header ? '1' : '2'
          } z-10 transform -rotate-.64 ${
            header && 'md:w-max xl:w-max'
          } text-black`}
        >
          {markedText}
        </h1>
      </div>
    </div>
  );
};

export default MarkedTitle;
