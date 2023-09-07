import type { GetStaticProps } from "next";

import { check } from "@/http/userAPI";

import AdminTabs from "@/components/AdminTabs";

function Admin() {
    return (
        <div className="grid grid-flow-row p-8">
            <div className="grid grid-flow-row gap-2">
                <AdminTabs/>
            </div>
        </div>
    );
}

export default Admin;