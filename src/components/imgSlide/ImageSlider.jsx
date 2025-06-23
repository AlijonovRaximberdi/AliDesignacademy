import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './ImageSlider.css';
import './ImageSlider1.css';


const ImageSlider = () => {
  const images = [
    '/images/img1.png',
    '/images/img2.png',
    '/images/img3.png',
    '/images/img4.png',
    '/images/img5.png'
  ];

  return (
    <div className="slider-wrapper">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 120,
          modifier: 2.5,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="slider-container"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="slider-slide">
            <img src={img} alt={`image-${index}`} className="slider-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
