'use client'

import { useEffect, useRef, useState } from 'react'

interface UseProjectAnimationOptions {
  threshold?: number
  rootMargin?: string
  delay?: number
}

export const useProjectAnimation = (options: UseProjectAnimationOptions = {}) => {
  const { threshold = 0.3, rootMargin = '0px', delay = 0 } = options
  const [isVisible, setIsVisible] = useState(false)
  const [showOverlay, setShowOverlay] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Trigger overlay animation after a delay
          setTimeout(() => {
            setShowOverlay(true)
          }, delay)
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin, delay])

  return {
    elementRef,
    isVisible,
    showOverlay,
  }
}
