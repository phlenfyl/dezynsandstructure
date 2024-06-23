"use client";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCart } from '@/context/CartContext';

export default function ThankYouPage() {
    const { data: session } = useSession();
    const searchParams = useSearchParams();
    const router = useRouter();
    const { clearCart } = useCart();
    const refNum = searchParams?.get('reference');
    const [isVerified, setIsVerified] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const verifyPayment = async (refNum: string) => {
            try {
                const response = await axios.get(`https://dnstructures.pythonanywhere.com/cart/verify/${refNum}`);
                if (response.data.status === 'success') {
                    await clearCartBackend();
                    clearCart()
                    setIsVerified(true);
                    const urlWithoutParams = new URL(window.location.href);
                    urlWithoutParams.searchParams.delete('trxref');
                    urlWithoutParams.searchParams.delete('reference');
                    router.replace(urlWithoutParams.toString(), { scroll: false });
                } else {
                    setErrorMessage('Payment verification failed');
                }
            } catch (error) {
                setErrorMessage('Error verifying payment');
                console.error('Error verifying payment:', error);
            }
        };

        const clearCartBackend = async () => {
            try {
                const response = await axios.delete('https://dnstructures.pythonanywhere.com/cart/clear/', {
                    headers: { Authorization: `Bearer ${session?.access_token}` },
                });
                console.log(response.data);
            } catch (error) {
                console.error('Error clearing cart:', error);
                alert('Failed to clear cart. Please try again.');
            }
        };

        if (refNum) {
            verifyPayment(refNum);
        }
    }, [session, refNum, router]);

    if (!session) {
        return <div className="flex justify-center items-center h-screen"><div className="border-gray-300 h-10 w-10 animate-spin rounded-full border-8 border-t-[#451606]" /> </div>;
    }

    if (errorMessage) {
        return <div>{errorMessage}</div>;
    }

    if (refNum) {
        return <div>Verifying payment...</div>; // Show a verification message while waiting
    }

    return (
        <div className="thankyou-page flex items-center justify-center bg-light">
            <div className="container">
                <div className="thankyou-summary text-center mx-auto w-100 py-5 mb-2">
                    <div className="thankyou h-screen">
                        <h4>Your payment was successful</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}
