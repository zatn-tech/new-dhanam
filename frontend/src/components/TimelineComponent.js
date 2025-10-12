import React from "react";
import handshake from '../assets/images/handshake.png'
import learn from '../assets/images/learn.png'
import certificate from '../assets/images/certificate.png'
import job from '../assets/images/work.png'
import notes from '../assets/images/notes.png'

const TimelineComponent = () => {
  return (
    <div className="w-full bg-white py-10 relative">
      {/* Horizontal Line */}
      <div className="absolute left-1/2 md:left-0 md:top-1/2 w-2 h-full  md:w-full md:h-[6px] bg-gradient-to-b md:bg-gradient-to-r from-primary to-white"></div>

      {/* Timeline Items */}
      <div className="flex flex-col md:flex-row items-center justify-between w-10/12 mx-auto relative">
        {/* First Item */}
        <div className="flex md:flex-col items-center text-center relative md:-mt-10">
            <div className="-ml-[20%] md:ml-0 md:mb-4">

          <p className="-mt-4 text-2xl font-bold text-primary">10,000+</p>
          <p className="text-sm text-black">Students Trained</p>
            </div>
          <div className="md:w-28 md:h-28 w-20 h-20 bg-primary flex items-center justify-center rounded-full">
            <img
              src={handshake}
              alt="Students Trained"
              className="md:w-16 w-10 h-10 md:h-16"
            />
          </div>
        </div>

        {/* Second Item */}
        <div className="flex md:flex-col items-center text-center relative mt-[10%]  md:mt-[5%]">
          <div className="md:w-28 md:h-28 w-20 h-20 ml-[30%] md:ml-0 bg-primary flex items-center justify-center rounded-full">
            <img
              src={notes}
              alt="Tech Guidance"
              className="md:w-16 w-10 h-10 md:h-16"
            />
          </div>
          <div className="-mr-[60%] flex-wrap md:mr-0">

          <p className="mt-4 text-2xl  font-bold text-primary">
            Guidance Across
          </p>
          <p className="text-sm text-black">Diverse Tech Fields</p>
          </div>
        </div>

        {/* Third Item */}
        <div className="flex md:flex-col  items-center text-center relative mt-[10%] md:-mt-10">
            <div className="-ml-[25%] md:ml-0 md:mb-4">

          <p className="-mt-4 text-2xl font-bold text-primary">1000+</p>
          <p className="text-sm text-black">Workshops & Webinars</p>
            </div>
          <div className="md:w-28 md:h-28 w-20 h-20 bg-primary flex items-center justify-center rounded-full">
            <img
              src={learn}
              alt="Workshops & Webinars"
              className="md:w-16 w-10 h-10 md:h-16"
            />
          </div>
        </div>

        {/* Fourth Item */}
        <div className="flex md:flex-col items-center text-center relative mt-[10%] md:mt-[5%]">
          <div className="md:w-28 md:h-28 w-20 h-20 ml-[30%] md:ml-0 bg-primary flex items-center justify-center rounded-full">
            <img
              src={certificate}
              alt="Placement Programs"
              className="md:w-16 w-10 h-10 md:h-16"
            />
          </div>
          <div className="-mr-[60%] md:mr-0">

          <p className="mt-4 text-2xl font-bold text-primary">
            Career-Driven
          </p>
          <p className="text-sm text-black">Placement Programs</p>
          </div>
        </div>

        {/* Fifth Item */}
        <div className="flex md:flex-col items-center text-center relative mt-[10%] md:-mt-10">
            <div className="-ml-[25%] md:ml-0 md:mb-4">
          <p className="-mt-4 text-2xl font-bold text-primary">500+</p>
          <p className="text-sm text-black">Internship Opportunities</p>
            </div>
          <div className="md:w-28 md:h-28 w-20 h-20 bg-primary flex items-center justify-center rounded-full">
            <img
              src={job}
              alt="Internship Opportunities"
              className="md:w-16 w-10 h-10 md:h-16"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineComponent;
