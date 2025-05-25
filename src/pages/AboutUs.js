import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Banner from '../components/Banner'
import { aboutusArr } from '../components/aboutus'
import AboutusBox from '../components/AboutusBox'
import i1 from '../assets/images/learn.png'
import i2 from '../assets/images/certificate.png'
import i3 from '../assets/images/notes.png'
import learnmore from '../assets/images/learnmore.svg'
import visit from '../assets/images/visit.svg'
import apply from '../assets/images/apply.svg'
import Heading from '../components/Heading'
import correspondent from '../assets/images/correspondent.jpg'
import Enquiry from '../components/Enquiry'
import { Bounce, Fade, Slide } from 'react-awesome-reveal'
import quote from '../assets/images/quote.png'
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  const sectionRef = useRef(null);
  const section2Ref = useRef(null)
  const location = useLocation();

  useEffect(()=>{
    AOS.init()
  })

  useEffect(() => {
    if (location.hash === "#target-section" && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (location.hash === "#curriculum" && section2Ref.current) {
      section2Ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  return (
    <section>
      <Enquiry />
      <div id="target-section"
        ref={sectionRef} className='md:flex mx-5 md:mx-32 my-16 justify-between'>
        <div className='md:w-[30%]'>
          <div className='font-bold text-3xl my-10 text-primary'> WHY CHOOSE DPMHSS?</div>
          <div className='text-justify '>
            Choosing DPMHSS means investing in an educational experience that goes beyond academics. Our primary mission is to shape a more ethical, responsible, and forward-thinking generation. With over two decades of experience in nurturing young minds, we are committed to not only providing a robust academic foundation but also cultivating values that will guide students throughout their lives.

            Our approach integrates research-based learning, a conductive learning environment, and the freedom for expression and creativity to ensure that every student is prepared for the challenges of tomorrow. We focus on the holistic development of our students, helping them grow into individuals who are not only academically successful but also socially responsible, innovative, and compassionate.

            At DPMHSS, we believe in empowering students to be leaders of tomorrow—leaders who understand the importance of ethical decision-making, who embrace diversity and inclusivity, and who have the confidence to make a positive impact in the world.


          </div>
          <div>
            <div className='text-3xl mt-16 mb-5 text-primary font-semibold underline w-full'>CAMPUS DOMAINS</div>
            <div className='text-center'>

              <div data-aos='slide-right' className='flex '><div className='text-4xl text-secondary drop-shadow-[2px_2px_black]'>C </div><div className='mt-3 mx-1'>REATIVE</div></div>
                <div data-aos='slide-right' className='flex '><div className='text-4xl text-secondary drop-shadow-[2px_2px_black]'>A</div> <div className='mt-3 mx-1'>FFABLE</div></div>
                <div data-aos='slide-right' className='flex '><div className='text-4xl text-secondary drop-shadow-[2px_2px_black]'>M </div><div className='mt-3 mx-1'>AGNIFY</div></div>
                <div data-aos='slide-right' className='flex '><div className='text-4xl text-secondary drop-shadow-[2px_2px_black]'>P </div><div className='mt-3 mx-1'>ROSPEROUS</div></div>
                <div data-aos='slide-right' className='flex '><div className='text-4xl text-secondary drop-shadow-[2px_2px_black]'>U </div><div className='mt-3 mx-1'>NIQUE</div></div>
                <div data-aos='slide-right' className='flex '><div className='text-4xl text-secondary drop-shadow-[2px_2px_black]'>S </div><div className='mt-3 mx-1'>ATISFIED</div></div>
              
            </div>
          </div>
          <div className='my-16 text-xl  text-white'>
            <img className='w-7 h-10 translate-y-3' src={quote}/>
          <div className='leading-relaxed bg-purple-500 text-justify px-5 py-2'>We will continuously develop many academic programmes of a high standard that will meet the employment needs as “World of Work” in the future.</div>
            
          </div>
          <div>
            <div className='text-3xl mt-16 mb-5 text-primary font-semibold underline w-full'>DPMHSS</div>
            <div className='text-center'>

              <div data-aos='slide-right' className='flex '><div className='text-4xl text-secondary drop-shadow-[2px_2px_black]'>D </div><div className='mt-3 mx-1'>ISCOVER</div></div>
                <div data-aos='slide-right' className='flex '><div className='text-4xl text-secondary drop-shadow-[2px_2px_black]'>P</div> <div className='mt-3 mx-1'>ECULIAR</div></div>
                <div data-aos='slide-right' className='flex '><div className='text-4xl text-secondary drop-shadow-[2px_2px_black]'>M </div><div className='mt-3 mx-1'>AJESTIC</div></div>
                <div data-aos='slide-right' className='flex '><div className='text-4xl text-secondary drop-shadow-[2px_2px_black]'>H </div><div className='mt-3 mx-1'>ARMONY</div></div>
                <div data-aos='slide-right' className='flex '><div className='text-4xl text-secondary drop-shadow-[2px_2px_black]'>S </div><div className='mt-3 mx-1'>ASSY</div></div>
                <div data-aos='slide-right' className='flex '><div className='text-4xl text-secondary drop-shadow-[2px_2px_black]'>S </div><div className='mt-3 mx-1'>ERENE</div></div>
              
            </div>
          </div>
        </div>
        <div className='md:w-[50%]'>
          {aboutusArr.map((aboutus, index) => (
            <AboutusBox topic={aboutus.topic} image={aboutus.image} content={aboutus.content} />
          ))}
        </div>
      </div>
      <div id='curriculum' ref={section2Ref} className='md:flex md:px-32 px-5 py-16 bg-gradient-to-bl bg-primary justify-between'>
        <div className='text-5xl md:w-[20%] my-10 md:my-0 text-secondary drop-shadow-[3px_3px_black] italic'>
          GROUPS AVAILABLE

        </div>

        <div className='md:w-[60%]'>
          <div className='text-justify '>
            <Fade direction='left'>
              <b className='text-xl md:text-3xl md:w-[20%] my-10 md:my-0 text-white drop-shadow-[2px_2px_black] italic'>Biology, Maths, Physics, Chemistry</b>
              <b className='text-xl md:text-3xl md:w-[20%] my-10 md:my-0 text-white drop-shadow-[2px_2px_black] italic'>Computer Science, Maths, Physics, Chemistry</b>
              <b className='text-xl md:text-3xl md:w-[20%] my-10 md:my-0 text-white drop-shadow-[2px_2px_black] italic'>Botany, Zoology, Physics, Chemistry.</b>
              <b className='text-xl md:text-3xl md:w-[20%] my-10 md:my-0 text-white drop-shadow-[2px_2px_black] italic'>Accountancy, Commerce, Economics, Computer Application</b>

            </Fade>
          </div>
          <div className='my-16'>

            <div className='grid grid-cols-3'>
              <Fade>

                <img className='w-16 mx-auto' src={i1} />
                <img className='w-16 mx-auto' src={i2} />
                <img className='w-16 mx-auto' src={i3} />
              </Fade>
            </div>
            <div className="relative grid grid-cols-3 my-5">
              <div className="absolute inset-x-0 top-1/2 border-t-2 border-yellow-400"></div>
              <div className="mx-auto text-yellow-400 text-5xl z-10">&gt;</div>
              <div className="mx-auto text-yellow-400 text-5xl z-10">&gt;</div>
              <div className="mx-auto text-yellow-400 text-5xl z-10">&gt;</div>
            </div>
            <div className='grid grid-cols-3 gap-10'>
              <Fade>

                <div className="text-white text-xl drop-shadow-[2px_2px_black] italic"><h1> <b  >Primary Level</b></h1><ul className="list-disc"><li>At the primary level, learning is fun, experimental, and activity-based.</li><li> We focus on nurturing thinking and analytical skills through creative activities that engage young learners.</li><li> By encouraging hands-on learning and problem-solving, we help students develop critical skills in an enjoyable and interactive environment, setting the foundation for future academic success.</li></ul></div>
                <div className="text-white text-xl drop-shadow-[2px_2px_black] italic"><h1> <b >Secondary Level</b></h1><ul className="list-disc"><li>At the Secondary level, We offer a rich curriculum with languages like Tamil, English, and Hindi, and subjects including Mathematics, Science, Social Science, and Physical and Health Education. </li><li>Students also learn Life Skills, Value Education, General Knowledge, and receive Spoken English classes to develop well-rounded skills for both academic and personal growth.</li></ul></div>
                <div className="text-white text-xl drop-shadow-[2px_2px_black] italic"><h1> <b >Higher Level</b></h1><ul className="list-disc"><li>At the higher secondary level, our school is proud to have highly experienced teachers who are dedicated to helping students achieve top marks in board exams. </li><li>With a focus on advanced teaching methods, personalized strategies, and modern resources, our educators ensure students are thoroughly prepared to excel in their final exams and secure a strong academic future.</li></ul></div>
              </Fade>
            </div>
          </div>

        </div>
      </div>
      <div className='my-16'>
        <div><Heading name={"MEET OUR CORRESPONDENT"} /></div>
        <div className='md:flex mx-5 md:mx-32 mt-16 justify-between'>

          <div className='md:w-[70%] my-auto text-justify'>
            <Slide>
              <div className="my-3">
            திரு. ப. கிருஷ்ணன் அவர்கள் 1964 ஆம் ஆண்டு சோளிங்கரில் திரு. பச்சையப்பன் மற்றும் திருமதி. தனம்மாள் ஆகியோருக்கு 8 ஆவது மகனாகப் பிறந்தார். 
              </div>
<div className="my-3">
மிகவும் வறுமையான குடும்பத்தில் பிறந்த இவர், தன் சூழ்நிலையை நன்கறிந்து, "கொடிது கொடிது வறுமை கொடிது அதனினும் கொடிது இளமையில் வறுமை" எனும் ஔவையாரின் வரிகளுக்கேற்ப வறுமையின் பிடியிலேயே வளர்ந்து உலகம் அறிந்து கல்வி கற்றார். 
</div>
<div className="my-3">

தன் தாய் மற்றும் தந்தை பட்ட துயரத்தை கண்டு மனம் உடைந்து வளர்ந்த இவர், ஒரு வைராக்கியத்தை மனதில் கொண்டார். 
அதாவது இவ்வளவு வறுமையிலும் தன் தேவைகளை பூர்த்தி செய்யும் தாயையும் தந்தையையும் பெருமைப்படுத்துவது என்பதே..
</div>
<div className="my-3">

இவரும் இவரது அண்ணன் திரு. ப. நரசிம்மன் அவர்களும் சேர்ந்து 
1978 ஆம் ஆண்டு தனம் வணிகவியல் பயிலகத்தை துவங்கினர்.
1985 ஆம் ஆண்டு தனம் வணிகவியல்  பயிலகத்தை வழிநடத்தி செல்ல முழு பொறுப்பேற்றார். 
இவர் இப்பயிலகத்தை பொறுப்பேற்கும் சமயம், பல ஏளனப் பேச்சுக்கு ஆளானார். 
அனைத்தையும் உடைக்கும் விதமாக தட்டச்சில் மாநிலத்தில் முதல் இடத்தை இவர் மாணவி திருமதி. கலா அவர்கள் வெற்றி பெற்றார்.
</div>
<div className="my-3">

கல்விப் பணியில் தன்னை மேலும் சிறப்பிக்கும் விதமாக, 2002 ஆம் ஆண்டு தனம் நர்சரி மற்றும் பிரைமரி பள்ளியை நிறுவினார். 
சுமார் 23 ஆண்டுகளாக இவர் துவங்கிய பள்ளி வெற்றிகரமாக இயங்கிக் கொண்டிருக்கிறது. 
</div>
<div className="my-3">

பின்னர் 2007 ஆம் ஆண்டு அடுத்த கட்டமாக, "தனம் பச்சையப்பன் மெட்ரிக் மேல்நிலைப் பள்ளியை" துவங்கினார். இப்பள்ளிக்கு தன் தாய் பெயரான "தனம்" மற்றும் தந்தை பெயரான "பச்சையப்பன்" என பள்ளிக்கு பெயர் சூட்டினார். 
2010 ஆம் ஆண்டு MATRIC SYLLABUS-ல் 10 ஆம் வகுப்பு பொதுத்தேர்வில் அரக்கோணத்தில் 461/500 பெற்றது பெருமைக்குரியது.
</div>
<div className="my-3">

பள்ளி துவங்கப்பட்டு இதுவரை தொடர்ந்து 100% தேர்ச்சி பெற்றுள்ளது. கடந்த 4 ஆண்டுகளாக 12 ஆம் வகுப்பில் அரசு பொதுத்தேர்வில் மாநில அளவில் 2 ஆம் இடமும் மாவட்ட அளவில் முதல் இடமும், வரலாற்று சாதனையாக தமிழ் பாடத்தில் 100/100 பெற்று பெருமை சேர்த்துக் கொண்டிருப்பது, இவர் லட்சியப் பணியில் சேரும்.
</div>
            </Slide>
          </div>
          <div className="my-auto">
            <Slide direction='down'>

              <div className='flex justify-center items-center'>
                <img className=' w-72 h-96 ' src={correspondent} alt="Correspondent" />
              </div>
            </Slide>
            <Slide direction='up'>

              <div className="bg-primary text-white py-2 px-4 relative skew-x-12">
              Mr. P. Krishnan M.A.
              </div>
            </Slide>
          </div>


        </div>
      </div>
      <div className="md:flex justify-around items-center md:space-x-10 my-32 md:mx-52 shadow-2xl">
        <div className="relative   w-full text-center group p-10 ">
          <div className="text-4xl mb-4 opacity-100 group-hover:-translate-y-5  transition-all duration-300"><Bounce><img className='mx-auto' src={learnmore} /></Bounce></div>
          <div className="text-lg opacity-100 group-hover:opacity-0 transition-opacity duration-300">Learn More</div>
          <div className="text-sm absolute inset-0 transform translate-y-[100%] opacity-0 group-hover:opacity-100 group-hover:translate-y-[60%] transition-all duration-500">
            <div className=''>We are looking forward to connect with you!</div>
            {/* <button className='border-[1px] border-black px-2 py-1 my-2'>LEARN MORE</button> */}
          </div>
        </div>

        <div className="relative w-full text-center group p-10 bg-purple-700 text-white">
          <div className="text-4xl mb-4 opacity-100 group-hover:-translate-y-5  transition-all duration-300"><Bounce><img className='mx-auto ' src={visit} /></Bounce></div>
          <div className="text-lg opacity-100 group-hover:opacity-0 transition-opacity duration-300">Visit</div>
          <div className="text-sm absolute inset-0 transform translate-y-[100%] opacity-0 group-hover:opacity-100 group-hover:translate-y-[60%] transition-all duration-500">
            <div className=''> We are looking for your  visit</div>
            {/* <button className='border-[1px] border-white px-2 py-1 my-2'>SCHEDULE</button> */}
          </div>
        </div>

        <div className="relative   w-full text-center group p-10 ">
          <div className="text-4xl mb-4 opacity-100 group-hover:-translate-y-5  transition-all duration-300"><Bounce><img className='mx-auto' src={apply} /></Bounce></div>
          <div className="text-lg opacity-100 group-hover:opacity-0 transition-opacity duration-300">Apply</div>
          <div className="text-sm absolute inset-0 transform translate-y-[100%] opacity-0 group-hover:opacity-100 group-hover:translate-y-[60%] transition-all duration-500">
            <div className=''> We are expecting your call.</div>
            {/* <button className='border-[1px] border-black px-2 py-1 my-2'>APPLY</button> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs