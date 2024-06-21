import React from 'react'
import Price from '@/components/shop/Price'
import { getPricing, getSubscribe } from '@/app/api/auth/api'
// import { useSearchParams } from 'next/navigation';
import { getSession } from 'next-auth/react';
// import { NextApiRequest, NextApiResponse } from 'next';
export default async function page() {
  const session = await getSession();
  const subscribe = await getSubscribe('subscribe')
  return (
    <div>
        <Price subscribe={subscribe}/>
    </div>
  )
}
