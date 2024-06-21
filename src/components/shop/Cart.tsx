"use client"
import { CartItem } from '@/app/api/auth/types'
import axios from 'axios';
import { useSession } from 'next-auth/react';
import React, { FormEvent, useEffect, useState } from 'react'
import Image from 'next/image';
import { EmptyCart } from './Cartempty';
import { CART_URL } from '@/app/api/auth/api';
import { useRouter } from 'next/navigation';

const areaDataCache = {};
export default function Cart() {
    const router = useRouter()
    const { data: session, status } = useSession();
    const [cart, setCart] = useState<CartItem[]>([]);
    const [cartId, setCartId] = useState("");
    const [totalPrice, setTotalPrice] = useState(0);


    useEffect(() => {
        const handleAddToCart = async () => {
            try {
                if (!session) {
                    // Handle case where user is not authenticated
                    console.log('User is not authenticated.');
                    console.log(session)
                    return;
                }
                console.log(`${session?.access_token}`)

                const response = await fetch(`https://dnstructures.pythonanywhere.com/cart/`, 
                {
                    headers: {
                        Authorization: `Bearer ${session?.access_token}`
                    },           
                    cache: 'no-store',
                    next: { revalidate: 1300 },
                }
                );
                // console.log(response.json())
                const data = await response.json()
                if (data){
                    setCart(data)
                    console.log(cart)
                }
                else{
                    console.log('No data found in response.')
                }
            } catch (error) {
                console.error('Error adding to cart:', error);
            }
        };
    
        handleAddToCart();
    },[session]);

    const calculateTotalPrice = (cartItems:CartItem[]) => {
        const total = cartItems.reduce((acc, item) => acc + ((item.item_price ?? 0) * item.quantity), 0);
        setTotalPrice(total);
    };

    useEffect(() => {
        calculateTotalPrice(cart);
    }, [cart]);

    const handleDelete = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const cartid = cartId
        const formData = new FormData()
        const da = formData.get('cartid')
        console.log(da)
        try {
            const response = await axios.delete(`https://dnstructures.pythonanywhere.com/cart/delete/${cartid}`, 
            {
                headers: {
                    Authorization: `Bearer ${session?.access_token}`
                }            
            }
            );
            console.log(response.data)
            if (response.data.message){
                const updatedCart = cart.filter(item => item.id != Number(cartid));
                setCart(updatedCart);
                calculateTotalPrice(updatedCart)
                setCartId("");
            }
        }catch(error){
            console.error('Error deleting from cart:', error);
        }
    }
    if (cart.length < 1){
        return <EmptyCart/>
    }
    
    return (
        <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-7 h-screen">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <h2 className="font-semibold text-[#451606] text-xl">Shopping Cart</h2>

                <div className="mt-6 sm:mt-3 md:gap-6 lg:flex lg:items-start xl:gap-8">
                    <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                        {cart.map((slide) => (
                            <div className="space-y-6 mb-2" key={slide.id}>
                                <div className="rounded-lg border border-[#451606]/40 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                                    <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                                        <a href="#" className="shrink-0 md:order-1">
                                            <Image width={100} height={20} className="h-20 w-20 dark:hidden rounded" src={`${CART_URL}${slide.product_image}`} alt={slide.product_alt} />
                                            <Image width={100} height={20} className="hidden h-20 w-20 dark:block rounded" src={`${CART_URL}${slide.product_image}`} alt={slide.product_alt} />
                                        </a>

                                        <label htmlFor="counter-input" className="sr-only text-[#451606]">Choose quantity:</label>
                                        <div className="flex items-center justify-between md:order-3 md:justify-end">
                                            <div className="flex items-center">
                                                <input type="text" id="counter-input" data-input-counter className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder="" value={slide.quantity} required />
                                            </div>
                                            <div className="text-end md:order-4 md:w-32">
                                            <p className="text-base font-bold text-gray-900">₦{slide.item_price?.toLocaleString()}</p>
                                            </div>
                                        </div>

                                        <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                                            <a href="#" className="text-base font-medium text-[#451606] hover:underline">{slide.product_name}</a>

                                            <div className="flex items-center gap-4">
                                            <form onSubmit={handleDelete}>
                                                    <input type="hidden" value={slide.id} onChange={(e) => setCartId(e.target.value)} />
                                                    <button name='cart' type="submit" onClick={() => setCartId(`${slide.id}`)} className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                                                        <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                                                        </svg>
                                                        Remove
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>


                    <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                        <div className="space-y-4 rounded-lg border border-[#451606]/40 bg-white p-4 shadow-sm sm:p-6">
                            <p className="text-xl font-semibold text-[#451606]">Order summary</p>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <dl className="flex items-center justify-between gap-4">
                                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Subtotal price</dt>
                                        <dd className="text-base font-medium text-gray-900 dark:text-white">₦{totalPrice.toLocaleString()}</dd>
                                    </dl>
                                </div>

                                <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                                <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                                <dd className="text-base font-bold text-gray-900 dark:text-white">₦{totalPrice.toLocaleString()}</dd>
                                </dl>
                            </div>

                            <a href="/checkout" className="flex w-full items-center justify-center rounded-lg bg-transparent px-5 py-2.5 text-sm font-medium text-[#451606] hover:bg-[#451606] border-2 border-[#451606] hover:text-white">Proceed to Checkout</a>

                            <div className="flex items-center justify-center gap-2">
                                <span className="text-sm font-normal text-gray-500 dark:text-gray-400"> or </span>
                                <a href="/shop" title="" className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">
                                Continue Shopping
                                <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                                </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}