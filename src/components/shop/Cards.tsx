import React from 'react'
import Image from 'next/image'


const card = [
    {
        id: 1,
        image: "/master.png",
        title: "Master",
        link: "/shop/duplex",
    },
    {
        id: 2,
        image: "/living.png",
        title: "Living",
        link: "/shop/bungalow",
    },
    {
        id: 3,
        image: "/dining.png",
        title: "Dining",
        link: "/shop/school",
    },
    {
        id: 4,
        image: "/exterior.png",
        title: "Exterior",
        link: "/shop/flats",
    },
];

export default function Cards() {
  return (
    <div>
        <div className="mostsearched pb-[5em]">
            <div className=''>
                <div className="seached bg-[#451606] py-4 text-center text-white font-medium">
                    <p>Most Searched</p>
                </div>


                <div className="cards flex flex-wrap flex-col md:flex-row lg:items-center md:justify-center lg:justify-between p-4 mt-3 lg:gap-0 gap-8">
                    {card.map((item) => (
                        <div className="mainCard" key={item.id}>
                            <div className="imageCard pb-5">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={200}
                                    height={200}
                                    className='h-[13em] md:h-[10em] w-full rounded-xl shadow-lg'
                                />
                            </div>

                            <a href={item.link} className='text-[#451606] bg-transparent border border-[#451606] py-2 px-2 rounded-lg'>
                                Click here to view all
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}
