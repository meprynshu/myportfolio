import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Priyanshu Verma | Full Stack Engineer',
  description: 'Priyanshu Verma - Full Stack Engineer.',
  openGraph: {
    title: 'Priyanshu Verma | Full Stack Engineer',
    description: 'Priyanshu Verma - Full Stack Engineer.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Priyanshu Verma | Full Stack Engineer',
    description: 'Priyanshu Verma - Full Stack Engineer.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className="bg-paper" lang="en">
      <body className={`${inter.variable} ${jetBrainsMono.variable} font-sans text-[14px] leading-relaxed text-ink-primary antialiased`}>
        {children}
      </body>
    </html>
  )
}
