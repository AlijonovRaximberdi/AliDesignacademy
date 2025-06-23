import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // ← shu qator muhim

import './VideoSlider.css';
import './VideoSlider1.css';

const videos = ['/rek.mp4', '/rek2.mp4', '/rek3.mp4'];

const VideoSlider = () => {
  const [loading, setLoading] = useState(true);

  const handleLoadedData = () => {
    setLoading(false);
  };

  return (
    <div className="video-slider">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true} // ← navigatsiya tugmalari yoqildi
        modules={[Pagination, Navigation]}
        
        className="video-swiper"
      >
        {videos.map((src, index) => (
          <SwiperSlide key={index} className="video-slide">
            <div className="video-card">
              {loading && <div className="video-placeholder"></div>}
              <video
                controls
                className="video-player"
                onLoadedData={handleLoadedData}
                poster="/loading.jpg"
              >
                <source src={src} type="video/mp4" />
                Brauzeringiz videoni ko‘rsatmaydi.
              </video>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VideoSlider;
