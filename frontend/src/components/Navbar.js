import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/images/logo.png'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Adjust scroll threshold to account for new smaller header height
      const headerHeight = location.pathname === '/' ? 180 : 0; // Increased header height to prevent overlay
      setIsScrolled(window.scrollY > headerHeight);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/about', label: 'About', icon: '👥' },
    { path: '/achievements', label: 'Achievements', icon: '🏆' },
    { path: '/branch', label: 'Branches', icon: '🏢' },
    { path: '/gallery', label: 'Gallery', icon: '📸' },
    { path: '/contact', label: 'Contact', icon: '📞' },
  ];

  // Calculate top position based on current page
  const getTopPosition = () => {
    if (location.pathname === '/') {
      return isScrolled ? '0' : '180px'; // Increased header height when not scrolled
    }
    return '0';
  };

  // Determine navbar background and text colors
  const getNavbarStyles = () => {
    if (location.pathname === '/') {
      // Home page
      if (isScrolled) {
        return {
          background: 'bg-white/95 backdrop-blur-md shadow-large',
          textColor: 'text-primary',
          hoverColor: 'hover:text-secondary hover:bg-primary/5'
        };
      } else {
        return {
          background: 'bg-transparent',
          textColor: 'text-white',
          hoverColor: 'hover:text-secondary hover:bg-white/10'
        };
      }
    } else {
      // Other pages - always have background for visibility
      return {
        background: 'bg-white/95 backdrop-blur-md shadow-large',
        textColor: 'text-primary',
        hoverColor: 'hover:text-secondary hover:bg-primary/5'
      };
    }
  };

  const navbarStyles = getNavbarStyles();

     return (
     <>
       {/* Desktop Navigation Bar */}
       <div 
         className={`fixed left-0 right-0 z-[100] transition-all duration-500 ${navbarStyles.background} hidden md:block`}
         style={{ top: getTopPosition() }}
       >
         <div className="container-padding">
           <div className="flex items-center justify-between py-4">
             {/* Logo */}
             <div className="flex items-center space-x-2 md:space-x-3">
               <div className="w-8 h-8 md:w-10 md:h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-medium border border-white/20 flex-shrink-0">
                 <img
                   src={logo}
                   alt="Dhanam School Logo"
                   className="w-6 h-6 md:w-8 md:h-8 object-contain"
                 />
               </div>
               <div className={`transition-all duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}>
                 <h3 className="font-display font-semibold text-xs sm:text-sm md:text-base lg:text-lg text-primary leading-tight">Dhanam Pachaiyappan</h3>
                 <p className="text-xs text-accent leading-tight">Matric Higher Secondary School</p>
               </div>
             </div>

             {/* Desktop Navigation */}
             <nav className="hidden md:flex items-center space-x-8">
               {navItems.map((item) => (
                 <Link
                   key={item.path}
                   to={item.path}
                   className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                     location.pathname === item.path
                       ? 'text-secondary bg-secondary/10 shadow-medium'
                       : `${navbarStyles.textColor} ${navbarStyles.hoverColor}`
                   }`}
                 >
                   {item.label}
                   {location.pathname === item.path && (
                     <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary rounded-full" />
                   )}
                 </Link>
               ))}
             </nav>

             {/* CTA Button */}
             <div className="hidden md:block">
               <Link to="/contact" className="btn-primary shadow-medium hover:shadow-large transition-all duration-300">
                 Apply Now
               </Link>
             </div>
           </div>
         </div>
       </div>

               {/* Mobile Top Navigation Bar */}
        <div className="md:hidden fixed top-0 left-0 right-0 z-[100] bg-white/95 backdrop-blur-md shadow-large">
          <div className="container-padding">
            <div className="flex items-center py-3">
              {/* Logo and School Name */}
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-medium border border-primary/20 flex-shrink-0">
                  <img
                    src={logo}
                    alt="Dhanam School Logo"
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-sm text-primary leading-tight">Dhanam Pachaiyappan</h3>
                  <p className="text-xs text-accent leading-tight">Matric Higher Secondary School</p>
                </div>
              </div>
            </div>
          </div>
        </div>

       {/* Mobile Bottom Navigation */}
       <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-primary/20 shadow-large">
         <div className="flex justify-around items-center py-2">
           {navItems.map((item) => (
             <Link
               key={item.path}
               to={item.path}
               className={`flex flex-col items-center py-3 px-2 rounded-lg transition-all duration-200 ${
                 location.pathname === item.path
                   ? 'text-secondary bg-secondary/10'
                   : 'text-primary hover:text-secondary hover:bg-primary/5'
               }`}
             >
               <span className="text-xl mb-1">{item.icon}</span>
               <span className="text-xs font-medium">{item.label}</span>
             </Link>
           ))}
         </div>
       </div>
     </>
   )
}

export default Navbar