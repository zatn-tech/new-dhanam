import React, { useState,useEffect,useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import contact from '../assets/images/contact.svg';
import mail from '../assets/images/mail.svg';
import address from '../assets/images/address.svg';
import Heading from '../components/Heading';
import Enquiry from '../components/Enquiry';
import Career from './Career';

const ContactUs = () => {
    const sectionRef = useRef(null);
    const location = useLocation();
  
    useEffect(() => {
      if (location.hash === "#target-section" && sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, [location]);
  // States to hold form input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [enqLocation,setEnqLocation] = useState('');
  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(false); // Loading state for button

  // Function to handle form submission
  const sendContactReq = async () => {
    if (!name || !email || !mobile || !message) {
      toast.error('Fill all the fields', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      return;
    }

    setLoading(true); // Show loading indicator

    const contactData = {
      name,
      email,
      mobile,
      enqLocation,
      message,
    };

    try {
      const res = await fetch('https://api.dhanamschool.com/contact/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(contactData),
      });

      if (res.ok) {
        toast.success('Thank you for contacting us! We will get back to you soon.', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
        // Clear the form after submission
        setName('');
        setEmail('');
        setMobile('');
        setMessage('');
        setEnqLocation('');
      } else {
        toast.error('Failed to send contact request. Please try again.', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to send contact request. Please try again.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } finally {
      setLoading(false); // Hide loading indicator
    }
  };

  return (
    <section>
      <Enquiry/>
      <div id="target-section"
        ref={sectionRef} className="md:flex md:mx-32 mx-5 my-16 md:my-32 ">
        <div className="md:w-[50%] ">
          <div className="mb-16">
            <Heading name={'Address'} />
          </div>
          <div className="">
            <div className="flex my-7 ">
              <div className="w-16 md:w-20 h-fit my-auto p-2 md:p-5 border-2 border-primary rounded-2xl bg-primary">
                <img className="" src={contact} />
              </div>
              <div className="w-[50%] my-auto mx-5 text-sm md:text-lg"><div className='w-64'>+91 9171070909</div> </div>
            </div>
            <div className="flex my-7">
              <div className="w-16 md:w-20 h-fit my-auto p-2 md:p-5 border-2 border-primary rounded-2xl bg-primary">
                <img className="" src={mail} />
              </div>
              <div className="w-[50%]  my-auto mx-5 text-sm md:text-lg">
               <div className=''>dhanampachaiyappan12@gmail.com - Main branch</div>  
               <div className=''>dhanamnursery24@gmail.com - Dhanam Nursery </div>
               <div className=''> senthilkumarannursery24@gmail.com - Senthil Kumaran </div>
              </div>
            </div>
            <div className="flex my-7 ">
              <div className="w-16 md:w-20 h-fit my-auto p-2 md:p-5 border-2 border-primary rounded-2xl bg-primary">
                <img className="" src={address} />
              </div>
              <div className="w-[50%] my-auto mx-5 text-sm md:text-lg">
                <div className=''>Dhanam Pachaiyappan Matric Hr Sec School, Ashok Nagar, Arakkonam, Tamil Nadu 631001</div>
              </div>
            </div>
          </div>
        </div>

        <div className="my-32 md:my-0 md:w-[50%]">
          <div className="mb-16">
            <Heading name={'Contact Form'} />
          </div>
          <div className="md:flex ">
            <div className="my-5 md:my-0 md:mr-16">
              <label>Name</label>
              <br />
              <input
                type="text"
                className="h-7 w-full md:w-64 rounded-lg bg-gray"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label>E-Mail</label>
              <br />
              <input
                type="email"
                className="h-7 w-full md:w-64 rounded-lg bg-gray"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="my-6">
            <div>
              <label>Mobile No</label>
              <br />
              <input
                type="text"
                className="h-7 w-full rounded-lg bg-gray"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
          </div>
          <div className="my-6">
            <div>
              <label>Location</label>
              <br />
              <input
                type="text"
                className="h-7 w-full rounded-lg bg-gray"
                value={enqLocation}
                onChange={(e) => setEnqLocation(e.target.value)}
              />
            </div>
          </div>
          <div className="my-6">
            <div>
              <label>Message</label>
              <br />
              <textarea
                className="h-32 w-full rounded-lg bg-gray"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>
          <div className="flex">
            <button
              className="px-10 py-2 mx-auto bg-button-blue text-white"
              onClick={sendContactReq}
              disabled={loading}
            >
              {loading ? 'Sending...' : 'SEND'}
            </button>
          </div>
        </div>
      </div>
      <div className="my-16 mx-5 md:mx-32">
        <iframe
          className="w-full h-96"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.153220628297!2d79.64836229678959!3d13.089474200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52bdd44c42e867%3A0x12d9ac3663e7d218!2s(DPMHSS)!5e0!3m2!1sen!2sin!4v1732742308559!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Career/>
    </section>
  );
};

export default ContactUs;
