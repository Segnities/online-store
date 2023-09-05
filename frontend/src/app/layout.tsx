'use client';

import { useContext, useState, useEffect } from "react";
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { observer } from 'mobx-react-lite';

import MobxProvider, { MobxContext } from '@/store/MobxProvider';
import CircularProgress from "@mui/joy/CircularProgress";

import './globals.css'
import Navbar from '@/components/Navbar';
import { check } from "@/http/userAPI";

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

const ObserveredLayout = observer(({ children }: { children: React.ReactNode }) => {
  const store = useContext(MobxContext);
  const user = store?.user;
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    check().then(usr_data => {
      user?.setIsAuth(true);
      user?.setUser(usr_data);
    }).finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="absolute max-w-sm items-center inset-1/2 flex flex-col">
        <CircularProgress color="primary" size="lg"/>
        <h3 className="text-2xl font-bold">Loading data...</h3>
      </div>
    )
  }

  return (
    <>
      {children}
    </>
  )
});

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
