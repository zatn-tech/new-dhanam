import React, { useEffect, useState,useRef } from 'react'
import { useLocation } from 'react-router-dom'
import Heading from '../components/Heading'
import ImageViewer from '../components/ImageViewer'
import { facilitiesHome } from '../components/facilitiesHome'
import SliderComponent from '../components/SliderComponent'
import { Link } from 'react-router-dom'
import Enquiry from '../components/Enquiry'
import about from '../assets/images/branch1.jpg'
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import AOS from "aos";
import "aos/dist/aos.css";
import gallery1 from '../assets/images/gallery.jpeg'

const Home = () => {
    const sectionRef = useRef(null);
    const section2Ref = useRef(null)
    const location = useLocation();
    useEffect(() => {
      if (location.hash === "#vision" && section2Ref.current) {
        section2Ref.current.scrollIntoView({ behavior: "smooth" });
      }
      if (location.hash === "#section3" && sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: "smooth" });
      }

    }, [location]);

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);


  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadSlim(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);

  const visionArr=[
    {
      topic:'Our Vision',
      content:['To recognize and achieve their own strength by providing them support and opportunities to build their career goals.'],
      style_rounded:"rounded-br-2xl",
      aos:"fade-down",
    },
    {
      topic:'Our Mission',
      content:["Inspire our children with passion to be inquire and innovate in the way of contribution","	To provide a  unique schooling experience in a caring environment."],
      style_rounded:"rounded-bl-2xl",
      aos:"fade-down",
    },
    {
      topic:'Our Goal',
      content:['Preparing students for success in a changing world.','The secret of getting ahead starts here by breaking down larger task with smaller steps.'],
      style_rounded:"rounded-tr-2xl",
      aos:"fade-up",
    },
    {
      topic:'Our Motto',
      content:['Learn Today, Lead Tomorrow.'],
      style_rounded:"rounded-tl-2xl",
      aos:"fade-up",
    },
  ]

  var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

  const [selectedIndex,setSelectedIndex] = useState(0)
  const [topic,setTopic]  =useState(visionArr[selectedIndex].topic)
  const [content,setContent] = useState(visionArr[selectedIndex].content)

  const changeIndex=(index)=>{
    setSelectedIndex(index)
    setTopic(visionArr[index].topic)
    setContent(visionArr[index].content)
  }

  const [achievements,setAchievements] = useState([])
  const [gallery,setGallery] = useState([gallery1])

  const getItemsForHome = async() =>{
    try{

      const res = await fetch("https://api.dhanamschool.com/home/",{
        method:'GET',
        headers:{
          'Content-type':'application/json',
          "Access-Control-Allow-Origin": "*"
        },
      })
      if(res.ok)
        {
          const data = await res.json()
          setAchievements(data.achievements)
          setGallery((prevGallery) => [...prevGallery, ...data.gallery]);
        }
        else
        {
          console.log("error fetching home details")
        }
        console.log(gallery)
      }
      catch(err)
      {
        console.log({"error":err})
      }
  }

  useEffect(()=>{
    getItemsForHome()
  },[])

  return (
    <section className='font-mono text-md '>
      {/* 
       */}
       <Enquiry/>
       <div className='flex bg-gray'>
        <div className='text-md md:text-2xl py-2 text-center md:py-5 md:px-4 bg-primary text-white font-semibold tracking-wide border-4 border-secondary'><div className='animate-blink w-full'>ADMISSION OPEN</div></div>
        <marquee className='my-auto text-lg md:text-3xl text-center'>• District First Rank 12th (2021 - 2022) - <b>589/600</b>  • State Second Rank 12 th (2022 - 2023) - <b>595/600</b>  •  Historical Achievement Centum in தமிழ் <b>100/100</b> • Admissions Open <b>2025 - 2026</b></marquee>

       </div>
      <div id='section1' className='mt-16 mx-5 md:mx-16'>
        <Heading name={"About Us"}/>
       
        <div className='md:flex my-16'>
          <div data-aos="fade-right" className='md:w-[50%]'>
            <img className='rounded-xl h-96' src={about}/>
          </div>
      
          <div data-aos="fade-right" className=' md:w-[50%] my-16 md:my-auto md:ml-16'>
            <div className='text-justify '>
            
DPMHSS (Dhanam Pachaiyappan Matriculation Higher Secondary School) stands as one of the most prominent educational institutions, with a rich legacy of academic excellence and holistic development. Established in 2002, the institution traces its roots to the humble beginnings of Dhanam Nursery and Primary School, founded with a vision to provide quality education to children. Over the years, DPMHSS has grown into a well-respected educational chain, spanning from the nurturing foundation of the nursery and primary stages to the dynamic learning environment of the higher secondary level.
            </div>
            <div>
              <Link to='/about'><button className='border-2 border-secondary bg-secondary text-primary hover:border-primary transition-all ease-in delay-75 hover:text-secondary hover:bg-primary px-5 py-2 mt-10'>See More</button></Link>
            </div>
          </div>
      
        </div>
      
      </div>
      <div id='vision' ref={section2Ref} className='flex mx-5 md:mx-28 py-16  justify-around'>
      <Particles
      className='absolute h-full w-full'
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "",
                    },
                },
                fullScreen:{
                  enable:false,
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 6,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "square",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                preset:'triangles',
                detectRetina: true,
            }}
        />
        <div className='grid grid-cols-2'>
          {visionArr.map((v1,idx)=>(
            <div data-aos={v1.aos}  className={`-z-10 bg-purple-700 text-white m-1 md:m-2 px-5 md:px-10 py-5 md:h-50 hover:scale-105 duration-500 transition-all ease-in-out ${v1.style_rounded}`}>
              <div className='text-center text-2xl md:text-4xl font-bold mb-5 text-secondary'>{v1.topic}</div>
              <ul className=''>{v1.content.map((content,idx)=>(
                <li className='list-disc text-center text-lg md:text-2xl'>{content}</li>
              ))}</ul>              
            </div>
          ))}
        </div>
      </div>
      <div id='section2' className='w-full my-32'>
        <Heading name={"Our Achievements"} />

        <div className='md:px-8 px-2 mx-5 md:mx-8 rounded-2xl py-2 md:py-10 my-16 bg-gradient-to-br from-primary to-secondary'>
          <SliderComponent slides={achievements}/>
          {/* <TimelineComponent /> */}
        </div>
        
      </div>
      <div ref={sectionRef} id="section3" className="pb-16 md:flex md:px-32 bg-gradient-to-br from-purple-500 to-secondary">
      <div className="md:hidden  -top-36 z-50 my-32 mx-auto bg-gradient-to-br from-purple-500  to-secondary  text-white ">
    <div className="text-5xl font-bold italic tracking-wider text-center text-secondary  py-5 drop-shadow-[3px_3px_black]">FACILITIES</div>
    <div className="mt-4 text-lg text-center mx-5 ">
      The school offers an ideal learning environment, featuring spacious, well-ventilated classrooms that are thoughtfully designed to foster both comfort and focus. These bright and airy spaces are equipped with modern teaching aids and resources to ensure that students can engage with the curriculum effectively. The layout of the classrooms encourages open interaction and collaboration, promoting a dynamic atmosphere where students can thrive academically and socially. The thoughtful design prioritizes student well-being, allowing them to study in an environment that is conducive to learning, creativity, and personal growth.
    </div>
  </div>
  <div className="justify-center items-center flex flex-col md:grid md:grid-cols-2  space-x-5">
    <div>
      {facilitiesHome.slice(0, 3).map((f1, index) => (
        <div
        data-aos="slide-right"
        key={index}
        className="my-16 w-72 h-96 flex flex-col justify-between border-[1px] bg-white border-primary rounded-2xl hover:scale-110 ease-in-out duration-200 hover:bg-secondary"
      >
        <div className='mx-5 my-5 text-3xl font-bold uppercase italic'>{f1.topic}</div>
        <div className="self-end">
          <img className="rounded-b-2xl h-60" src={f1.image} alt={`Facility ${index + 1}`} />
        </div>
      </div>
      
      ))}
    </div>
    <div className="mt-32">
    {facilitiesHome.slice(-3).map((f1, index) => (
        <div
        data-aos="slide-right"
        key={index}
        className="my-16 w-72 h-96 flex flex-col justify-between border-[1px] bg-white border-primary rounded-2xl hover:scale-110 ease-in-out duration-200 hover:bg-secondary"
      >
        <div className='mx-5 my-5 text-3xl font-bold uppercase italic'>{f1.topic}</div>
        <div className="self-end">
          <img className="rounded-b-2xl w-screen h-60" src={f1.image} alt={`Facility ${index + 1}`} />
        </div>
      </div>
      
      ))}
    </div>
  </div>
  <div className=" hidden md:block sticky top-[10%] my-32 mx-auto w-[40%] h-fit text-white ">
    <div className="text-5xl font-bold italic tracking-wider text-center text-secondary my-16 drop-shadow-[3px_3px_black]">FACILITIES</div>
    <div className="mt-4 text-lg text-center tracking-wide leading-9">
    The school offers an ideal learning environment, featuring spacious, well-ventilated classrooms that are thoughtfully designed to foster both comfort and focus. These bright and airy spaces are equipped with modern teaching aids and resources to ensure that students can engage with the curriculum effectively. The layout of the classrooms encourages open interaction and collaboration, promoting a dynamic atmosphere where students can thrive academically and socially. The thoughtful design prioritizes student well-being, allowing them to study in an environment that is conducive to learning, creativity, and personal growth.
    </div>
  </div>
</div>


<div id="section4" className="my-32">
<Particles
className='absolute h-full -z-50'
      id="tsparticles1"
      init={particlesInit}
      options={{
        fullScreen:{
          enable:false,
        },
        background: {
          color: {
            value: "", // Background color
          },
        },
        particles: {
          number: {
            value: 50, // Number of particles
          },
          color: {
            value: colorArray, // Snow-like colors
            animation: {
              enable: true,
              speed: 3, // Speed of color change
              sync: false, // Independent color change for particles
            },
          },
          shape: {
            type: ["polygon","circle","square"], // Shape of particles
            options: {
              sides: {
                min: 3, // Minimum sides for polygons
                max: 5, // Maximum sides for polygons
              },
            },
          },
          opacity: {
            value: { min: 0.3, max: 0.8 }, // Random opacity for snow-like effect
          },
          size: {
            value: { min: 3, max: 5 }, // Random sizes for polygons
          },
          move: {
            enable: true,
            speed: 3, // Slow movement to simulate falling snow
            direction: "bottom", // Particles move downward
            random: true, // Randomized movement
            straight: false, // Not in a straight line
            outModes: {
              default: "out", // Particles re-enter from the top when they exit
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: false, // No interaction on hover
            },
            onClick: {
              enable: false, // No interaction on click
            },
          },
        },
        retina_detect: true, // High-DPI support
      }}
    />
  <Heading name={"Gallery"} />
  <div className="flex overflow-x-scroll no-scrollbar">
    <ImageViewer imageArr={gallery} />
  </div>
  <div className="flex justify-end  mt-4 mr-16">
    <Link to="/gallery" className="text-primary hover:underline">
    <button className='px-6 py-2 bg-secondary text-primary hover:bg-primary hover:text-secondary duration-200'>
      See More
    </button>
    </Link>
  </div>
</div>

      
    </section>
  )
}

export default Home