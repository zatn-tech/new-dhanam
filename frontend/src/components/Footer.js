import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container-padding pb-20 md:pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-xl">D</span>
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg">Dhanam School</h3>
                <p className="text-secondary text-sm">Excellence in Education</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed">
              Nurturing excellence and building futures through quality education and holistic development.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-secondary font-display font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-secondary transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-secondary transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/achievements" className="text-white/80 hover:text-secondary transition-colors duration-200">
                  Achievements
                </Link>
              </li>
              <li>
                <Link to="/branch" className="text-white/80 hover:text-secondary transition-colors duration-200">
                  Branches
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-white/80 hover:text-secondary transition-colors duration-200">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-secondary transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-secondary font-display font-semibold text-lg">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-secondary text-sm">📍</span>
                </div>
                <div>
                  <p className="text-white/80 text-sm">
                    Ashok Nagar, Arakkonam - 631 001
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-secondary text-sm">📞</span>
                </div>
                <div>
                  <p className="text-white/80 text-sm">
                    +91 123 456 7890
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-secondary text-sm">✉️</span>
                </div>
                <div>
                  <p className="text-white/80 text-sm">
                    info@dhanamschool.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="space-y-4">
            <h4 className="text-secondary font-display font-semibold text-lg">Working Hours</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-white/80 text-sm">Monday - Friday</span>
                <span className="text-secondary text-sm font-medium">8:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/80 text-sm">Saturday</span>
                <span className="text-secondary text-sm font-medium">8:00 AM - 1:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/80 text-sm">Sunday</span>
                <span className="text-secondary text-sm font-medium">Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary/20 py-6 pb-16 md:pb-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <p className="text-white/60 text-xs sm:text-sm text-center md:text-left leading-relaxed max-w-md mx-auto md:mx-0">
              © 2024 Dhanam Pachaiyappan Matric Higher Secondary School. All rights reserved.
            </p>
            <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-6">
              <Link to="/privacy-policy" className="text-white hover:text-secondary transition-colors duration-200 text-center md:text-left text-sm font-medium py-1 px-2 rounded hover:bg-white/10">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-white hover:text-secondary transition-colors duration-200 text-center md:text-left text-sm font-medium py-1 px-2 rounded hover:bg-white/10">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer