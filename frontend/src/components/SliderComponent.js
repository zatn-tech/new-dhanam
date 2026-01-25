import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = ({ onClick }) => (
  <button
    aria-label="Next"
    onClick={onClick}
    className="hidden md:flex absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-primary w-8 h-8 md:w-10 md:h-10 rounded-full shadow-medium items-center justify-center transition-colors"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-5 md:h-5">
      <path fillRule="evenodd" d="M8.47 3.97a.75.75 0 011.06 0l6.5 6.5a.75.75 0 010 1.06l-6.5 6.5a.75.75 0 11-1.06-1.06L14.94 12 8.47 5.53a.75.75 0 010-1.06z" clipRule="evenodd" />
    </svg>
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    aria-label="Previous"
    onClick={onClick}
    className="hidden md:flex absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-primary w-8 h-8 md:w-10 md:h-10 rounded-full shadow-medium items-center justify-center transition-colors"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-5 md:h-5">
      <path fillRule="evenodd" d="M15.53 20.03a.75.75 0 01-1.06 0l-6.5-6.5a.75.75 0 010-1.06l6.5-6.5a.75.75 0 111.06 1.06L9.06 12l6.47 6.47a.75.75 0 010 1.06z" clipRule="evenodd" />
    </svg>
  </button>
);

const SliderComponent = ({ slides = [] }) => {
  if (!Array.isArray(slides) || slides.length === 0) {
    return (
      <div className="text-center text-primary/70">Achievements will be updated soon.</div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: dots => (
      <div>
        <ul className="!m-0 !p-0 flex items-center justify-center gap-2 mt-4">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <span className="block w-2.5 h-2.5 rounded-full bg-primary/30 hover:bg-primary/60 transition-colors"></span>
    ),
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <section className="relative overflow-hidden rounded-3xl">
              {/* Background gradient and subtle pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90"></div>
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='50' cy='50' r='3'/%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3Ccircle cx='80' cy='80' r='2'/%3E%3Ccircle cx='20' cy='80' r='2'/%3E%3Ccircle cx='80' cy='20' r='2'/%3E%3C/g%3E%3C/svg%3E\")",
                }}
              />

              <div className="relative grid lg:grid-cols-2 gap-6 md:gap-8 items-stretch lg:items-center p-4 md:p-6 lg:p-10">
                {/* Content */}
                <div className="order-2 lg:order-1 text-white flex flex-col justify-center">
                  <div className="inline-flex items-center bg-white/10 border border-white/20 text-white px-3 py-1 rounded-full text-xs font-medium mb-4 backdrop-blur-sm">
                    🏆 Achievement
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold leading-tight mb-3 text-secondary drop-shadow">
                    {slide.topic || 'Student Achievement'}
                  </h3>
                  <p className="text-white/90 leading-relaxed md:text-lg">
                    {slide.description}
                  </p>
                </div>

                {/* Image */}
                <div className="order-1 lg:order-2 flex justify-center items-stretch w-full lg:w-auto">
                  <div className="relative rounded-2xl overflow-hidden shadow-large w-full max-w-md h-[400px] md:h-[450px] lg:aspect-[4/3] lg:h-auto">
                    <img
                      src={`https://dhanamschool.com/files/${slide.file}`}
                      alt={slide.topic || 'Achievement'}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </div>
              </div>
            </section>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
