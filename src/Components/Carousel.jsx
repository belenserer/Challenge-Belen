import React from "react";
import { useState, useEffect } from "react";
import Post from "./Post";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation, Pagination } from "swiper";
import s from "./CSS/Carousel.module.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useSwiper } from 'swiper/react';

export default function Carousel() {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    obtenerFotos();
  }, []);

  const obtenerFotos = async () => {
    const data = await fetch("https://picsum.photos/v2/list?page=2&limit=4");
    const photos = await data.json();
    /* console.log(pictures) */
    setPictures(photos);
  };




  return (
    <div>
        <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      /* onSlideChange={() => console.log()} */
    >
      {pictures.map((p, index) => {
            return (
              <SwiperSlide key={index}>
                {" "}
                <img
                  className={s.img}
                  src={p.download_url}
                  alt="image not found"
                />{" "}
              </SwiperSlide>
            );
          })}
    </Swiper>
    </div>
  );
};