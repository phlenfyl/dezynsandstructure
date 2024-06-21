import Link from 'next/link';
import React from 'react'
import Image from 'next/image';

const social = [
    {
      id: 1,
      image: "/facebook.png",
      title: "facebook",
    },
    {
      id: 2,
      image: "/instagram.png",
      title: "instagram",
    },
    {
      id: 3,
      image: "/twitter.png",
      title: "twitter",
    },
    {
      id: 4,
      image: "/linkdeln.png",
      title: "linkdeln",
    },
];

export default function Bottom() {
  return (
    <div className='bg-black'>
        <div className='md:py-7 py-10'>
            <div className='flex flex-col md:flex-row md:items-center text-center md:text-start text-white md:justify-between mx-auto md:mx-12'>
                <div className='flex flex-col md:basis-1/2 text-[15px] w-screen md:w-auto'>
                  <p className=''>
                    © Dezyns <span className="text-[13px]">&</span> Structure Ltd. All Rights Reserved.
                  </p>
                </div>

                <div className="w-1/2 md:w-auto text-xl mx-auto md:mx-0">
                    <ul className="font-medium flex p-4 md:p-0 md:ml-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:bg-transparent">
                        {social.map((item) => (
                            <li key={item.id} className='w-full md:w-auto rounded-full'>
                                <Link href="#" className="leading-8">
                                    <Image src={item.image} alt={item.title} width={20} height={20} className=''/>
                                </Link>
                            </li>

                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
