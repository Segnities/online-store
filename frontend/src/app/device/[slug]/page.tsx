'use client';



import DeviceDescription from "@/components/DeviceDescription";
import DeviceHeader from "@/components/DeviceHeader";


export default function Device({ params }: { params: { slug: string } }) {
    const deviceId = parseInt(params.slug);
    return (
        <div className="flex flex-col gap-3">
            <DeviceHeader slug={deviceId} />
            <DeviceDescription deviceId={deviceId} />
        </div>
    );
}