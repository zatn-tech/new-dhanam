import React from 'react'

const Image = ({image}) => {
    console.log(image)
  return (
    <div className='border-2 border-black w-fit cursor-pointer'>
        <img className='w-screen h-screen' src={image}/>
    </div>
  )
}

export default Image