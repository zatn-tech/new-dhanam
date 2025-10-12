import React from 'react'
import display1 from '../assets/images/display1.jpg'
import display3 from '../assets/images/display3.jpg'
import display7 from '../assets/images/display7.jpg'
import display10 from '../assets/images/display10.jpeg'
import display11 from '../assets/images/display11.jpeg'
import display12 from '../assets/images/display12.jpeg'
import display13 from '../assets/images/display13.jpeg'
import logo from '../assets/images/logo.png'
import Slider from './Slider'

const Hero = () => {
  const imageSlider = [display1, display3, display7, display10, display11, display13, display12];

  return (
    <section className="relative w-full">
      {/* Modern School Header */}
      <div className="bg-gradient-to-r from-primary via-primary to-primary/90 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="container-padding relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between py-4 md:py-6 space-y-4 md:space-y-0">
            {/* Logo and School Info */}
            <div className="flex items-center space-x-3 md:space-x-6">
              {/* Logo with Glow Effect */}
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-secondary/30 rounded-full blur-lg"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-full p-2 border border-white/20">
                  <img 
                    src={logo} 
                    alt="Dhanam School Logo" 
                    className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain"
                  />
                </div>
              </div>
              
              {/* School Name and Address */}
              <div className="min-w-0 flex-1">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2 md:space-x-3">
                    <h1 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-display font-bold text-white leading-tight">
                      DHANAM PACHAIYAPPAN
                    </h1>
                    <div className="w-2 h-2 bg-secondary rounded-full animate-pulse flex-shrink-0"></div>
                  </div>
                  <h2 className="text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-display font-semibold text-secondary leading-tight">
                    MATRICULATION HIGHER SECONDARY SCHOOL
                  </h2>
                  <div className="hidden sm:flex items-center space-x-2">
                    <div className="w-1 h-1 bg-accent rounded-full flex-shrink-0"></div>
                    <p className="text-xs md:text-sm lg:text-base font-display text-white/90">
                      ASHOK NAGAR, ARAKKONAM - 631 001
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Motto with Enhanced Design */}
            <div className="hidden lg:block">
              <div className="relative group">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-secondary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                
                {/* Main Motto Box */}
                <div className="relative bg-gradient-to-br from-secondary to-secondary/90 text-primary px-6 py-4 rounded-2xl shadow-2xl border border-white/20 backdrop-blur-sm">
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-1">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-xs font-medium text-primary/80 uppercase tracking-wider">Our Motto</span>
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <p className="font-display font-bold text-lg md:text-xl tracking-wide leading-tight">
                      DREAM
                    </p>
                    <p className="font-display font-bold text-lg md:text-xl tracking-wide leading-tight text-primary/90">
                      BELIEVE
                    </p>
                    <p className="font-display font-bold text-lg md:text-xl tracking-wide leading-tight text-primary/80">
                      ACHIEVE
                    </p>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-2 -left-2 w-3 h-3 bg-accent rounded-full opacity-60"></div>
                  <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-primary rounded-full opacity-60"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Border with Gradient */}
        <div className="h-1 bg-gradient-to-r from-secondary via-accent to-secondary"></div>
      </div>

      {/* Hero Slider */}
      <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] overflow-hidden w-full">
        <Slider images={imageSlider} interval={3000} />
        {/* Removed text overlay since school info is already in banner */}
      </div>
    </section>
  )
}

export default Hero 