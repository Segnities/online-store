'use client';

import { useContext } from "react";

import { MobxContext } from "@/store/MobxProvider";

import { observer } from "mobx-react-lite";
import GuestNavbarPanel from "./GuestNavbarPanel";
import NavbarBrand from "./NavbarBrand";
import UserNavbarPanel from "./UserNavbarPanel";

function Navbar() {
    const store = useContext(MobxContext);
    const isAuth = store?.user.isAuth;
    return (
        <nav className="flex px-4 md:px-20 py-6 justify-between items-center w-full h-22 bg-slate-700">
            <NavbarBrand />
            {
                isAuth ? <UserNavbarPanel /> : <GuestNavbarPanel />
            }
        </nav>
    )
}

export default observer(Navbar);