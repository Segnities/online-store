'use client';

import { useState } from "react";

import CreateBrandModal from "@/components/CreateBrandModal";
import CreateDeviceModal from "@/components/CreateDeviceModal";
import CreateTypeModal from "@/components/CreateTypeModal";
import { Button } from "@mui/material";

function Admin() {
    const [openCreateBrandModal, setOpenCreateBrandModal] = useState<boolean>(false);
    const [openCreateTypeModal, setOpenCreateTypeModal] = useState<boolean>(false);
    const [openCreateDeviceModal, setOpenCreateDeviceModal] = useState<boolean>(false);

    return (
        <div className="grid grid-flow-row p-8">
            <div className="grid grid-flow-col gap-2">
                <Button
                    variant="outlined"
                    onClick={() => setOpenCreateBrandModal(true)}
                >
                    Add brand
                </Button>
                <Button
                    variant="outlined"
                    onClick={() => setOpenCreateTypeModal(true)}
                >
                    Add category
                </Button>
                <Button
                    variant="outlined"
                    onClick={() => setOpenCreateDeviceModal(true)}
                >
                    Add device
                </Button>
            </div>
            <CreateBrandModal
                isOpen={openCreateBrandModal}
                setIsOpen={setOpenCreateBrandModal}
            />
            <CreateTypeModal
                isOpen={openCreateTypeModal}
                setIsOpen={setOpenCreateTypeModal}
            />
            <CreateDeviceModal
                isOpen={openCreateDeviceModal}
                setIsOpen={setOpenCreateDeviceModal}
            />
        </div>
    );
}

export default Admin;