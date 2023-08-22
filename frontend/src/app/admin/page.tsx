'use client';
import { useContext, useState } from "react";

import { MobxContext } from "@/store/MobxProvider";
import { Button } from "@mui/material";
import CreateBrandModal from "@/components/CreateBrandModal";

function Admin() {
    const store = useContext(MobxContext);
    const [openCreateBrandModal, setOpenCreateBrandModal] = useState<boolean>(false);
    return (
        <div className="grid grid-flow-row p-8">
            <div className="grid grid-flow-col gap-2">
                <Button
                    variant="outlined"
                    onClick={() => setOpenCreateBrandModal(true)}
                >
                    Add brand
                </Button>
                <Button variant="outlined">
                    Add category
                </Button>
                <Button variant="outlined">
                    Add device
                </Button>
            </div>
            <CreateBrandModal
                isOpen={openCreateBrandModal}
                setIsOpen={setOpenCreateBrandModal}
            />
        </div>
    );
}

export default Admin;