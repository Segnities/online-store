'use client';

import AuthForm from "@/components/AuthForm";
import { usePathname } from "next/navigation";

export default function SignUp() {
    const pathname = usePathname();
    return (
        <main
            className='flex items-center justify-center'
            style={{ height: `${window.innerHeight - 96}px` }}
        >
            <AuthForm pathname={pathname}/>
        </main>
    );
}