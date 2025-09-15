'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import ScrollAnimatedSection from '@/components/ScrollAnimatedSection'
import ProjectCard from '@/components/ProjectCard'
import AIAnimation from '@/components/AIAnimation'
import SplineBackground from '@/components/SplineBackground'
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: "AI Resume Builder",
    description: "Transform your career with AI-powered resume creation. Professional, ATS-friendly resumes with intelligent content suggestions and multiple templates.",
    longDescription: "An advanced AI-powered resume builder that helps job seekers create professional, ATS-optimized resumes. The platform uses machine learning to analyze job descriptions and suggest relevant content, skills, and formatting. Features include multiple professional templates, real-time preview, PDF export, and a resume health checker that ensures your resume meets industry standards.",
    image: "/Ai generated  resume .png",
    technologies: ["React", "Next.js", "Python", "OpenAI GPT", "Tailwind CSS", "PDF.js"],
    category: "AI/ML",
    date: "2024",
    status: "Completed",
    githubUrl: "#",
    liveUrl: "#",
    features: [
      "AI Content Generation",
      "ATS Optimization",
      "Multiple Templates",
      "Real-time Preview",
      "PDF Export",
      "Resume Health Check"
    ]
  },
  {
    id: 2,
    title: "InLights AI Services",
    description: "AI-enabled web services and products company providing intelligent solutions for businesses across various industries.",
    longDescription: "InLights is a comprehensive AI services platform that delivers cutting-edge web services and AI-powered products. Based in Islamabad, Pakistan, the company specializes in creating intelligent business solutions including web development, AI integration, and custom software development. The platform showcases modern design principles with responsive layouts and interactive elements.",
    image: "/portfolio.jpg",
    technologies: ["Next.js", "TypeScript", "AI Integration", "Node.js", "PostgreSQL", "AWS"],
    category: "Web Development",
    date: "2024",
    status: "Completed",
    githubUrl: "#",
    liveUrl: "https://www.inlights.ai",
    features: [
      "AI Service Integration",
      "Modern Web Design",
      "Responsive Layout",
      "Business Solutions",
      "Custom Development",
      "Cloud Infrastructure"
    ]
  },
  {
    id: 3,
    title: "AI Chat Bot Platform",
    description: "An intelligent chatbot platform with natural language processing capabilities, machine learning integration, and real-time conversation management.",
    longDescription: "This comprehensive AI chatbot platform leverages advanced natural language processing to create intelligent conversational experiences. Built with modern web technologies, it features real-time messaging, context awareness, and seamless integration with various AI models. The platform includes an admin dashboard for managing conversations, analytics for tracking user interactions, and customizable bot personalities.",
    image: "/chat bot.jpg",
    technologies: ["React", "Node.js", "Python", "TensorFlow", "Socket.io", "MongoDB"],
    category: "AI/ML",
    date: "2024",
    status: "Completed",
    githubUrl: "#",
    liveUrl: "#",
    features: [
      "Natural Language Processing",
      "Real-time Messaging",
      "Context Awareness",
      "Admin Dashboard",
      "Analytics & Reporting",
      "Multi-language Support"
    ]
  },
  {
    id: 4,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with payment integration, inventory management, and comprehensive admin dashboard.",
    longDescription: "Modern e-commerce platform built with Next.js and featuring a complete shopping experience. Includes user authentication, product catalog, shopping cart, secure payment processing with Stripe, order management, and a powerful admin panel for managing products, orders, and customers.",
    image: "/E-Comm.jpg",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Stripe", "Tailwind CSS", "Vercel"],
    category: "Web Development",
    date: "2023",
    status: "Completed",
    githubUrl: "#",
    liveUrl: "#",
    features: [
      "User Authentication",
      "Product Catalog",
      "Shopping Cart",
      "Payment Integration",
      "Order Management",
      "Admin Dashboard"
    ]
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website with 3D animations, typewriter effects, and scroll-triggered animations.",
    longDescription: "A stunning portfolio website showcasing modern web development techniques. Features include 3D revolving cube animations, typewriter text effects, glassmorphism design elements, and smooth scroll-triggered animations. Built with Next.js and Tailwind CSS for optimal performance and responsive design.",
    image: "/portfolio.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "CSS3", "Vercel"],
    category: "Web Development",
    date: "2024",
    status: "In Progress",
    githubUrl: "#",
    liveUrl: "#",
    features: [
      "3D Animations",
      "Typewriter Effects",
      "Glassmorphism Design",
      "Scroll Animations",
      "Responsive Design",
      "Modern UI/UX"
    ]
  },
  {
    id: 6,
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates, team collaboration, and project tracking.",
    longDescription: "A comprehensive task management solution designed for teams and individuals. Features real-time collaboration, project organization, deadline tracking, file attachments, and detailed progress reporting. Built with modern technologies to ensure scalability and performance.",
    image: "/Task  mang.jpg",
    technologies: ["React", "Node.js", "PostgreSQL", "Socket.io", "Material-UI", "AWS"],
    category: "Web Development",
    date: "2023",
    status: "Completed",
    githubUrl: "#",
    liveUrl: "#",
    features: [
      "Real-time Collaboration",
      "Project Organization",
      "Deadline Tracking",
      "File Attachments",
      "Progress Reporting",
      "Team Management"
    ]
  }
]

const categories = ["All", "AI/ML", "Web Development", "Mobile", "Desktop"]

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <div className="min-h-screen bg-portfolio-dark text-white">
      <Header />
      
      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
        {/* Header Section */}
        <ScrollAnimatedSection delay={200} direction="fade">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              My <span className="text-portfolio-green">Portfolio</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Explore my latest projects and creative works. Each project represents a unique challenge 
              and showcases different aspects of my technical expertise and problem-solving abilities.
            </p>
          </div>
        </ScrollAnimatedSection>

        {/* Category Filter */}
        <ScrollAnimatedSection delay={400} direction="up">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-portfolio-green text-portfolio-dark'
                    : 'bg-portfolio-gray bg-opacity-30 backdrop-blur-sm text-gray-300 hover:bg-portfolio-green hover:bg-opacity-20 hover:text-portfolio-green'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollAnimatedSection>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onViewDetails={setSelectedProject}
            />
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
            <div className="bg-portfolio-gray bg-opacity-90 backdrop-blur-md rounded-xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
              {(() => {
                const project = projects.find(p => p.id === selectedProject)
                if (!project) return null
                
                return (
                  <div className="p-4 sm:p-6 lg:p-8">
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-6 gap-4">
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-bold mb-2">{project.title}</h2>
                        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400">
                          <span className="flex items-center gap-1">
                            <Tag className="w-4 h-4" />
                            {project.category}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {project.date}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            project.status === 'Completed' 
                              ? 'bg-green-500 bg-opacity-20 text-green-400' 
                              : 'bg-yellow-500 bg-opacity-20 text-yellow-400'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="text-gray-400 hover:text-white text-2xl"
                      >
                        ×
                      </button>
                    </div>

                    {/* AI Animation for AI Resume Builder Project */}
                    {project.id === 1 && (
                      <div className="mb-8">
                        <AIAnimation className="mb-6" />
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-4 text-portfolio-green">Project Overview</h3>
                        <p className="text-sm sm:text-base text-gray-300 mb-6">{project.longDescription}</p>

                        <h3 className="text-lg sm:text-xl font-semibold mb-4 text-portfolio-green">Key Features</h3>
                        <ul className="space-y-2 mb-6">
                          {project.features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm sm:text-base text-gray-300">
                              <div className="w-2 h-2 bg-portfolio-green rounded-full flex-shrink-0"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-4 text-portfolio-green">Technologies Used</h3>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((tech) => (
                            <span 
                              key={tech}
                              className="px-2 sm:px-3 py-1 sm:py-2 bg-portfolio-green bg-opacity-20 text-portfolio-green rounded-lg text-xs sm:text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                          <a
                            href={project.githubUrl}
                            className="flex items-center justify-center gap-2 bg-portfolio-green bg-opacity-20 hover:bg-opacity-30 text-portfolio-green px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-300"
                          >
                            <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                            View Code
                          </a>
                          <a
                            href={project.liveUrl}
                            className="flex items-center justify-center gap-2 bg-blue-500 bg-opacity-20 hover:bg-opacity-30 text-blue-400 px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-300"
                          >
                            <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                            Live Demo
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })()}
            </div>
          </div>
        )}


        {/* Interactive 3D Experience Section */}
        <ScrollAnimatedSection delay={800} direction="fade">
          <div className="relative mb-20">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Interactive <span className="text-portfolio-green">3D Experience</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Move your cursor to interact with the 3D animation and explore the immersive experience
              </p>
            </div>

            {/* 3D Animation Container */}
            <div className="relative group">
              {/* Gradient Border Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-portfolio-green via-blue-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              
              {/* Main Animation Container */}
              <div className="relative bg-portfolio-gray bg-opacity-20 backdrop-blur-sm rounded-2xl overflow-hidden border border-portfolio-gray border-opacity-30">
                {/* Responsive Height Container */}
                <div className="relative h-64 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem]">
                  <SplineBackground />
                  
                  {/* Overlay with Instructions */}
                  <div className="absolute top-4 left-4 right-4 z-10">
                    <div className="bg-black bg-opacity-40 backdrop-blur-sm rounded-lg px-4 py-3 border border-white border-opacity-20">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-portfolio-green rounded-full animate-pulse"></div>
                          <span className="text-white text-sm font-medium">Interactive Mode</span>
                        </div>
                        <span className="text-gray-300 text-xs hidden sm:block">Move cursor to control</span>
                      </div>
                    </div>
                  </div>

                  {/* Corner Decorations */}
                  <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-portfolio-green opacity-30 rounded-tl-2xl"></div>
                  <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-portfolio-green opacity-30 rounded-tr-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-portfolio-green opacity-30 rounded-bl-2xl"></div>
                  <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-portfolio-green opacity-30 rounded-br-2xl"></div>
                </div>

                {/* Bottom Info Bar */}
                <div className="bg-portfolio-gray bg-opacity-40 backdrop-blur-sm px-6 py-4 border-t border-portfolio-gray border-opacity-30">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        <span className="text-sm text-gray-300">Real-time Interaction</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                        <span className="text-sm text-gray-300">3D Animation</span>
                      </div>
                    </div>
                    <div className="text-xs text-gray-400 text-center sm:text-right">
                      Built with Spline & React
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-portfolio-gray bg-opacity-20 backdrop-blur-sm rounded-xl p-6 border border-portfolio-gray border-opacity-30 hover:border-portfolio-green hover:border-opacity-50 transition-all duration-300">
                <div className="w-12 h-12 bg-portfolio-green bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-portfolio-green rounded-sm"></div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Cursor Tracking</h3>
                <p className="text-gray-400 text-sm">Objects respond to your mouse movement in real-time</p>
              </div>

              <div className="bg-portfolio-gray bg-opacity-20 backdrop-blur-sm rounded-xl p-6 border border-portfolio-gray border-opacity-30 hover:border-blue-500 hover:border-opacity-50 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">3D Physics</h3>
                <p className="text-gray-400 text-sm">Smooth animations with realistic movement patterns</p>
              </div>

              <div className="bg-portfolio-gray bg-opacity-20 backdrop-blur-sm rounded-xl p-6 border border-portfolio-gray border-opacity-30 hover:border-purple-500 hover:border-opacity-50 transition-all duration-300">
                <div className="w-12 h-12 bg-purple-500 bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-purple-500 rounded-lg"></div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Immersive Design</h3>
                <p className="text-gray-400 text-sm">Modern glassmorphism with stunning visual effects</p>
              </div>
            </div>
          </div>
        </ScrollAnimatedSection>

        {/* Call to Action */}
        <ScrollAnimatedSection delay={1000} direction="fade">
          <div className="text-center bg-portfolio-gray bg-opacity-30 backdrop-blur-sm rounded-xl p-12">
            <h2 className="text-3xl font-bold mb-4">
              Interested in <span className="text-portfolio-green">Working Together</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              I&apos;m always open to discussing new opportunities and exciting projects. 
              Let&apos;s create something amazing together!
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-portfolio-green hover:bg-opacity-80 text-portfolio-dark px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
            >
              Get In Touch
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </ScrollAnimatedSection>
      </div>
    </div>
  )
}
