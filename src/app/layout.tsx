import type { Metadata } from 'next'
import { Roboto_Condensed } from 'next/font/google'
import './globals.css'
import { Header } from '@/components'

const Roboto = Roboto_Condensed({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Inditex Challenge',
  description: 'Challenge for Inditex - Jonathan Martinez',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={Roboto.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
