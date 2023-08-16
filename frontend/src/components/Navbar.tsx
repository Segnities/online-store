'use client';

import { memo, useContext } from "react";

import { MobxContext } from "@/store/MobxProvider";

import NavbarBrand from "./NavbarBrand";
import UserNavbarPanel from "./UserNavbarPanel";
import AdminNavbarPanel from "./AdminNavbarPanel";
import { observer } from "mobx-react-lite";

function Navbar() {
    const store = useContext(MobxContext);
    return (
        <nav className="flex px-12 py-6 justify-between items-center w-full h-22 bg-slate-700">
            <NavbarBrand />
            {
                store?.user.isAuth ? <AdminNavbarPanel /> : <UserNavbarPanel />
            }
        </nav>
    )
}

export default memo(observer(Navbar));