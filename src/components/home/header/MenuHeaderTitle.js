import React from 'react';
import MarkedTitle from '../../common/MarkedTitle';
import Fade from 'react-reveal/Fade';

const MenuHeaderTitle = () => {
  return (
    <div className="flex flex-col bg-black  items-center  justify-center h-full ">
      <Fade left><MarkedTitle
        normalTextUpper={'Cada sabor '}
        normalTextLower={'es una nueva '}
        markedText={'experiencia'}
        header
      /> </Fade>
    </div>
  );
};

export default MenuHeaderTitle;
