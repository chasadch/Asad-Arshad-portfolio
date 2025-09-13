'use client'

import Header from '@/components/Header'
import SocialIcons from '@/components/SocialIcons'
import TypewriterText from '@/components/TypewriterText'
import ProfileWithAnimation from '@/components/ProfileWithAnimation'

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
          
          {/* Left Side - Profile with Animation */}
          <ProfileWithAnimation />

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

      {/* Social Icons */}
      <SocialIcons />
    </main>
  )
}
