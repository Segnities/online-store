'use client';

import { memo, useContext } from "react";

import { MobxContext } from "@/store/MobxProvider";

import NavbarBrand from "./NavbarBrand";

function Navbar() {
    const store = useContext(MobxContext);
    return (
        <nav className="flex p-6 items-center w-full h-32 bg-slate-800">
            <NavbarBrand />
        </nav>
    )
}

export default memo(Navbar);