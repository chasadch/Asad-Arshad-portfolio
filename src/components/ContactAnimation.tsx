'use client'

import { useEffect, useState } from 'react'
import Lottie from 'lottie-react'

export default function ContactAnimation() {
  const [animationData, setAnimationData] = useState(null)

  useEffect(() => {
    // Load the Contact Us Character Animation JSON file
    fetch('/animate/Contact Us Character Animation.json')
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Error loading contact animation:', error))
  }, [])

  if (!animationData) return null

  return (
    <div className="flex justify-center mb-12">
      <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          style={{ 
            width: '100%', 
            height: '100%',
            filter: 'drop-shadow(0 8px 16px rgba(0, 255, 136, 0.3))'
          }}
        />
      </div>
    </div>
  )
}
