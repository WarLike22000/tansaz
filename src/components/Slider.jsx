import React from 'react';
//assets
import img1 from '../assets/image1.jpg'
import img2 from '../assets/image2.jpg'
import img3 from '../assets/image3.jpg'
import img4 from '../assets/image4.jpg'

import { Pagination, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import styles from './Slider.module.css';

const Slider = () => {
    
    return (
        <div className={styles.container}>
        <Swiper
        effect={"coverflow"}
        grabCursor={true}
        slidesPerView={"auto"}
        coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
        }}
        pagination={{clickable: true}}
        loop={true}
        speed={700}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
         }}
         modules={[Autoplay, Navigation, Pagination]}
    >
      <SwiperSlide><img className={styles.image} src={img1} alt='img1' /></SwiperSlide>
      <SwiperSlide><img className={styles.image} src={img2} alt='img2' /></SwiperSlide>
      <SwiperSlide><img className={styles.image} src={img3} alt='img3' /></SwiperSlide>
      <SwiperSlide><img className={styles.image} src={img4} alt='img4' /></SwiperSlide>
    </Swiper>
    </div>
    );
};

export default Slider;