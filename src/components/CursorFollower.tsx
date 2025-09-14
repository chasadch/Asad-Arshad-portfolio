'use client'

import { useEffect, useState } from 'react'

export default function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [botPosition, setBotPosition] = useState({ x: 100, y: 100 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    document.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useEffect(() => {
    // Bot follows the ball with a slight delay
    const timer = setTimeout(() => {
      setBotPosition({
        x: mousePosition.x - 50,
        y: mousePosition.y - 50
      })
    }, 200)

    return () => clearTimeout(timer)
  }, [mousePosition])

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {/* Ball that follows cursor */}
      <div
        className="absolute w-8 h-8 bg-portfolio-green rounded-full shadow-lg transform -translate-x-1/2 -translate-y-1/2 transition-all duration-75 ease-out cursor-ball"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />
      
      {/* Bot that follows the ball */}
      <div
        className="absolute w-6 h-6 bg-blue-400 rounded-sm transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out cursor-bot"
        style={{
          left: `${botPosition.x}px`,
          top: `${botPosition.y}px`,
        }}
      />
      
      <style jsx>{`
        .cursor-ball {
          box-shadow: 0 0 20px rgba(34, 197, 94, 0.6);
        }
        .cursor-bot {
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
        }
      `}</style>
    </div>
  )
}
