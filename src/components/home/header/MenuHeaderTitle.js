import React from 'react';
import MarkedTitle from '../../common/MarkedTitle';

const MenuHeaderTitle = () => {
  return (
    <div className="flex flex-col bg-black  items-center  justify-center h-full ">
      <MarkedTitle
        normalTextUpper={'Cada sabor '}
        normalTextLower={'es una nueva '}
        markedText={'experiencia'}
        header
      />
    </div>
  );
};

export default MenuHeaderTitle;
