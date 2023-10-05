'use client';

import {useContext, useEffect} from "react";
import type {ReactNode} from "react";

import {usePathname, useRouter} from "next/navigation";

import {observer} from "mobx-react-lite";
import Link from "next/link";
import {Chip} from "@mui/material";
import {MobxContext} from "@/store/MobxProvider";


const routes = [
    {id: '/admin', title: 'Admin', to: '/admin'},
    {id: '/add-item', to: '/admin/add-item', title: "Create item"}
];

function AdminLayout({children}: { children: ReactNode }) {
    const pathname = usePathname();
    const store = useContext(MobxContext);
    const isAuth = store?.user.isAuth;
    const router = useRouter();

    useEffect(() => {
        if (!isAuth) {
            router.push("/")
        }
    }, [isAuth]);

    return (
        <section className="w-full grid grid-flow-row p-8">
            <nav className="flex flex-row flex-wrap">
                {
                    routes.map(route => (
                        <Link
                            href={route.to}
                            key={route.id}
                            className="text-lg text-blue-700 hover:text-blue-800 hover:underline mx-2"
                        >
                            <Chip label={route.title} variant={pathname === route.to ? 'filled' : 'outlined'}/>
                        </Link>
                    ))
                }
            </nav>
            {
                children
            }
        </section>
    );
}

export default observer(AdminLayout);