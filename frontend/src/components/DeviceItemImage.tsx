'use client';
interface DeviceItemImageProps {
    name: string;
    href: string;
}

export default function DeviceItemImage({ name, href }: DeviceItemImageProps) {
    return (
        <img
            src={process.env.api + href}
            className="w-full"
            alt={name}
            onDragStart={(e) => e.preventDefault()}
        />
    )
}