'use client';

import { memo, useContext } from "react";
import Image from "next/image";


import { Grid } from "@mui/material";
import { MobxContext } from "@/store/MobxProvider";

import DeviceRating from "./DeviceRating";
import PriceCard from "./PriceCard";

interface IDeviceHeaderProps {
    slug: number;
}

function DeviceHeader({ slug }: IDeviceHeaderProps) {
    const store = useContext(MobxContext);
    const device = store?.product?.getProductById(slug);
    const devicePrice = device?.price.toFixed(2);

    return (
        <Grid container className="p-5" spacing={3}>
            <Grid item xs={12} md={4}>
                <Image
                    src={device?.img || ""}
                    width={500}
                    height={500}
                    alt={device?.name || ""}
                    onDragStart={(e) => e.preventDefault()}
                />
            </Grid>
            <Grid item xs={12} md={4}>
                <DeviceRating
                    name={device?.name || ""}
                    rating={device?.rating || 0}
                />
            </Grid>
            <Grid item xs={12} md={4}>
                <PriceCard price={devicePrice}/>
            </Grid>
        </Grid>
    );
}

export default memo(DeviceHeader);