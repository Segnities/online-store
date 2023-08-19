import { ProductDevices } from "@/types/product-devices";
import { Card, CardActionArea, CardMedia } from "@mui/material";
import Image from "next/image";

interface DeviceItemProps {
    product: ProductDevices;
}

function DeviceItem(props: DeviceItemProps) {
    const device = props.product;
    return (
        <Card className="lg:w-80 md:w-4/5 sm:w-11/12 w-full">
            <CardActionArea>
                <CardMedia
                    title={device.name}
                    sx={{ height: 260 }}
                >
                    <Image
                        src={device.img}
                        width={90}
                        height={90}
                        alt={device.name}
                        objectFit="cover"
                        loading="lazy"
                    />
                </CardMedia>
            </CardActionArea>
            {
                props.product.name
            }
        </Card>
    );
}

export default DeviceItem;