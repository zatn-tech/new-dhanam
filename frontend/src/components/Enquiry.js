import React from 'react'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Enquiry = () => {
  const redirect = useNavigate()

  const increaseInterest = async () => {
    try {
      const res = await fetch('https://dhanamschool.com/api/interested/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          "Access-Control-Allow-Origin": "*"
        },
      })
      if (res.ok) {
        toast.success('Thank you for your interest! Fill the contact form and we\'ll reach out to you.', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          onClose: () => redirect('/contact')
        });
      } else {
        toast.error("Please try again later");
      }
    } catch (err) {
      toast.error("Please try again later");
    }
  }

  return (
    <>
      {/* Floating Interest Button */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 group hidden md:block">
        <button
          onClick={increaseInterest}
          className="bg-gradient-to-r from-secondary to-primary text-white px-6 py-4 rounded-l-2xl shadow-large hover:shadow-xl transition-all duration-300 transform translate-x-16 group-hover:translate-x-0 flex items-center space-x-3"
        >
          <div className="flex items-center space-x-3">
            <span className="text-2xl">👍</span>
            <div className="text-left">
              <div className="font-semibold text-sm">Interested?</div>
              <div className="text-xs opacity-90">Apply Now</div>
            </div>
          </div>
        </button>
      </div>

      {/* Mobile Floating Interest Button */}
      <div className="fixed bottom-20 right-4 z-50 md:hidden">
        <button
          onClick={increaseInterest}
          className="bg-gradient-to-r from-secondary to-primary text-white p-4 rounded-full shadow-large hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        >
          <span className="text-2xl">👍</span>
        </button>
      </div>

      {/* Toast Container */}
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
        theme="light"
        transition={Bounce}
      />
    </>
  )
}

export default Enquiry