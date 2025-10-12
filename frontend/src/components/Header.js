import React from 'react';

const Header = ({ logo }) => {
  return (
    <div className='hidden md:flex font-serif justify-center bg-opacity-50 backdrop-blur-xl bg-white w-full'>
      <div className='mx-auto md:mx-0 w-32 md:w-[10%]'>
        <img src={logo} alt="School Logo" />
      </div>
      <div className='my-auto font-bold'>
        <div className='text-4xl text-primary text-center'>
          DHANAM PACHAIYAPPAN MATRIC HIGHER SECONDARY SCHOOL
        </div>
        <div className='text-2xl text-center text-secondary my-3'>
          ASHOK NAGAR, ARAKKONAM - 631 001.
        </div>
      </div>
    </div>
  );
};

export default Header;