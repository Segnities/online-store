
import { ProductDevices } from "@/types/product-devices";
import { Star } from "@mui/icons-material";
import { Card, CardActionArea, CardActions, CardContent, Divider } from "@mui/material";

import useClientSide from "@/hooks/useClientSide";

import DeviceItemImage from "./DeviceItemImage";

interface DeviceItemProps {
    product: ProductDevices;
}

function DeviceItem(props: DeviceItemProps) {
    const device = props.product;
    const clientSide = useClientSide();

    return (
        <Card className="lg:w-80 md:w-4/5 sm:w-11/12 w-full cursor-pointer">
            <CardActionArea>
                <DeviceItemImage name={device.name} href={device.img} />
                <CardContent>
                    <h4>Brand</h4>
                </CardContent>
                <Divider />
                <CardActions className="flex justify-between items-center p-5">
                    <h4>
                        {
                            clientSide && device.name
                        }
                    </h4>
                    <p className="flex items-center gap-1 text-sm text-gray-400">
                        {
                            clientSide && device.rating
                        }
                        <Star fontSize="small" color="warning" sx={{ mr: 1 }} />
                    </p>
                </CardActions>
            </CardActionArea>

        </Card>
    );
}

export default DeviceItem;