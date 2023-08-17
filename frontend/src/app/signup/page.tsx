'use client';

import AuthForm from "@/components/AuthForm";

export default function SignUp() {
    return (
        <main
            className='flex items-center justify-center'
            style={{ height: `${window.innerHeight - 96}px` }}
        >
            <AuthForm/>
        </main>
    );
}