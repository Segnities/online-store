'use client';

import { memo } from "react";

import { usePathname } from "next/navigation";

import Button from "@mui/material/Button";

function AuthButton() {
    const pathname = usePathname();
    const isLoginPage = pathname === "/login";
    return (
        <Button
            variant="contained"
            type="submit"
            size="large"
        >
            {
                isLoginPage ? 'Login' : 'Sign up'
            }
        </Button>
    );
}

export default memo(AuthButton);