import { memo, useContext } from "react";
import { MobxContext } from "@/store/MobxProvider";

interface DeviceDesctiptionProps {
    deviceId: number;
}

function DeviceDesctiption({ deviceId }: DeviceDesctiptionProps) {
    const store = useContext(MobxContext);
    const description = store?.product.getProductDescription(deviceId);

    return (
        <section className="flex flex-col max-w-full justify-center lg:justify-stretch p-5">
            <h2 className="text-2xl font-bold pb-4">Сharacteristics</h2>
            {
                description?.map((item, idx) => (
                    <div key={item.id} className="flex flex-col">
                        <p className={`${idx % 2 === 0 ? 'bg-gray-600 text-white' : 'bg-transparent'} p-2`}>{item.title} : {item.description}</p>
                    </div>
                ))
            }
        </section>
    );
}

export default memo(DeviceDesctiption);