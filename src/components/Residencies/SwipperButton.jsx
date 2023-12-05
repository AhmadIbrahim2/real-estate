import React from 'react'
import './Residencies.css'
import { useSwiper } from 'swiper/react'

const SwipperButton = () => {
    const swipper = useSwiper()
  return (
    <div className="flexCenter r-buttons">
        <button onClick={()=>swipper.slidePrev()}>&lt;</button>
        <button onClick={()=>swipper.slideNext()}>&gt;</button>
    </div>
  )
}

export default SwipperButton