"use client"
import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { initFlowbite } from 'flowbite';
import Modal from 'flowbite';


interface Slide {
    id: number;
    image: string;
    title: string;
    name: string;
    info: string;
    smallprice: number;
    largeprice: number;
}

interface InlineStyles {
    [key: string]: React.CSSProperties;
}

interface CarouselProps {
    slides: Slide[];
    spaceBetween?: number;
    slidesPerView?: number;
    centered?: boolean;
    effect?: 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip';
    autoplayDelay?: number;
    loop?: boolean;
    width?: number;
    heigth?: number;
    classname?: string;
    classnamebody?: string;
    inlineSwiper?: React.CSSProperties;
    inlineSwiperSlideStyle?: React.CSSProperties;
    inlineImageStyle?: React.CSSProperties;

}

export default function Swipers({ 
    slides, spaceBetween = 19, classname='w-1/2', 
    width=100, heigth=100, slidesPerView = 1, centered = true, 
    effect = 'fade', autoplayDelay = 4500, loop = true,
    inlineSwiper, inlineSwiperSlideStyle, inlineImageStyle,
    classnamebody='',
}: CarouselProps) {
    useEffect(() => {
        initFlowbite();
    }, []);
    const [visible, setVisible] = useState(false)

    const toggleModal = () => {
        setVisible(!visible);
    };
    return (
    <>
        <Swiper
            spaceBetween={spaceBetween}
            slidesPerView={slidesPerView}
            effect={effect}
            centeredSlides={centered}
            autoplay={{
            delay: autoplayDelay,
            disableOnInteraction: false,
            }}
            loop={loop}
            // navigation={true}
            pagination={{
                clickable: true,
            }}
            modules={[Autoplay, EffectFade, Pagination]}
            className="mySwiper"
            style={inlineSwiper}
        >
            {slides.map((item) => (
                <SwiperSlide key={item.id} style={inlineSwiperSlideStyle}>
                    <Image alt={item.title} width={width} height={heigth} src={item.image} className={classname} style={inlineImageStyle} />
                </SwiperSlide>
            ))}
            {slides.map((item) => (
                <>
                    <div className={classnamebody}>
                        <div className='mx-10'>
                            <p className='font-sans max-w-[50em] pb-2 text-base'>
                                {item.name}
                            </p>
                            <div className='flex item-center justify-between text-white'>
                                <button onClick={() => setVisible(true)} data-modal-target="large-modal" data-modal-toggle="large-modal" className="block text-white border-0 uppercase" type="button">
                                    Drawing Info
                                </button>
                                <div className='flex flex-col'>
                                    <div className='flex gap-3'>
                                        <Link  href={""} className='underline'>
                                            <small>
                                                View Floor Plans and Summarized BOQ: 
                                            </small>
                                        </Link>
                                        <span>
                                            ₦{item.smallprice}
                                        </span>
                                    </div>

                                    <div className="flex gap-3">
                                        <Link  href={""} className='underline'>
                                            <small>
                                                BUY THE FULL WORKING DRAWINGS:
                                            </small>
                                        </Link>
                                        <span>
                                            ₦{item.largeprice}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {visible && (
                        <div id="large-modal" aria-hidden={!visible} className="z-[100] overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 flex justify-center items-center w-screen h-screen bg-gray-800 bg-opacity-50">
                            <div className="relative p-4 w-full max-w-2xl max-h-full">
                                <div className="relative bg-white rounded-lg shadow">
                                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                            Drawing Details
                                        </h3>
                                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={toggleModal}>
                                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                            </svg>
                                            <span className="sr-only">Close modal</span>
                                        </button>
                                    </div>
                                    <div className="p-4 md:p-5 space-y-4">
                                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                            {item.info}
                                        </p>
                                    </div>
                                    <div className="flex justify-between items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                        <Link href="" onClick={toggleModal} type="button" className="text-white bg-[#451606] focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">View Floor Plans and Summarized BOQ</Link>
                                        <Link href="" onClick={toggleModal} type="button" className="py-2.5 px-5 ml-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-[#451606] focus:z-10 focus:ring-4">BUY THE FULL WORKING DRAWINGS</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </>
                
            ))}
        {/* {slides.map((item) => (

        ))} */}
        </Swiper>
    </>
    )
}
