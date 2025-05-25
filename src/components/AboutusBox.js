import React from 'react'

const AboutusBox = ({image,topic,content}) => {
  return (
    <div className='md:w-[90%] bg-white drop-shadow-2xl rounded-lg mx-auto sticky -top-96 -z-20 py-10 '>
            <div className='text-4xl font-bold text-center text-primary my-5 md:px-16'>{topic}</div>
            <div className='text-justify px-16 my-10 '>{content}</div>
            <img className='' src={image} />
          </div>
  )
}

export default AboutusBox