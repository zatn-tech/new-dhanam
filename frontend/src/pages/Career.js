import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import Enquiry from '../components/Enquiry'
import AOS from "aos";
import "aos/dist/aos.css";

const Career = () => {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);

  const careerOpportunities = [
    {
      id: 1,
      title: "Primary School Teacher",
      department: "Primary Education",
      experience: "2-5 years",
      location: "Chennai",
      type: "Full-time",
      description: "We are looking for passionate primary school teachers who can inspire young minds and create engaging learning experiences.",
      requirements: [
        "Bachelor's degree in Education or related field",
        "Strong communication and interpersonal skills",
        "Experience in primary education preferred",
        "Creative teaching methodologies"
      ]
    },
    {
      id: 2,
      title: "Mathematics Teacher",
      department: "Secondary Education",
      experience: "3-7 years",
      location: "Chennai",
      type: "Full-time",
      description: "Join our mathematics department to help students develop strong analytical and problem-solving skills.",
      requirements: [
        "Master's degree in Mathematics or related field",
        "Teaching certification required",
        "Experience in secondary education",
        "Strong analytical skills"
      ]
    },
    {
      id: 3,
      title: "Science Teacher",
      department: "Secondary Education",
      experience: "2-6 years",
      location: "Chennai",
      type: "Full-time",
      description: "Inspire students' curiosity and love for science through hands-on experiments and innovative teaching methods.",
      requirements: [
        "Master's degree in Science or related field",
        "Teaching certification required",
        "Experience in laboratory management",
        "Passion for scientific inquiry"
      ]
    },
    {
      id: 4,
      title: "Administrative Assistant",
      department: "Administration",
      experience: "1-3 years",
      location: "Chennai",
      type: "Full-time",
      description: "Support our administrative team in managing school operations and ensuring smooth day-to-day functioning.",
      requirements: [
        "Bachelor's degree in any field",
        "Excellent organizational skills",
        "Proficiency in MS Office",
        "Strong communication skills"
      ]
    }
  ];

  const benefits = [
    {
      icon: "🏫",
      title: "Professional Growth",
      description: "Continuous learning opportunities and career advancement"
    },
    {
      icon: "💰",
      title: "Competitive Salary",
      description: "Attractive compensation package with benefits"
    },
    {
      icon: "🏥",
      title: "Health Benefits",
      description: "Comprehensive health insurance coverage"
    },
    {
      icon: "📚",
      title: "Learning Environment",
      description: "Work in a stimulating educational atmosphere"
    },
    {
      icon: "🤝",
      title: "Team Collaboration",
      description: "Join a supportive and collaborative team"
    },
    {
      icon: "🎯",
      title: "Work-Life Balance",
      description: "Flexible working hours and vacation policies"
    }
  ];

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
                  Join Our <span className="gradient-text">Team</span>
                </h1>
              </div>
              
              {/* Subtitle with decorative elements */}
              <div data-aos="fade-up" data-aos-delay={400} className="flex items-center justify-center space-x-4">
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                <p className="text-xl md:text-2xl font-display text-secondary font-medium">
                  Build Your Career in Education
                </p>
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
              </div>
              
              {/* Description */}
              <div data-aos="fade-up" data-aos-delay={600}>
                <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                  Be part of our mission to shape young minds and contribute to the future of education. Explore exciting career opportunities at DPMHSS.
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
                <div className="text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
                <div className="text-lg font-medium text-primary/80">Teachers</div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-secondary rounded-full"></div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay={200} className="text-center group">
              <div className="relative">
                <div className="text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">10+</div>
                <div className="text-lg font-medium text-primary/80">Departments</div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-secondary rounded-full"></div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay={300} className="text-center group">
              <div className="relative">
                <div className="text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">95%</div>
                <div className="text-lg font-medium text-primary/80">Satisfaction</div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-secondary rounded-full"></div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay={400} className="text-center group">
              <div className="relative">
                <div className="text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">5+</div>
                <div className="text-lg font-medium text-primary/80">Years Avg</div>
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
                Why Work <span className="gradient-text">With Us?</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary rounded-full mx-auto mb-6"></div>
              <p className="text-lg text-primary/80 max-w-3xl mx-auto">
                Join a team of dedicated educators committed to excellence in education and student development. We offer a supportive environment where your passion for teaching can flourish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-padding">
          <div className="text-center mb-16">
            <div data-aos="fade-up">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
                Employee <span className="gradient-text">Benefits</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary rounded-full mx-auto mb-6"></div>
              <p className="text-lg text-primary/80 max-w-2xl mx-auto">
                We value our employees and offer comprehensive benefits to support their professional and personal growth
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={benefit.id} data-aos="fade-up" data-aos-delay={index * 100} className="card group hover:shadow-2xl transition-all duration-500 text-center p-8 hover:scale-105">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-display font-semibold text-primary mb-4">{benefit.title}</h3>
                <p className="text-primary/70 text-lg">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Opportunities Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container-padding">
          <div className="text-center mb-16">
            <div data-aos="fade-up">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
                Current <span className="gradient-text">Openings</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary rounded-full mx-auto mb-6"></div>
              <p className="text-lg text-primary/80 max-w-2xl mx-auto">
                Explore our current job opportunities and find the perfect role for your skills and passion
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {careerOpportunities.map((job, index) => (
              <div key={job.id} data-aos="fade-up" data-aos-delay={index * 100} className="card bg-white shadow-large hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="mb-4 lg:mb-0">
                      <h3 className="text-xl lg:text-2xl font-display font-bold text-primary mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-primary/70">
                        <span className="flex items-center">
                          <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                          {job.department}
                        </span>
                        <span className="flex items-center">
                          <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                          {job.experience} experience
                        </span>
                        <span className="flex items-center">
                          <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <button className="btn-secondary bg-gradient-to-r from-secondary to-primary text-white hover:from-primary hover:to-secondary">
                      Apply Now
                    </button>
                  </div>
                  
                  <p className="text-primary/80 mb-6 leading-relaxed">{job.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-primary/70">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-padding">
          <div className="text-center mb-16">
            <div data-aos="fade-up">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
                Application <span className="gradient-text">Process</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary rounded-full mx-auto mb-6"></div>
              <p className="text-lg text-primary/80 max-w-2xl mx-auto">
                Simple and straightforward steps to join our team
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div data-aos="fade-up" data-aos-delay={100} className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto group-hover:scale-110 transition-transform duration-300">
                  1
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-secondary rounded-full"></div>
              </div>
              <h3 className="text-xl font-display font-semibold text-primary mb-3">Submit Application</h3>
              <p className="text-primary/70">Complete the online application form with your details</p>
            </div>

            <div data-aos="fade-up" data-aos-delay={200} className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto group-hover:scale-110 transition-transform duration-300">
                  2
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-secondary rounded-full"></div>
              </div>
              <h3 className="text-xl font-display font-semibold text-primary mb-3">Review Process</h3>
              <p className="text-primary/70">Our HR team will review your application and qualifications</p>
            </div>

            <div data-aos="fade-up" data-aos-delay={300} className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto group-hover:scale-110 transition-transform duration-300">
                  3
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-secondary rounded-full"></div>
              </div>
              <h3 className="text-xl font-display font-semibold text-primary mb-3">Interview</h3>
              <p className="text-primary/70">Attend an interview with our management team</p>
            </div>

            <div data-aos="fade-up" data-aos-delay={400} className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto group-hover:scale-110 transition-transform duration-300">
                  4
                </div>
              </div>
              <h3 className="text-xl font-display font-semibold text-primary mb-3">Join Team</h3>
              <p className="text-primary/70">Welcome aboard! Start your journey with DPMHSS</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-secondary to-primary">
        <div className="container-padding text-center">
          <div data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to <span className="gradient-text bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent">Join Us?</span>
            </h2>
            <div className="w-24 h-1 bg-white rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Take the first step towards an exciting career in education with DPMHSS
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-secondary bg-white text-secondary hover:bg-gray-100">
                Apply Now
              </a>
              <a href="/about" className="btn-outline border-white text-white hover:bg-white hover:text-secondary">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Career
