'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

interface PageTransitionContextType {
  isTransitioning: boolean
  startTransition: () => Promise<void>
}

const PageTransitionContext = createContext<PageTransitionContextType>({
  isTransitioning: false,
  startTransition: async () => {}
})

export const usePageTransition = () => useContext(PageTransitionContext)

interface PageTransitionProviderProps {
  children: React.ReactNode
}

export default function PageTransitionProvider({ children }: PageTransitionProviderProps) {
  const [isTransitioning, setIsTransitioning] = useState(false)
  const pathname = usePathname()

  const startTransition = async () => {
    setIsTransitioning(true)
    
    // Wait for animation to complete
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setIsTransitioning(false)
        resolve()
      }, 1600)
    })
  }

  return (
    <PageTransitionContext.Provider value={{ isTransitioning, startTransition }}>
      {/* Transition Overlay */}
      {isTransitioning && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          {/* Alternating vertical rectangles - left, right, left, right, left, right */}
          {[...Array(6)].map((_, index) => {
            const isFromLeft = index % 2 === 0
            const rectangleIndex = Math.floor(index / 2)
            
            return (
              <div
                key={`rect-${index}`}
                className={`absolute bg-black h-full ${isFromLeft ? 'animate-slide-left' : 'animate-slide-right'}`}
                style={{
                  width: '16.66vw',
                  [isFromLeft ? 'left' : 'right']: `${rectangleIndex * 16.66}vw`,
                  animationDelay: `${index * 80}ms`,
                  animationDuration: '1200ms',
                  animationFillMode: 'forwards'
                }}
              />
            )
          })}
        </div>
      )}

      {/* Page Content */}
      <div>
        {children}
      </div>
    </PageTransitionContext.Provider>
  )
}
