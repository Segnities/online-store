'use client';

import { memo, useContext } from "react";

import { MobxContext } from "@/store/MobxProvider";

import NavbarBrand from "./NavbarBrand";
import UserNavbarPanel from "./UserNavbarPanel";
import AuthNavbarPanel from "./AuthNavbarPanel";
import { observer } from "mobx-react-lite";

function Navbar() {
    const store = useContext(MobxContext);
    const isAuth = store?.user.isAuth;
    return (
        <nav className="flex px-4 md:px-20 py-6 justify-between items-center w-full h-22 bg-slate-700">
            <NavbarBrand />
            {
                isAuth ? <AuthNavbarPanel /> : <UserNavbarPanel />
            }
        </nav>
    )
}

export default memo(observer(Navbar));