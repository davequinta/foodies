import React from 'react';

const SplitSectionContainer = ({ revert, bigContent, smallContent }) => {
  return (
    <div
      className={`w-full flex flex-col  md:flex-row md:h-full  ${
        revert && 'md:flex-row-reverse'
      }`}
    >
      <div
        className={`w-full md:w-full h-full overflow-hidden`}
        style={{ backgroundColor: 'red' }}
      >
        {bigContent}
      </div>
      <div className={`w-full md:w-fill h-full `}>{smallContent}</div>
    </div>
  );
};
export default SplitSectionContainer;
