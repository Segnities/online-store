'use client';

import DeviceProduct from "@/components/DeviceProduct";
import { fetchDeviceById } from "@/http/devicesAPI";
import DeviceInfo from "@/components/DeviceInfo";
import type { DeviceInfoType } from "@/types/product-devices";

export async function getData(deviceId: number) {
    const device = await fetchDeviceById(deviceId);
    return device;
}


export default async function Device({ params }: { params: { slug: string } }) {
    const deviceId = parseInt(params.slug);
    const device = await getData(deviceId);
    const info: DeviceInfoType[] | undefined = device?.info;

    return (
            <div className="flex flex-col gap-3">
                <DeviceProduct
                    device={device}
                />
                <DeviceInfo info={info}/>
            </div>
    );
}