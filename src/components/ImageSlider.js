import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const ImageSlider = ({ images }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000, // Time in milliseconds between slides
        disableOnInteraction: false, // Continue autoplay after user interaction
      }}
      spaceBetween={30}
      slidesPerView={1}
      className="w-full  custom-swiper"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full md:h-[580px]" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
