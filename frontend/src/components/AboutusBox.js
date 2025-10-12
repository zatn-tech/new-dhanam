import React from 'react'

const AboutusBox = ({ image, topic, content }) => {
  return (
    <div className='w-full max-w-md md:max-w-none bg-white border border-primary/10 rounded-xl shadow-large mx-auto p-6 md:p-8 relative z-10'>
      <div className='text-2xl md:text-3xl font-display font-semibold text-primary text-center mb-4'>{topic}</div>
      <div className='text-primary/80 text-sm md:text-base leading-relaxed mb-6 px-2 md:px-4 text-justify'>{content}</div>
      <img className='w-full h-40 md:h-48 object-cover rounded-lg' src={image} alt={topic} />
    </div>
  )
}

export default AboutusBox