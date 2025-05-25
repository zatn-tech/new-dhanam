import React from 'react'
import { Link } from 'react-router-dom'
import display1 from '../assets/images/display1.jpg'
import display3 from '../assets/images/display3.jpg'
import display7 from '../assets/images/display7.jpg'
import display10 from '../assets/images/display10.jpeg'
import display11 from '../assets/images/display11.jpeg'
import display12 from '../assets/images/display12.jpeg'
import display13 from '../assets/images/display13.jpeg'
import branchicon from '../assets/images/branchicon.png'
import Slider from './Slider'

const Navbar = () => {
  const imageSlider = [display1,display3,display7,display10,display11,display13,display12]
  return (
    <section>

    {/* <div className='flex font-serif bg-opacity-10'>
        <div className='w-[10%]'>
            <img src={logo}/>
        </div>
        <div className='my-auto font-bold'>
          <div className='text-5xl text-primary  text-center'>
            DHANAM PACHAIYAPPAN MATRIC HIGHER SECONDARY SCHOOL
          </div>
          <div className='text-3xl text-center text-[#ed631e] my-3'>
            ASHOK NAGAR, ARAKKONAM - 631 001.
          </div>
        </div>
    </div> */}
    <Slider images={imageSlider} interval={2000}/>
    <div className='md:hidden '>
    <div class="fixed bottom-0 z-20 left-0 w-full bg-white shadow-md">
  <div class="flex justify-around items-center py-2">

    <Link to='/' class="flex flex-col py-5 items-center text-gray-500 hover:text-green-600">
    <svg viewBox="0 0 16 16" class="h-6 w-6 mb-1" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z" fill="#000000"></path> </g></svg>
      {/* <span class="text-sm">Home</span> */}
    </Link>
    <Link to='about/#target-section' class="flex flex-col py-5 items-center text-gray-500 hover:text-green-600">
    <svg fill="#000000" class="h-6 w-6 mb-1" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 502.643 502.643" >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier"> <g> <g> 
      <path d="M251.256,237.591c37.166,0,67.042-30.048,67.042-66.977c0.043-37.037-29.876-66.999-67.042-66.999 c-36.908,0-66.869,29.962-66.869,66.999C184.387,207.587,214.349,237.591,251.256,237.591z"></path> 
      <path d="M305.032,248.506H197.653c-19.198,0-34.923,17.602-34.923,39.194v107.854c0,1.186,0.604,2.243,0.669,3.473h175.823 c0.129-1.229,0.626-2.286,0.626-3.473V287.7C339.912,266.108,324.187,248.506,305.032,248.506z"></path> 
      <path d="M431.588,269.559c29.832,0,53.754-24.008,53.754-53.668s-23.922-53.711-53.754-53.711 c-29.617,0-53.582,24.051-53.582,53.711C377.942,245.53,401.972,269.559,431.588,269.559z"></path> 
      <path d="M474.708,278.317h-86.046c-15.445,0-28.064,14.107-28.064,31.472v86.413c0,0.928,0.453,1.812,0.518,2.826h141.03 c0.065-1.014,0.496-1.898,0.496-2.826v-86.413C502.707,292.424,490.11,278.317,474.708,278.317z"></path>
       <path d="M71.011,269.559c29.789,0,53.733-24.008,53.733-53.668S100.8,162.18,71.011,162.18c-29.638,0-53.603,24.051-53.603,53.711 S41.373,269.559,71.011,269.559L71.011,269.559z"></path>
        <path d="M114.109,278.317H27.977C12.576,278.317,0,292.424,0,309.789v86.413c0,0.928,0.453,1.812,0.539,2.826h141.03 c0.065-1.014,0.475-1.898,0.475-2.826v-86.413C142.087,292.424,129.489,278.317,114.109,278.317z"></path>
         </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g> </g>
         </svg>
      {/* <span class="text-sm">About</span> */}
    </Link>
    
    <Link to='achievements/#target-section' class="flex flex-col py-5 items-center text-gray-500 hover:text-green-600">
    <svg class="h-6 w-6 mb-1" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"  fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">  <g> <path class="st0" d="M306.842,315.552l-2.851,1.522c-15.427,8.218-31.586,12.384-48.028,12.384 c-16.392,0-32.525-4.166-47.952-12.384l-2.851-1.522l16.66,99.146h68.364L306.842,315.552z"></path> <polygon class="st0" points="195.816,434.616 175.874,487.582 336.128,487.582 316.186,434.616 "></polygon> <path class="st0" d="M421.452,43.222c0.21-5.695,0.35-11.425,0.35-17.213v-1.592H90.2v1.592c0,5.788,0.14,11.518,0.35,17.213H0 v23.401c0,102.768,70.767,186.378,157.751,186.378l0.31-0.012c28.552,35.497,62.407,54.258,97.941,54.258 c35.742,0,69.781-18.979,98.249-54.247c86.984,0,157.749-83.61,157.749-186.378V43.222H421.452z M283.892,157.605l17.238,53.051 l-45.128-32.787l-45.128,32.787l17.236-53.051l-45.128-32.788h55.782l17.238-53.055l17.238,53.055h55.78L283.892,157.605z M48.354,90.02h46.204c5.485,39.992,16.262,77.978,31.25,110.21C85.48,184.962,55.394,142.275,48.354,90.02z M386.194,200.229 c14.988-32.224,25.763-70.214,31.25-110.21h46.204C456.608,142.275,426.522,184.962,386.194,200.229z"></path> </g> </g></svg>
      {/* <span class="text-sm">Achievements</span> */}
    </Link>
    <Link to='branch/#target-section' class="flex flex-col py-5 items-center text-gray-500 hover:text-green-600">
   <img className='h-6 w-6 mb-1' src={branchicon}/>
      {/* <span class="text-sm">Branches</span> */}
    </Link>
    
    <Link to='gallery/#target-section' class="flex flex-col py-5 items-center text-gray-500 hover:text-green-600">
    <svg viewBox="0 0 24 24" class="h-6 w-6 mb-1" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447ZM16 10C17.1046 10 18 9.10457 18 8C18 6.89543 17.1046 6 16 6C14.8954 6 14 6.89543 14 8C14 9.10457 14.8954 10 16 10ZM6.32092 13.1038C6.94501 12.5241 7.91991 12.5566 8.50397 13.1766L11.1515 15.9869C11.9509 16.8356 13.2596 16.9499 14.1941 16.2527C14.8073 15.7953 15.661 15.8473 16.2141 16.3757L18.4819 18.5423C18.7814 18.8284 19.2562 18.8176 19.5423 18.5181C19.8284 18.2186 19.8176 17.7438 19.5181 17.4577L17.2503 15.2911C16.1679 14.257 14.4971 14.1553 13.2972 15.0504C12.9735 15.2919 12.5202 15.2523 12.2433 14.9584L9.59579 12.1481C8.44651 10.9281 6.52816 10.8641 5.3001 12.0047L4.4896 12.7575C4.1861 13.0394 4.16858 13.5139 4.45047 13.8174C4.73236 14.1209 5.20691 14.1385 5.51041 13.8566L6.32092 13.1038Z" fill="#1C274C"></path> </g></svg>
      {/* <span class="text-sm">Gallery</span> */}
    </Link>

    <Link to='contact/#target-section' class="flex flex-col py-5 items-center text-gray-500 hover:text-green-600">
    <svg fill="#000000"  class="h-6 w-6 mb-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M4,21a1,1,0,0,0,1,1H19a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H5A1,1,0,0,0,4,3ZM12,7.5a2,2,0,1,1-2,2A2,2,0,0,1,12,7.5ZM8.211,16.215a4,4,0,0,1,7.578,0A.993.993,0,0,1,14.83,17.5H9.18A1,1,0,0,1,8.211,16.215Z"></path></g></svg>
      {/* <span class="text-sm">Contact Us</span> */}
    </Link>
  </div>
</div>

    </div>
    </section>
  )
}

export default Navbar