import React, { useState, useEffect, useRef } from 'react'
import banner from '../assets/images/banner.jpg'
import { Link } from 'react-router-dom';
import mail from '../assets/images/mail.svg'
import contact from '../assets/images/contact.svg'
import ImageSlider from './ImageSlider';


const Slider = ({ images,title,menuBackgroundImage, interval }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showMenu,setShowMenu] = useState(false)
  const [isSticky, setIsSticky] = useState(false); // Track sticky state

  var lastScrollY = 0; // Use ref to track the last scroll position

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      

      // Log the current scroll position for debugging
      console.log(currentScrollY);

      // Define a buffer range (e.g., between 490 and 510)
      if (currentScrollY > 500) {
        setIsSticky(true); // When scroll position goes above 500
      }
      if(currentScrollY==0)
      {
        setIsSticky(false)
      }

      // Optionally, you can fine-tune the buffer zone to handle small fluctuations around the threshold
    };

    window.addEventListener('scroll', handleScroll); // Add scroll event listener

    // Cleanup function to remove event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array ensures this effect runs only once on mount
// Empty dependency array means this effect runs once after the initial rende

  const menu = [
    {
      title:"Home",
      link:"/",
    },
    {
      title:"About Us",
      link:"about",
    },
    {
      title:"Branches",
      link:"branch",
    },
    {
      title:"Achievements",
      link:"achievements",
    },
    {
      title:"Gallery",
      link:"gallery",
    },
    {
      title:"Contact Us",
      link:"contact",
    },
  ]
  

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);
    return () => clearInterval(intervalId);
  }, [images, interval]);


  return (
    <div className='relative '>

    <div className=" h-fit w-full overflow-hidden  tracking-wider">
      <div id='schoolname'  className={`z-50 w-full ${isSticky ? 'fixed top-0 bg-white' : ''}`}>

          <div className=' text-2xl py-2 flex md:hidden bg-primary text-secondary justify-around '>
            <div>Dream!</div>
            <div>Believe!!</div>
            <div>Achieve!!!</div>
            </div>
           <div className='hidden px-16 text-primary font-semibold   md:flex  bg-white items-center justify-around '>
          <div className='text-2xl py-2   justify-around '>
            <div>Dream!</div>
            <div>Believe!!</div>
            <div>Achieve!!!</div>
            </div>
           
       <img className='h-32 w-[600px]' src={banner}/>
            <div className='text-center -mr-32 my-auto'>
              <div className='flex my-2'><img className='w-8 bg-black p-1 mx-2' src={contact}/>+91 9171070909</div>
              <div className='flex'><img className='w-8 bg-black p-1 mx-2' src={mail}/>dhanampachaiyappan12@gmail.com</div>
            </div>
        
    </div>
      </div>
    <div id='link' className='hidden  md:flex justify-around py-5 bg-secondary text-primary font-bold uppercase'>
    <Link to=''><div className=' relative before:content-[""] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-black
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300  '>Home</div></Link>
              <Link to='about/#target-section'><div className=' relative before:content-[""] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-black
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300  '>About Us</div></Link>
              <Link to='branch/#target-section'><div className=' relative before:content-[""] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-black
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300  '>Branches</div></Link>
              <Link to='achievements/#target-section'><div className=' relative before:content-[""] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-black
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300  '>Achievements</div></Link>
              <Link to='gallery/#target-section'><div className=' relative before:content-[""] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-black
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300  '>Gallery</div></Link>
              <Link to='contact/#target-section'><div className='relative before:content-[""] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-black
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 '>Contact Us</div></Link>
    </div>
        <div className={`${isSticky?'fixed top-10 z-50':''} md:hidden`}>
          <img src={banner}/>
          </div>
        </div>
          <div className='h-fit w-full'>
          <ImageSlider images={images} />
          </div>

              </div>
  );
};

export default Slider;
