function Banner () {
     return(
      <div>
        <section className="relative max-h-[100px] bg-[url(/duplex.png)] md:py-20 bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-[#1B1F26] opacity-60"></div>
          <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:flex lg:h-screen lg:justify-between lg:px-8">
            <div className="mx-auto">
              <h1 className="text-base md:text-[28px] py-10 md:py-0 font-extrabold sm:text-md text-center">
                <strong className="block font-md text-white"> SHOP FOR YOUR ARCHITECTURAL DESIGN PLANS </strong>
              </h1>
              <div className="mt-8 flex flex-wrap gap-4 text-center">
              </div>
            </div>
          </div>
        </section>

        <div className="py-5">
          <p className="my-4 md:text-base lg:text-xl/relaxed text-center">
            <span className="text-[#451606] font-semibold">Welcome to Dezyns <span className="text-[13px]">&</span> Structures.</span> Discover a 
            wide range of building plans, from duplexes to hotels. 
            Our professional designs are ready for immediate use, 
            making your dream home a reality. Start your project 
            effortlessly with us today!
          </p>
        </div>
    </div>             
     )            
     }            
export default Banner
