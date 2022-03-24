import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function SwiperComponent() {
  const Images = [
    {
      name: "Méditation",
      src: "/img/swiper/swiper1.jpg",
      title: "titre",
      description: "Lorem ipsum latum latum",
    },
    {
      name: "Bol tibétain",
      src: "/img/swiper/swiper2.jpg",
      title: "titre",
      description: "Lorem ipsum latum latum",
    },
    {
      name: "Cristaux",
      src: "/img/swiper/swiper3.jpg",
      title: "titre",
      description: "Lorem ipsum latum latum",
    },
    {
      name: "Femme sur son ordinateur",
      src: "/img/swiper/swiper4.jpg",
      title: "titre",
      description: "Lorem ipsum latum latum",
    },
  ];
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {Images.map((image) => (
          <SwiperSlide key={image.name}>
            <div
              key={image.name}
              style={{
                backgroundImage: `url(${image.src})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="lg:p-36"
            >
              <div className="p-20 bg-white/50 w-[100vw] md:max-w-min">
                <p className="whitespace-nowrap">Lorem etum latum him</p>
                <p>{image.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
