import React from 'react';

const SplitSectionContainer = ({ revert, bigContent, smallContent }) => {
  return (
    <div
      className={`w-full flex flex-col  md:flex-row h-full md:h-100 ${
        revert && 'md:flex-row-reverse'
      }`}
    >
      <div
        className={`w-full md:w-max h-full overflow-hidden`}
        style={{ backgroundColor: 'red' }}
      >
        {bigContent}
      </div>
      <div className={`w-full md:w-section-small h-full `}>{smallContent}</div>
    </div>
  );
};
export default SplitSectionContainer;
