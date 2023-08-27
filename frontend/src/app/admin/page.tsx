'use client';

import { useState } from "react";
import type { SyntheticEvent } from "react";

import Tab from "@mui/material/Tab";

import TabList from "@mui/lab/TabList";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import CreateTypeForm from "@/components/CreateTypeForm";
import CreateBrandForm from "@/components/CreateBrandForm";
import CreateDeviceForm from "@/components/CreateDeviceForm";


function Admin() {
    const [tab, setTab] = useState<string>("1");

    const handleTabChange = (e: SyntheticEvent, newTab: string) => {
        setTab(newTab);
    }

    return (
        <div className="grid grid-flow-row p-8">
            <div className="grid grid-flow-row gap-2">
                <TabContext value={tab}>
                    <TabList onChange={handleTabChange} aria-label="Create tabs">
                        <Tab label="Create type" value="1" />
                        <Tab label="Create brand" value="2" />
                        <Tab label="Create device" value="3" />
                    </TabList>
                    <TabPanel value="1">
                        <CreateTypeForm/>
                    </TabPanel>
                    <TabPanel value="2">
                        <CreateBrandForm/>
                    </TabPanel>
                    <TabPanel value="3">
                        <CreateDeviceForm/>
                    </TabPanel>
                </TabContext>
            </div>

        </div>
    );
}

export default Admin;