'use client'

import { Download, User, Code, Server, Database, Calendar, ExternalLink, Mail, Phone, MapPin } from 'lucide-react'
import Header from '@/components/Header'
import ScrollAnimatedSection from '@/components/ScrollAnimatedSection'

export default function Resume() {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/Resume/Asad Arshad CV.pdf'
    link.download = 'Asad_Arshad_CV.pdf'
    link.click()
  }

  return (
    <div className="min-h-screen bg-portfolio-dark text-white">
      <Header />
      {/* Header */}
      <header className="bg-black bg-opacity-50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
          <h1 className="text-xl sm:text-2xl font-bold text-portfolio-green text-center sm:text-left">Asad Arshad</h1>
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 bg-portfolio-green text-black px-4 sm:px-6 py-2 rounded-lg hover:bg-green-400 transition-colors font-semibold text-sm sm:text-base"
          >
            <Download className="w-4 h-4" />
            Download CV
          </button>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Personal Info Section */}
        <ScrollAnimatedSection delay={200} direction="fade">
          <section className="mb-8 sm:mb-12">
            <div className="bg-portfolio-gray bg-opacity-50 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-center sm:text-left">Asad Arshad</h2>
              <p className="text-lg sm:text-xl text-portfolio-green mb-4 sm:mb-6 text-center sm:text-left">Full Stack Developer & AI Specialist</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-portfolio-green" />
                  <span>asadarshad@email.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-portfolio-green" />
                  <span>+92 300 1234567</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-portfolio-green" />
                  <span>Pakistan</span>
                </div>
                <div className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-portfolio-green" />
                  <span>Portfolio Website</span>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimatedSection>

        {/* Personal Info */}
        <ScrollAnimatedSection delay={400} direction="left">
          <div className="bg-portfolio-gray bg-opacity-30 backdrop-blur-sm rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <User className="w-5 h-5 sm:w-6 sm:h-6 text-portfolio-green" />
              <h3 className="text-lg sm:text-xl font-semibold">Personal Information</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 text-gray-300 text-sm sm:text-base">
              <div>
                <p><strong>Name:</strong> Muhammad Asad Arshad</p>
                <p><strong>Title:</strong> Computer Science Graduate & AI/ML Developer</p>
              </div>
              <div>
                <p><strong>Email:</strong> asadarshad.4721@gmail.com</p>
                <p><strong>Location:</strong> Islamabad, Pakistan</p>
                <p><strong>Phone:</strong> 03041192980</p>
              </div>
            </div>
            <div className="mt-3 sm:mt-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p><strong>Summary:</strong> Computer Science graduate with expertise in Python, AI/ML model development, and automation pipelines. Skilled in building AI agents and interactive AI applications, delivering scalable, context-aware solutions that enhance user engagement and streamline processes.</p>
            </div>
          </div>
        </ScrollAnimatedSection>

        {/* Skills Section */}
        <ScrollAnimatedSection delay={800} direction="right">
          <section className="mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-portfolio-green text-center sm:text-left">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <ScrollAnimatedSection delay={1200} direction="up">
                <div className="bg-portfolio-gray bg-opacity-30 backdrop-blur-sm rounded-lg p-4 sm:p-6">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <Database className="w-5 h-5 sm:w-6 sm:h-6 text-portfolio-green" />
                    <h4 className="font-semibold text-base sm:text-lg">Tools & Platforms</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'Docker', 'Discord', 'Power BI', 'Tableau', 'Dash'].map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 bg-portfolio-green bg-opacity-20 text-portfolio-green rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollAnimatedSection>
              
              <ScrollAnimatedSection delay={1100} direction="up">
                <div className="bg-portfolio-gray bg-opacity-30 backdrop-blur-sm rounded-lg p-4 sm:p-6">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <Code className="w-5 h-5 sm:w-6 sm:h-6 text-portfolio-green" />
                    <h4 className="font-semibold text-base sm:text-lg">Languages & Web Development</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'C++', 'SQL', 'JavaScript/TypeScript', 'React', 'Next.js', 'HTML/CSS', 'Flask'].map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 bg-portfolio-green bg-opacity-20 text-portfolio-green rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollAnimatedSection>
              
              <ScrollAnimatedSection delay={1100} direction="up">
                <div className="bg-portfolio-gray bg-opacity-30 backdrop-blur-sm rounded-lg p-4 sm:p-6">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <Server className="w-5 h-5 sm:w-6 sm:h-6 text-portfolio-green" />
                    <h4 className="font-semibold text-base sm:text-lg">Data Science & AI</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Pandas', 'NumPy', 'Scikit-learn', 'PyTorch', 'OpenAI API', 'Hugging Face', 'LangChain', 'TensorFlow', 'Machine Learning'].map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 bg-portfolio-green bg-opacity-20 text-portfolio-green rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollAnimatedSection>
            </div>
          </section>
        </ScrollAnimatedSection>

        {/* Experience Section */}
        <ScrollAnimatedSection delay={1200} direction="up">
          <section className="mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-portfolio-green text-center sm:text-left">Professional Experience</h3>
            <div className="space-y-4 sm:space-y-6">
              <ScrollAnimatedSection delay={1400} direction="left">
                <div className="bg-portfolio-gray bg-opacity-30 backdrop-blur-sm rounded-lg p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2 sm:gap-0">
                    <div>
                      <h4 className="font-semibold text-base sm:text-lg">Software Developer</h4>
                      <p className="text-portfolio-green text-sm sm:text-base">Concept, Sector I-9, Islamabad</p>
                    </div>
                    <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-400">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                      May 2025 - Jul 2025
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-300 text-sm sm:text-base">
                    <li>Built 5+ real-time dashboards with Power BI and Dash for 1M+ Apache logs, improving observability by 35%</li>
                    <li>Optimized data ingestion and filtering, cutting query latency by 20% and server usage by 25%</li>
                    <li>Automated reports for 10+ metrics, reducing manual effort by 40% and speeding decision-making by 30%</li>
                    <li>Streamlined insights for cross-team collaboration, improving workflow efficiency by 15% and stakeholder satisfaction by 20%</li>
                  </ul>
                </div>
              </ScrollAnimatedSection>
              
              <ScrollAnimatedSection delay={1600} direction="right">
                <div className="bg-portfolio-gray bg-opacity-30 backdrop-blur-sm rounded-lg p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2 sm:gap-0">
                    <div>
                      <h4 className="font-semibold text-base sm:text-lg">Frontend Developer</h4>
                      <p className="text-portfolio-green text-sm sm:text-base">Insights, NSTP, Nust Islamabad - Remote</p>
                    </div>
                    <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-400">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                      May 2024 - July 2024
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-300 text-sm sm:text-base">
                    <li>Increased checkout conversions by 70% and social media engagement by 50% by adding digital outreach buttons, real-time cart updates, and client-side filters using React</li>
                    <li>Refactored front-end with modular components, reducing UI bugs by 40% and achieving 99.2% uptime</li>
                    <li>Optimized asset delivery and page rendering, speeding up average page load time from 2.5s to 1.8s, 28% faster</li>
                    <li>Streamlined product listing navigation and display, improving discovery speed and user retention by 32%</li>
                  </ul>
                </div>
              </ScrollAnimatedSection>
            </div>
          </section>
        </ScrollAnimatedSection>

        {/* Education Section */}
        <ScrollAnimatedSection delay={1800} direction="fade">
          <section className="mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-portfolio-green text-center sm:text-left">Education</h3>
            <div className="bg-portfolio-gray bg-opacity-30 backdrop-blur-sm rounded-lg p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2 sm:gap-0">
                <div>
                  <h4 className="font-semibold text-base sm:text-lg">BSc. Computer Science</h4>
                  <p className="text-portfolio-green text-sm sm:text-base">National University of Science and Technology, Islamabad</p>
                </div>
                <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-400">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                  2024
                </div>
              </div>
              <p className="text-gray-300 text-sm sm:text-base">
                Specialized in Software Engineering and Artificial Intelligence
              </p>
            </div>
          </section>
        </ScrollAnimatedSection>

        {/* Projects Section */}
        <ScrollAnimatedSection delay={2000} direction="up">
          <section>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-portfolio-green text-center sm:text-left">Key Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <ScrollAnimatedSection delay={2200} direction="left">
                <div className="bg-portfolio-gray bg-opacity-30 backdrop-blur-sm rounded-lg p-4 sm:p-6">
                  <h4 className="font-semibold text-base sm:text-lg mb-2">AI-Native Interactive Portfolio</h4>
                  <p className="text-gray-300 mb-3 text-sm sm:text-base leading-relaxed">
                    Developed a fully interactive portfolio to replace static designs, featuring a human-like avatar with real-time question answering, expressive gestures, and immersive engagement for recruiters and visitors.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-portfolio-green bg-opacity-20 text-portfolio-green rounded-full text-sm">
                      React
                    </span>
                    <span className="px-3 py-1 bg-portfolio-green bg-opacity-20 text-portfolio-green rounded-full text-sm">
                      OpenAI API
                    </span>
                    <span className="px-3 py-1 bg-portfolio-green bg-opacity-20 text-portfolio-green rounded-full text-sm">
                      LangChain
                    </span>
                  </div>
                </div>
              </ScrollAnimatedSection>
              
              <ScrollAnimatedSection delay={2400} direction="right">
                <div className="bg-portfolio-gray bg-opacity-30 backdrop-blur-sm rounded-lg p-4 sm:p-6">
                  <h4 className="font-semibold text-base sm:text-lg mb-2">Plant Disease Detection Using ML</h4>
                  <p className="text-gray-300 mb-3 text-sm sm:text-base leading-relaxed">
                    Built structured dataset pipelines with TensorFlow, EfficientNetB4, and Flask to detect plant diseases from leaf images using transfer learning. Achieved 96% classification accuracy across 38 disease classes.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-portfolio-green bg-opacity-20 text-portfolio-green rounded-full text-sm">
                      TensorFlow
                    </span>
                    <span className="px-3 py-1 bg-portfolio-green bg-opacity-20 text-portfolio-green rounded-full text-sm">
                      Flask
                    </span>
                    <span className="px-3 py-1 bg-portfolio-green bg-opacity-20 text-portfolio-green rounded-full text-sm">
                      Python
                    </span>
                  </div>
                </div>
              </ScrollAnimatedSection>
              
              <ScrollAnimatedSection delay={2600} direction="left">
                <div className="bg-portfolio-gray bg-opacity-30 backdrop-blur-sm rounded-lg p-4 sm:p-6">
                  <h4 className="font-semibold text-base sm:text-lg mb-2">AI Autonomous Drone Navigation</h4>
                  <p className="text-gray-300 mb-3 text-sm sm:text-base leading-relaxed">
                    The autonomous drone system combines hardware (Pixhawk flight controller, Jetson computer, telemetry radio, and LiDAR) with advanced software for reliable navigation using computer vision and path planning algorithms.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-portfolio-green bg-opacity-20 text-portfolio-green rounded-full text-sm">
                      Computer Vision
                    </span>
                    <span className="px-3 py-1 bg-portfolio-green bg-opacity-20 text-portfolio-green rounded-full text-sm">
                      LiDAR
                    </span>
                    <span className="px-3 py-1 bg-portfolio-green bg-opacity-20 text-portfolio-green rounded-full text-sm">
                      Python
                    </span>
                  </div>
                </div>
              </ScrollAnimatedSection>
              
              <ScrollAnimatedSection delay={2800} direction="right">
                <div className="bg-portfolio-gray bg-opacity-30 backdrop-blur-sm rounded-lg p-6">
                  <h4 className="font-semibold text-lg mb-2">AI Voice Agent</h4>
                  <p className="text-gray-300 mb-3">
                    Engineered a voice-activated system using Python, Speech Recognition, and gTTS for seamless bidirectional communication. Integrated Twilio API for phone calls, email automation, web scraping, and natural language processing.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-portfolio-green bg-opacity-20 text-portfolio-green rounded-full text-sm">
                      Python
                    </span>
                    <span className="px-3 py-1 bg-portfolio-green bg-opacity-20 text-portfolio-green rounded-full text-sm">
                      Twilio API
                    </span>
                    <span className="px-3 py-1 bg-portfolio-green bg-opacity-20 text-portfolio-green rounded-full text-sm">
                      OpenAI
                    </span>
                  </div>
                </div>
              </ScrollAnimatedSection>
            </div>
          </section>
        </ScrollAnimatedSection>
      </div>
    </div>
  )
}
