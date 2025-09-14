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
                Hi, I&apos;m <span className="text-portfolio-green">Muhammad Asad Arshad</span>
              </h1>
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-300 min-h-[80px] sm:min-h-[100px] lg:min-h-[120px] flex items-center justify-center lg:justify-start">
                <TypewriterText 
                  texts={[
                    "I Build <span class='text-portfolio-green'>AI-Powered</span> Solutions",
                    "I Create <span class='text-portfolio-green'>Interactive AI</span> Applications", 
                    "I Develop <span class='text-portfolio-green'>Machine Learning</span> Models",
                    "I Design <span class='text-portfolio-green'>Intelligent Automation</span>"
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

      {/* About Me Section */}
      <section id="about" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-portfolio-gray bg-opacity-30 backdrop-blur-sm rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-portfolio-green text-center">About Me</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold mb-4">Professional Background</h3>
                <p className="text-gray-300 mb-4">
                  I&apos;m Muhammad Asad Arshad, a Computer Science graduate from NUST with a passion for AI and machine learning. 
                  I specialize in building intelligent applications that solve real-world problems through innovative technology.
                </p>
                <p className="text-gray-300 mb-4">
                  My expertise spans across Python development, AI/ML model creation, and automation pipelines. 
                  I&apos;ve worked on projects ranging from plant disease detection systems to autonomous drone navigation.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">What I Do</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-portfolio-green rounded-full"></div>
                    AI-powered web applications and chatbots
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-portfolio-green rounded-full"></div>
                    Machine learning model development
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-portfolio-green rounded-full"></div>
                    Data visualization and dashboard creation
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-portfolio-green rounded-full"></div>
                    Full-stack web development with React/Next.js
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Icons */}
      <SocialIcons />
    </main>
  )
}
