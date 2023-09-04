'use client';

import { memo, useContext } from "react";
import Link from "next/link";

import Button from "@mui/material/Button";

import { MobxContext } from "@/store/MobxProvider";

function UserNavbarPanel() {
    const store = useContext(MobxContext);

    return (
        <div>
            <Link  href="/login">
                <Button
                    variant='outlined'
                    className="text-white border-white hover:text-sky-500"
                >
                    Auth
                </Button>
            </Link>
        </div>
    );
}

export default memo(UserNavbarPanel);