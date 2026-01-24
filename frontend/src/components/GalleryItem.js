import React from 'react';
import { useInView } from '../components/useInView';

const GalleryItem = ({ file, title, description, featured, onClick }) => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const handleKeyDown = (e) => {
    if (!onClick) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div 
      ref={ref}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      className={`
        relative group overflow-hidden rounded-lg cursor-zoom-in
        ${isInView ? 'animate-fade-in opacity-100' : 'opacity-0'}
        ${featured ? 'aspect-square' : 'aspect-[4/3]'}
        transition-all duration-500
      `}
    >
      <img 
        src={`https://dhanamschool.com/files/`+file} 
        alt={title}
        className={`
          w-full h-full object-cover transition-transform duration-700 pointer-events-none
          group-hover:scale-110 group-hover:rotate-1
          ${featured ? 'scale-105' : ''}
        `}
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className={`text-white font-bold ${featured ? 'text-2xl' : 'text-lg'} mb-2 drop-shadow`}>
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