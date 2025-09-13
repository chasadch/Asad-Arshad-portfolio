'use client'

import { Calendar, Tag, Github, ExternalLink } from 'lucide-react'
import Image from 'next/image'

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  category: string
  date: string
  status: string
  githubUrl: string
  liveUrl: string
  features: string[]
}

interface ProjectCardProps {
  project: Project
  index: number
  onViewDetails: (id: number) => void
}

export default function ProjectCard({ project, index, onViewDetails }: ProjectCardProps) {
  return (
    <div className="bg-portfolio-gray bg-opacity-30 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-opacity-40 transition-all duration-300 group relative"
    >
      {/* Project Image Container */}
      <div className="relative h-80 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
        {/* Project Image */}
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        
        {/* Green Overlay Animation - Triggered by Hover */}
        <div className="absolute inset-0 bg-portfolio-green opacity-0 group-hover:opacity-90 transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-portfolio-dark px-6">
              <div className="transform transition-all duration-300 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100" style={{ transitionDelay: '200ms' }}>
                <h3 className="text-3xl font-bold mb-3">{project.title}</h3>
                <p className="text-lg opacity-90 mb-4">{project.category}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-portfolio-dark bg-opacity-30 text-portfolio-dark rounded-full text-sm font-medium transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                      style={{ transitionDelay: `${techIndex * 100 + 400}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4 z-20">
          <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
            project.status === 'Completed' 
              ? 'bg-green-500 bg-opacity-20 text-green-400 border border-green-400 border-opacity-30' 
              : 'bg-yellow-500 bg-opacity-20 text-yellow-400 border border-yellow-400 border-opacity-30'
          }`}>
            {project.status}
          </span>
        </div>

        {/* Hover Action Buttons */}
        <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300" style={{ transitionDelay: '600ms' }}>
          <button
            onClick={() => onViewDetails(project.id)}
            className="flex-1 bg-portfolio-dark bg-opacity-50 hover:bg-opacity-70 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 backdrop-blur-sm"
          >
            View Details
          </button>
          <a
            href={project.githubUrl}
            className="p-2 bg-portfolio-dark bg-opacity-50 hover:bg-opacity-70 rounded-lg transition-all duration-300 backdrop-blur-sm"
            title="View on GitHub"
          >
            <Github className="w-5 h-5 text-white" />
          </a>
          <a
            href={project.liveUrl}
            className="p-2 bg-portfolio-dark bg-opacity-50 hover:bg-opacity-70 rounded-lg transition-all duration-300 backdrop-blur-sm"
            title="View Live Demo"
          >
            <ExternalLink className="w-5 h-5 text-white" />
          </a>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <Tag className="w-4 h-4 text-portfolio-green" />
          <span className="text-sm text-portfolio-green">{project.category}</span>
          <Calendar className="w-4 h-4 text-gray-400 ml-auto" />
          <span className="text-sm text-gray-400">{project.date}</span>
        </div>

        <h3 className="text-xl font-bold mb-3 group-hover:text-portfolio-green transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-300 mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span 
              key={tech}
              className="px-3 py-1 bg-portfolio-green bg-opacity-20 text-portfolio-green rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-3 py-1 bg-gray-600 bg-opacity-20 text-gray-400 rounded-full text-sm">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
