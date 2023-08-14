'use client';
import { useContext } from "react";

import { MobxContext } from "@/store/MobxProvider";

export default function Admin() {
    const store = useContext(MobxContext);
    return (
        <div>
            <h1>Admin page {store?.user.isAuth ? 'Authenticated' : ':( Nope. Not authenticated'}</h1>
        </div>
    )
}