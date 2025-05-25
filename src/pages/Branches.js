import React,{useState,useEffect,useRef} from 'react'
import { useLocation } from 'react-router-dom';
import { branchesData } from '../components/branchData'
import BranchesContainer from '../components/BranchesContainer'
import Heading from '../components/Heading'
import Enquiry from '../components/Enquiry'

const Branches = () => {
    const sectionRef = useRef(null);
    const location = useLocation();
  
    useEffect(() => {
      if (location.hash === "#target-section" && sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, [location]);
  return (
    <div className=' md:my-32 mx-5 md:mx-0'>

      <Enquiry/>
        <div id="target-section"
        ref={sectionRef} className='my-10 md:my-16'>
        <Heading name={"our branches"}/>
        </div>
       <BranchesContainer branches={branchesData} />
    </div>
  )
}

export default Branches