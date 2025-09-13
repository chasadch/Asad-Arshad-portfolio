import type { Metadata } from 'next'
import './globals.css'
import PageTransitionProvider from '@/components/PageTransitionProvider'

export const metadata: Metadata = {
  title: 'Asad Arshad - Full Stack Developer & AI Specialist',
  description: 'Portfolio of Asad Arshad, Full Stack Developer and AI Specialist based in Pakistan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <PageTransitionProvider>
          {children}
        </PageTransitionProvider>
      </body>
    </html>
  )
}
