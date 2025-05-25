import React from 'react'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import thumbsup from '../assets/images/thumbsup.png'
import { useNavigate } from 'react-router-dom';

const Enquiry = () => {
  const redirect = useNavigate()

  const increaseInterest=async()=>{
    try{
      const res = await fetch('https://api.dhanamschool.com/interested/',{
        method:'POST',
        headers: {
          Accept: 'application/json',
          "Access-Control-Allow-Origin": "*"
        },
      })
      if (res.ok) {
         toast.success('Are you interested!! Fill the contact form and we\'ll react out to you', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
          onClose:()=>redirect('/contact')
          });
          
      } else {
        toast.error("Kindly try after sometime");
      }
    }catch(err)
    {
      toast.error("Kindly try after sometime");
    }
  }

  return (
    <div>

    <div className=" text-white top-[50%] md:top-[80%] z-10  right-0 duration-500 font-[content] translate-x-20 md:translate-x-20 hover:-translate-x-0 fixed ">
        <div className="w-fit bg-primary p-3  md:text-lg pr-5 " onClick={()=>increaseInterest()}>
            <div className='flex'><button>I am Interested </button><img className='w-8 md:w-16 ml-5' src={thumbsup}/></div>
        </div>
    </div>
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition={Bounce}
/>

    </div>
  )
}

export default Enquiry