import React from "react"
import type { Metadata } from 'next'
import type { Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { CookieBanner } from "@/components/cookie-banner"

import './globals.css'

const _playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

const _inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const viewport: Viewport = {
  themeColor: '#F2EDE6',
}

export const metadata: Metadata = {
  title: 'The Last Dance | Human Impact Lab',
  description: 'Conexiones con propósito. Ayudamos a empresas y líderes a posicionarse con propósito, activar conexiones clave e impulsar relaciones de valor.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
