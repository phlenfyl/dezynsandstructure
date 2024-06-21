import React from 'react'
import Aboutanime from '@/components/utils/Animate'
import Shopnav from '@/components/shop/Shopnav'
import Bottom from '@/components/main/Bottom'
import Aboutbody from '@/components/main/Aboutbody'

export default function page() {
  return (
    <div>
      <Aboutanime delay={0.3}>
        <Shopnav/>

        <Aboutbody/>

        <Bottom/>
      </Aboutanime>        
    </div>
  )
}
