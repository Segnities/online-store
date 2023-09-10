import { memo, useContext } from "react";
import Link from "next/link";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { MobxContext } from "@/store/MobxProvider";
import { useRouter } from "next/navigation";

import { observer } from "mobx-react-lite";

import WithAuthSkeleton from "./UI/WithAuthSkeleton";

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
                        <WithAuthSkeleton variant="rectangular" animation="wave" width={120} height={45}>
                            <Button
                                variant='contained'
                                className="bg-sky-500 hover:bg-sky-600"
                            >
                                Admin panel
                            </Button>
                        </WithAuthSkeleton>
                    </Link>
                ) : null
            }
            <WithAuthSkeleton variant="rectangular" animation="wave" width={120} height={45}>
                <Button
                    variant='outlined'
                    className="text-white border-white hover:text-sky-500"
                    onClick={logout}
                >
                    Logout
                </Button>
            </WithAuthSkeleton>
        </Stack>
    );
}

export default memo(observer(AuthNavbarPanel));