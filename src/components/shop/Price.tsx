"use client"
import { Pricing, Product } from '@/app/api/auth/types'
import React, { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';
import PriceWithoutcart from './Pricewithoutcart';
import { useSession} from "next-auth/react";

export default function Price() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const productId = searchParams?.get('productId') as string;
    const [product, setProduct] = useState<Product | null>(null);
    const [pricing, setPricing] = useState<Pricing | null>(null);
    const { data: session, status } = useSession();

    useEffect(() => {
        const fetchProductAndPricing = async () => {
            try {
                const productResponse = await axios.get(`https://dnstructures.pythonanywhere.com/shop/product/${productId}`,);
                const pricingResponse = await axios.get(`https://dnstructures.pythonanywhere.com/shop/product/${productId}/pricing`,);
                setProduct(productResponse.data);
                setPricing(pricingResponse.data);
            } catch (error) {
                console.error('Error fetching product or pricing:', error);
            }
        };

        fetchProductAndPricing();
    }, [productId]);

    const handleAddToCart = async (item_price: string, planName: string) => {
        try {
            if (!session) {
                // Handle case where user is not authenticated
                console.log('User is not authenticated.');
                return;
            }
            console.log(`${session?.access_token}`)
            const response = await axios.post(`https://dnstructures.pythonanywhere.com/cart/add/`, 
            {
                product_id: productId,
                itemprice: item_price,
                plan_name: planName
            },
            {
                headers: {
                    Authorization: `Bearer ${session?.access_token}`
                }            
            }
            );
            if (response.data.message){
                router.replace('/cart');
            }
        } catch (error) {
            console.error('Error adding to cart:', error);
        }
    };
    if (!product || !pricing) {
        return  <PriceWithoutcart/>
    }
    return (
    <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-extrabold text-[#451606] sm:text-3xl">
                    Pricing Plans
                </h2>
                <p className="mt-4 text-xl text-gray-400">
                    Please choose a plan to proceed to cart
                </p>
            </div>
            {/* <p className="mt-4">Get started with our basic features.</p> */}

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5">

                <div className="bg-cyan-950 opacity-[20px] text-white rounded-lg shadow-lg p-6 md:transform md:hover:scale-105 md:transition md:duration-300">
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold uppercase">Premium plus</h3>
                    </div>
                    <div className="mb-8">
                        <span className="text-3xl font-extrabold">₦2m</span>
                        <span className="text-3xl font-extrabold hidden">{pricing?.premium_plus}</span>
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
                    <button type="submit" onClick={() => handleAddToCart(pricing?.premium_plus, 'Premium Plus')} className="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-transparent border border-white hover:bg-white hover:text-[#451606] hover:border hover-border-[#451606]">
                     Get Started
                    </button>
                </div>

                <div className="bg-emerald-600 opacity-[20px] text-white rounded-lg shadow-lg p-6 md:transform md:hover:scale-105 md:transition md:duration-300">
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-white uppercase">Premium</h3>
                    </div>
                    <div className="mb-8">
                        <span className="text-3xl font-extrabold text-white">₦1</span>
                        <span className="text-3xl font-extrabold text-white hidden">{pricing?.premium}</span>
                    </div>
                    <ul className="mb-8 space-y-4">
                        <li className="flex flex-col gap-3">
                            <span>BOQ</span>
                            <span>3D interior and exterior full view</span>
                            <span>full working drawing</span>
                        </li>
                    </ul>
                    <button type="submit" onClick={() => handleAddToCart(pricing?.premium, 'Premium')} className="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-transparent border border-white hover:bg-white hover:text-[#451606] hover:border hover-border-[#451606] font-medium">
                        Get Started
                    </button>
                </div>

                <div className="bg-yellow-500 opacity-[20px] text-white rounded-lg shadow-lg p-6 md:transform md:hover:scale-105 md:transition md:duration-300">
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-white uppercase">Standard</h3>
                    </div>
                    <div className="mb-8">
                        <span className="text-3xl font-extrabold text-white">₦500k</span>
                        <span className="text-3xl font-extrabold text- hidden">{pricing?.standard}</span>
                    </div>
                    <ul className="mb-8 space-y-4">
                        <li className="flex flex-col gap-3">
                            <span>Summarized BOQ</span>
                            <span>full working drawing</span>
                            <span>3D exterior view</span>
                        </li>
                    </ul>
                    <button type="submit" onClick={() => handleAddToCart(pricing?.standard, 'Standard')} className="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-transparent border border-white hover:bg-white hover:text-[#451606] hover:border hover-border-[#451606] font-medium0">
                        Get Started
                    </button>
                </div>

                <div className="bg-orange-600 opacity-[20px] text-white rounded-lg shadow-lg p-6 md:transform md:hover:scale-105 md:transition md:duration-300">
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-white uppercase">Regular</h3>
                    </div>
                    <div className="mb-8">
                        <span className="text-3xl font-extrabold text-white">₦200k</span>
                        <span className="text-3xl font-extrabold text- hidden">{pricing?.regular}</span>
                    </div>
                    <ul className="mb-8 space-y-4">
                        <li className="flex flex-col gap-3">
                            <span>full working drawing</span>
                            <span>3D front view only</span>
                        </li>
                    </ul>
                    <button type="submit" onClick={() => handleAddToCart(pricing?.regular, 'Regular')} className="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-transparent border border-white hover:bg-white hover:text-[#451606] hover:border hover-border-[#451606] font-medium0">
                        Get Started
                    </button>
                </div>

                <div className="bg-stone-500 opacity-[20px] text-white rounded-lg shadow-lg p-6 md:transform md:hover:scale-105 md:transition md:duration-300">
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
                    <a href="/shop" className="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-transparent border border-white hover:bg-white hover:text-[#451606] hover:border hover-border-[#451606] font-medium0">
                        Contact Sales
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}
