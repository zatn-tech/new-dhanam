import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { aboutusArr } from '../components/aboutus'
import AboutusBox from '../components/AboutusBox'
import i1 from '../assets/images/learn.png'
import i2 from '../assets/images/certificate.png'
import i3 from '../assets/images/notes.png'
import learnmore from '../assets/images/learnmore.svg'
import visit from '../assets/images/visit.svg'
import apply from '../assets/images/apply.svg'
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
    AOS.init({
      disable: "phone",
      duration: 1000,
      easing: "ease-out-cubic",
    })
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
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <div className="relative mt-20 overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90"></div>
        
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 animate-pulse" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='50' cy='50' r='3'/%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3Ccircle cx='80' cy='80' r='2'/%3E%3Ccircle cx='20' cy='80' r='2'/%3E%3Ccircle cx='80' cy='20' r='2'/%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="container-padding relative z-10">
          <div className="py-20 text-center">
            <div className="space-y-6">
              {/* Main Title with Animation */}
              <div data-aos="fade-down" data-aos-delay={200}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight">
                  About <span className="gradient-text">Us</span>
                </h1>
              </div>
              
              {/* Subtitle with decorative elements */}
              <div data-aos="fade-up" data-aos-delay={400} className="flex items-center justify-center space-x-4">
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                <p className="text-xl md:text-2xl font-display text-secondary font-medium">
                  Discover Our Story, Mission & Values
                </p>
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
              </div>
              
              {/* Description */}
              <div data-aos="fade-up" data-aos-delay={600}>
                <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                  Learn about Dhanam Pachaiyappan Matriculation Higher Secondary School's commitment to excellence in education and holistic development.
                </p>
              </div>

              {/* Decorative line */}
              <div data-aos="fade-up" data-aos-delay={800} className="flex justify-center">
                <div className="w-32 h-1 bg-gradient-to-r from-secondary via-accent to-secondary rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave effect */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
                  fill="white" opacity=".25"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
                  fill="white" opacity=".5"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
                  fill="white"></path>
          </svg>
        </div>
      </div>

      <Enquiry />

      {/* Statistics Section */}
      <section className="section-padding bg-gradient-to-r from-gray-50 to-white">
        <div className="container-padding">
          <div className="grid md:grid-cols-4 gap-8">
            <div data-aos="fade-up" data-aos-delay={100} className="text-center group">
              <div className="relative">
                <div className="text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">20+</div>
                <div className="text-lg font-medium text-primary/80">Years of Excellence</div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-secondary rounded-full"></div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay={200} className="text-center group">
              <div className="relative">
                <div className="text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">1000+</div>
                <div className="text-lg font-medium text-primary/80">Students Enrolled</div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-secondary rounded-full"></div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay={300} className="text-center group">
              <div className="relative">
                <div className="text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
                <div className="text-lg font-medium text-primary/80">Expert Teachers</div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-secondary rounded-full"></div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay={400} className="text-center group">
              <div className="relative">
                <div className="text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
                <div className="text-lg font-medium text-primary/80">Success Rate</div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-secondary rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="text-center mb-16">
            <div data-aos="fade-up">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
                Why Choose <span className="gradient-text">DPMHSS?</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary rounded-full mx-auto mb-6"></div>
              <p className="text-lg text-primary/80 max-w-2xl mx-auto">
                Discover what makes us the preferred choice for quality education and holistic development
              </p>
            </div>
          </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div data-aos="fade-right">
                <div className="space-y-6 lg:space-y-8">
                  <div className="space-y-4 lg:space-y-6">
                    <p className="text-base lg:text-lg text-primary/80 leading-relaxed">
                      Choosing DPMHSS means investing in an educational experience that goes beyond academics. Our primary mission is to shape a more ethical, responsible, and forward-thinking generation. With over two decades of experience in nurturing young minds, we are committed to not only providing a robust academic foundation but also cultivating values that will guide students throughout their lives.
                    </p>
                    <p className="text-base lg:text-lg text-primary/80 leading-relaxed">
                      Our approach integrates research-based learning, a conductive learning environment, and the freedom for expression and creativity to ensure that every student is prepared for the challenges of tomorrow. We focus on the holistic development of our students, helping them grow into individuals who are not only academically successful but also socially responsible, innovative, and compassionate.
                    </p>
                    <p className="text-base lg:text-lg text-primary/80 leading-relaxed">
                      At DPMHSS, we believe in empowering students to be leaders of tomorrow—leaders who understand the importance of ethical decision-making, who embrace diversity and inclusivity, and who have the confidence to make a positive impact in the world.
                    </p>
                  </div>
                </div>
              </div>

            <div data-aos="fade-left" className="space-y-8">
              {/* Campus Domains */}
              <div className="card p-6 lg:p-8 bg-gradient-to-br from-white to-gray-50 shadow-large hover:shadow-2xl transition-all duration-500">
                <h3 className="text-xl lg:text-2xl font-display font-bold text-primary mb-6 text-center">CAMPUS DOMAINS</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {['C', 'A', 'M', 'P', 'U', 'S'].map((letter, index) => (
                    <div key={index} className="flex items-center space-x-3 group">
                      <div className="text-2xl lg:text-3xl font-bold text-secondary group-hover:scale-110 transition-transform duration-300">{letter}</div>
                      <span className="text-primary font-medium text-xs lg:text-sm">
                        {['REATIVE', 'FFABLE', 'AGNIFY', 'ROSPEROUS', 'NIQUE', 'ATISFIED'][index]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* DPMHSS Acronym */}
              <div className="card p-6 lg:p-8 bg-gradient-to-br from-secondary/10 to-primary/10 shadow-large hover:shadow-2xl transition-all duration-500">
                <h3 className="text-xl lg:text-2xl font-display font-bold text-primary mb-6 text-center">DPMHSS</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {['D', 'P', 'M', 'H', 'S', 'S'].map((letter, index) => (
                    <div key={index} className="flex items-center space-x-3 group">
                      <div className="text-2xl lg:text-3xl font-bold text-secondary group-hover:scale-110 transition-transform duration-300">{letter}</div>
                      <span className="text-primary font-medium text-xs lg:text-sm">
                        {['ISCOVER', 'ECULIAR', 'AJESTIC', 'ARMONY', 'ASSY', 'ERENE'][index]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="card p-6 bg-gradient-to-r from-secondary/20 to-primary/20 border-l-4 border-secondary shadow-large">
                <div className="flex items-start space-x-4">
                  <img className="w-8 h-10 mt-1 flex-shrink-0" src={quote} alt="Quote" />
                  <p className="text-primary/90 italic leading-relaxed text-lg">
                    "We will continuously develop many academic programmes of a high standard that will meet the employment needs as 'World of Work' in the future."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Features */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-padding">
          <div className="text-center mb-16">
            <div data-aos="fade-up">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
                Our <span className="gradient-text">Features</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary rounded-full mx-auto mb-6"></div>
              <p className="text-lg text-primary/80 max-w-2xl mx-auto">
                Discover what makes our educational approach unique and effective
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aboutusArr.map((aboutus, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100} className="group">
                <AboutusBox topic={aboutus.topic} image={aboutus.image} content={aboutus.content} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" ref={section2Ref} className="section-padding bg-gradient-to-br from-primary via-primary/95 to-primary/90 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='40' cy='40' r='2'/%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3Ccircle cx='70' cy='70' r='1'/%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="container-padding relative z-10">
          <div className="text-center mb-16">
            <div data-aos="fade-up">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                Academic <span className="gradient-text">Groups</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary rounded-full mx-auto mb-6"></div>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                We offer diverse academic streams to cater to different interests and career aspirations
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { title: "Biology Group", subjects: "Biology, Maths, Physics, Chemistry" },
              { title: "Computer Science Group", subjects: "Computer Science, Maths, Physics, Chemistry" },
              { title: "Botany Group", subjects: "Botany, Zoology, Physics, Chemistry" },
              { title: "Commerce Group", subjects: "Accountancy, Commerce, Economics, Computer Application" },
              { title: "Business Group", subjects: "Accountancy, Commerce, Economics, Business Mathematics and Statistics" }
            ].map((group, index) => (
              <Fade direction="left" delay={index * 100} key={index}>
                <div className="card bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="p-8 text-center">
                    <h3 className="text-xl font-display font-semibold text-white mb-4">{group.title}</h3>
                    <p className="text-white/80 leading-relaxed">{group.subjects}</p>
                  </div>
                </div>
              </Fade>
            ))}
          </div>

          {/* Learning Levels */}
          <div className="space-y-16">
            <div className="text-center">
              <div data-aos="fade-up">
                <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-8">
                  Our Learning <span className="gradient-text">Approach</span>
                </h3>
                <div className="flex justify-center space-x-12 mb-12">
                  <Fade>
                    <img className="w-20 h-20 hover:scale-110 transition-transform duration-300" src={i1} alt="Learn" />
                    <img className="w-20 h-20 hover:scale-110 transition-transform duration-300" src={i2} alt="Certificate" />
                    <img className="w-20 h-20 hover:scale-110 transition-transform duration-300" src={i3} alt="Notes" />
                  </Fade>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Primary Level",
                  points: [
                    "Learning is fun, experimental, and activity-based",
                    "Focus on nurturing thinking and analytical skills",
                    "Creative activities that engage young learners",
                    "Hands-on learning and problem-solving approach"
                  ]
                },
                {
                  title: "Secondary Level",
                  points: [
                    "Rich curriculum with multiple languages",
                    "Comprehensive subject coverage",
                    "Life Skills and Value Education",
                    "Spoken English classes for communication"
                  ]
                },
                {
                  title: "Higher Secondary Level",
                  points: [
                    "Highly experienced teachers",
                    "Advanced teaching methods",
                    "Personalized strategies",
                    "Modern resources for exam preparation"
                  ]
                }
              ].map((level, index) => (
                <Fade direction="up" delay={index * 200} key={index}>
                  <div className="card bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                    <div className="p-8">
                      <h4 className="text-2xl font-display font-semibold text-white mb-6 text-center">{level.title}</h4>
                      <ul className="space-y-3 text-white/80 text-base">
                        {level.points.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Correspondent Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-padding">
          <div className="text-center mb-16">
            <div data-aos="fade-up">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
                Meet Our <span className="gradient-text">Correspondent</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary rounded-full mx-auto mb-6"></div>
              <p className="text-lg text-primary/80 max-w-2xl mx-auto">
                Leadership that drives excellence and innovation in education
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right" className="text-center lg:text-left">
              <div className="relative inline-block group">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                  <img 
                    className="w-96 h-[500px] object-cover group-hover:scale-105 transition-transform duration-500" 
                    src={correspondent} 
                    alt="Correspondent" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-secondary to-primary text-white px-8 py-4 rounded-2xl shadow-large">
                  <p className="font-display font-semibold text-lg">Mr. P. Krishnan M.A.</p>
                </div>
              </div>
            </div>

            <div data-aos="fade-left" className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-display font-bold text-primary">
                  Visionary Leadership
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-secondary to-primary rounded-full"></div>
                <p className="text-lg text-primary/80 leading-relaxed">
                  Under the guidance of Mr. P. Krishnan M.A., our correspondent, DPMHSS has grown into a premier educational institution. His vision for excellence in education and commitment to student development has shaped our school's success over the years.
                </p>
                <p className="text-lg text-primary/80 leading-relaxed">
                  With a Master's degree and extensive experience in education, Mr. Krishnan brings a wealth of knowledge and leadership that continues to inspire both students and staff to achieve their highest potential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Cards */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container-padding">
          <div className="text-center mb-16">
            <div data-aos="fade-up">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
                Take the Next <span className="gradient-text">Step</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary rounded-full mx-auto mb-6"></div>
              <p className="text-lg text-primary/80 max-w-2xl mx-auto">
                Ready to join our community of learners and achievers?
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div data-aos="fade-up" data-aos-delay={100} className="card group hover:shadow-2xl transition-all duration-500 text-center p-8 hover:scale-105">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Bounce><img className='mx-auto w-20 h-20' src={learnmore} alt="Learn More" /></Bounce>
              </div>
              <h3 className="text-2xl font-display font-semibold text-primary mb-4">Learn More</h3>
              <p className="text-primary/70 text-lg">Discover more about our educational approach and programs</p>
            </div>

            <div data-aos="fade-up" data-aos-delay={200} className="card group hover:shadow-2xl transition-all duration-500 text-center p-8 bg-gradient-to-r from-secondary to-primary text-white hover:scale-105">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Bounce><img className='mx-auto w-20 h-20' src={visit} alt="Visit" /></Bounce>
              </div>
              <h3 className="text-2xl font-display font-semibold mb-4">Visit Campus</h3>
              <p className="text-white/80 text-lg">Schedule a visit to experience our campus firsthand</p>
            </div>

            <div data-aos="fade-up" data-aos-delay={300} className="card group hover:shadow-2xl transition-all duration-500 text-center p-8 hover:scale-105">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Bounce><img className='mx-auto w-20 h-20' src={apply} alt="Apply" /></Bounce>
              </div>
              <h3 className="text-2xl font-display font-semibold text-primary mb-4">Apply Now</h3>
              <p className="text-primary/70 text-lg">Start your child's educational journey with us</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs 