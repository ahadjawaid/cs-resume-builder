import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Build your resume | CS Resume Builder',
  applicationName: 'CS Resume Builder',
  description: 'We help you write your CS resumes!',
  authors: [{ name: 'Ahad Jawaid', url: "www.ahadjawaid.com" }],
  referrer: "origin",
  robots: "index, follow",
  icons: "/favicon.ico",
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.csresumebuilder.com",
    title: "Build your resume | CS Resume Builder",
    description: "We help you write your CS resumes!",
    images: [
      {
        url: "/logo.png",
        width: 128,
        height: 128,
        alt: "CS Resume Builder"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ahadj0",
    creator: "@ahadj0",
    images: "/logo.png"
  },
  abstract: "We help you write your CS resumes!",
  category: "AI",
  classification: "AI",
  keywords: "AI, Resume, CS Resume, Tech resume"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-ZZPHMT90RC"></Script>
        <Script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-ZZPHMT90RC');
          `}
        </Script>
      </head>
      <body className="h-screen">{children}</body>
    </html>
  )
}
