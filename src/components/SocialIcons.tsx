'use client'

import { Facebook, Instagram, Dribbble } from 'lucide-react'

const SocialIcons = () => {
  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex flex-col space-y-6">
        <a 
          href="#" 
          title="Facebook"
          className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-portfolio-green hover:bg-opacity-100 transition-all duration-300 group"
        >
          <Facebook className="w-5 h-5 text-white group-hover:text-black" />
        </a>
        <a 
          href="#" 
          title="Instagram"
          className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-portfolio-green hover:bg-opacity-100 transition-all duration-300 group"
        >
          <Instagram className="w-5 h-5 text-white group-hover:text-black" />
        </a>
        <a 
          href="#" 
          title="Dribbble"
          className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-portfolio-green hover:bg-opacity-100 transition-all duration-300 group"
        >
          <Dribbble className="w-5 h-5 text-white group-hover:text-black" />
        </a>
      </div>
      
      {/* Follow Me Text */}
      <div className="mt-8 transform rotate-90 origin-center">
        <span className="text-xs text-gray-400 whitespace-nowrap">Follow Me</span>
      </div>
    </div>
  )
}

export default SocialIcons
