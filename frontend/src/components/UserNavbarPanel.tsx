'use client';

import { memo, useContext } from "react";
import { useRouter } from "next/navigation";

import Button from "@mui/material/Button";

import { MobxContext } from "@/store/MobxProvider";

function UserNavbarPanel() {
    const store = useContext(MobxContext);
    const router = useRouter();

    return (
        <div>
            <Button
                variant='outlined'
                className="text-white border-white hover:text-sky-500"
                onClick={() => router.push('/login')}
            >
                Auth
            </Button>
        </div>
    );
}

export default memo(UserNavbarPanel);