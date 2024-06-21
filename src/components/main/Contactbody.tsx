import React from 'react'

export default function Contactbody() {
  return (
    <div>
        <div className='pt-3 pb-12 h-screen'>
            <p className='pt-4 pb-12 ml-10 text-base md:text-[20px] font-semibold'>You Can Reach Out To Us</p>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className='md:mb-0 mb-10'>
                        <form className="max-w-md mx-8">
                            <div className="grid grid-cols-2 gap-6 mb-6">
                                <div className="relative z-0 w-full group">
                                    <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                                </div>
                                <div className="relative z-0 w-full group">
                                    <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                                </div>
                            </div>
                            <div className="relative z-0 w-full group mb-10">
                                <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                            </div>
                            <div className="relative z-0 w-full group mb-9">                  
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">Your message</label>
                            <textarea id="message" rows={8} className="block p-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-200" placeholder="Message or Comment ..."></textarea>
                            </div>
                            <button type="submit" className="text-[#451606] bg-transparent hover:bg-[#451606] hover:text-white border border-[#451606] transition font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
                        </form>
                    </div>

                    <div className='mx-2 md:mt-0 mt-5'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126860.49097385354!2d3.4830671433593827!3d6.472140000000019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf9bfffffffff%3A0xcf9c8819da96551!2sDezyns%20and%20Structures%20Ltd!5e0!3m2!1sen!2sng!4v1716085995758!5m2!1sen!2sng" width="100%" height="450"  allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
