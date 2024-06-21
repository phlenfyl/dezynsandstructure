import React, { useEffect, useState } from 'react'
import { ProductImage } from '@/app/api/auth/types';
import Image from 'next/image';

interface ImageCarouselProps {
    images: ProductImage[];
    baseUrl?: string;
}

export const Imagecarousel = ({ images, baseUrl = '' }: ImageCarouselProps) => {
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
            className="w-full max-h-[40em] lg:h-[35em] rounded-lg shadow-xl md:h-[20em] h-[15em] mb-10"
        />
    )
}
