"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface SearchProps {
    classname?: string;
}
function Search({classname}: SearchProps) {
    const router = useRouter();
    const [query, setQuery] = useState('');

    const handleSearch = (event: React.FormEvent) => {
        event.preventDefault();
        router.push(`/shop/search?query=${query}`);
    };

    return (
        <> 
            <form className={classname} onSubmit={handleSearch}>
                <div className="relative w-full">
                    <input type="search" id="search-dropdown" value={query} className="block rounded-l-lg p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-2 border border-[#451606] focus:ring-[#451606] focus:border-[#451606] dark:placeholder-gray-400 dark:text-black" placeholder="Search..." onChange={(e) => setQuery(e.target.value)} required />
                    <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white hover:text-[#451606] hover:border-2 bg-[#451606] rounded-e-lg border border-[#451606]  hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                </div>
            </form>           
        </>
    )
}

export default Search
