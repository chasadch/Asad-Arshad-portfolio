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
      <div className="relative z-10 flex items-center min-h-[calc(100vh-80px)] px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col lg:flex-row items-center w-full max-w-7xl mx-auto gap-6 sm:gap-8 lg:gap-12">
          
          {/* Left Side - Profile with Animation */}
          <div className="order-2 lg:order-1 w-full lg:w-auto">
            <ProfileWithAnimation />
          </div>

          {/* Right Side - Text Content */}
          <div className="flex-1 order-1 lg:order-2 text-center lg:text-left w-full">
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight px-2 sm:px-0">
                Hi, I&apos;m <span className="text-portfolio-green">Muhammad Asad Arshad</span>
              </h1>
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-300 min-h-[60px] sm:min-h-[80px] md:min-h-[100px] lg:min-h-[120px] flex items-center justify-center lg:justify-start px-2 sm:px-0">
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
              <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0 leading-relaxed">
                Computer Science graduate with expertise in Python, AI/ML model development, and automation pipelines. 
                Skilled in building AI agents and interactive AI applications.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <section id="about" className="relative z-10 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-portfolio-gray bg-opacity-30 backdrop-blur-sm rounded-xl p-6 sm:p-8 lg:p-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-portfolio-green text-center">About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Professional Background</h3>
                <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4 leading-relaxed">
                  I&apos;m Muhammad Asad Arshad, a Computer Science graduate from NUST with a passion for AI and machine learning. 
                  I specialize in building intelligent applications that solve real-world problems through innovative technology.
                </p>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  My expertise spans across Python development, AI/ML model creation, and automation pipelines. 
                  I&apos;ve worked on projects ranging from plant disease detection systems to autonomous drone navigation.
                </p>
              </div>
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">What I Do</h3>
                <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-300">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-portfolio-green rounded-full flex-shrink-0"></div>
                    <span>AI-powered web applications and chatbots</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-portfolio-green rounded-full flex-shrink-0"></div>
                    <span>Machine learning model development</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-portfolio-green rounded-full flex-shrink-0"></div>
                    <span>Data visualization and dashboard creation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-portfolio-green rounded-full flex-shrink-0"></div>
                    <span>Full-stack web development with React/Next.js</span>
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
