'use client';

import AdminTabs from "@/components/AdminTabs";
import { MobxContext } from "@/store/MobxProvider";
import { notFound } from "next/navigation";
import { useContext } from "react";


function Admin() {
    const store = useContext(MobxContext);
    const role = store?.user.role;
    if (role !== 'ADMIN') {
        notFound();
    } else {
        return (
            <div className="grid grid-flow-row p-8">
                <div className="grid grid-flow-row gap-2">
                    <AdminTabs />
                </div>
            </div>
        );
    }
    
}

export default Admin;