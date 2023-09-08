'use client';

import { memo, useContext, useEffect } from "react";

import { MobxContext } from "@/store/MobxProvider";

import type { PaginationDevicesList } from "@/types/product-devices";
import { observer } from "mobx-react-lite";
import DeviceItem from "./DeviceItem";
interface DeviceListProps {
    devices: PaginationDevicesList;
}

function DeviceList(props: DeviceListProps) {
    const store = useContext(MobxContext);
    const { devices } = props;
    //const testDevices = store?.product?.devices;
    console.log(devices);

    useEffect(() => {
        store?.product.setDevices(devices.rows);
    }, []);

    return (
        <section>
            <div className="flex flex-row flex-wrap justify-center lg:justify-stretch gap-4 mt-4 mb-8">
                {
                    devices.rows?.map((device) => {
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