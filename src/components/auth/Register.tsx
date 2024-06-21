'use client'
import React, { FormEvent, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import axios from 'axios'

interface ErrorResponse {
    email?: string[];
    password?: string[];
    non_field_errors?: string[];
}

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<ErrorResponse>({});
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
          const response = await axios.post("https://dnstructures.pythonanywhere.com/auths/register/", {
            email,
            password,
          });
          console.log(response.data.email);
          if (response.data.message) {
            router.push('/login');
          }else{
            setErrors(response.data)
          }
          // Handle successful registration (e.g., show success message, redirect)
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                setErrors(error.response.data as ErrorResponse);
            } else {
                setErrors({ non_field_errors: ['An unexpected error occurred'] });
            }
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
            <div className="min-h-screen text-gray-900 flex justify-center">
                <div className="shadow flex justify-center flex-1 items-center">
                    <div className="w-full">
                        <div className='pb-7'>
                            <Link href="/shop">
                                <Image src="/logo.jpg"
                                    alt='dezyns structure'
                                    className="mx-auto"
                                    width={140}
                                    height={140} />
                            </Link>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-full flex-1">
                                <form onSubmit={handleSubmit}>
                                    <div className="mx-auto max-w-xs">
                                        <input
                                            className="w-full px-8 py-4 rounded-lg font-medium bg-transparent border border-[#451606] focus:ring-[#451606] focus:outline-none placeholder-[#451606]/30 text-sm"
                                            type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                                        {errors.email && errors.email.map((error, index) => (
                                            <p key={index} className="text-red-500 text-xs mt-1">{error}</p>
                                        ))}
                                        <div className = "relative">
                                            <input
                                                className="w-full px-8 py-4 rounded-lg font-medium bg-transparent border border-[#451606] focus:ring-[#451606] focus:outline-none placeholder-[#451606]/30 text-sm mt-5"
                                                type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                                            <button
                                                type="button"
                                                className="float-right -mt-7 mr-5 transform -translate-y-1/2 text-[#451606] hover:text-[#451606] focus:outline-none"
                                                onClick={togglePasswordVisibility}
                                            >
                                                {showPassword ? (
                                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                                    </svg>
                                                ) : (
                                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" strokeWidth="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"/>
                                                        <path stroke="currentColor" strokeWidth="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                                    </svg>
                                                )}
                                            </button>
                                        </div>
                                        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                                        {errors.non_field_errors && <p className="text-red-500 text-xs mt-1">{errors.non_field_errors}</p>}
                                        
                                        <button
                                            className="mt-5 tracking-wide font-semibold bg-[#451606] text-white w-full py-4 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                            <span className="ml-">
                                                Register
                                            </span>
                                        </button>
                                        <p className="mt-6 text-xs text-gray-600 text-center tracking-10">
                                            I agree to Dezyns & Structures <a href="#" className="underline"> Terms of Service {" "}</a> and <a href="#" className="underline">Privacy Policy</a>
                                        </p>
                                    </div>
                                </form>
                            </div>

                            <div className='text-base font-mediun p-3 '>
                                <span>Have an account?</span>
                                <Link href="/login"
                                    className="mt-5 tracking-wide bg-transparent text-[#451606] w-full py-2 border-2 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                    <span className="">
                                        Login
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}