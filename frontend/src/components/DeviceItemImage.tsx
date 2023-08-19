'use client';

import Image from "next/image";

interface DeviceItemImageProps {
    name: string;
    href: string;
}

export default function DeviceItemImage({ name, href }: DeviceItemImageProps) {
    return (
        <Image
            src={href}
            width={200}
            height={200}
            className="w-full"
            layout="responsive"
            alt={name}
            objectFit="contain"
            loading="lazy"
            loader={() => href}
            onDragStart={(e) => e.preventDefault()}
        />
    )
}