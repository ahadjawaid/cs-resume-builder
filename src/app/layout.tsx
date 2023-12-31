import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Get your resume reviewed | CS Resume Builder',
  applicationName: 'CS Resume Builder',
  description: 'We help you pass the resume screen!',
  authors: [{ name: 'Ahad Jawaid', url: "www.ahadjawaid.com" }],
  referrer: "origin",
  robots: "index, follow",
  icons: "/favicon.ico",
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.csresumebuilder.com",
    title: "Get your resume reviewed | CS Resume Builder",
    description: "We help you pass the resume screen!",
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
  keywords: "Resume, CS Resume, Tech resume, Resume Review, Review"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <head>
        <meta name="google-site-verification" content="zTCqqipC7DmeGUpRLrZ4XULKcDUkHZRdEUSAm7XNUeg" />
        <Script id='google-tag' async src="https://www.googletagmanager.com/gtag/js?id=G-ZZPHMT90RC"></Script>
        <Script id='google-tag-track'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-ZZPHMT90RC');
          `}
        </Script>
        <Script id="hotjar">
          {`
            (function(h,o,t,j,a,r){
              h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) };
                    h._hjSettings={hjid:3677395,hjsv:6};
                    a=o.getElementsByTagName('head')[0];
                    r=o.createElement('script');r.async=1;
                    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                    a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </Script>
      </head>
      <body className="h-screen">{children}</body>
    </html>
  )
}
