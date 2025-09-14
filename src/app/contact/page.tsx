'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import ScrollAnimatedSection from '@/components/ScrollAnimatedSection'
import ContactAnimation from '@/components/ContactAnimation'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error'
  message: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: 'error',
        message: 'Please fill in all required fields.'
      })
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address.'
      })
      return
    }

    setStatus({
      type: 'loading',
      message: 'Sending your message...'
    })

    // Simulate form submission (replace with actual API call)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setStatus({
        type: 'success',
        message: 'Thank you for your message! I&apos;ll get back to you soon.'
      })
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again later.'
      })
    }
  }

  return (
    <div className="min-h-screen bg-portfolio-dark text-white">
      <Header />
      
      <div className="container mx-auto px-6 py-24">
        {/* Header Section */}
        <ScrollAnimatedSection delay={200} direction="fade">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get In <span className="text-portfolio-green">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Have a project in mind or want to collaborate? I&apos;d love to hear from you. 
              Let&apos;s discuss how we can work together to bring your ideas to life.
            </p>
            
            {/* Contact Animation */}
            <ContactAnimation />
          </div>
        </ScrollAnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <ScrollAnimatedSection delay={400} direction="left">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Let&apos;s Start a Conversation</h2>
                <p className="text-gray-300 text-lg mb-8">
                  I&apos;m always excited to take on new challenges and collaborate with amazing people. 
                  Whether you have a specific project in mind or just want to connect, feel free to reach out.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-portfolio-gray bg-opacity-30 backdrop-blur-sm rounded-lg">
                  <div className="w-12 h-12 bg-portfolio-green bg-opacity-20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-portfolio-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-gray-300">asadarshad.4721@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-portfolio-gray bg-opacity-30 backdrop-blur-sm rounded-lg">
                  <div className="w-12 h-12 bg-portfolio-green bg-opacity-20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-portfolio-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="text-gray-300">03041192980</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-portfolio-gray bg-opacity-30 backdrop-blur-sm rounded-lg">
                  <div className="w-12 h-12 bg-portfolio-green bg-opacity-20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-portfolio-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Location</h3>
                    <p className="text-gray-300">Islamabad, Pakistan</p>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="p-6 bg-portfolio-green bg-opacity-10 border border-portfolio-green border-opacity-30 rounded-lg">
                <h3 className="font-semibold text-lg mb-2 text-portfolio-green">Current Availability</h3>
                <p className="text-gray-300">
                  I&apos;m currently available for new projects and collaborations. 
                  Typical response time is within 24 hours.
                </p>
              </div>
            </div>
          </ScrollAnimatedSection>

          {/* Contact Form */}
          <ScrollAnimatedSection delay={600} direction="right">
            <div className="bg-portfolio-gray bg-opacity-30 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-portfolio-dark bg-opacity-50 border border-gray-600 rounded-lg focus:border-portfolio-green focus:outline-none transition-colors"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-portfolio-dark bg-opacity-50 border border-gray-600 rounded-lg focus:border-portfolio-green focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-portfolio-dark bg-opacity-50 border border-gray-600 rounded-lg focus:border-portfolio-green focus:outline-none transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-portfolio-dark bg-opacity-50 border border-gray-600 rounded-lg focus:border-portfolio-green focus:outline-none transition-colors resize-vertical"
                    placeholder="Tell me about your project or how I can help you..."
                    required
                  />
                </div>

                {/* Status Message */}
                {status.type !== 'idle' && (
                  <div className={`flex items-center gap-3 p-4 rounded-lg ${
                    status.type === 'success' 
                      ? 'bg-green-500 bg-opacity-20 text-green-400 border border-green-500 border-opacity-30'
                      : status.type === 'error'
                      ? 'bg-red-500 bg-opacity-20 text-red-400 border border-red-500 border-opacity-30'
                      : 'bg-blue-500 bg-opacity-20 text-blue-400 border border-blue-500 border-opacity-30'
                  }`}>
                    {status.type === 'success' && <CheckCircle className="w-5 h-5" />}
                    {status.type === 'error' && <AlertCircle className="w-5 h-5" />}
                    {status.type === 'loading' && (
                      <div className="w-5 h-5 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
                    )}
                    <span>{status.message}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status.type === 'loading'}
                  className="w-full bg-portfolio-green hover:bg-opacity-80 disabled:bg-opacity-50 text-portfolio-dark px-6 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {status.type === 'loading' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-portfolio-dark border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </ScrollAnimatedSection>
        </div>

        {/* FAQ Section */}
        <ScrollAnimatedSection delay={800} direction="up">
          <div className="mt-20 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked <span className="text-portfolio-green">Questions</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-portfolio-gray bg-opacity-30 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3 text-portfolio-green">What&apos;s your typical response time?</h3>
                <p className="text-gray-300">
                  I usually respond to inquiries within 24 hours during business days. 
                  For urgent matters, feel free to mention it in your message.
                </p>
              </div>
              
              <div className="bg-portfolio-gray bg-opacity-30 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3 text-portfolio-green">Do you work on small projects?</h3>
                <p className="text-gray-300">
                  Absolutely! I enjoy working on projects of all sizes, from small websites 
                  to complex web applications. Every project is an opportunity to create something amazing.
                </p>
              </div>
              
              <div className="bg-portfolio-gray bg-opacity-30 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3 text-portfolio-green">What technologies do you specialize in?</h3>
                <p className="text-gray-300">
                  I specialize in modern web technologies including React, Next.js, Node.js, 
                  and AI/ML integration. I&apos;m always learning new technologies to stay current.
                </p>
              </div>
              
              <div className="bg-portfolio-gray bg-opacity-30 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3 text-portfolio-green">Do you offer ongoing support?</h3>
                <p className="text-gray-300">
                  Yes! I provide ongoing support and maintenance for projects I&apos;ve worked on. 
                  We can discuss support options based on your specific needs.
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimatedSection>
      </div>
    </div>
  )
}
