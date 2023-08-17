import { memo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function AuthFormMessage() {
    const pathname = usePathname();
    const isLoginPage = pathname === "/login";
    return (
        <p className="text-center">
            {isLoginPage ? 'No account yet?' : 'Already have an account?'}
            <Link
                className="text-blue-500 hover:underline underline-offset-4"
                href={isLoginPage ? "/signup" : "/login"}
            >
                {isLoginPage ? ' Sign up now!' : ' Login!'}
            </Link>
        </p>
    )
}

export default memo(AuthFormMessage)