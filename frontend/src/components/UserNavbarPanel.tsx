'use client';

import { memo, useContext } from "react";
import Link from "next/link";

import Button from "@mui/material/Button";

import { MobxContext } from "@/store/MobxProvider";
import WithAuthSkeleton from "./UI/WithAuthSkeleton";

function UserNavbarPanel() {
    const store = useContext(MobxContext);

    return (
        <div>
            <Link href="/login">
                <WithAuthSkeleton animation="wave" variant="rectangular" width={140} height={45}>
                    <Button
                        variant='outlined'
                        className="text-white border-white hover:text-sky-500"
                    >
                        Auth
                    </Button>
                </WithAuthSkeleton>
            </Link>
        </div>
    );
}

export default memo(UserNavbarPanel);