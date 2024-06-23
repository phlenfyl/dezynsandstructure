import React, { useEffect, useState } from 'react'
import { ProductImage, ComingSoon } from '@/app/api/auth/types';
import Image from 'next/image';

interface ImageCarouselProps {
    images: ProductImage[] | ComingSoon[];
    baseUrl?: string;
    classname?: string;
}

export const Imagecarousel = ({ images, baseUrl = '', classname = '' }: ImageCarouselProps) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
      }, 3000); // Change image every 3 seconds
  
      return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, [images.length]);
    return (
        <Image
            src={`${baseUrl}${images[currentImageIndex].image}`}
            alt={images[currentImageIndex].alt_text}
            width={1200}
            height={1000}
            priority
            className={classname}
        />
    )
}
