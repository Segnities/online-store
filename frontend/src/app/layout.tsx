
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import MobxProvider from '@/store/MobxProvider';

import './globals.css'
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Shop4every1',
  description: 'Internet shop',
  icons: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      url: '/favicon.ico'
    }
  ]
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <MobxProvider>
          <Navbar />
          {children}
        </MobxProvider>
      </body>
    </html>
  )
}
