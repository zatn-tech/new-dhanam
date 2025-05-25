import React from 'react';

const TechIcon = ({ src, alt, className = '' }) => (
  <div className={` ${className}`}>
    <img src={src} alt={alt} className="w-12 h-12 object-contain" />
  </div>
);

export default TechIcon;