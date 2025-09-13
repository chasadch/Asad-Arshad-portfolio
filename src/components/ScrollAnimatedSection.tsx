'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { ReactNode } from 'react'

interface ScrollAnimatedSectionProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade'
  className?: string
}

const ScrollAnimatedSection = ({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = '' 
}: ScrollAnimatedSectionProps) => {
  const { elementRef, isVisible } = useScrollAnimation()

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-700 ease-out'
    
    if (isVisible) {
      return `${baseClasses} opacity-100 translate-x-0 translate-y-0 scale-100`
    }

    switch (direction) {
      case 'up':
        return `${baseClasses} opacity-0 translate-y-8`
      case 'down':
        return `${baseClasses} opacity-0 -translate-y-8`
      case 'left':
        return `${baseClasses} opacity-0 translate-x-8`
      case 'right':
        return `${baseClasses} opacity-0 -translate-x-8`
      case 'fade':
        return `${baseClasses} opacity-0 scale-95`
      default:
        return `${baseClasses} opacity-0 translate-y-8`
    }
  }

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClasses()} ${className}`}
      style={{
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  )
}

export default ScrollAnimatedSection
