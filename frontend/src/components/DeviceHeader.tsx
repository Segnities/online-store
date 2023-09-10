'use client';

import { memo } from "react";

import { Grid } from "@mui/material";

import type { ProductDevice } from "@/types/product-devices";
import DeviceRating from "./DeviceRating";
import PriceCard from "./PriceCard";
import StateSkeleton from "./UI/StateSkeleton";

import { useDeviceFetchContext } from "@/app/device/[slug]/page";

interface IDeviceHeaderProps {
    slug: number;
    device: ProductDevice | null;
}

function DeviceHeader({ slug, device }: IDeviceHeaderProps) {
    const devicePrice = device?.price.toFixed(2);
    const href = `${process.env.api}${device?.img}`;
    const loading = useDeviceFetchContext();

    return (
        <Grid container className="p-5" spacing={3}>
            <Grid item xs={12} md={4}>
                <StateSkeleton
                    isLoading={loading}
                    animation="pulse"
                    variant="rectangular"
                    width={450}
                    height={250}
                >
                    <img
                        src={href}
                        alt={device?.name || ""}
                        onDragStart={(e) => e.preventDefault()}
                    />
                </StateSkeleton>
            </Grid>
            <Grid item xs={12} md={4}>
                <DeviceRating
                    name={device?.name || ""}
                    rating={device?.rating || 0}
                />
            </Grid>
            <Grid item xs={12} md={4}>
                <StateSkeleton
                    isLoading={loading}
                    animation="pulse"
                    variant="rectangular"
                    width={400}
                    height={250}
                >
                    <PriceCard price={devicePrice} />
                </StateSkeleton>
            </Grid>
        </Grid>
    );
}

export default memo(DeviceHeader);