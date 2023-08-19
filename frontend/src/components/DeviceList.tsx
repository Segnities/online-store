'use client';

import { useContext, memo } from "react";

import { MobxContext } from "@/store/MobxProvider";

import DeviceItem from "./DeviceItem";
import { observer } from "mobx-react-lite";
import { Grid } from "@mui/material";

function DeviceList() {
    const store = useContext(MobxContext);
    const devices = store?.product?.devices;

    return (
        <section>
            <div className="flex flex-row flex-wrap justify-center lg:justify-stretch gap-4 mt-4 mb-8">
                {
                    devices?.map((device) => {
                        return (
                            <DeviceItem key={device.id} product={device} />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default memo(observer(DeviceList));