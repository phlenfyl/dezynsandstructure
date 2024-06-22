"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Product } from '@/app/api/auth/types';
import { API_URL } from '@/app/api/auth/api';
import Search from './Search';

const Productlist = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const searchParams = useSearchParams();
  const query = searchParams?.get('query') || '';
  const pageQuery = searchParams?.get('page') || '1';
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const pageSize = 2;

  useEffect(() => {
      const fetchProducts = async (page: number) => {
        try {
            const res = await fetch(`https://dnstructures.pythonanywhere.com/shop/product/?search=${query}&page=${page}&page_size=${pageSize}`,
              {          
                cache: 'no-store',
                next: { revalidate: 1300 },
              }
            );
            if (res.ok) {
              const data = await res.json();
              console.log(data);
                setProducts(data.results);
                setTotalPages(Math.ceil(data.count / pageSize))
            } else {
                throw new Error('Failed to fetch products');
            }
        } catch (error) {
            console.error('Error fetching products:', error);
        }
      };

      if (query) {
          fetchProducts(currentPage);
      }
  }, [query, currentPage]);

  useEffect(() => {
    if (pageQuery) {
        setCurrentPage(parseInt(pageQuery));
    }
  }, [pageQuery]);


  return (
    <div className='max-w-screen-2xl mx-auto'>
      <div className="flex flex-col pt-20 gap-4 md:flex-row justify-between mx-2 border-t border-gray-700 shadow-t pb-[4em]">
        <Search classname='lg:flex-auto lg:max-w-96 w-full lg:w-48 md:hidden block'/>
        <div className="flex-1 lg:flex-auto w-full lg:w-56">
          <div className="pb-8">
            {products.map((product) => (
              <div className='max-w-[60em] border-x border-b shadow-xl mx-4 p-3 rounded-md mt-12' key={product.id}>
                <div className='flex flex-col md:flex-row items-center justify-between gap-4 md:gap-9'>
                  <div className='hidden md:block'>
                    {product.product_images.length > 0 && (
                      <Image
                        src={`${API_URL}${product.product_images[0].image}`}
                        alt={product.product_images[0].alt_text}
                        width={1000}
                        height={100}
                        className='w-64'
                      />
                    )}
                  </div>
                  <div className='flex flex-col'>
                    <p className='text-base lg:text-xl font-semibold'>{product.name}</p>
                    <span className='text-sm lg:text-base tracking-10'>
                      {product.info.length > 50 ? (
                        <>
                          <span dangerouslySetInnerHTML={{ __html: product.info.substring(0, 150) + '...' }} />
                        </>
                      ) : (
                        <span dangerouslySetInnerHTML={{ __html: product.info }} />
                      )}
                    </span>
                    <Link href={`search/${product.id}`} className='underline decoration-blue-500 font-semibold text-base'> Continue Reading</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:flex-auto lg:max-w-96 w-full md:w-auto lg:w-48 md:block hidden">
          <Search classname='lg:max-w-xl mx-auto lg:w-full pb-8 pt-8'/>
        </div>
      </div>

      <nav className="flex items-center justify-evenly lg:justify-between px-4 md:px-10 lg:px-20 py-8 sm:px-1"
        aria-label="Pagination">
        <div className="flex flex-1 justify-between">
            <Link className="relative inline-flex items-center bg-[#451606] px-4 py-2 text-sm font-medium text-white"
                rel="prev" href={`/shop/search?query=${query}&page=${currentPage - 1}`}
                style={{ pointerEvents: currentPage === 1 ? 'none' : 'auto' }}
                >
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512"
                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z">
                    </path>
                </svg> &nbsp; Previous 
            </Link>


            <Link className="relative inline-flex items-center bg-[#451606] px-4 py-2 text-sm font-medium text-white"
                rel="next" href={`/shop/search?query=${query}&page=${currentPage + 1}`}
                style={{ pointerEvents: currentPage === totalPages ? 'none' : 'auto' }}
                >
                    Next &nbsp; <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                    viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z">
                    </path>
                </svg>
            </Link>
        </div>
      </nav>
    </div>
  )
}

export default Productlist