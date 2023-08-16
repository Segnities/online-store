import { memo, useContext } from "react";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { MobxContext } from "@/store/MobxProvider";

function AdminNavbarPanel() {
    const store = useContext(MobxContext);
    return (
        <Stack spacing={2} direction='row'>
            <Button
                variant='contained'
                className="bg-sky-500 hover:bg-sky-600"
            >
                Admin panel
            </Button>
            <Button
                variant='outlined'
                onClick={() => store?.user.setIsAuth(false)}
                className="text-white border-white hover:text-sky-500"
            >
                Logout
            </Button>
        </Stack>
    );
}

export default memo(AdminNavbarPanel);