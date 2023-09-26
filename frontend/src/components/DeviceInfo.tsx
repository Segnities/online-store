'use client';

import { memo } from "react";

import type { DeviceInfoType } from "@/types/product-devices";

interface DeviceDesctiptionProps {
    info: DeviceInfoType[] | undefined;
}

function DeviceInfo({ info }: DeviceDesctiptionProps) {

    return (
        <section className="flex flex-col max-w-full justify-center lg:justify-stretch p-5">
            {
                info?.length ? info?.map((item, idx) => (
                    <>
                        <div key={item.id} className="flex flex-col">
                            <h2 className="text-2xl font-bold pb-4">Сharacteristics:</h2>
                            <p className={`${idx % 2 === 0 ? 'bg-gray-600 text-white' : 'bg-transparent'} p-2`}>{item.title} : {item.description}</p>
                        </div>
                    </>
                )) : (
                    <h2 className="text-2xl text-center font-bold text-sky-900">Sorry, we will add device info soon</h2>
                )
            }
        </section>
    );
}

export default memo(DeviceInfo);