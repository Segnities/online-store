'use client';

import { memo, useContext } from "react";

import Button from "@mui/material/Button";

import { MobxContext } from "@/store/MobxProvider";

function UserNavbarPanel() {
    const store = useContext(MobxContext);

    return (
        <div>
            <Button
                variant='outlined'
                className="text-white border-white hover:text-sky-500"
                onClick={() => store?.user.setIsAuth(true)}
            >
                Auth
            </Button>
        </div>
    );
}

export default memo(UserNavbarPanel);