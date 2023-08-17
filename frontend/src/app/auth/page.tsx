'use client';

import AuthForm from "@/components/AuthForm";

export default function Auth() {
  return (
    <main
      className='flex items-center justify-center'
      style={{ height: `${window.innerHeight - 96}px` }}
    >
      <h1>Auth page</h1>
      <AuthForm />
    </main>
  );

}