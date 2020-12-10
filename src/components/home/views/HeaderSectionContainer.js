import React from 'react';

const HeaderSectionContainer = ({ leftContent, rightContent, menu }) => {
  return (
    <section
      className={`flex flex-col md:flex-row-reverse  w-screen ${
        menu && 'bg-black'
      }`}
    >
      <div className={`w-full md:w-1/2 h-96 md:h-100`}>{rightContent}</div>
      <div className={`w-full md:w-1/2 h-${menu ? '72' : '96'} md:h-100`}>
        {leftContent}
      </div>
    </section>
  );
};

export default HeaderSectionContainer;
