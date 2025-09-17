'use client'

import Navigation from '@/components/Navigation'

export default function Header() {
  return (
    <header className="relative z-50 flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 py-4 sm:py-6 gap-4 sm:gap-0">
      <div className="text-white font-semibold text-sm sm:text-base lg:text-lg text-center sm:text-left">
        Muhammad Asad Arshad
      </div>
      <Navigation />
    </header>
  )
}
