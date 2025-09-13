'use client'

import Image from 'next/image'
import Header from '@/components/Header'
import SocialIcons from '@/components/SocialIcons'
import TypewriterText from '@/components/TypewriterText'
import AnimatedCube from '@/components/AnimatedCube'

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Geometric Background */}
      <div className="geometric-bg"></div>
      
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="relative z-10 flex items-center min-h-[calc(100vh-100px)] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center w-full max-w-7xl mx-auto gap-8 lg:gap-12">
          
          {/* Left Side - Profile Image */}
          <div className="flex-shrink-0 order-2 lg:order-1">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 relative">
                <Image
                  src="/Asad.png"
                  alt="Asad Profile"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
              
              {/* Contact Info */}
              <div className="absolute -left-2 sm:-left-4 bottom-4 sm:bottom-8 bg-black bg-opacity-50 backdrop-blur-sm rounded-lg p-3 sm:p-4 min-w-[180px] sm:min-w-[200px]">
                <div className="text-xs text-gray-300 mb-1">E: asadarshad.4721@gmail.com</div>
                <div className="text-xs text-gray-300">T: 03041192980</div>
              </div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="flex-1 order-1 lg:order-2 text-center lg:text-left">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Hi, I'm <span className="text-portfolio-green">Muhammad Asad Arshad</span>
              </h1>
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-300 min-h-[80px] sm:min-h-[100px] lg:min-h-[120px] flex items-center justify-center lg:justify-start">
                <TypewriterText 
                  texts={[
                    "I Build AI-Powered Solutions",
                    "I Create Interactive AI Applications", 
                    "I Develop Machine Learning Models",
                    "I Design Intelligent Automation"
                  ]}
                  typingSpeed={80}
                  deletingSpeed={40}
                  pauseDuration={1500}
                />
              </div>
              <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0">
                Computer Science graduate with expertise in Python, AI/ML model development, and automation pipelines. 
                Skilled in building AI agents and interactive AI applications.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Cube */}
      <AnimatedCube />

      {/* Social Icons */}
      <SocialIcons />
    </main>
  )
}
