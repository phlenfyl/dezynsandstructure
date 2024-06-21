import React from 'react'
import Shopnav from '@/components/shop/Shopnav'
import Bottom from '@/components/main/Bottom'
import Projectbody from '@/components/main/Projectbody'
import Aboutanime from '@/components/utils/Animate'

export default function page() {
  return (
    <div>
      <Aboutanime delay={0.5}>
        <Shopnav/>

        <Projectbody/>

        <Bottom/> 
      </Aboutanime>
    </div>
  )
}
