'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

interface PageTransitionProps {
  children: React.ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [showContent, setShowContent] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    // Start transition when pathname changes
    setIsTransitioning(true)
    setShowContent(false)

    // Hide content during transition
    const hideTimer = setTimeout(() => {
      setShowContent(true)
    }, 800)

    // End transition
    const endTimer = setTimeout(() => {
      setIsTransitioning(false)
    }, 1600)

    return () => {
      clearTimeout(hideTimer)
      clearTimeout(endTimer)
    }
  }, [pathname])

  return (
    <>
      {/* Page Transition Overlay */}
      <div className={`fixed inset-0 z-50 pointer-events-none ${isTransitioning ? 'block' : 'hidden'}`}>
        {/* Rectangle strips */}
        {[...Array(6)].map((_, index) => (
          <div key={index} className="absolute w-full">
            {/* Top rectangles */}
            <div
              className={`bg-black transition-transform duration-800 ease-in-out ${
                isTransitioning 
                  ? 'transform translate-y-0' 
                  : 'transform -translate-y-full'
              }`}
              style={{
                height: '16.66vh',
                top: `${index * 16.66}vh`,
                transitionDelay: `${index * 50}ms`
              }}
            />
            
            {/* Bottom rectangles */}
            <div
              className={`bg-black transition-transform duration-800 ease-in-out ${
                isTransitioning 
                  ? 'transform translate-y-0' 
                  : 'transform translate-y-full'
              }`}
              style={{
                height: '16.66vh',
                bottom: `${index * 16.66}vh`,
                transitionDelay: `${index * 50}ms`
              }}
            />
          </div>
        ))}

        {/* Loading indicator */}
        <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          isTransitioning && !showContent ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="text-portfolio-green text-2xl font-bold">
            <div className="flex space-x-1">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 bg-portfolio-green rounded-full animate-pulse"
                  style={{
                    animationDelay: `${i * 200}ms`,
                    animationDuration: '600ms'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className={`transition-opacity duration-300 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        {children}
      </div>
    </>
  )
}
