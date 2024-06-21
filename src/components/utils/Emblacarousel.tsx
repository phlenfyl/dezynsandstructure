import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

interface slide {
  id: number;
  image: string;
  title: string;
}

type PropType = {
  slides: slide[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index.id}>
              <Image alt={index.title} width={1000} height={1000} src={index.image} className='embla__slide__number' />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
