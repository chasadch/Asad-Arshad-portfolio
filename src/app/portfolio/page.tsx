'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import ScrollAnimatedSection from '@/components/ScrollAnimatedSection'
import ProjectCard from '@/components/ProjectCard'
import AIAnimation from '@/components/AIAnimation'
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
      
      <div className="container mx-auto px-6 py-24">
        {/* Header Section */}
        <ScrollAnimatedSection delay={200} direction="fade">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              My <span className="text-portfolio-green">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
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
          <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-portfolio-gray bg-opacity-90 backdrop-blur-md rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {(() => {
                const project = projects.find(p => p.id === selectedProject)
                if (!project) return null
                
                return (
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
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

                    {/* AI Animation for AI Chat Bot Project */}
                    {project.id === 1 && (
                      <div className="mb-8">
                        <AIAnimation className="mb-6" />
                      </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-portfolio-green">Project Overview</h3>
                        <p className="text-gray-300 mb-6">{project.longDescription}</p>

                        <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-gray-300 mb-8">
              Let&apos;s work together to bring your ideas to life with cutting-edge technology and innovative solutions.
            </p>

                        <h3 className="text-xl font-semibold mb-4 text-portfolio-green">Key Features</h3>
                        <ul className="space-y-2 mb-6">
                          {project.features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2 text-gray-300">
                              <div className="w-2 h-2 bg-portfolio-green rounded-full"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-portfolio-green">Technologies Used</h3>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((tech) => (
                            <span 
                              key={tech}
                              className="px-3 py-2 bg-portfolio-green bg-opacity-20 text-portfolio-green rounded-lg"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex gap-4">
                          <a
                            href={project.githubUrl}
                            className="flex items-center gap-2 bg-portfolio-green bg-opacity-20 hover:bg-opacity-30 text-portfolio-green px-6 py-3 rounded-lg font-medium transition-all duration-300"
                          >
                            <Github className="w-5 h-5" />
                            View Code
                          </a>
                          <a
                            href={project.liveUrl}
                            className="flex items-center gap-2 bg-blue-500 bg-opacity-20 hover:bg-opacity-30 text-blue-400 px-6 py-3 rounded-lg font-medium transition-all duration-300"
                          >
                            <ExternalLink className="w-5 h-5" />
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
