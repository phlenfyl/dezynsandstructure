"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { initFlowbite } from 'flowbite';



const projects = [
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
      id: 5,
      image: "/duplex.png",
      title: "Duplex",
    },
    {
      id: 6,
      image: "/BORISADE.jpg",
      title: "BORISADE",
    },
    {
      id: 7,
      image: "/hotel.jpg",
      title: "Hotel",
    },
    {
      id: 8,
      image: "/dns1.jpg",
      title: "Exterior",
    },
    {
      id: 9,
      image: "/dns2.jpg",
      title: "Exterior",
    },
    {
      id: 10,
      image: "/dns3.jpg",
      title: "Exterior",
    },
    {
      id: 11,
      image: "/dns4.jpg",
      title: "Exterior",
    },
    {
      id: 12,
      image: "/dns5.jpg",
      title: "Exterior",
    },
    {
      id: 13,
      image: "/dns6.jpg",
      title: "Exterior",
    },
    {
      id: 14,
      image: "/dns7.jpg",
      title: "Exterior",
    },
    {
      id: 15,
      image: "/dns8.jpg",
      title: "Exterior",
    },
    {
      id: 16,
      image: "/dns9.jpg",
      title: "Exterior",
    },
    {
      id: 17,
      image: "/dns10.jpg",
      title: "Exterior",
    },
    {
      id: 18,
      image: "/dns11.jpg",
      title: "Exterior",
    },
    {
      id: 19,
      image: "/owerri.jpg",
      title: "Owerri",
    },
    {
      id: 20,
      image: "/sky.jpg",
      title: "Sky",
    },
];


export default function Projectbody() {
    useEffect(() => {
        initFlowbite();
    }, []);
    return (
        <div className='h-screen'>
            <div>
                <div className="relative w-full mx-auto text-center mb-10">
                    <Image className="h-44 w-full object-cover" width={1000} height={1000} src="/duplex.png" alt="Random image"/>
                    <div className="absolute inset-0 bg-[#451606] opacity-60"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h2 className="text-white text-base md:text-[26px] md:leading-[34px] font-semibold md:w-8/12">
                            Architectural firm Interior design exterior design, construction house project time
                            Some Of Our Projects
                        </h2>
                    </div>
                </div>

                <div>
                    <div className="mb-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                        <ul className="flex -mb-px text-sm font-medium mx-auto items-center justify-center" id="default-styled-tab" data-tabs-toggle="#default-styled-tab-content" data-tabs-active-classes="text-[#451606] hover:text-[#451606] dark:hover:text-[#451606] border-[#451606] dark:border-[#451606]" data-tabs-inactive-classes="dark:border-[#451606] text-gray-500 hover:text-[#451606] border-gray-100 hover:border-[#451606]" role="tablist">
                            <li className="me-2" role="presentation">
                                <button className="inline-block p-4 border-b-2 rounded-t-lg" id="profile-styled-tab" data-tabs-target="#styled-profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Our Projects</button>
                            </li>
                            <li className="me-2" role="presentation">
                                <button className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-styled-tab" data-tabs-target="#styled-dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">DNStructure Lagos</button>
                            </li>
                        </ul>
                        <div>
                            <form className="max-w-2xl w-auto md:w-[25em] px-4">
                                <div className="relative">
                                    <input type="text" name="q" className="w-full border h-12 shadow p-4 rounded-full dark:text-gray-800 dark:border-gray-700 dark:bg-gray-200" placeholder="search"/>
                                    <button type="submit">
                                        <svg className="text-[#451606] h-5 w-5 absolute top-3.5 right-3 fill-current dark:text-[#451606] projectsearch"
                                            xmlns="http://www.w3.org/2000/svg"  version="1.1"
                                            x="0px" y="0px" viewBox="0 0 56.966 56.966">
                                            <path
                                                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z">
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div id="default-styled-tab-content">
                        <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800 " id="styled-profile" role="tabpanel" aria-labelledby="profile-tab">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-0 lg:mx-44">
                                {projects.map((item) => (
                                    <div key={item.id}>
                                        <Image width={1000} height={1000} className="h-auto w-auto md:max-w-full rounded-lg" src={item.image} alt={item.title}/>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Coming Soon
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
