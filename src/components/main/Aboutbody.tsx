import React from 'react'
import Image from 'next/image'

export default function Aboutbody() {
    return (
        <div className="bg-transparent pb-16">
            <section id="features"
                className="relative block px-6 py-6 md:px-10">

                <div className="relative max-w-5xl ml-0 lg:ml-3">
                    <span className="text-[#451606] my-3 flex items-center justify-start font-semibold text-xl md:text-2xl lg:text-4xl tracking-wider">
                        About Dezyns <span className="text-[13px] md:text-[17px] -mb-2 md:-mb-4 px-2"> & </span> Structure
                    </span>
                    <small className='text-[13px] md:text-[18px] leading-[10px] text-gray-400 text-start'>
                        Welcome to <span className='text-[#451606] font-semibold text-base md:text-lg'>Dezyns <span className="text-[13px]">&</span> Structure</span> - We Listen and Execute
                    </small>

                    <section className="py-14 lg:py-24 relative mt-0 md:mt-6">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-0 lg:px-8 relative ">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
                                <div className="img-box md:pt-16">
                                    <Image src="/about1.jpg" width={2000} height={2000} alt="About Us tailwind page"
                                        className="max-lg:mx-auto h-[28vh] md:h-auto lg:h-[50vh] rounded-lg"/>
                                </div>
                                <div className="lg:pl-[30px] flex items-center justify-center">
                                    <div className="data w-full">
                                        <h2
                                            className="font-manrope font-bold text-2xl lg:text-4xl bg-gradient-to-b from-white to-[#451606] bg-clip-text text-[#451606] mb-4 max-lg:text-center mx-auto relative">
                                            About
                                            Us </h2>
                                        <p className="font-normal md:hidden block lg:block text-base leading-8 text-gray-500 max-lg:text-center w-full lg:w-[23em] xl:w-[30em] text-wrap mx-auto">
                                            We are located in Lagos and founded in 2010. We Dezyns and Structures Ltd provides Architectural design, 
                                            construction service, interior decorations, short letting, consultancy for a wide variety of  
                                            public clients. Our type of work are extremely  diverse in terms of projects types and departments. 
                                            This is as a result of our commitment in ensuring that we deliver our designs from paper to real life 
                                            just the way it was designed.We embrace this diversity as a core strength and have organized our workers/team 
                                            of experts in a way that there is always the top expert you can get in every building department.
                                        </p>
                                        <p className="font-normal md:block hidden lg:hidden text-base leading-8 text-gray-500 max-lg:text-center w-full lg:w-[30em] text-wrap mx-auto">
                                            Dezyns <span className="text-[13px]">&</span> Structures Ltd is a Lagos-based company founded in 2010 that provides a wide range of 
                                            design and construction services, from architecture and interior design to construction and 
                                            consultancy. Their commitment to delivering high-quality projects and their team of experts in 
                                            every department allows them to handle diverse projects and ensure client satisfaction
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>





                <div className="">
                    <h2
                        className="uppercase text-center block w-full mb-4 bg-gradient-to-b from-white to-[#451606] bg-clip-text text-[#451606] font-bold text-xl sm:text-2xl">
                        Our Services
                    </h2>
                    <p
                        className="my-4 md:w-1/2 w-auto leading-[32px] bg-transparent mx-auto text-center font-medium leading-relaxed tracking-wide text-sm text-gray-900 font-medium">
                            We are dedicated to building excellence at every stage of the development process
                    </p>
                    <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-6 md:pt-14 sm:grid-cols-2 lg:grid-cols-2">
                        <div className="rounded-md border border-neutral-800 bg-black p-8 text-start shadow hover:bg-[#550300] hover:text-center hover:border-b hover:border-black">
                            <h3 className="mt-6 text-gray-400 text-xl uppercase font-semibold text-center">Architectural</h3>
                            <p className=" my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                                Dezyns and structures understanding of architecture resides in the creation of the 
                                fine art and methodic science of designing buildings and spaces that will have a profound 
                                improvement on people&nbsp;s lifestyles and businesses. Our architecture is uniquely matched to each 
                                project but always seeks to combine beauty and meaning by placing people at the center of the design
                            </p>
                        </div>
                        <div className="rounded-md border border-neutral-800 bg-black p-8 text-start shadow hover:bg-[#550300] hover:text-center hover:border-b hover:border-black">
                            <h3 className="mt-6 text-gray-400 text-xl uppercase font-semibold text-center">Construction</h3>
                            <p className=" my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                            As a renowned construction company that is well established in design, installation and management of 
                            building services, we ensure all the right boxes are ticked in attending to our clients request.
                            With relevant years of experience, we have the right professional depth and standard to deliver the best 
                            building services engineering in the world.
                            </p>
                        </div>
                        <div className="rounded-md border border-neutral-800 bg-black p-8 text-start shadow hover:bg-[#550300] hover:text-center hover:border-b hover:border-black">
                            <h3 className="mt-6 text-gray-400 text-xl uppercase font-semibold text-center">Interior Design</h3>
                            <p className=" my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                                Architectural design and Interior design are indivisible, the one is the consequence of the other. 
                                The power of interior design is such that it can improve people’s health and wellbeing, can facilitate 
                                action in passive environments and can promote businesses and brands. We believe in providing bespoke 
                                Interior designs that target who the client is, delighting with detail, carefully defined combinations of 
                                materials, functionality, and aesthetic appeal.
                            </p>
                        </div>
                        <div className="rounded-md border border-neutral-800 bg-black p-8 text-start shadow hover:bg-[#550300] hover:text-center hover:border-b hover:border-black">
                            <h3 className="mt-6 text-gray-400 text-xl uppercase font-semibold text-center">Consulting</h3>
                            <p className=" my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                                Our consultancy provide our partners with the intellect, resources and capabilities to identify 
                                previously unseen problems, rectify business deficiencies, design and implement new systems and revenue 
                                streams, and ultimately, make organisations more efficient and rewarding for their employees, external 
                                partners and customers
                            </p>
                        </div>


                    </div>
                </div>

            </section>
        </div>
    )
}
