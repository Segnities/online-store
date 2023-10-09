'use client';

import Link from "next/link";

import Button from "@mui/material/Button";

import WithAuthSkeleton from "./UI/WithAuthSkeleton";
import { observer } from "mobx-react-lite";

const  GuestNavbarPanel = observer(() => {
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
});

export default GuestNavbarPanel;