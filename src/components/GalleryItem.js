import React from 'react';
import { useInView } from '../components/useInView';

const GalleryItem = ({ file, title, description, featured }) => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <div 
      ref={ref}
      className={`
        relative group overflow-hidden rounded-lg
        ${isInView ? 'animate-fade-in opacity-100' : 'opacity-0'}
        ${featured ? 'aspect-square' : 'aspect-[4/3]'}
        transition-all duration-500
      `}
    >
      <img 
        src={`https://api.dhanamschool.com/files/`+file} 
        alt={title}
        className={`
          w-full h-full object-cover transition-all duration-700
          group-hover:scale-110 group-hover:rotate-1
          ${featured ? 'scale-105' : ''}
        `}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className={`text-white font-bold ${featured ? 'text-2xl' : 'text-lg'} mb-2`}>
            {title}
          </h3>
          <p className="text-white/90 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;