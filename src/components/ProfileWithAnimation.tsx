'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Lottie from 'lottie-react'

export default function ProfileWithAnimation() {
  const [animationData, setAnimationData] = useState(null)
  const [showAnimation, setShowAnimation] = useState(false)

  useEffect(() => {
    // Load the Coding Develio animation
    fetch('/animate/Coding Develio.json')
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Error loading animation:', error))

    // Set up alternating display
    const interval = setInterval(() => {
      setShowAnimation(prev => !prev)
    }, 4000) // Switch every 4 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex-shrink-0 order-2 lg:order-1">
      <div className="relative">
        <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 relative overflow-hidden rounded-lg">
          {/* Profile Image */}
          <div className={`absolute inset-0 transition-all duration-1000 ${
            showAnimation ? 'opacity-0 scale-95 rotate-y-180' : 'opacity-100 scale-100 rotate-y-0'
          }`}>
            <Image
              src="/Asad.png"
              alt="Asad Profile"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>

          {/* Animation */}
          {animationData && (
            <div className={`absolute inset-0 transition-all duration-1000 ${
              showAnimation ? 'opacity-100 scale-100 rotate-y-0' : 'opacity-0 scale-95 rotate-y-180'
            }`}>
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
          )}
        </div>
        
        {/* Contact Info */}
        <div className="absolute -left-2 sm:-left-4 bottom-4 sm:bottom-8 bg-black bg-opacity-50 backdrop-blur-sm rounded-lg p-3 sm:p-4 min-w-[180px] sm:min-w-[200px]">
          <div className="text-xs text-gray-300 mb-1">E: asadarshad.4721@gmail.com</div>
          <div className="text-xs text-gray-300">T: 03041192980</div>
        </div>
      </div>
    </div>
  )
}
