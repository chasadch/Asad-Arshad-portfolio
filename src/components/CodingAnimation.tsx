'use client'

import { useEffect, useState } from 'react'
import Lottie from 'lottie-react'

export default function CodingAnimation() {
  const [animationData, setAnimationData] = useState(null)

  useEffect(() => {
    // Load the animation JSON file
    fetch('/animate/Coding Develio.json')
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Error loading animation:', error))
  }, [])

  if (!animationData) return null

  return (
    <div className="fixed bottom-4 right-4 z-30 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56">
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ 
          width: '100%', 
          height: '100%',
          filter: 'drop-shadow(0 4px 8px rgba(0, 255, 136, 0.3))'
        }}
      />
    </div>
  )
}
