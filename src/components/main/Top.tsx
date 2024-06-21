import React, { useEffect } from 'react'
import Link from "next/link";
import Image from "next/image";
import { initFlowbite } from 'flowbite';

export default function Top() {
    useEffect(() => {
        initFlowbite();
    }, []);
    return (
        <div>
            <nav className="border-gray-200 bg-transparent fixed w-screen top-4 md:top-12 z-[90]">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link href="/" className="flex items-center ml-10 space-x-3 rtl:space-x-reverse hidden md:block">
                        <Image src="/logo.jpg" className="h-10" alt="dnstruture logo" width={90} height={50} />
                    </Link>
                    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse block md:hidden">
                        <Image src="/logo.jpg" className="h-10" alt="dnstruture logo" width={140} height={140} />
                    </Link>
                    <button data-collapse-toggle="navbar-hamburger" type="button" className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-[#451606] rounded-lg hover:bg-rose-900 mr-5 md:mr-28" aria-controls="navbar-hamburger" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                    <div className="hidden w-full" id="navbar-hamburger">
                        <ul className="flex flex-col font-medium mt-4 rounded-lg bg-white z-[90] dark:border-gray-700 shadow-xl rounded-lg ml-2">
                            <li>
                                <a href="/" className="block py-2 px-3 md:p-0 bg-[#451606] text-white font-bold " aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="/about" className="block py-2 px-3 text-[#451606] rounded md:hover:text-white md:hover:bg-[#451606] font-bold md:border-0 md:p-0">About</a>
                            </li>
                            <li>
                                <a href="/shop" className="block py-2 px-3 text-[#451606] font-bold rounded md:hover:text-white md:hover:bg-[#451606] md:border-0 md:p-0">Architectural Shop</a>
                            </li>
                            <li>
                                <a href="/projects" className="block py-2 px-3 text-[#451606] font-bold rounded md:hover:text-white md:hover:bg-[#451606] md:border-0 md:p-0">Our Project</a>
                            </li>
                            <li>
                                <a href="/contact" className="block py-2 px-3 text-[#451606] font-bold rounded md:hover:text-white md:hover:bg-[#451606] md:border-0 md:p-0">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
