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
  const [banners, setBanners] = useState<IBanner[]>();

  useEffect(() => {
    const loadBanners = async () => {
      const data = await fetchBanners();
      setBanners(data);
    };

    loadBanners();
  }, []);

  return (
    <div className='pt-12'>
      <Swiper
        navigation
        initialSlide={3}
        spaceBetween={50}
        slidesPerView={1.8}
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


