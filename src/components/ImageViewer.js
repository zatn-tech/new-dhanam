import React, { useState } from 'react';
import { MdDoubleArrow } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";


const ImageViewer = ({ imageArr }) => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  return (
    <div className='z-50 w-fit'>
      {/* Image Gallery */}
      <div className="flex overflow-x-scroll my-16 no-scrollbar flex-nowrap">
        {imageArr.map((i, index) => (
          <div
            key={index}
            className="p-1 rounded-3xl border-purple-700 border-[1px] hover:scale-95 duration-300 w-[300px] sm:w-[400px] mx-5 cursor-pointer"
            onClick={() => openImage(index)}
          >
            {i._id!=null&&
            <img
            className="w-[400px] h-64 rounded-2xl"
            alt={i.alt}
            src={`https://api.dhanamschool.com/files/` + i.file}
            />
          }
          {i._id==null&&
          <img
          className="w-[400px] h-64 rounded-2xl"
          alt={i.alt}
          src={i}
          />
          }
          </div>
        ))}
      </div>

      {/* Full-Screen Image Viewer */}
      {isViewerOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-95 flex items-center justify-center z-50">
          <div
            className="absolute left-0 top-0 bottom-0 w-[15%] z-50 flex items-center justify-center cursor-pointer text-white text-3xl"
            onClick={goToPrev}
          >
            <MdDoubleArrow className='rotate-180' />
          </div>
          <div
            className="absolute right-0 top-0 bottom-0 w-[15%] z-50 flex items-center justify-center cursor-pointer text-white text-3xl"
            onClick={goToNext}
          >
            <MdDoubleArrow />
          </div>
          <div className="relative w-full h-full flex items-center justify-center">
            {imageArr[currentIndex]._id!=null&&
            <img
            src={`https://api.dhanamschool.com/files/` + imageArr[currentIndex]?.file}
            alt={imageArr[currentIndex]?.alt}
            className="max-w-full max-h-full object-contain"
            />
          }
          {imageArr[currentIndex]._id==null&&
          <img
          src={imageArr[currentIndex]}
          alt={imageArr[currentIndex]?.alt}
          className="max-w-full max-h-full object-contain"
          />
          }
          </div>
          <button
            className="absolute top-2 right-2 z-50 text-white rounded-full text-5xl"
            onClick={closeImageViewer}
          >
           <IoIosCloseCircle />

          </button>
        </div>
      )}
    </div>
  );
};

export default ImageViewer;
