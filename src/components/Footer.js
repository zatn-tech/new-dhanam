import React, { useEffect } from 'react'
import { CiLocationArrow1, CiPhone } from "react-icons/ci";
import { SlSocialInstagram, SlSocialLinkedin, SlSocialTwitter, SlSocialFacebook,SlSocialYoutube  } from "react-icons/sl";
import { RiTwitterXLine } from "react-icons/ri";
import { CiMail } from "react-icons/ci";
import { Link } from 'react-router-dom';
const Footer = () => {

  return (
    <div className='mb-16 md:mb-0'>

      <div className="md:flex justify-around  md:h-full  bg-primary text-white p-5 font-[content]  py-10">
        <div className='mt-5 mb-5 md:my-0 '>
          <h1 className="mx-5 md:mx-0 text-secondary font-serif w-fit text-4xl md:text-2xl mb-5 md:mb-5">REACH US</h1>
          <div className='px-5 md:px-0 md:mpx-0'>
            <div className="flex mb-2">
              <div className="mr-5 md:mr-2">
                <CiLocationArrow1 className='' />
              </div>
              <div className='my-auto'>
                <a className="hover:text-secondary   duration-500" href='https://maps.app.goo.gl/LgAqV9J1YLoqhuuE6' target='_blank'>Dhanam Pachaiyappan MHSS</a>
              </div>
            </div>
            <div className="flex mb-2">
              <div className="mr-5 md:mr-2">
                <CiPhone className='' />
              </div>
              <div className='my-auto'>
                <a className="hover:text-secondary   duration-500" href='tel:9042316003' target='_blank'>9171070909</a>
              </div>
            </div>
            <div className="flex mb-2">
              <div className="mr-5 md:mr-2">
                <CiMail className='' />
              </div>
              <div className='my-auto'>
                <a className="hover:text-secondary   duration-500" href='mailto:principal@dpmhss.in' target='_blank'>dhanampachaiyappan12@gmail.com </a>
              </div>
            </div>
          </div>
        </div>
        <div className='my-16 md:my-0 md:px-0'>
          <div className="text-secondary font-serif text-4xl mx-5 md:text-2xl mb-5 md:mb-5" >QUICK LINKS</div>
          <div className="px-5  ">
            <div className="">
              <div className="mb-2 hover:text-secondary duration-500"><Link  to='/#vision'>Vision and Mission</Link></div>
              <div className="mb-2 hover:text-secondary duration-500"><Link  to='/#section3'>Facilities</Link></div>
              <div className="mb-2 hover:text-secondary duration-500"><Link  to='about/#curriculum'>Curriculum</Link></div>
              <div className="mb-2 hover:text-secondary duration-500"><Link  to='/achievements/#target-section'>Achievements</Link></div>
              <div className="mb-2 hover:text-secondary duration-500"><Link  to='/gallery/#target-section'>Gallery</Link></div>
              <div className="mb-2 hover:text-secondary duration-500"><Link  to='/contact/#target-section'>Contact us</Link></div>
            </div>
          </div>
        </div>
        <div className='my-16 md:my-0'>
          <h1 className="mx-5 md:mx-0 text-secondary  font-serif text-4xl md:text-2xl  mb-5 md:mb-5" >SCHOOL WORKING HOURS</h1>
          <div className='px-5 md:px-0 '>


            <div className="mb-2 ">
              Monday to Friday: 8.30 AM - 4.30 PM
            </div>
            <div className="mb-2 ">

              Saturday: 9 AM - 3.30 PM
            </div>
            <div className="mb-2 ">

              Sunday: Closed
            </div>
          </div>

          <div className='my-16 md:my-0'>
            <h1 className="md:mx-0 text-secondary   font-serif text-3xl mx-5 md:w-36 md:text-2xl my-5 mb-5 md:mb-0" >FOLLOW US </h1>
            <div className="flex px-5 md:pt-5 md:px-0">
              <div className="mr-10 md:mr-5 ">
                <a href='https://www.instagram.com/dhanamschool/' target='_blank' >

                  <SlSocialInstagram className="text-3xl md:text-2xl hover:text-secondary duration-500" />
                </a>
              </div>
              <div className="mr-10 md:mr-5">

                <a href='https://www.facebook.com/dhanampachaiyappan.dhanam' target='_blank' >

                  <SlSocialFacebook className="text-3xl md:text-2xl hover:text-secondary duration-500" />
                </a>
              </div>
              {/* <div className="mr-10 md:mr-5">

                <a href='#' target='_blank'>
                  <SlSocialYoutube  className="text-3xl md:text-2xl hover:text-secondary duration-500" />
                </a>
              </div>
              <div className="mr-10 md:mr-5">

                <a href='# ' target='_blank'>

                  <RiTwitterXLine className=" text-3xl md:text-2xl hover:text-secondary duration-500" />
                </a>
              </div> */}
            </div>

          </div>
        </div>
      </div>
      <div className="bg-primary border-t-2 border-secondary   text-white font-serif  p-1 px-5 py-10 md:py-0 md:flex justify-around">
        <div className=" leading-normal my-auto">

          Copyrights © 2024 - All Rights Reserved by Dhanam Pachaiyappan Schools.

        </div>
        <div>
          <div className=' flex md:  md:my-0'>
            <div className='my-auto'>

              Designed and Developed By :
            </div>
            <div className='flex md:ml-5 my-5 md:my-0 mx-auto cursor-pointer'>
              <a href='https://zatn.in' target='_blank' className='flex'>

                <span className='text-3xl md:text-3xl'>𝒁</span>
                <p className='my-auto'>atn.</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer