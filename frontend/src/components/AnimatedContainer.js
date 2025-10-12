const AnimatedContainer = ({ children, delay = 0 }) => {
    return (
      <div 
        className="opacity-0 animate-fade-in"
        style={{ 
          animationDelay: `${delay}ms`,
          animationFillMode: 'forwards' 
        }}
      >
        {children}
      </div>
    );
  };
  
  export default AnimatedContainer;