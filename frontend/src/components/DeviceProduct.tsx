'use client';

import { memo } from "react";

import { Grid } from "@mui/material";

import type { ProductDevice } from "@/types/product-devices";
import DeviceRating from "./DeviceRating";
import PriceCard from "./PriceCard";

interface IDeviceProductProps {
    device: ProductDevice | undefined
}

function DeviceProduct(props: IDeviceProductProps) {
    const { device } = props;
    const devicePrice = device?.price.toFixed(2);
    const href = `${process.env.api}${device?.img}`;

    return (
        <Grid container className="p-5" spacing={3}>
            <Grid item xs={12} md={4}>
                <img
                    src={href}
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
                <PriceCard price={devicePrice} />
            </Grid>
        </Grid>
    );
}

export default memo(DeviceProduct);