import React, { useState, useEffect } from 'react';
import { MdDoubleArrow } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ArrowButton = ({ direction = 'next', onClick }) => (
  <button
    aria-label={direction === 'next' ? 'Next' : 'Previous'}
    onClick={onClick}
    className={`absolute ${direction === 'next' ? 'right-2' : 'left-2'} top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-primary w-9 h-9 rounded-full shadow-md flex items-center justify-center transition-colors`}
  >
    {direction === 'next' ? (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path fillRule="evenodd" d="M8.47 3.97a.75.75 0 011.06 0l6.5 6.5a.75.75 0 010 1.06l-6.5 6.5a.75.75 0 11-1.06-1.06L14.94 12 8.47 5.53a.75.75 0 010-1.06z" clipRule="evenodd" />
      </svg>
    ) : (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path fillRule="evenodd" d="M15.53 20.03a.75.75 0 01-1.06 0l-6.5-6.5a.75.75 0 010-1.06l6.5-6.5a.75.75 0 111.06 1.06L9.06 12l6.47 6.47a.75.75 0 010 1.06z" clipRule="evenodd" />
      </svg>
    )}
  </button>
);

const ImageViewer = ({ imageArr }) => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isViewerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isViewerOpen]);

  const openImage = (index) => {
    setCurrentIndex(index);
    setIsViewerOpen(true);
  };

  const closeImageViewer = () => {
    setIsViewerOpen(false);
    setCurrentIndex(0);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageArr.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageArr.length - 1 ? 0 : prevIndex + 1
    );
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    nextArrow: <ArrowButton direction="next" />,
    prevArrow: <ArrowButton direction="prev" />,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 640, settings: { slidesToShow: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
    ],
  };

  return (
    <div className='w-full relative'>
      {/* Image Gallery - Compact, taller tiles with custom arrows */}
      <Slider {...sliderSettings}>
        {imageArr.map((i, index) => (
          <div key={index} className="px-2">
            <div
              className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-large cursor-zoom-in group"
              onClick={() => openImage(index)}
            >
              {i._id != null ? (
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  alt={i.alt}
                  src={`https://api.dhanamschool.com/files/` + i.file}
                />
              ) : (
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  alt={i.alt}
                  src={i}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        ))}
      </Slider>

      {/* Full-Screen Image Viewer */}
      {isViewerOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/90 flex items-center justify-center z-[1000]">
          <div
            className="absolute left-0 top-0 bottom-0 w-[15%] z-[1001] flex items-center justify-center cursor-pointer text-white text-3xl select-none"
            onClick={goToPrev}
          >
            <MdDoubleArrow className='rotate-180' />
          </div>
          <div
            className="absolute right-0 top-0 bottom-0 w-[15%] z-[1001] flex items-center justify-center cursor-pointer text-white text-3xl select-none"
            onClick={goToNext}
          >
            <MdDoubleArrow />
          </div>
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {imageArr[currentIndex]._id!=null&&
            <img
            src={`https://api.dhanamschool.com/files/` + imageArr[currentIndex]?.file}
            alt={imageArr[currentIndex]?.alt}
            className="max-w-full max-h-full object-contain transition-transform duration-300 ease-out scale-100"
            />
          }
          {imageArr[currentIndex]._id==null&&
          <img
          src={imageArr[currentIndex]}
          alt={imageArr[currentIndex]?.alt}
          className="max-w-full max-h-full object-contain transition-transform duration-300 ease-out scale-100"
          />
          }
          </div>
          <button
            className="absolute top-3 right-3 z-[1002] text-white rounded-full text-5xl"
            onClick={closeImageViewer}
            aria-label="Close"
            title="Close"
          >
           <IoIosCloseCircle />

          </button>
        </div>
      )}
    </div>
  );
};

export default ImageViewer;
