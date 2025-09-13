'use client'

import { useEffect, useState } from 'react'
import Lottie from 'lottie-react'
import Header from '@/components/Header'
import ScrollAnimatedSection from '@/components/ScrollAnimatedSection'

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 95, color: "from-blue-500 to-yellow-500" },
      { name: "JavaScript", level: 90, color: "from-yellow-400 to-orange-500" },
      { name: "TypeScript", level: 85, color: "from-blue-600 to-blue-400" },
      { name: "Java", level: 80, color: "from-red-500 to-orange-600" },
      { name: "C++", level: 75, color: "from-purple-500 to-pink-500" },
    ]
  },
  {
    title: "AI/ML & Data Science",
    skills: [
      { name: "Machine Learning", level: 95, color: "from-green-500 to-teal-500" },
      { name: "Deep Learning", level: 90, color: "from-indigo-500 to-purple-500" },
      { name: "TensorFlow", level: 85, color: "from-orange-500 to-red-500" },
      { name: "PyTorch", level: 85, color: "from-red-500 to-pink-500" },
      { name: "Pandas", level: 90, color: "from-blue-500 to-cyan-500" },
      { name: "NumPy", level: 90, color: "from-cyan-500 to-blue-500" },
      { name: "Scikit-learn", level: 85, color: "from-yellow-500 to-orange-500" },
    ]
  },
  {
    title: "Web Development",
    skills: [
      { name: "React", level: 90, color: "from-cyan-400 to-blue-500" },
      { name: "Next.js", level: 85, color: "from-gray-800 to-gray-600" },
      { name: "Node.js", level: 80, color: "from-green-600 to-green-400" },
      { name: "HTML/CSS", level: 95, color: "from-orange-500 to-red-500" },
      { name: "Tailwind CSS", level: 90, color: "from-teal-400 to-cyan-500" },
    ]
  },
  {
    title: "Databases & Cloud",
    skills: [
      { name: "MongoDB", level: 80, color: "from-green-600 to-green-400" },
      { name: "PostgreSQL", level: 75, color: "from-blue-600 to-indigo-500" },
      { name: "AWS", level: 70, color: "from-orange-400 to-yellow-500" },
      { name: "Docker", level: 75, color: "from-blue-500 to-cyan-500" },
    ]
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", level: 90, color: "from-orange-500 to-red-500" },
      { name: "VS Code", level: 95, color: "from-blue-500 to-cyan-500" },
      { name: "Jupyter", level: 90, color: "from-orange-400 to-red-500" },
      { name: "Postman", level: 85, color: "from-orange-500 to-pink-500" },
    ]
  }
]

export default function Skills() {
  const [animationData, setAnimationData] = useState(null)

  useEffect(() => {
    // Load the Code typing animation
    fetch('/animate/Code typing concept.json')
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Error loading animation:', error))
  }, [])

  return (
    <main className="min-h-screen relative">
      {/* Geometric Background */}
      <div className="geometric-bg"></div>
      
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            My <span className="text-portfolio-green">Skills</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            A comprehensive overview of my technical expertise in AI/ML, web development, 
            and software engineering technologies.
          </p>

          {/* Code Typing Animation */}
          {animationData && (
            <div className="flex justify-center mb-16">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <Lottie
                  animationData={animationData}
                  loop={true}
                  autoplay={true}
                  style={{ 
                    width: '100%', 
                    height: '100%',
                    filter: 'drop-shadow(0 8px 16px rgba(0, 255, 136, 0.3))'
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Skills Sections */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <ScrollAnimatedSection key={category.title} delay={categoryIndex * 200}>
              <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-800">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
                  {category.title}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-portfolio-green font-semibold">{skill.level}%</span>
                      </div>
                      
                      {/* Skill Progress Bar */}
                      <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out skill-bar`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimatedSection>
          ))}
        </div>
      </div>
    </main>
  )
}
