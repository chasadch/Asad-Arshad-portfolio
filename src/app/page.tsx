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
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-300 min-h-[80px] sm:min-h-[100px] md:min-h-[120px] lg:min-h-[140px] xl:min-h-[160px] flex items-center justify-center lg:justify-start px-2 sm:px-0">
                <div className="relative bg-gradient-to-r from-portfolio-gray/20 via-portfolio-green/10 to-portfolio-gray/20 backdrop-blur-sm rounded-xl px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 border border-portfolio-green/20 shadow-lg shadow-portfolio-green/10">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-portfolio-green/5 to-transparent rounded-xl"></div>
                  <div className="relative z-10">
                    <TypewriterText 
                      texts={[
                        "I Build <span class='text-portfolio-green'>AI-Powered</span> Solutions",
                        "I Create <span class='text-portfolio-green'>Interactive AI</span> Applications", 
                        "I Develop <span class='text-portfolio-green'>Machine Learning</span> Models",
                        "I Design <span class='text-portfolio-green'>Intelligent</span> Systems"
                      ]}
                      typingSpeed={80}
                      deletingSpeed={40}
                      pauseDuration={1500}
                    />
                  </div>
                </div>
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
        <div className="max-w-7xl mx-auto">
          <div className="bg-portfolio-gray bg-opacity-30 backdrop-blur-sm rounded-xl p-6 sm:p-8 lg:p-10 border border-portfolio-green/20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              
              {/* Left Column - Main Info & Stats */}
              <div className="lg:col-span-1 space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                    About Me
                  </h2>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
                    Hi, I&apos;m Muhammad Asad Arshad, a passionate software engineer and AI enthusiast based in Pakistan. I specialize in creating intelligent solutions that solve real-world problems through cutting-edge technology. My expertise spans machine learning, full-stack development, and process automation.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-portfolio-green mb-2">3+</div>
                    <div className="text-gray-400 text-sm md:text-base">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-portfolio-green mb-2">50+</div>
                    <div className="text-gray-400 text-sm md:text-base">Projects Completed</div>
                  </div>
                </div>

                <button className="bg-portfolio-green text-black px-6 py-3 rounded-full font-semibold hover:bg-portfolio-green/90 transition-colors">
                  See more
                </button>
              </div>

              {/* Right Columns - Service Cards */}
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* AI Development Card */}
                <div className="bg-portfolio-dark/50 backdrop-blur-sm rounded-xl p-6 border border-portfolio-green/10 hover:border-portfolio-green/50 hover:bg-green-900/60 hover:shadow-lg hover:shadow-portfolio-green/20 hover:scale-105 transition-all duration-300 cursor-pointer group">
                  <div className="w-10 h-10 bg-portfolio-green/20 group-hover:bg-portfolio-green/40 rounded-full flex items-center justify-center mb-4 transition-all duration-300">
                    <div className="w-6 h-6 bg-portfolio-green group-hover:bg-white rounded-full flex items-center justify-center transition-all duration-300">
                      <span className="text-black group-hover:text-portfolio-green text-xs font-bold transition-all duration-300">AI</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-portfolio-green mb-3 transition-all duration-300">AI & Machine Learning</h3>
                  <p className="text-sm text-gray-300 group-hover:text-white leading-relaxed transition-all duration-300">
                    I develop intelligent systems using TensorFlow, PyTorch, and scikit-learn to create predictive models and automate complex decision-making processes.
                  </p>
                </div>

                {/* Web Development Card */}
                <div className="bg-portfolio-dark/50 backdrop-blur-sm rounded-xl p-6 border border-portfolio-green/10 hover:border-portfolio-green/50 hover:bg-green-900/60 hover:shadow-lg hover:shadow-portfolio-green/20 hover:scale-105 transition-all duration-300 cursor-pointer group">
                  <div className="w-10 h-10 bg-portfolio-green/20 group-hover:bg-portfolio-green/40 rounded-full flex items-center justify-center mb-4 transition-all duration-300">
                    <div className="w-6 h-6 bg-portfolio-green group-hover:bg-white rounded-full flex items-center justify-center transition-all duration-300">
                      <span className="text-black group-hover:text-portfolio-green text-xs font-bold transition-all duration-300">WD</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-portfolio-green mb-3 transition-all duration-300">Full-Stack Development</h3>
                  <p className="text-sm text-gray-300 group-hover:text-white leading-relaxed transition-all duration-300">
                    I build modern web applications using React, Next.js, Node.js, and Python, creating scalable solutions from frontend interfaces to robust backend systems.
                  </p>
                </div>

                {/* Data Analytics Card */}
                <div className="bg-portfolio-dark/50 backdrop-blur-sm rounded-xl p-6 border border-portfolio-green/10 hover:border-portfolio-green/50 hover:bg-green-900/60 hover:shadow-lg hover:shadow-portfolio-green/20 hover:scale-105 transition-all duration-300 cursor-pointer group">
                  <div className="w-10 h-10 bg-portfolio-green/20 group-hover:bg-portfolio-green/40 rounded-full flex items-center justify-center mb-4 transition-all duration-300">
                    <div className="w-6 h-6 bg-portfolio-green group-hover:bg-white rounded-full flex items-center justify-center transition-all duration-300">
                      <span className="text-black group-hover:text-portfolio-green text-xs font-bold transition-all duration-300">DA</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-portfolio-green mb-3 transition-all duration-300">Data Analytics</h3>
                  <p className="text-sm text-gray-300 group-hover:text-white leading-relaxed transition-all duration-300">
                    I analyze complex datasets using Python, SQL, and visualization tools like Tableau to extract meaningful insights and drive data-driven decision making.
                  </p>
                </div>

                {/* Automation Card */}
                <div className="bg-portfolio-dark/50 backdrop-blur-sm rounded-xl p-6 border border-portfolio-green/10 hover:border-portfolio-green/50 hover:bg-green-900/60 hover:shadow-lg hover:shadow-portfolio-green/20 hover:scale-105 transition-all duration-300 cursor-pointer group">
                  <div className="w-10 h-10 bg-portfolio-green/20 group-hover:bg-portfolio-green/40 rounded-full flex items-center justify-center mb-4 transition-all duration-300">
                    <div className="w-6 h-6 bg-portfolio-green group-hover:bg-white rounded-full flex items-center justify-center transition-all duration-300">
                      <span className="text-black group-hover:text-portfolio-green text-xs font-bold transition-all duration-300">AU</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-portfolio-green mb-3 transition-all duration-300">Process Automation</h3>
                  <p className="text-sm text-gray-300 group-hover:text-white leading-relaxed transition-all duration-300">
                    I design and implement automated workflows using Python scripts, APIs, and RPA tools to streamline business processes and eliminate repetitive tasks.
                  </p>
                </div>

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
