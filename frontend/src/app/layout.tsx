import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import MobxProvider from '@/store/MobxProvider';
import ObserveredLayout from "@/components/ObserveredLayout";
import Navbar from '@/components/Navbar';

import './globals.css';

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

const inter = Inter({ subsets: ['latin'] });

function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <MobxProvider>
          <ObserveredLayout>
            <Navbar />
            {children}
          </ObserveredLayout>
        </MobxProvider>
      </body>
    </html>
  )
}

export default RootLayout;
