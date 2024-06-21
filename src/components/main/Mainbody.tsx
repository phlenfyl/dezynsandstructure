import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from "next/image";
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';
import styles from './Mainbody.module.css';

const carousel = [
    {
      id: 1,
      image: "/master.png",
      title: "Master",
    },
    {
      id: 2,
      image: "/living.png",
      title: "Living",
    },
    {
      id: 3,
      image: "/dining.png",
      title: "Dining",
    },
    {
      id: 4,
      image: "/exterior.png",
      title: "Exterior",
    },
    {
      id: 3,
      image: "/duplex.png",
      title: "Duplex",
    },
];


export default function Mainbody() {
    return (
        <div className={styles.container}>
            <Swiper
                spaceBetween={10}
                slidesPerView={1}
                effect={'fade'}
                centeredSlides={true}
                autoplay={{
                delay: 4500,
                disableOnInteraction: false,
                }}
                loop={true}
                // navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, EffectFade, Pagination]}
                className="myswiper"
            >
                {carousel.map((item) => (
                    <SwiperSlide key={item.id}>
                        <Image alt={item.title} width={1000} height={1000} src={item.image} className='w-full' />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
      );
}
