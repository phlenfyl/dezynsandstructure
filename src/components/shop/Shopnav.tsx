"use client"
import React, { useEffect } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { initFlowbite } from 'flowbite'

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
      image: "/x.png",
      title: "twitter",
    },
    {
      id: 4,
      image: "/indium_.png",
      title: "linkdeln",
    },
];

export default function Shopnav() {
    useEffect(() => {
        initFlowbite();
    }, []);
    return (
        <div>
            <nav className="bg-white md:bg-[#451606] border-gray-200">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl text-[0.2em] p-4 md:text-base">
                    <div className="hidden md:block">
                        <div className="flex items-center space-x-3">
                            <svg className="w-5 h-5 text-[#FE1846]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clipRule="evenodd"/>
                            </svg>
                            <small className="self-center text-[13px] font-medium whitespace-nowrap text-white leading-[16px]">
                                13, Golden Ray Estate beside Readington school, <br />
                                Olokonla, Lekki-Epe Express way, Lagos State.
                            </small>
                        </div>
                    </div>
                    <div className="block md:hidden">
                        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <Image src="/logo.jpg" className="h-10" alt="dnstruture logo" width={100} height={100} />
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className='flex items-center space-x-3 mr-24'>
                            <svg className="w-4 h-4 text-[#FE1846]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z"/>
                            </svg>
                            <a href="tel:+2348126803753" className="text-white">
                                <span className='text-[13px]'>
                                    08126803753
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center space-x-6 rtl:space-x-reverse">
                        {social.map((item) => (
                            <div key={item.id} className='w-full md:w-auto rounded-full bg-rose-900'>
                                <Link href="#" className="leading-8">
                                    <Image src={item.image} alt={item.title} width={15} height={15} className=''/>
                                </Link>
                            </div>

                        ))}
                    </div>
                </div>
            </nav>
            <nav className="bg-gray-50 shadow-xl border-y">
                <div className="max-w-screen-xl px-4 py-3 mx-auto flex flex-wrap items-center justify-between">
                    <div>
                        <div className="hidden md:block ml-5">
                            <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                                <Image src="/logo.jpg" className="h-10" alt="dnstruture logo" width={150} height={170} />
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center md:bg-transparent dark:bg-gray-800 mr-6">
                        <ul className="flex flex-row font-medium mt-0 space-x-6 md:space-x-8 rtl:space-x-reverse text-[10.5px] lg:text-sm md:text-xs">
                            <li>
                                <a href="/" className="md:text-gray-900 text-[#451606] md:hover:text-red hover:underline hover:decoration-[#451606] font-semibold">Home</a>
                            </li>
                            <li>
                                <a href="/shop" className="md:text-gray-900 text-[#451606] md:hover:text-red hover:underline hover:decoration-[#451606] font-semibold">Architectural Shop</a>
                            </li>
                            <li>
                                <a href="/projects" className="md:text-gray-900 text-[#451606] md:hover:text-red hover:underline hover:decoration-[#451606] font-semibold">Our Projects</a>
                            </li>
                            <li>
                                <a href="/about" className="md:text-gray-900 text-[#451606] md:hover:text-red hover:underline hover:decoration-[#451606] font-semibold">About Us</a>
                            </li>
                            <li>
                                <a href="/contact" className="md:text-gray-900 text-[#451606] md:hover:text-red hover:underline hover:decoration-[#451606] font-semibold">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
