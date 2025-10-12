import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Enquiry from '../components/Enquiry'
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
    location: ''
  });
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Only send the fields that the backend expects
      const submitData = {
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,
        enqLocation: formData.location,
        message: formData.message
      };
      
      const response = await fetch('https://api.dhanamschool.com/contact/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          mobile: '',
          message: '',
          location: ''
        });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending message. Please try again.');
    }
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Visit Us",
      details: [
        "Dhanam Pachaiyappan Matriculation",
        "Higher Secondary School",
        "Chennai, Tamil Nadu, India"
      ]
    },
    {
      icon: "📞",
      title: "Call Us",
      details: [
        "+91 123 456 7890",
        "+91 987 654 3210",
        "Mon - Fri: 8:00 AM - 4:00 PM"
      ]
    },
    {
      icon: "✉️",
      title: "Email Us",
      details: [
        "info@dhanamschool.com",
        "admissions@dhanamschool.com",
        "support@dhanamschool.com"
      ]
    }
  ];

  const workingHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 4:00 PM" },
    { day: "Saturday", hours: "8:00 AM - 1:00 PM" },
    { day: "Sunday", hours: "Closed" }
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
                  Get In <span className="gradient-text bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Touch</span>
                </h1>
              </div>
              
              {/* Subtitle with decorative elements */}
              <div data-aos="fade-up" data-aos-delay={400} className="flex items-center justify-center space-x-4">
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                <p className="text-xl md:text-2xl font-display text-secondary font-medium">
                  We'd Love to Hear from You
                </p>
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
              </div>
              
              {/* Description */}
              <div data-aos="fade-up" data-aos-delay={600}>
                <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                  Have questions about our school? Want to schedule a visit? Need information about admissions? We're here to help!
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
                <div className="text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
                <div className="text-lg font-medium text-primary/80">Support</div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-secondary rounded-full"></div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay={200} className="text-center group">
              <div className="relative">
                <div className="text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">5min</div>
                <div className="text-lg font-medium text-primary/80">Response</div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-secondary rounded-full"></div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay={300} className="text-center group">
              <div className="relative">
                <div className="text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
                <div className="text-lg font-medium text-primary/80">Satisfaction</div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-secondary rounded-full"></div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay={400} className="text-center group">
              <div className="relative">
                <div className="text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">3+</div>
                <div className="text-lg font-medium text-primary/80">Channels</div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-secondary rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="text-center mb-16">
            <div data-aos="fade-up">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
                Contact <span className="gradient-text bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Information</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent rounded-full mx-auto mb-6"></div>
              <p className="text-lg text-primary/80 max-w-3xl mx-auto">
                Multiple ways to reach us. Choose the method that works best for you.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100} className="card group hover:shadow-2xl transition-all duration-500 text-center p-8 hover:scale-105">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {info.icon}
                </div>
                <h3 className="text-2xl font-display font-semibold text-primary mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-primary/70 text-lg">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-padding">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Contact Form */}
            <div data-aos="fade-right">
              <div className="card p-6 lg:p-8 bg-white shadow-large">
                <h2 className="text-2xl lg:text-3xl font-display font-bold text-primary mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="mobile" className="block text-sm font-medium text-primary mb-2">Mobile Number *</label>
                      <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                        placeholder="Enter your mobile number"
                      />
                    </div>
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-primary mb-2">Location *</label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                        placeholder="Enter your location"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Enter your message here..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-secondary to-accent text-white py-4 px-8 rounded-lg font-semibold hover:from-accent hover:to-secondary transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Map and Working Hours */}
            <div data-aos="fade-left" className="space-y-8">
              {/* Map */}
              <div className="card p-8 bg-white shadow-large">
                <h3 className="text-2xl font-display font-bold text-primary mb-6">Find Us</h3>
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🗺️</div>
                    <p className="text-primary/70">Interactive Map Coming Soon</p>
                    <p className="text-sm text-primary/50 mt-2">Dhanam Pachaiyappan Matriculation Higher Secondary School</p>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="card p-8 bg-white shadow-large">
                <h3 className="text-2xl font-display font-bold text-primary mb-6">Working Hours</h3>
                <div className="space-y-4">
                  {workingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-primary/10 last:border-b-0">
                      <span className="font-medium text-primary">{schedule.day}</span>
                      <span className="text-primary/70">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container-padding">
          <div className="text-center mb-16">
            <div data-aos="fade-up">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
                Frequently Asked <span className="gradient-text bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Questions</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent rounded-full mx-auto mb-6"></div>
              <p className="text-lg text-primary/80 max-w-2xl mx-auto">
                Quick answers to common questions about our school
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div data-aos="fade-up" data-aos-delay={100} className="card p-6 bg-white shadow-large">
              <h3 className="text-xl font-display font-semibold text-primary mb-3">How can I apply for admission?</h3>
              <p className="text-primary/70">You can apply for admission by visiting our school office, calling us, or filling out the contact form on this page. Our admission team will guide you through the process.</p>
            </div>

            <div data-aos="fade-up" data-aos-delay={200} className="card p-6 bg-white shadow-large">
              <h3 className="text-xl font-display font-semibold text-primary mb-3">What are the school timings?</h3>
              <p className="text-primary/70">Our school operates from 8:00 AM to 4:00 PM on weekdays and 8:00 AM to 1:00 PM on Saturdays. We are closed on Sundays and public holidays.</p>
            </div>

            <div data-aos="fade-up" data-aos-delay={300} className="card p-6 bg-white shadow-large">
              <h3 className="text-xl font-display font-semibold text-primary mb-3">Do you offer transportation?</h3>
              <p className="text-primary/70">Yes, we provide safe and reliable transportation services to various locations. Please contact us for route information and availability.</p>
            </div>

            <div data-aos="fade-up" data-aos-delay={400} className="card p-6 bg-white shadow-large">
              <h3 className="text-xl font-display font-semibold text-primary mb-3">What facilities do you have?</h3>
              <p className="text-primary/70">We have modern classrooms, well-equipped laboratories, a library, sports facilities, computer labs, and more. Contact us for a detailed tour.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-secondary to-accent">
        <div className="container-padding text-center">
          <div data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to <span className="gradient-text bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent">Connect?</span>
            </h2>
            <div className="w-24 h-1 bg-white rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              We're here to answer all your questions and help you get started with your child's educational journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact-form" className="btn-secondary bg-white text-secondary hover:bg-gray-100">
                Send Message
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

export default ContactUs
