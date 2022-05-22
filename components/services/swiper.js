import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper'

export default function SwiperComponent() {
  const Images = [
    {
      id: 1,
      name: 'Plaine verte',
      src: '/img/swiper/swiper1.jpg',
      title: 'Être sophrologue',
      description:
        'Le métier de sophrologue comporte deux activités : animer des séances et élaborer des parcours d’accompagnement adaptés à chacun de ses clients.'
    },
    {
      id: 2,
      name: 'Bureau de travail',
      src: '/img/swiper/swiper2.jpg',
      title: 'Qu’est-ce que c’est la sophrologie ?',
      description:
        'Les moyens de la sophrologie : une respiration contrôlée pour une meilleure gestion de émotions, une détente musculaire pour solliciter le relâchement mental, des visualisation positives pour reprogrammer les pensées.'
    },
    {
      id: 3,
      name: 'Bureau',
      src: '/img/swiper/swiper3.jpg',
      title: 'Le saviez-vous ?',
      description: 'Le sophrologue est un thérapeute qui utilise la sophrologie comme outil.'
    },
    {
      id: 4,
      name: 'Bol tibétain',
      src: '/img/swiper/swiper4.jpg',
      title: 'Pour qui ?',
      description: 'Pour toutes et tous : enfants, jeunes ados, jeunes adultes, adultes, seniors…'
    }
  ]
  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff'
        }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {Images.map((image) => (
          <SwiperSlide key={image.name}>
            <div
              key={image.id}
              style={{
                backgroundImage: `url(${image.src})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
              className="lg:p-36"
            >
              <div className="p-10 bg-white/90 rounded-xl rounded-bl-none text-dta_graydark w-[100vw] md:max-w-[40vw]">
                <p className="whitespace-nowrap font-semibold">{image.title}</p>
                <p>{image.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
