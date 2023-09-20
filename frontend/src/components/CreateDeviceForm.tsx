import type { ChangeEvent, FormEvent } from "react";
import { memo, useContext, useState } from "react";

import { nanoid } from "nanoid";

import type { MUIBasicSelectOption } from "@/types/mui-basic-select";

import { Button, TextField } from "@mui/material";

import { MobxContext } from "@/store/MobxProvider";
import type { DeviceInfo, FormDevice } from "@/types/devices-api";
import { createDevice } from "@/http/devicesAPI";

interface IDevice {
    name: string;
    img: Blob | string;
    typeId: number;
    brandId: number;
    price: number;
}

function CreateDeviceForm() {
    const [name, setName] = useState<string>('');
    const [img, setImg] = useState<File | null>(null);
    const [typeId, setTypeId] = useState<number>(1);
    const [brandId, setBrandId] = useState<number>(1);
    const [price, setPrice] = useState<string>('')

    const [info, setInfo] = useState<DeviceInfo[]>([]);
    const store = useContext(MobxContext);

    const types: MUIBasicSelectOption[] | undefined = store?.product.types.map(type => {
        return {
            id: type.id.toString(),
            title: type.name,
            value: type.id.toString()
        }
    });
    const brands: MUIBasicSelectOption[] | undefined = store?.product.brands.map(brand => {
        return {
            id: brand.id.toString(),
            title: brand.name,
            value: brand.id.toString()
        }
    });
    const handleAddProductInfo = () => {
        const newProductInfo: DeviceInfo = {
            key: nanoid(),
            title: '',
            description: ''
        };
        setInfo(prev => [...prev, newProductInfo]);
    }
    const handleDeleteProductInfo = (rmId: string) => {
        const clearedProductInfo = [...info].filter(product => product.key !== rmId);
        setInfo(clearedProductInfo);
    }
    const handleInfoChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        prop: "title" | "description",
        key: string
    ) => {
        setInfo(info.map(it => it.key === key ? { ...it, [prop]: e.target.value } : it));
    }

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            const formData = new FormData();
            formData.append('name', name);
            formData.append('price', `${parseInt(price)}`);
            if (img) {
                formData.append("img", img);
            }
            formData.append('brandId', brandId.toString());
            formData.append('typeId', typeId.toString());
            formData.append('info', JSON.stringify(info));

            const createdDevice = await createDevice(formData)
            console.log(createdDevice);
        } catch (e) {
            console.log(e);
        } finally {
            console.log('Process of device creating is done ...');
        }
    }
    // @ts-ignore
    return (
        <form className="grid grid-flow-row gap-5" onSubmit={onSubmit}>
            <TextField
                label="Name"
                variant="outlined"
                type="text"
                name="name"
                placeholder="Enter product title"
                aria-label="Enter device title"
                className="w-full"
                size="small"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <TextField
                label="Price"
                variant="outlined"
                type="text"
                name="price"
                aria-label="Enter device price"
                placeholder="Enter device price"
                className="w-full"
                size="small"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <input
                type="file"
                name="img"
                onChange={(e) => setImg(e.target?.files![0])}
            />
            <select
                id="select-type"
                className="w-full rounded-md py-3 px-4 border border-gray-400 hover:border-black"
                value={typeId}
                onChange={(e) => setTypeId(parseInt(e.target.value))}
            >
                {
                    types?.map(type => (
                        <option key={type.id} value={type.id}>{type.title}</option>
                    ))
                }
            </select>
            <select
                value={brandId}
                onChange={(e) => setBrandId(parseInt(e.target.value))}
                className="w-full py-3 px-4 border rounded-md border-gray-400 hover:border-black"
                name="brand"
            >
                {
                    brands?.map(brand => (
                        <option key={brand.id} value={brand.id} className="py-2">{brand.title}</option>
                    ))
                }
            </select>

            <Button variant="text" onClick={handleAddProductInfo}>
                Add additional data
            </Button>
            {
                info.map(info => (
                    <div className="flex flex-col items-center gap-4" key={info.key}>
                        <TextField
                            label="Enter title"
                            variant="outlined"
                            type="text"
                            placeholder="Enter title"
                            className="w-full"
                            value={info.title}
                            onChange={(e) => handleInfoChange(e, 'title', info.key)}
                        />
                        <textarea
                            className="w-full min-h-[175px] focus:outline-2 focus:outline-sky-600 border-2 focus:border p-3"
                            placeholder="Enter description"
                            value={info.description}
                            onChange={(e) => handleInfoChange(e, 'description', info.key)}
                        />
                        <Button
                            variant="contained"
                            color="error"
                            className="bg-red-600"
                            onClick={() => handleDeleteProductInfo(info.key)}
                        >
                            Delete
                        </Button>
                    </div>
                ))
            }
            <Button variant="contained" type="submit" color="success" className="bg-green-600 w-1/5">Create</Button>
        </form>
    );
}

export default memo(CreateDeviceForm);