import React,{useState,useEffect,useRef} from 'react'
import { useLocation } from 'react-router-dom';
import { branchesData } from '../components/branchData'
import BranchesContainer from '../components/BranchesContainer'
import Enquiry from '../components/Enquiry'
import AOS from "aos";
import "aos/dist/aos.css";

const Branches = () => {
    const sectionRef = useRef(null);
    const location = useLocation();
  
    useEffect(() => {
      AOS.init({
        disable: "phone",
        duration: 1000,
        easing: "ease-out-cubic",
      });
    }, []);

    useEffect(() => {
      if (location.hash === "#target-section" && sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: "smooth" });
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
                  Our <span className="gradient-text">Branches</span>
                </h1>
              </div>
              
              {/* Subtitle with decorative elements */}
              <div data-aos="fade-up" data-aos-delay={400} className="flex items-center justify-center space-x-4">
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                <p className="text-xl md:text-2xl font-display text-secondary font-medium">
                  Multiple Locations, One Standard of Excellence
                </p>
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
              </div>
              
              {/* Description */}
              <div data-aos="fade-up" data-aos-delay={600}>
                <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                  Explore our network of branches, each committed to providing the same high-quality education and nurturing environment for students.
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
                <div className="text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">{branchesData.length}+</div>
                <div className="text-lg font-medium text-primary/80">Branches</div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-secondary rounded-full"></div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay={200} className="text-center group">
              <div className="relative">
                <div className="text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">20+</div>
                <div className="text-lg font-medium text-primary/80">Years</div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-secondary rounded-full"></div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay={300} className="text-center group">
              <div className="relative">
                <div className="text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">1000+</div>
                <div className="text-lg font-medium text-primary/80">Students</div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-secondary rounded-full"></div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay={400} className="text-center group">
              <div className="relative">
                <div className="text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
                <div className="text-lg font-medium text-primary/80">Quality</div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-secondary rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="text-center mb-16">
            <div data-aos="fade-up">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
                Growing Network of <span className="gradient-text">Excellence</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary rounded-full mx-auto mb-6"></div>
              <p className="text-lg text-primary/80 max-w-3xl mx-auto">
                From our humble beginnings, DPMHSS has expanded to multiple locations, each maintaining the same high standards of education and care. Our branches are strategically located to serve communities and provide accessible quality education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section id="target-section" ref={sectionRef} className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-padding">
          <div className="text-center mb-16">
            <div data-aos="fade-up">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
                Our Branch <span className="gradient-text">Network</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary rounded-full mx-auto mb-6"></div>
              <p className="text-lg text-primary/80 max-w-2xl mx-auto">
                Each branch maintains our commitment to quality education and holistic development
              </p>
            </div>
          </div>

          <BranchesContainer branches={branchesData} />
        </div>
      </section>

      {/* Why Multiple Branches Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container-padding">
          <div className="text-center mb-16">
            <div data-aos="fade-up">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
                Why Multiple <span className="gradient-text">Branches?</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary rounded-full mx-auto mb-6"></div>
              <p className="text-lg text-primary/80 max-w-2xl mx-auto">
                Discover the benefits of our expanding network and commitment to accessibility
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <div className="space-y-8">
                <div className="space-y-6">
                  <p className="text-lg text-primary/80 leading-relaxed">
                    Our expansion to multiple branches reflects our commitment to making quality education accessible to more students and communities. Each branch operates under the same educational philosophy and standards that have made DPMHSS a trusted name in education.
                  </p>
                  <p className="text-lg text-primary/80 leading-relaxed">
                    By establishing branches in different locations, we ensure that students don't have to travel far to receive the same high-quality education. This accessibility, combined with our proven track record, makes DPMHSS the preferred choice for parents seeking excellence in education.
                  </p>
                </div>
              </div>
            </div>

            <div data-aos="fade-left" className="space-y-6">
              <div className="card p-8 bg-gradient-to-br from-white to-gray-50 shadow-large hover:shadow-2xl transition-all duration-500">
                <h3 className="text-2xl font-display font-bold text-primary mb-6 text-center">Our Commitment</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-primary">Consistent Quality</h4>
                      <p className="text-primary/70 text-sm">Same high standards across all branches</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-primary">Accessible Education</h4>
                      <p className="text-primary/70 text-sm">Quality education closer to your home</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-primary">Proven Track Record</h4>
                      <p className="text-primary/70 text-sm">Years of successful educational outcomes</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-primary">Community Focus</h4>
                      <p className="text-primary/70 text-sm">Serving local communities with care</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-secondary to-primary">
        <div className="container-padding text-center">
          <div data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to Join Our <span className="gradient-text bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent">Network?</span>
            </h2>
            <div className="w-24 h-1 bg-white rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Choose the branch nearest to you and give your child the best start in their educational journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#target-section" className="btn-secondary bg-white text-secondary hover:bg-gray-100">
                View All Branches
              </a>
              <a href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-secondary">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Branches