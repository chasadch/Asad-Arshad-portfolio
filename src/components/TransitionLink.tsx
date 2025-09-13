'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface TransitionLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export default function TransitionLink({ href, children, className, onClick }: TransitionLinkProps) {
  const router = useRouter()
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    
    if (onClick) {
      onClick()
    }

    // Don't transition if already on the same page
    if (window.location.pathname === href) {
      return
    }

    setIsTransitioning(true)

    // Start page transition animation
    const transitionOverlay = document.getElementById('page-transition-overlay')
    if (transitionOverlay) {
      transitionOverlay.classList.remove('hidden')
      transitionOverlay.classList.add('block')
    }

    // Trigger rectangles animation
    const rectangles = document.querySelectorAll('.transition-rectangle')
    rectangles.forEach((rect, index) => {
      setTimeout(() => {
        rect.classList.add('active')
      }, index * 50)
    })

    // Navigate after animation covers the screen
    setTimeout(() => {
      router.push(href)
    }, 800)
  }

  return (
    <button
      onClick={handleClick}
      className={className}
      disabled={isTransitioning}
    >
      {children}
    </button>
  )
}
