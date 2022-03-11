import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// import required modules
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper";

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
  ];
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        effect={"fade"}
        navigation={true}
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {Images.map((image) => (
          <SwiperSlide>
            <div
              key={image.name}
              style={{
                backgroundImage: `url(${image.src})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <p className="p-20">
                Lorem etum latum
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
