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
        // Skip variable setting since they don't exist in the scene
        
        // Method 1: Direct object manipulation
        const spline = splineRef.current
        
        // Try to find and move objects directly
        if (spline.findObjectByName) {
          // Common Spline object names to try
          const objectNames = [
            'Sphere', 'sphere', 'Ball', 'ball', 'Circle', 'circle',
            'Cube', 'cube', 'Box', 'box', 'Mesh', 'mesh',
            'Object', 'object', 'Shape', 'shape', 'Geometry'
          ]
          
          for (const name of objectNames) {
            try {
              const obj = spline.findObjectByName(name)
              if (obj && obj.position) {
                obj.position.x = x * 3
                obj.position.y = y * 3
                obj.position.z = obj.position.z || 0
                break // Stop after finding first moveable object
              }
            } catch (err) {
              // Continue to next name
            }
          }
        }
        
        // Method 2: Scene traversal for any moveable objects
        if (spline.scene) {
          const findAndMoveFirstObject = (obj: any): boolean => {
            // Try to move this object if it has a position
            if (obj.position && obj.type === 'Mesh') {
              obj.position.x = x * 3
              obj.position.y = y * 3
              return true // Found and moved an object
            }
            
            // Search children
            if (obj.children) {
              for (const child of obj.children) {
                if (findAndMoveFirstObject(child)) {
                  return true // Found object in children
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
    <div className="relative w-full h-full spline-container">
      <Suspense fallback={<div className="geometric-bg" />}>
        <Spline 
          scene="/animate/scene.splinecode"
          className="w-full h-full object-cover"
          onLoad={onLoad}
        />
      </Suspense>
    </div>
  )
}
