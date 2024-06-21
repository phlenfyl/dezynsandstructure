"use client"
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useCart } from "../../context/CartContext";

export default function Checkout() {
    const { data: session } = useSession();
    const { cart, totalPrice } = useCart();
    const [formData, setFormData] = useState({
        name: '',
        email: session?.user?.email || '',
        phone: '',
        companyName: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const dataToSend = {
                ...formData,
                totalPrice: totalPrice
            };
            const response = await fetch('https://dnstructures.pythonanywhere.com/api/checkout/', {  // Adjust the URL to match your Django endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${session?.access_token}`  // Include token if needed
                },
                body: JSON.stringify(dataToSend)
            });
            if (response.ok) {
                // Handle success, maybe redirect to a success page
                alert('Order placed successfully!');
            } else {
                // Handle error
                alert('Failed to place the order. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <section className="bg-white py-8 antialiased md:pb-16 md:pt-10">
            <form onSubmit={handleSubmit} className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <div className="lg:flex lg:items-start lg:gap-12 xl:gap-16">
                <div className="min-w-0 flex-1 space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-[#451606]">Order Details</h2>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label htmlFor="your_name" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Your name </label>
                                <input type="text" id="your_name" value={formData.name} onChange={handleChange} className="block w-full rounded-lg border border-[#451606]/40 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-[#451606] focus:ring-[#451606] dark:placeholder:text-gray-400 dark:focus:border-[#451606] dark:focus:ring-[#451606]" placeholder="Bonnie Green" required />
                            </div>

                            <div>
                                <label htmlFor="your_email" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Your email* </label>
                                <input type="email" id="your_email" value={formData.email} onChange={handleChange} className="block w-full rounded-lg border border-[#451606]/40 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-[#451606] focus:ring-[#451606] dark:placeholder:text-gray-400 dark:focus:border-[#451606] dark:focus:ring-[#451606]" placeholder="name@flowbite.com" required />
                            </div>

                            <div>
                                <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Phone Number* </label>
                                <input type="text" id="phone" value={formData.phone} onChange={handleChange} className="block w-full rounded-lg border border-[#451606]/40 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-[#451606] focus:ring-[#451606] dark:placeholder:text-gray-400 dark:focus:border-[#451606] dark:focus:ring-[#451606]" placeholder="000 000 000 00" required />
                            </div>

                            <div>
                                <label htmlFor="company_name" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Company name </label>
                                <input type="text" id="company_name" value={formData.companyName} onChange={handleChange} className="block w-full rounded-lg border border-[#451606]/40 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-[#451606] focus:ring-[#451606] dark:placeholder:text-gray-400 dark:focus:border-[#451606] dark:focus:ring-[#451606]" placeholder="Flowbite LLC" required />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-[#451606]">Payment</h3>

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                            <div className="pb-10 rounded-lg border border-[#451606]/40 bg-[#1D4ED8] p-4 ps-4">
                                <div className="flex items-start">
                                    <div className="flex h-5 items-center">
                                        <input id="paystack" type="checkbox" value="" className="w-3 h-3 rounded-full text-[#451606]" checked />
                                    </div>

                                    <div className="ms-4 text-sm">
                                    <label htmlFor="credit-card" className="font-medium leading-none text-white"> Paystack </label>
                                    <p id="credit-card-text" className="mt-1 text-xs font-normal text-white">Pay online directly</p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-lg border border-[#451606]/40 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-[#1D4ED8]">
                                <div className="flex items-start">
                                    <div className="flex h-5 items-center">
                                        <input id="Direct-transfer" type="checkbox" value="" className="w-3 h-3 rounded-full text-[#451606]" />
                                    </div>

                                    <div className="ms-4 text-sm">
                                    <label htmlFor="pay-on-delivery" className="font-medium leading-none text-gray-900 dark:text-white"> Direct Bank Transfer </label>
                                    <p id="pay-on-delivery-text" className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400">Payment by transfer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
                    <div className="flow-root">
                        <div className="-my-3 divide-y divide-gray-200 dark:divide-gray-800">
                            <dl className="flex items-center justify-between gap-4 py-3">
                                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Subtotal</dt>
                                <dd className="text-base font-medium text-gray-900 dark:text-white">₦{totalPrice}</dd>
                            </dl>

                            <dl className="flex items-center justify-between gap-4 py-3">
                                <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                                <dd className="text-base font-bold text-gray-900 dark:text-white">₦{totalPrice}</dd>
                            </dl>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <button type="submit" className="flex w-full items-center justify-center rounded-lg bg-[#451606] px-5 py-2.5 text-sm font-medium text-white focus:outline-none focus:ring-4  focus:ring-[#451606]">Proceed to Payment</button>

                        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">One or more items in your cart require an account. <a href="/login" title="" className="font-medium text-primary-700 underline hover:no-underline dark:text-[#451606]">Sign in or create an account now.</a>.</p>
                    </div>
                </div>
                </div>
            </form>
        </section>
    )
}
