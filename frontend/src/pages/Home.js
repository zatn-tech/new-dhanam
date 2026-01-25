import React, { useEffect, useState, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import Heading from '../components/Heading'
import ImageViewer from '../components/ImageViewer'
import { facilitiesHome } from '../components/facilitiesHome'
import SliderComponent from '../components/SliderComponent'
import { Link } from 'react-router-dom'
import Enquiry from '../components/Enquiry'
import Hero from '../components/Hero'
import about from '../assets/images/about_school.jpg'
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
      await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
      await console.log(container);
    }, []);

    const visionArr = [
      {
        topic: 'Our Vision',
        content: ['To recognize and achieve their own strength by providing them support and opportunities to build their career goals.'],
        icon: '🎯',
        aos: "fade-up",
      },
      {
        topic: 'Our Mission',
        content: ["Inspire our children with passion to be inquire and innovate in the way of contribution", "To provide a unique schooling experience in a caring environment."],
        icon: '🚀',
        aos: "fade-up",
      },
      {
        topic: 'Our Goal',
        content: ['Preparing students for success in a changing world.', 'The secret of getting ahead starts here by breaking down larger task with smaller steps.'],
        icon: '🎯',
        aos: "fade-up",
      },
      {
        topic: 'Our Motto',
        content: ['Learn Today, Lead Tomorrow.'],
        icon: '💡',
        aos: "fade-up",
      },
    ];

    const [selectedIndex, setSelectedIndex] = useState(0)
    const [topic, setTopic] = useState(visionArr[selectedIndex].topic)
    const [content, setContent] = useState(visionArr[selectedIndex].content)

    const changeIndex = (index) => {
      setSelectedIndex(index)
      setTopic(visionArr[index].topic)
      setContent(visionArr[index].content)
    }

    const [achievements, setAchievements] = useState([])
    const [gallery, setGallery] = useState([gallery1])

    const getItemsForHome = async () => {
      try {
        const res = await fetch("https://dhanamschool.com/api/home/", {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
            "Access-Control-Allow-Origin": "*"
          },
        })
        if (res.ok) {
          const data = await res.json()
          setAchievements(data.achievements)
          setGallery((prevGallery) => [...prevGallery, ...data.gallery]);
        } else {
          console.log("error fetching home details")
        }
      } catch (err) {
        console.log({ "error": err })
      }
    }

    useEffect(() => {
      getItemsForHome()
    }, [])

    return (
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <Hero />

        {/* Announcement Bar */}
        <div className="bg-gradient-to-r from-primary via-primary/95 to-primary text-white py-3 overflow-hidden">
          <div className="container-padding">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
              <div className="flex-1 flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 overflow-hidden w-full sm:w-auto">
                <div className="bg-secondary/30 px-3 py-1 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap flex-shrink-0 relative overflow-hidden w-full sm:w-auto text-center sm:text-left">
                  <span className="shining-text">🎓 ADMISSIONS OPEN 2026-2027</span>
                </div>
                <div className="overflow-hidden flex-1 w-full sm:w-auto hidden sm:block">
                  <div className="flex animate-scroll">
                    <span className="whitespace-nowrap text-xs sm:text-sm pr-8">
                      District First Rank 12th (2021-2022) - 589/600 • State Second Rank 12th (2022-2023) - 595/600 • Excellence in Education • Holistic Development • State-of-the-Art Facilities
                    </span>
                    <span className="whitespace-nowrap text-xs sm:text-sm pr-8">
                      District First Rank 12th (2021-2022) - 589/600 • State Second Rank 12th (2022-2023) - 595/600 • Excellence in Education • Holistic Development • State-of-the-Art Facilities
                    </span>
                  </div>
                </div>
              </div>
              <Link to="/contact" className="btn-outline text-white border-white hover:bg-white hover:text-primary text-sm whitespace-nowrap flex-shrink-0 w-full sm:w-auto text-center">
                Apply Now
              </Link>
            </div>
          </div>
        </div>

        {/* Join Us Section */}
        <div className="bg-gradient-to-r from-secondary/10 via-primary/10 to-secondary/10 py-8 border-y border-primary/20">
          <div className="container-padding">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-primary">
                Join us Today and Feel the Difference Tomorrow !! <span className="inline-block animate-bounce">🌟</span>
              </h2>
            </div>
          </div>
        </div>

        {/* Enquiry Form */}
        <Enquiry />

        {/* About Section */}
        <section className="section-padding">
          <div className="container-padding">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Welcome to <span className="gradient-text">Dhanam School</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A premier educational institution committed to excellence, innovation, and holistic development
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div data-aos="fade-right" className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-large">
                  <img className="w-full h-[400px] object-cover" src={about} alt="About Dhanam School" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-secondary text-primary p-4 rounded-xl shadow-medium hidden md:block">
                  <div className="text-2xl font-bold">20+</div>
                  <div className="text-sm">Years of Excellence</div>
                </div>
              </div>

              <div data-aos="fade-left" className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-display font-semibold">
                  Nurturing Minds, Building Futures
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  DPMHSS (Dhanam Pachaiyappan Matriculation Higher Secondary School) stands as one of the most prominent educational institutions, with a rich legacy of academic excellence and holistic development. Established in 2002, the institution traces its roots to the humble beginnings of Dhanam Nursery and Primary School, founded with a vision to provide quality education to children.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Over the years, DPMHSS has grown into a well-respected educational chain, spanning from the nurturing foundation of the nursery and primary stages to the dynamic learning environment of the higher secondary level.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/about" className="btn-primary">
                    Learn More
                  </Link>
                  <Link to="/contact" className="btn-secondary">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section ref={section2Ref} id="vision" className="section-padding bg-gray-50">
          <div className="container-padding">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-3 tilt-hover">
                Our <span className="gradient-text">Core Values</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary rounded-full mx-auto mb-6"></div>
              <p className="text-lg text-primary/80 max-w-2xl mx-auto">
                The principles that define who we are and how we shape every learner’s journey
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {visionArr.map((v, idx) => (
                <div
                  key={idx}
                  className="relative card-3d p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 tilt-hover"
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='90' height='90' viewBox='0 0 90 90' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.2'%3E%3Ccircle cx='45' cy='45' r='2'/%3E%3Ccircle cx='15' cy='15' r='1.5'/%3E%3Ccircle cx='75' cy='75' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`
                  }}></div>
                  <div className="relative flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-primary text-white flex items-center justify-center text-2xl pixel-shadow">
                      {v.icon}
                    </div>
                    <h3 className="text-xl font-display font-semibold text-primary">{v.topic}</h3>
                  </div>
                  <div className="relative space-y-3">
                    {v.content.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                        <p className="text-primary/80 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                  <div className="relative mt-6 h-1 w-16 bg-gradient-to-r from-secondary to-primary rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="section2" className="section-padding bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container-padding">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 tilt-hover">
                Student <span className="gradient-text">Achievements</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary rounded-full mx-auto mb-6"></div>
              <p className="text-lg text-primary/80 max-w-2xl mx-auto">
                Celebrating the success and accomplishments of our outstanding students
              </p>
            </div>

            <div className="relative rounded-3xl overflow-hidden glow">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90"></div>
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='50' cy='50' r='3'/%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3Ccircle cx='80' cy='80' r='2'/%3E%3Ccircle cx='20' cy='80' r='2'/%3E%3Ccircle cx='80' cy='20' r='2'/%3E%3C/g%3E%3C/svg%3E")`
              }}></div>
              <div className="relative p-6 md:p-10">
                <SliderComponent slides={achievements} />
              </div>
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section ref={sectionRef} id="section3" className="section-padding bg-gradient-to-br from-secondary/5 to-primary/5">
          <div className="container-padding">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                World-Class <span className="gradient-text">Facilities</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our state-of-the-art facilities provide an ideal learning environment for students to thrive academically and personally
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {facilitiesHome.map((facility, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="card overflow-hidden group hover:shadow-large transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      src={facility.image}
                      alt={facility.topic}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-display font-semibold mb-3 text-gray-900">
                      {facility.topic}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Modern facilities designed to enhance learning experiences and support student development.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="section4" className="section-padding">
          <div className="container-padding">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Campus <span className="gradient-text">Gallery</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Take a virtual tour of our vibrant campus and see the moments that make Dhanam School special
              </p>
            </div>

            <div className="relative">
              <div className="flex overflow-x-auto no-scrollbar gap-4 pb-4">
                <ImageViewer imageArr={gallery} />
              </div>
              <div className="flex justify-center mt-8">
                <Link to="/gallery" className="btn-primary">
                  View Full Gallery
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-secondary to-primary relative overflow-hidden">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='50' cy='50' r='3'/%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3Ccircle cx='80' cy='80' r='2'/%3E%3Ccircle cx='20' cy='80' r='2'/%3E%3Ccircle cx='80' cy='20' r='2'/%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>
          
          <div className="container-padding text-center relative z-10">
            {/* Main CTA Text with Interactive Effects */}
            <div className="group mb-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6 transform transition-all duration-500 group-hover:scale-105">
                <span className="inline-block relative">
                  <span className="relative z-10">Shape Your Future with Excellence</span>
                  {/* Glow effect */}
                  <span className="absolute inset-0 text-white blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500">Shape Your Future with Excellence</span>
                </span>
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Join Dhanam School and embark on a journey of academic excellence, holistic development, and lifelong success. Your child's bright future starts here.
              </p>
              
              {/* Decorative elements */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-12 h-1 bg-white/50 rounded-full group-hover:bg-white transition-colors duration-500"></div>
                <div className="w-3 h-3 bg-white rounded-full animate-pulse group-hover:scale-125 transition-transform duration-500"></div>
                <div className="w-12 h-1 bg-white/50 rounded-full group-hover:bg-white transition-colors duration-500"></div>
              </div>
            </div>

            {/* Interactive Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact" 
                className="bg-white text-secondary hover:bg-gray-100 transform transition-all duration-300 hover:scale-110 hover:shadow-2xl px-8 py-4 text-lg font-semibold rounded-lg relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Apply Now
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </Link>
              <Link 
                to="/about" 
                className="border-2 border-white text-white hover:bg-white hover:text-secondary transform transition-all duration-300 hover:scale-110 hover:shadow-2xl px-8 py-4 text-lg font-semibold rounded-lg relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Learn More
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    )
}

export default Home