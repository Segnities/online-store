'use client';

import { useRouter } from "next/navigation";

import { Star } from "@mui/icons-material";
import { Card, CardActionArea, CardActions, CardContent, Divider } from "@mui/material";


import type { ProductDevice } from "@/types/product-devices";
import DeviceItemImage from "./DeviceItemImage";
import { useContext } from "react";

import { MobxContext } from "@/store/MobxProvider";

interface DeviceItemProps {
    product: ProductDevice;
}

function DeviceCard(props: DeviceItemProps) {
    const device = props.product;
    const store = useContext(MobxContext);
    const deviceBrand = store?.product.brands.find(brand => brand.id === device.brandId);
    const router = useRouter();

    console.log(device);
    

    return (
        <Card
            className="lg:w-80 md:w-4/5 sm:w-11/12 w-full cursor-pointer"
            onClick={() => router.push(`/device/${device.id}`)}   
        >
            <CardActionArea>
                <DeviceItemImage name={device.name} href={device.img} />
                <CardContent>
                    <h4>{deviceBrand?.name}</h4>
                </CardContent>
                <Divider />
                <CardActions className="flex justify-between items-center p-5">
                    <h4>
                        {
                            device.name
                        }
                    </h4>
                    <p className="flex items-center gap-1 text-sm text-gray-400">
                        {
                             device.rating
                        }
                        <Star fontSize="small" color="warning" sx={{ mr: 1 }} />
                    </p>
                </CardActions>
            </CardActionArea>

        </Card>
    );
}

export default DeviceCard;