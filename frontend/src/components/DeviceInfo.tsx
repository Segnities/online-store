'use client';

import { memo } from "react";

import type { DeviceInfoType } from "@/types/product-devices";

interface DeviceDesctiptionProps {
    info: DeviceInfoType[] | undefined;
}

function DeviceInfo({ info }: DeviceDesctiptionProps) {

    return (
        <section className="flex flex-col max-w-full justify-center lg:justify-stretch p-5">
            <h2 className="text-2xl font-bold pb-4">Сharacteristics</h2>
            {
                info?.map((item, idx) => (
                    <div key={item.id} className="flex flex-col">
                        <p className={`${idx % 2 === 0 ? 'bg-gray-600 text-white' : 'bg-transparent'} p-2`}>{item.title} : {item.description}</p>
                    </div>
                ))
            }
        </section>
    );
}

export default memo(DeviceInfo);