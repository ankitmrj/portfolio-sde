import Footer from '@/components/main/Footer'
import { Navbar } from '@/components/main/Navbar'
import { ThemeProvider } from '@/components/theme-provider'
import ScrollProgress from '@/components/ui/scroll-progress'
import { CommandPalette } from '@/components/ui/command-palette'
import { SoundProvider } from '@/components/sound-provider'
import { LanguageProvider } from '@/components/language-provider'
import { MotionProvider } from '@/components/motion-provider'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Ankit Srivastav - Software Engineer',
  description:
    'Personal portfolio of Ankit Srivastav, a Software Engineer and Competitive Programmer building scalable applications and solving challenging engineering problems.',
  keywords: [
    'Ankit Srivastav',
    'Software Engineer',
    'Competitive Programmer',
    'Full Stack Developer',
    'Backend Developer',
    'Frontend Developer',
    'React Developer',
    'Node.js Developer',
    'Next.js Developer',
    'MERN Stack Developer',
    'Software Engineer India',
    'MMMUT',
  ],
  authors: [
    {
      name: 'Ankit Srivastav',
      url: 'https://github.com/ankitmrj',
    },
  ],
  creator: 'Ankit Srivastav',

  manifest: '/manifest.webmanifest',

  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Ankit Srivastav — Software Engineer',
    description:
      'Software Engineer and Competitive Programmer building scalable applications and solving challenging engineering problems.',
    siteName: 'Ankit Srivastav Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ankit Srivastav Portfolio',
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ankit Srivastav',
  jobTitle: 'Software Engineer',
  sameAs: [
    'https://github.com/ankitmrj',
    'https://www.linkedin.com/in/ankit1srivastav/',
  ],
  image: '/profile.jpg',
  description:
    'Software Engineer and Competitive Programmer building scalable applications and solving challenging engineering problems.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground custom-scrollbar overflow-x-hidden`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <LanguageProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <SoundProvider>
              <MotionProvider>
                <ScrollProgress />
                <CommandPalette />
                <Navbar />
                {children}
                <Footer />
              </MotionProvider>
            </SoundProvider>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
