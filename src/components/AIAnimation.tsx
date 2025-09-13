'use client'

import { useEffect, useState } from 'react'
import Lottie from 'lottie-react'

interface AIAnimationProps {
  className?: string
}

export default function AIAnimation({ className = '' }: AIAnimationProps) {
  const [animationData, setAnimationData] = useState(null)

  useEffect(() => {
    // Load the Artificial Intelligence Chatbot animation
    fetch('/animate/Artificial Intelligence Chatbot.json')
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Error loading AI animation:', error))
  }, [])

  if (!animationData) return null

  return (
    <div className={`flex justify-center ${className}`}>
      <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80">
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
