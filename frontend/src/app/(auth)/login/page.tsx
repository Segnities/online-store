'use client';
import { usePathname } from "next/navigation"

import AuthForm from "@/components/AuthForm";

export default function Login() {
  const pathname = usePathname();
  return (
    <main
      className='flex items-center justify-center'
      style={{ height: `${window.innerHeight - 96}px` }}
    >
      <AuthForm pathname={pathname} />
    </main>
  );

}