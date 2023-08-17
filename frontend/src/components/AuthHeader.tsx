'use client';

import { usePathname } from "next/navigation";
import { memo } from "react";

function AuthHeader() {
    const pathname = usePathname();
    const isLogin = pathname === '/login';
    return (
        <h2 className="text-2xl lg:text-3xl font-bold text-center">
            {
                isLogin ? 'Log in' : 'Sign up'
            }
        </h2>
    );
}

export default memo(AuthHeader)