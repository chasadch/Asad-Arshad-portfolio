'use client'

import { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { usePageTransition } from '@/components/PageTransitionProvider'

const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [clickedDropdown, setClickedDropdown] = useState<string | null>(null)
  const router = useRouter()
  const { startTransition } = usePageTransition()

  const navItems = [
    { name: 'Home', hasDropdown: true },
    { name: 'Resume', hasDropdown: true },
    { name: 'Portfolio', hasDropdown: false },
    { name: 'Skills', hasDropdown: false },
    { name: 'Contacts', hasDropdown: true }
  ]

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('.dropdown-container')) {
        setClickedDropdown(null)
        setActiveDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleNavigation = async (href: string) => {
    if (window.location.pathname === href) return
    
    // Start transition and wait for it to complete
    await startTransition()
    
    // Navigate to new page
    router.push(href)
  }

  const handleDropdownClick = (itemName: string) => {
    if (clickedDropdown === itemName) {
      setClickedDropdown(null)
      setActiveDropdown(null)
    } else {
      setClickedDropdown(itemName)
      setActiveDropdown(itemName)
    }
  }

  const handleMouseEnter = (itemName: string) => {
    if (!clickedDropdown) {
      setActiveDropdown(itemName)
    }
  }

  const handleMouseLeave = () => {
    if (!clickedDropdown) {
      setActiveDropdown(null)
    }
  }

  return (
    <nav className="flex items-center space-x-2 sm:space-x-4 lg:space-x-6">
      {navItems.map((item) => (
        <div
          key={item.name}
          className="relative dropdown-container"
          onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.name)}
          onMouseLeave={handleMouseLeave}
        >
          <button 
            onClick={() => {
              if (item.hasDropdown) {
                handleDropdownClick(item.name)
              } else {
                // Handle direct navigation for items without dropdowns
                if (item.name === 'Portfolio') {
                  handleNavigation('/portfolio')
                } else if (item.name === 'Skills') {
                  handleNavigation('/skills')
                }
              }
            }}
            className="flex items-center space-x-1 text-white hover:text-portfolio-green transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(0,255,136,0.5)] px-2 py-1 rounded-md"
          >
            <span className="text-xs sm:text-sm lg:text-base font-medium whitespace-nowrap">{item.name}</span>
            {item.hasDropdown && (
              <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-200 ${
                activeDropdown === item.name ? 'rotate-180' : ''
              }`} />
            )}
          </button>
          
          {item.hasDropdown && activeDropdown === item.name && (
            <div className="absolute top-full left-0 mt-2 w-40 sm:w-48 bg-portfolio-gray rounded-lg shadow-xl py-2 z-[9999] border border-portfolio-gray border-opacity-30">
              {item.name === 'Resume' && (
                <>
                  <button onClick={() => handleNavigation('/resume')} className="block w-full text-left px-3 sm:px-4 py-2 text-xs sm:text-sm text-white hover:text-portfolio-green hover:bg-portfolio-dark transition-colors">
                    View Resume
                  </button>
                  <a href="/Resume/Asad Arshad CV.pdf" download className="block px-3 sm:px-4 py-2 text-xs sm:text-sm text-white hover:text-portfolio-green hover:bg-portfolio-dark transition-colors">
                    Download PDF
                  </a>
                </>
              )}
              {item.name === 'Home' && (
                <>
                  <button onClick={() => handleNavigation('/')} className="block w-full text-left px-3 sm:px-4 py-2 text-xs sm:text-sm text-white hover:text-portfolio-green hover:bg-portfolio-dark transition-colors">
                    Landing Page
                  </button>
                  <button 
                    onClick={async () => {
                      // Close dropdown first
                      setActiveDropdown(null)
                      setClickedDropdown(null)
                      
                      // Check if we're on the home page
                      if (window.location.pathname !== '/') {
                        // Navigate to home page first
                        await handleNavigation('/')
                        // Wait a bit for navigation to complete, then scroll
                        setTimeout(() => {
                          const aboutSection = document.getElementById('about')
                          if (aboutSection) {
                            aboutSection.scrollIntoView({ behavior: 'smooth' })
                          }
                        }, 500)
                      } else {
                        // Already on home page, just scroll
                        const aboutSection = document.getElementById('about')
                        if (aboutSection) {
                          aboutSection.scrollIntoView({ behavior: 'smooth' })
                        }
                      }
                    }} 
                    className="block w-full text-left px-3 sm:px-4 py-2 text-xs sm:text-sm text-white hover:text-portfolio-green hover:bg-portfolio-dark transition-colors"
                  >
                    About Me
                  </button>
                </>
              )}
              {item.name === 'Contacts' && (
                <>
                  <a href="mailto:asadarshad.4721@gmail.com" className="block px-3 sm:px-4 py-2 text-xs sm:text-sm text-white hover:text-portfolio-green hover:bg-portfolio-dark transition-colors">
                    Email Me
                  </a>
                  <button onClick={() => handleNavigation('/contact')} className="block w-full text-left px-3 sm:px-4 py-2 text-xs sm:text-sm text-white hover:text-portfolio-green hover:bg-portfolio-dark transition-colors">
                    Contact Form
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      ))}
    </nav>
  )
}

export default Navigation
