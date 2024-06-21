import React from 'react'
import Price from '@/components/shop/Price'
import { getSubscribe } from '@/app/api/auth/api'
export default async function page() {
  const subscribe = await getSubscribe('subscribe')
  return (
    <div>
        <Price subscribe={subscribe}/>
    </div>
  )
}
