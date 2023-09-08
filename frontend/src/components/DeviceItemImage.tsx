'use client';
interface DeviceItemImageProps {
    name: string;
    href: string;
}

export default function DeviceItemImage({ name, href }: DeviceItemImageProps) {
    console.log(process.env.api + href);
    
    return (
        <img
            src={process.env.api + href}
            className="w-full"
            alt={name}
            loading="lazy"
            onDragStart={(e) => e.preventDefault()}
        />
    )
}