'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'

export default function NotFound() {
  const [animationStarted, setAnimationStarted] = useState(false)

  useEffect(() => {
    // Start animation after component mounts
    const timer = setTimeout(() => {
      setAnimationStarted(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-portfolio-dark text-white overflow-hidden relative">
      <Header />
      
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-portfolio-dark to-portfolio-dark"></div>
      
      {/* Ground */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-800 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-gray-700 shadow-2xl"></div>
      
      {/* Falling Box Animation */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Box Container */}
          <div 
            className={`transform transition-all duration-1000 ease-in ${
              animationStarted 
                ? 'translate-y-0 rotate-12' 
                : '-translate-y-screen -rotate-45'
            }`}
            style={{
              filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.5))'
            }}
          >
            {/* 3D Box */}
            <div className="relative w-48 h-48 mx-auto mb-8">
              {/* Box faces */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg transform rotate-3d shadow-2xl">
                {/* Front face */}
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-200 rounded-lg border-2 border-gray-300">
                  <div className="flex items-center justify-center h-full">
                    <span className="text-6xl font-bold text-portfolio-green drop-shadow-lg">404</span>
                  </div>
                </div>
                
                {/* Top face */}
                <div className="absolute -top-4 left-2 right-2 h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-t-lg transform skew-x-12 border-t-2 border-l-2 border-r-2 border-gray-300"></div>
                
                {/* Right face */}
                <div className="absolute -right-4 top-2 bottom-2 w-4 bg-gradient-to-b from-gray-300 to-gray-400 rounded-r-lg transform skew-y-12 border-r-2 border-t-2 border-b-2 border-gray-400"></div>
              </div>
            </div>
          </div>
          
          {/* Impact Effect */}
          <div 
            className={`absolute -bottom-16 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
              animationStarted ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`}
            style={{ transitionDelay: '1000ms' }}
          >
            {/* Dust clouds */}
            <div className="flex space-x-4">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 bg-gray-600 rounded-full opacity-30 animate-ping"
                  style={{
                    animationDelay: `${i * 100}ms`,
                    animationDuration: '1s'
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 text-center">
        <div 
          className={`transform transition-all duration-500 ${
            animationStarted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '1500ms' }}
        >
          <h1 className="text-6xl md:text-8xl font-bold text-portfolio-green mb-8">404</h1>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Oops! Page Not Found</h2>
          <p className="text-lg text-gray-400 mb-8 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-md mx-auto">
            Don&apos;t worry, it happens to the best of us!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-portfolio-green text-portfolio-dark px-8 py-3 rounded-lg font-semibold hover:bg-green-400 transition-all duration-300 transform hover:scale-105"
            >
              Back to Home
            </Link>
            
            <Link
              href="/portfolio"
              className="border-2 border-portfolio-green text-portfolio-green px-8 py-3 rounded-lg font-semibold hover:bg-portfolio-green hover:text-portfolio-dark transition-all duration-300 transform hover:scale-105"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-portfolio-green rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}
