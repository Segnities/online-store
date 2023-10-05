'use client';

import Link from "next/link";
import {useContext} from "react";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import {MobxContext} from "@/store/MobxProvider";
import {useRouter} from "next/navigation";

import {observer} from "mobx-react-lite";

import WithAuthSkeleton from "./UI/WithAuthSkeleton";
import firebaseSignOut from "@/firebase/auth/signOut";

const UserNavbarPanel = observer(() => {
    const store = useContext(MobxContext);
    const isAdmin = store?.user.jwtAuthUser?.role === 'ADMIN';
    const router = useRouter();
    const logout = () => {
        store?.user.setJwtUser(null);
        store?.user.setIsAuth(false);
        firebaseSignOut();
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
});

export default UserNavbarPanel;