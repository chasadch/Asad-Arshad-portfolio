'use client'

import Spline from '@splinetool/react-spline'
import { Suspense, useRef, useEffect } from 'react'

export default function SplineBackground() {
  const splineRef = useRef<any>(null)

  const onLoad = (spline: any) => {
    splineRef.current = spline
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!splineRef.current) return

      const container = document.querySelector('.spline-container')
      if (!container) return

      const rect = container.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1

      try {
        const spline = splineRef.current
        
        // Try to find and move objects directly
        if (spline.findObjectByName) {
          const objectNames = [
            'Sphere', 'sphere', 'Ball', 'ball', 'Circle', 'circle',
            'Cube', 'cube', 'Box', 'box', 'Mesh', 'mesh',
            'Object', 'object', 'Shape', 'shape', 'Geometry'
          ]
          
          for (const name of objectNames) {
            try {
              const obj = spline.findObjectByName(name)
              if (obj && obj.position) {
                obj.position.x = x * 4
                obj.position.y = y * 4
                obj.position.z = obj.position.z || 0
                break
              }
            } catch (err) {
              // Continue to next name
            }
          }
        }
        
        // Scene traversal for any moveable objects
        if (spline.scene) {
          const findAndMoveFirstObject = (obj: any): boolean => {
            if (obj.position && obj.type === 'Mesh') {
              obj.position.x = x * 4
              obj.position.y = y * 4
              return true
            }
            
            if (obj.children) {
              for (const child of obj.children) {
                if (findAndMoveFirstObject(child)) {
                  return true
                }
              }
            }
            
            return false
          }
          
          findAndMoveFirstObject(spline.scene)
        }

      } catch (error) {
        // Silent error handling
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="relative w-full h-full spline-container overflow-hidden">
      <Suspense fallback={
        <div className="w-full h-full bg-gradient-to-br from-portfolio-dark to-portfolio-gray flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-portfolio-green border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-400">Loading 3D Experience...</p>
          </div>
        </div>
      }>
        <Spline 
          scene="/animate/scene.splinecode"
          className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
          onLoad={onLoad}
        />
      </Suspense>
      
      {/* Subtle overlay for better integration */}
      <div className="absolute inset-0 bg-gradient-to-t from-portfolio-dark via-transparent to-transparent opacity-20 pointer-events-none"></div>
    </div>
  )
}
