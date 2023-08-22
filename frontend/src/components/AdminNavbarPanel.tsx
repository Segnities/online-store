import { memo, useContext } from "react";

import { useRouter } from "next/navigation";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { MobxContext } from "@/store/MobxProvider";

function AdminNavbarPanel() {
    const store = useContext(MobxContext);
    const router = useRouter();

    return (
        <Stack spacing={2} direction='row'>
            <Button
                variant='contained'
                className="bg-sky-500 hover:bg-sky-600"
                onClick={() => router.push('/admin')}
            >
                Admin panel
            </Button>
            <Button
                variant='outlined'
                onClick={() => router.push('/login')}
                className="text-white border-white hover:text-sky-500"
            >
                Logout
            </Button>
        </Stack>
    );
}

export default memo(AdminNavbarPanel);