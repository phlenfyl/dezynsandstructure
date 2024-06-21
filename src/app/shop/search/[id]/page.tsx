"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Product } from '@/app/api/auth/types';
import { ImageCarousel } from '../../[slug]/page';
import Link from 'next/link';
import { useSession} from "next-auth/react";
import Modal from '@/components/shop/Modal';


const Page = ({ params }: { params: { id: string } }) => {
    const [product, setProduct] = useState<Product | null>(null);
    const productId = params.id;
    const [visible, setVisible] = useState(false)
    const [currentInfo, setCurrentInfo] = useState('')
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`https://dnstructures.pythonanywhere.com/shop/product/${productId}/`,
                    {          
                        cache: 'no-store',
                        next: { revalidate: 1300 },
                    }
                );
                if (res.ok) {
                    const data = await res.json();
                    setProduct(data);
                } else {
                    throw new Error('Failed to fetch product');
                }
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, [productId]);

    const handleProduct = (productId:number | undefined) => {
        router.push(`/pricing?productId=${productId}`);
    }
  
    const toggleModal = (info = '') => {
      setCurrentInfo(info);
      setVisible(!visible);
    };

    return (
        <div className= "h-screen">
            <nav className="flex pt-10 px-4 md:px-10 sm:px-1" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li className="inline-flex items-center">
                        <Link href="/shop" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-[#451606] dark:text-gray-400 dark:hover:text-[#451606]">
                            <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                            </svg>
                            Shop
                        </Link>
                    </li>
                    <li className="inline-flex items-center">
                        <span className="inline-flex items-center text-xs font-medium text-gray-700 hover:text-[#451606] dark:text-gray-400 dark:hover:text-[#451606]">
                            <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                            </svg>
                            Search
                        </span>
                    </li>
                    <li aria-current="page">
                        <div className="flex items-center">
                            <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                            </svg>
                            <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400 capitalize">{product?.slug.replace(/-/g, ' ')}</span>
                        </div>
                    </li>
                </ol>
            </nav>

            <div className="text-center py-10">
                <h1 className="text-base lg:text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {product?.name}
                </h1>
            </div>


            <div className="shop1 px-4 p-1 pb-7 mt-5 relative">
                {product?.product_images && product?.product_images.length > 0 ? (
                    <ImageCarousel images={product?.product_images} />
                ) : (
                    <div>
                        
                    </div>
                )}
                <div className="w-full relative max-w-[55em] -mt-[8em] lg:-mt-[15em] z-[99] bg-black/50 font-semibold text-white py-4 lg:py-10 mx-auto rounded-lg">
                    <div className='mx-10'>
                        <p className='font-sans max-w-[50em] pb-2 text-xs md:text-base '>
                            {product?.name}
                        </p>
                        <div className='flex md:flex-row flex-col item-center justify-between text-white'>
                            <button onClick={() => toggleModal(product?.info)} data-modal-target="large-modal" data-modal-toggle="large-modal" className="block text-white border-0 uppercase" type="button">
                                Drawing Info
                            </button>
                            <div className='flex'>
                            {status === "authenticated" ? (
                                <button className='tracking-[1.4px] md:tracking-0 underline' onClick={() => handleProduct(product?.id)}>
                                    <small>
                                        Add to cart: 
                                    </small>
                                </button>
                            ):(
                                <Link href="/pricing" className='tracking-[1.4px] md:tracking-0 underline'>
                                    <small>
                                        Add to cart: 
                                    </small>
                                </Link>
                            )}
                            </div>
                        </div>
                    </div>
                </div>


                <Modal visible={visible} status = {status} content={{ __html: currentInfo }} onClose={() => setVisible(false)} />
            </div>
        </div>
    );
};

export default Page;
