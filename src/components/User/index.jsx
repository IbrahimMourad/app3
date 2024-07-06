import React from 'react';

export const User = ({ userName, imgSrc, alt }) => {
  return (
    <div>
      <h6> Hi, {userName}</h6>
      <img src={imgSrc} alt={alt} width={300} height={300} />
    </div>
  );
};
