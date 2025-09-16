'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Header from '@/components/Header'
import ScrollAnimatedSection from '@/components/ScrollAnimatedSection'
import ContactAnimation from '@/components/ContactAnimation'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

type FormData = {
  name: string
  email: string
  subject: string
  message: string
}

type FormStatus = {
  type: 'idle' | 'loading' | 'success' | 'error'
  message: string
}

// Form validation schema
const formSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  subject: yup.string().required('Subject is required'),
  message: yup.string().required('Message is required').min(10, 'Message should be at least 10 characters')
})

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(formSchema)
  })

  const onSubmit = async (data: FormData) => {
    setStatus({ type: 'loading', message: 'Sending your message...' })
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      
      const result = await response.json()
      
      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Your message has been sent successfully! I\'ll get back to you soon.'
        })
        reset()
      } else {
        throw new Error(result.message || 'Failed to send message')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to send message. Please try again later.'
      })
    }
  }

  return (
    <div className="min-h-screen bg-portfolio-dark text-white">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <ScrollAnimatedSection delay={200} direction="fade">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Get In <span className="text-portfolio-green">Touch</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Have a project in mind or want to chat? Feel free to reach out to me using the form below.
            </p>
          </div>
        </ScrollAnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <ScrollAnimatedSection delay={400} direction="left">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Let&apos;s Start a Conversation</h2>
                <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                  I&apos;m always excited to take on new challenges and collaborate with amazing people. 
                  Whether you have a specific project in mind or just want to connect, feel free to reach out.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-portfolio-gray bg-opacity-30 backdrop-blur-sm rounded-lg">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-portfolio-green bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-portfolio-green" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-base sm:text-lg">Email</h3>
                    <p className="text-gray-300 text-sm sm:text-base break-all">asadarshad.4721@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-portfolio-gray bg-opacity-30 backdrop-blur-sm rounded-lg">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-portfolio-green bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-portfolio-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg">Phone</h3>
                    <p className="text-gray-300 text-sm sm:text-base">03041192980</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-portfolio-gray bg-opacity-30 backdrop-blur-sm rounded-lg">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-portfolio-green bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-portfolio-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg">Location</h3>
                    <p className="text-gray-300 text-sm sm:text-base">Islamabad, Pakistan</p>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="p-4 sm:p-6 bg-portfolio-green bg-opacity-10 border border-portfolio-green border-opacity-30 rounded-lg">
                <h3 className="font-semibold text-base sm:text-lg mb-2 text-portfolio-green">Current Availability</h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  I&apos;m currently available for new projects and collaborations. 
                  Typical response time is within 24 hours.
                </p>
              </div>
            </div>
          </ScrollAnimatedSection>

          {/* Contact Form */}
          <ScrollAnimatedSection delay={600} direction="right">
            <div className="bg-portfolio-gray bg-opacity-30 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Send a Message</h2>
              
              {status.message && (
                <div className={`p-3 sm:p-4 rounded-lg mb-4 sm:mb-6 ${
                  status.type === 'success' 
                    ? 'bg-green-500 bg-opacity-20 border border-green-500 border-opacity-30 text-green-300' 
                    : 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-30 text-red-300'
                }`}>
                  <p className="text-sm sm:text-base">{status.message}</p>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register('name')}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-portfolio-dark border border-gray-600 rounded-lg focus:ring-2 focus:ring-portfolio-green focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 text-sm sm:text-base"
                      placeholder="Your full name"
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register('email')}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-portfolio-dark border border-gray-600 rounded-lg focus:ring-2 focus:ring-portfolio-green focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 text-sm sm:text-base"
                      placeholder="your.email@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    {...register('subject')}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-portfolio-dark border border-gray-600 rounded-lg focus:ring-2 focus:ring-portfolio-green focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 text-sm sm:text-base"
                    placeholder="What's this about?"
                  />
                  {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    {...register('message')}
                    rows={5}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-portfolio-dark border border-gray-600 rounded-lg focus:ring-2 focus:ring-portfolio-green focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 resize-vertical text-sm sm:text-base"
                    placeholder="Tell me about your project or idea..."
                  />
                  {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status.type === 'loading'}
                  className="w-full bg-portfolio-green hover:bg-portfolio-green-dark text-portfolio-dark font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-sm sm:text-base"
                >
                  {status.type === 'loading' ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-portfolio-dark border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </ScrollAnimatedSection>
        </div>

        {/* FAQ Section */}
        <ScrollAnimatedSection delay={800} direction="up">
          <div className="mt-12 sm:mt-16 lg:mt-20 max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12">
              Frequently Asked <span className="text-portfolio-green">Questions</span>
            </h2>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-portfolio-gray bg-opacity-30 backdrop-blur-sm rounded-lg p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-portfolio-green">
                  What&apos;s your typical project timeline?
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  Project timelines vary depending on scope and complexity. A simple website might take 2-3 weeks, 
                  while a complex web application could take 2-3 months. I always provide detailed timelines during 
                  our initial consultation.
                </p>
              </div>

              <div className="bg-portfolio-gray bg-opacity-30 backdrop-blur-sm rounded-lg p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-portfolio-green">
                  Do you work with international clients?
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  Absolutely! I work with clients worldwide and am comfortable with different time zones. 
                  I use various communication tools to ensure smooth collaboration regardless of location.
                </p>
              </div>

              <div className="bg-portfolio-gray bg-opacity-30 backdrop-blur-sm rounded-lg p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-portfolio-green">
                  What technologies do you specialize in?
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  I specialize in modern web technologies including React, Next.js, TypeScript, Node.js, 
                  and various databases. I&apos;m always learning new technologies to stay current with industry trends.
                </p>
              </div>

              <div className="bg-portfolio-gray bg-opacity-30 backdrop-blur-sm rounded-lg p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-portfolio-green">
                  Do you provide ongoing support?
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  Yes! I offer various support packages including bug fixes, feature updates, and maintenance. 
                  We can discuss the best support option for your project during our consultation.
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimatedSection>
      </main>
    </div>
  )
}
