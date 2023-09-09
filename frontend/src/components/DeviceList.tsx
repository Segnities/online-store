'use client';

import { memo, useContext, useEffect, useState } from "react";
import type { ChangeEvent } from "react";

import { MobxContext } from "@/store/MobxProvider";

import type { PaginationDevicesList } from "@/types/product-devices";
import { observer } from "mobx-react-lite";

import Pagination from "@mui/material/Pagination";

import DeviceItem from "./DeviceItem";

import { getAllDevices } from "@/http/devicesAPI";

interface DeviceListProps {
    initialDevices: PaginationDevicesList;
}

function DeviceList(props: DeviceListProps) {
    const { initialDevices } = props;

    const store = useContext(MobxContext);
    const device = store?.product;
    const devices = store?.product.devices; 

    const [page, setPage] = useState<number>(1);

    const totalCount = device?.totalCount || 0;
    const limit = device?.limit || 2;
    const pagesCount = Math.ceil(totalCount / limit);
    
    const handleChangePage = (e: ChangeEvent<unknown>, value: number) => {
        setPage(value);
    }

    useEffect(() => {
        store?.product.setDevices(initialDevices.rows);
        store?.product.setTotalCount(initialDevices.count);
    }, []);

    useEffect(() => {
        const nullableSelectedTypeId = device?.selectedType?.id || null;
        const nullableSelectedBrandId = device?.selectedBrand?.id || null;

       getAllDevices(nullableSelectedTypeId, nullableSelectedBrandId, page, 2).then((pageDevices:PaginationDevicesList) => {
            store?.product.setDevices(pageDevices.rows);
            store?.product.setTotalCount(pageDevices.count);
        });
    }, [page, device?.selectedType, device?.selectedBrand]);

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
            <div className="w-full flex justify-center">
                <Pagination
                    count={pagesCount}
                    shape="rounded"
                    variant="outlined"
                    color="secondary"
                    size="large"
                    page={page}
                    onChange={handleChangePage}
                />
            </div>
        </section>
    )
}

export default memo(observer(DeviceList));