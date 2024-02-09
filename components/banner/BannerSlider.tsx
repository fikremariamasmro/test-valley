"use client";

import { IBanner } from '@/types/BannerTypes';
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { fetchBanners } from '@/services/BannerService';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import "./Banner.css"


const BannerSlider = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [banners, setBanners] = useState<IBanner[]>();

  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth < 768; // You can adjust the breakpoint as needed
      setIsMobile(isMobileView);
    };
    const loadBanners = async () => {
      const data = await fetchBanners();
      setBanners(data);
    };

    loadBanners();

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='md:pt-12 pt-14'>
      <Swiper
        navigation
        initialSlide={isMobile ? 1 : 3}
        spaceBetween={isMobile ? 0 : 50}
        slidesPerView={isMobile ? 0 : 1.8}
        centeredSlides={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Navigation, Pagination, Autoplay]}
      >

        {banners?.map((banner: IBanner) => (
          <SwiperSlide key={banner.mainBannerId}>
            <img src={banner.pcImageUrl} alt={`${banner.title}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;


