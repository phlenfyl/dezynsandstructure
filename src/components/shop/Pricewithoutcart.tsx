import Link from 'next/link'
import React from 'react'

export default function Price() {
  return (
    <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
            <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-[#451606] sm:text-3xl">
                Pricing Plans
            </h2>
            <p className="mt-4 text-xl text-gray-400">
                Simple, transparent pricing for your business needs.
            </p>
            </div>
            {/* <p className="mt-4">Get started with our basic features.</p> */}

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5">

                <div className="bg-cyan-950 opacity-[20px] text-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold uppercase">Premium plus</h3>
                    </div>
                    <div className="mb-8">
                        <span className="text-3xl font-extrabold">₦2m</span>
                    </div>
                    <ul className="mb-8 space-y-4">
                        <li className="flex flex-col gap-3">
                            <span>3D interior and exterior full view</span>
                            <span>full working drawing with approval stamp</span>
                            <span>letter of undertaking</span>
                            <span>practice licence</span>
                            <span>raw design file</span>
                            <span>BOQ</span>
                        </li>
                    </ul>
                    <Link href="/shop" className="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-transparent border border-white hover:bg-white hover:text-[#451606] hover:border hover-border-[#451606]">
                     Get Started
                    </Link>
                </div>

                <div className="bg-emerald-600 opacity-[20px] text-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-white uppercase">Premium</h3>
                    </div>
                    <div className="mb-8">
                        <span className="text-3xl font-extrabold text-white">₦1</span>
                    </div>
                    <ul className="mb-8 space-y-4">
                        <li className="flex flex-col gap-3">
                            <span>BOQ</span>
                            <span>3D interior and exterior full view</span>
                            <span>full working drawing</span>
                        </li>
                    </ul>
                    <Link href="/shop" className="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-transparent border border-white hover:bg-white hover:text-[#451606] hover:border hover-border-[#451606] font-medium0">
                        Get Started
                    </Link>
                </div>

                <div className="bg-yellow-500 opacity-[20px] text-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-white uppercase">Standard</h3>
                    </div>
                    <div className="mb-8">
                        <span className="text-3xl font-extrabold text-white">₦500k</span>
                    </div>
                    <ul className="mb-8 space-y-4">
                        <li className="flex flex-col gap-3">
                            <span>Summarized BOQ</span>
                            <span>full working drawing</span>
                            <span>3D exterior view</span>
                        </li>
                    </ul>
                    <Link href="/shop" className="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-transparent border border-white hover:bg-white hover:text-[#451606] hover:border hover-border-[#451606] font-medium0">
                        Get Started
                    </Link>
                </div>

                <div className="bg-orange-600 opacity-[20px] text-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-white uppercase">Regular</h3>
                    </div>
                    <div className="mb-8">
                        <span className="text-3xl font-extrabold text-white">₦200k</span>
                    </div>
                    <ul className="mb-8 space-y-4">
                        <li className="flex flex-col gap-3">
                            <span>full working drawing</span>
                            <span>3D front view only</span>
                        </li>
                    </ul>
                    <Link href="/shop" className="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-transparent border border-white hover:bg-white hover:text-[#451606] hover:border hover-border-[#451606] font-medium0">
                        Get Started
                    </Link>
                </div>

                <div className="bg-stone-500 opacity-[20px] text-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-white uppercase">Subscribe</h3>
                    </div>
                    <ul className="mb-8 space-y-4">
                        <li className="flex flex-col gap-3">
                            <span>Get unlimited drawing</span>
                            <span>Choose from our package</span>
                        </li>
                    </ul>
                    <div className="mb-8">
                        <span className="text-1xl font-extrabold text-white">$500</span>
                        <span className="text-xl font-medium text-gray-400">/mo</span>
                    </div>
                    <div className="mb-8">
                        <span className="text-1xl font-extrabold text-white">$3000</span>
                        <span className="text-xl font-medium text-gray-400">/quater</span>
                    </div>
                    <div className="mb-8">
                        <span className="text-1xl font-extrabold text-white">$10,000</span>
                        <span className="text-xl font-medium text-gray-400">/yr</span>
                    </div>
                    <Link href="/shop" className="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-transparent border border-white hover:bg-white hover:text-[#451606] hover:border hover-border-[#451606] font-medium0">
                        Contact Sales
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}
