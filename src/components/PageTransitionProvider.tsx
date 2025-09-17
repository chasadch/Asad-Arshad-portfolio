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
  const [isLoading, setIsLoading] = useState(true)
  const pathname = usePathname()

  // Handle initial page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    
    return () => clearTimeout(timer)
  }, [])

  const startTransition = async () => {
    setIsTransitioning(true)
    
    // Wait for animation to complete
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setIsTransitioning(false)
        resolve()
      }, 2000)
    })
  }

  return (
    <PageTransitionContext.Provider value={{ isTransitioning, startTransition }}>
      {/* Initial Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
          {/* Long rectangles alternating from top and bottom for initial load */}
          {[...Array(8)].map((_, index) => {
            const isFromTop = index % 2 === 0
            
            return (
              <div
                key={`load-rect-${index}`}
                className={`absolute w-full ${isFromTop ? 'animate-slide-down' : 'animate-slide-up'}`}
                style={{
                  height: '12.5vh',
                  top: isFromTop ? '-12.5vh' : '100vh',
                  left: '0',
                  right: '0',
                  animationDelay: `${index * 120}ms`,
                  animationDuration: '1000ms',
                  animationFillMode: 'forwards',
                  background: 'linear-gradient(135deg, #00ff88, #1a1a1a, #2a2a2a)',
                  border: '1px solid rgba(0, 255, 136, 0.3)',
                  boxShadow: '0 0 20px rgba(0, 255, 136, 0.5)'
                }}
              />
            )
          })}
          
          {/* Loading Text */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center">
              <div className="text-2xl font-bold text-portfolio-green mb-2 animate-pulse">
                Loading...
              </div>
              <div className="w-8 h-8 border-2 border-portfolio-green border-t-transparent rounded-full animate-spin mx-auto"></div>
            </div>
          </div>
        </div>
      )}

      {/* Transition Overlay */}
      {isTransitioning && (
        <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
          {/* Long rectangles alternating from top and bottom */}
          {[...Array(8)].map((_, index) => {
            const isFromTop = index % 2 === 0
            const rectangleIndex = Math.floor(index / 2)
            
            return (
              <div
                key={`rect-${index}`}
                className={`absolute w-full ${isFromTop ? 'animate-slide-down' : 'animate-slide-up'}`}
                style={{
                  height: '12.5vh',
                  top: isFromTop ? '-12.5vh' : '100vh',
                  left: '0',
                  right: '0',
                  animationDelay: `${index * 100}ms`,
                  animationDuration: '800ms',
                  animationFillMode: 'forwards',
                  background: 'linear-gradient(135deg, #00ff88, #1a1a1a, #2a2a2a)',
                  border: '1px solid rgba(0, 255, 136, 0.3)',
                  boxShadow: '0 0 20px rgba(0, 255, 136, 0.5)'
                }}
              />
            )
          })}
          
          {/* Transition Text */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center">
              <div className="text-xl font-bold text-portfolio-green mb-2 animate-pulse">
                Redirecting...
              </div>
              <div className="w-6 h-6 border-2 border-portfolio-green border-t-transparent rounded-full animate-spin mx-auto"></div>
            </div>
          </div>
        </div>
      )}

      {/* Page Content */}
      <div className={`transition-opacity duration-500 ${isLoading || isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        {children}
      </div>
    </PageTransitionContext.Provider>
  )
}
