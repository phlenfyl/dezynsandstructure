"use client"
import React from 'react'
import Shopnav from '@/components/shop/Shopnav'
import Bottom from '@/components/main/Bottom'
import Contactbody from '@/components/main/Contactbody'

export default function page() {
  return (
    <div>
        <Shopnav/>

        <Contactbody/>

        <Bottom/>
    </div>
  )
}
