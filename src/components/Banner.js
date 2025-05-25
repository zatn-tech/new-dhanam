import React from 'react'
import i1 from '../assets/images/class.jpg';

const Banner = ({topic}) => {
  return (
    <div className="relative h-96 flex justify-center items-center">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url(${i1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(8px)',
      }}
    ></div>
    <div className="relative text-5xl font-bold text-white z-10">
      {topic}
    </div>
  </div>
  )
}

export default Banner