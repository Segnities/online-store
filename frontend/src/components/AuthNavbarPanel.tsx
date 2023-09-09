import { memo, useContext } from "react";
import Link from "next/link";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { MobxContext } from "@/store/MobxProvider";
import { useRouter } from "next/navigation";

function AuthNavbarPanel() {
    const store = useContext(MobxContext);
    const isAdmin = store?.user.user?.role === 'ADMIN';
    const router = useRouter();

    const logout = () => {
        store?.user.setUser(null);
        store?.user.setIsAuth(false);
        localStorage.removeItem('token');
        router.push('/login');
    }

    return (
        <Stack spacing={2} direction='row'>
            {
                isAdmin ? (
                    <Link href="/admin">

                        <Button
                            variant='contained'
                            className="bg-sky-500 hover:bg-sky-600"
                        >
                            Admin panel
                        </Button>
                    </Link>
                ) : null
            }
            <Button
                variant='outlined'
                className="text-white border-white hover:text-sky-500"
                onClick={logout}
            >
                Logout
            </Button>
        </Stack>
    );
}

export default memo(AuthNavbarPanel);