import React from 'react'

const Heading = ({name}) => {
  return (
    <div className='w-full'>
    <div className='text-center text-3xl sm:text-5xl italic uppercase drop-shadow-[3px_3px_black] text-secondary font-bold tracking-wide whitespace-normal max-w-full'>{name}</div>
    <div className='w-32 mt-3 relative border-b-2 mx-auto'></div>
</div>

  )
}

export default Heading