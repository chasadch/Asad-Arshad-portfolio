'use client'

import Navigation from '@/components/Navigation'

export default function Header() {
  return (
    <header className="relative z-10 flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      <div className="text-white font-semibold text-base sm:text-lg">
        Muhammad Asad Arshad
      </div>
      <Navigation />
    </header>
  )
}
