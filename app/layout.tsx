import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio Muhamad Hilman v4',
  description: 'Portfolio - Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Muhamad Hilman Portfolio</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
