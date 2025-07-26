import React from 'react';
import GalleryItem from './GalleryItem';

const GalleryGrid = ({ items }) => {
  // console.log(items)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {items.map((item, index) => (
        <div 
          key={index} 
          className={`
            transform hover:-translate-y-1 transition-transform duration-300
            ${index % 7 === 0 ? 'sm:col-span-2 sm:row-span-2' : ''}
          `}
        >
          <GalleryItem {...item} featured={index % 7 === 0} />
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid;