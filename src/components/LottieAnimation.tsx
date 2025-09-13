'use client'

import { useEffect, useRef } from 'react'
import Lottie from 'lottie-react'

interface LottieAnimationProps {
  animationData: any
  className?: string
  loop?: boolean
  autoplay?: boolean
}

export default function LottieAnimation({ 
  animationData, 
  className = '', 
  loop = true, 
  autoplay = true 
}: LottieAnimationProps) {
  return (
    <div className={`lottie-container ${className}`}>
      <Lottie
        animationData={animationData}
        loop={loop}
        autoplay={autoplay}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  )
}
