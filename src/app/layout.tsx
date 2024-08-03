import type { Metadata } from 'next'
import { Roboto_Condensed } from 'next/font/google'
import '@/styles/globals.css'
import { Header } from '@/components'
import { CharacterProvider } from '@/context/provider'

const Roboto = Roboto_Condensed({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Inditex Challenge',
  description: 'Challenge for Inditex - Jonathan Martinez',
  icons: {
    icon: 'favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={Roboto.className}>
        <CharacterProvider>
          <Header />
          {children}
        </CharacterProvider>
      </body>
    </html>
  )
}
