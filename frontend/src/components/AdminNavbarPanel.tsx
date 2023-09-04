import { memo, useContext } from "react";
import Link from "next/link";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { MobxContext } from "@/store/MobxProvider";

function AdminNavbarPanel() {
    const store = useContext(MobxContext);

    return (
        <Stack spacing={2} direction='row'>
            <Link href="/admin">
                <Button
                    variant='contained'
                    className="bg-sky-500 hover:bg-sky-600"
                >
                    Admin panel
                </Button>
            </Link>
            <Link href="/logout">
                <Button
                    variant='outlined'
                    className="text-white border-white hover:text-sky-500"
                >
                    Logout
                </Button>
            </Link>
        </Stack>
    );
}

export default memo(AdminNavbarPanel);