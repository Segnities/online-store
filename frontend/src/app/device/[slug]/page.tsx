'use client';

import { createContext, useContext, useEffect, useState } from "react";

import DeviceDescription from "@/components/DeviceDescription";
import DeviceHeader from "@/components/DeviceHeader";
import { fetchDeviceById } from "@/http/devicesAPI";
import type { ProductDevice } from "@/types/product-devices";

export const fetchDeviceContext = createContext(true);
export const useDeviceFetchContext = () => useContext(fetchDeviceContext);


export default function Device({ params }: { params: { slug: string } }) {
    const deviceId = parseInt(params.slug);
    const [device, setDevice] = useState<ProductDevice | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetchDeviceById(deviceId).then((data) => {
            setDevice(data);
        }).finally(() => {
            setLoading(false);
        })
    }, []);

    return (
        <fetchDeviceContext.Provider value={loading}>
            <div className="flex flex-col gap-3">
                <DeviceHeader
                    slug={deviceId}
                    device={device}
                />
                <DeviceDescription deviceId={deviceId} />
            </div>
        </fetchDeviceContext.Provider>
    );
}