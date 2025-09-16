'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Lottie from 'lottie-react'
import Header from '@/components/Header'
import ScrollAnimatedSection from '@/components/ScrollAnimatedSection'

const skillCategories = [
  {
    title: "Web Development",
    description: "Building modern, responsive web applications with cutting-edge technologies and frameworks for optimal user experience.",
    icon: "html",
    skills: [
      { name: "React", icon: "reactjs" },
      { name: "Next.js", icon: "nextjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "HTML", icon: "html" },
      { name: "JavaScript", icon: "javascript" }
    ]
  },
  {
    title: "AI/ML & Data Science", 
    description: "Developing intelligent systems using machine learning algorithms, neural networks, and advanced data analysis techniques.",
    icon: "tensorflow",
    skills: [
      { name: "Python", icon: "python" },
      { name: "TensorFlow", icon: "tensorflow" },
      { name: "PyTorch", icon: "pytorch" },
      { name: "Scikit-learn", icon: "scikitlearn" },
      { name: "Pandas", icon: "pandas" },
      { name: "NumPy", icon: "numpy" }
    ]
  },
  {
    title: "Backend Development",
    description: "Creating robust server-side applications with scalable architectures, APIs, and database management systems.",
    icon: "nodejs",
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Python", icon: "python" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Express.js", icon: "expressjs" },
      { name: "GraphQL", icon: "graphql" }
    ]
  },
  {
    title: "Cloud & DevOps",
    description: "Deploying and managing applications in cloud environments with automated workflows and containerization.",
    icon: "amazonwebservices",
    skills: [
      { name: "AWS", icon: "amazonwebservices" },
      { name: "Docker", icon: "docker" },
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Vercel", icon: "vercel" },
      { name: "Linux", icon: "linux" }
    ]
  },
  {
    title: "Mobile Development",
    description: "Building cross-platform mobile applications with modern frameworks for iOS and Android platforms.",
    icon: "flutter",
    skills: [
      { name: "React Native", icon: "reactnative" },
      { name: "Flutter", icon: "flutter" },
      { name: "Expo", icon: "expo" },
      { name: "Android", icon: "android" },
      { name: "iOS", icon: "ios" },
      { name: "Kotlin", icon: "kotlin" }
    ]
  },
  {
    title: "Tools & Software",
    description: "Proficient with development tools, IDEs, and software that enhance productivity and code quality.",
    icon: "visualstudiocode",
    skills: [
      { name: "VS Code", icon: "visualstudiocode" },
      { name: "Jupyter", icon: "jupyter" },
      { name: "Postman", icon: "postman" },
      { name: "Figma", icon: "figma" },
      { name: "Photoshop", icon: "adobephotoshop" },
      { name: "Slack", icon: "slack" }
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

      {/* Skills Grid */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <ScrollAnimatedSection key={category.title} delay={index * 150}>
                <div className="relative bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 transition-all duration-500 ease-out group min-h-[400px] flex flex-col overflow-hidden hover:border-portfolio-green hover:shadow-[0_0_30px_rgba(0,255,136,0.3)]">
                  {/* Animated Green Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-portfolio-green via-green-400 to-emerald-500 opacity-0 group-hover:opacity-20 transition-all duration-700 ease-out transform scale-0 group-hover:scale-100 rounded-2xl"></div>
                  
                  {/* Content Container */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon */}
                    <div className="mb-6 text-center">
                      <div className="relative w-16 h-16 mx-auto transition-all duration-500 group-hover:scale-125 group-hover:drop-shadow-[0_0_20px_rgba(0,255,136,0.8)] group-hover:brightness-110">
                        <Image
                          src={`/icons/${category.icon}.svg`}
                          alt={category.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-4 text-center group-hover:text-white group-hover:drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] transition-all duration-500 transform group-hover:scale-105">
                      {category.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-400 text-sm mb-6 text-center leading-relaxed group-hover:text-gray-200 transition-all duration-500">
                      {category.description}
                    </p>
                    
                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-3 justify-center mt-auto">
                      {category.skills.map((skill, skillIndex) => (
                        <div 
                          key={skill.name}
                          className="flex items-center gap-2 px-3 py-2 bg-portfolio-green bg-opacity-20 text-portfolio-green rounded-lg text-xs font-medium border border-portfolio-green border-opacity-30 transition-all duration-300 hover:bg-opacity-40 hover:scale-105 hover:shadow-[0_0_15px_rgba(0,255,136,0.6)] group-hover:bg-white group-hover:bg-opacity-90 group-hover:text-gray-800 group-hover:border-white"
                        >
                          <div className="relative w-4 h-4 transition-all duration-300 group-hover:drop-shadow-[0_0_5px_rgba(0,0,0,0.3)]">
                            <Image
                              src={`/icons/${skill.icon}.svg`}
                              alt={skill.name}
                              fill
                              className="object-contain"
                            />
                          </div>
                          <span className="font-semibold">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollAnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
