'use client';

import { useContext } from "react";

import { MobxContext } from "@/store/MobxProvider";

import DeviceHeader from "@/components/DeviceHeader";


export default function Device({ params }: { params: { slug: string } }) {
    const store = useContext(MobxContext);
    const deviceId = parseInt(params.slug);

    return (
        <DeviceHeader slug={deviceId} />
    );
}