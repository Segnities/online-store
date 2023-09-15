import type { ChangeEvent, FormEvent } from "react";
import { memo, useContext, useState } from "react";

import { nanoid } from "nanoid";

import type { MUIBasicSelectOption } from "@/types/mui-basic-select";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import StyledTextarea from "./UI/StyledTextarea";

import { Button, TextField } from "@mui/material";

import { MobxContext } from "@/store/MobxProvider";
import type { DeviceInfo } from "@/types/devices-api";

interface IDevice {
    name: string;
    img: File | null;
    typeId: number;
    brandId: number;
    price: number;
}

function CreateDeviceForm() {
    const [deviceData, setDeviceData] = useState<IDevice>({
        name: '',
        img: null,
        typeId: -1,
        brandId: -1,
        price: 0,
    });

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
            id:brand.id.toString(),
            title: brand.name,
            value: brand.id.toString()
        }
    });
    const handleAddProductInfo = () => {
        const newProductInfo: DeviceInfo = {
            id: nanoid(),
            title: '',
            description: ''
        };
        setInfo(prev => [...prev, newProductInfo]);
    }
    const handleDeleteProductInfo = (rmId: string) => {
        const clearedProductInfo = [...info].filter(product => product.id !== rmId);
        setInfo(clearedProductInfo);
    }
    const onNameChange = (e:ChangeEvent<HTMLInputElement>) => {
        setDeviceData(prevState => {
            return {
                ...prevState,
                name: e.target.value
            }
        });
    }

    const selectTypeId = (e:ChangeEvent<HTMLSelectElement>) => {
        console.log(e.target.value);
        const tId = parseInt(e.target.value)
        setDeviceData(prevState => {
            return {...prevState, typeId: tId}
        });
    };

    const selectBrandId = (e:ChangeEvent<HTMLSelectElement>) => {
        console.log(e.target.value);
        const bId = parseInt(e.target.value);
        setDeviceData(prevState => {
            return {
                ...prevState, brandId: bId
            }
        })
    } 
    
    const onImgChange = (e:ChangeEvent<HTMLInputElement>) => {
        const file = e.currentTarget?.files![0];
        const photo =  file ? file : null;
        setDeviceData(prevState => {
            return {...prevState, photo}
        });
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
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
                aria-label="Create brand title"
                className="w-full"
                size="small"
                value={deviceData.name}
                onChange={onNameChange}
            />
            <TextField
                variant="outlined"
                type="file"
                name="photo"
                value={deviceData.img}
                onChange={onImgChange}
            />
            <select
                id="select-type"
                className="w-full rounded-md py-3 px-4 border border-gray-400 hover:border-black"
                name="type"
                value={deviceData.typeId}
                onChange={selectTypeId}
            >
                {
                    types?.map(type => (
                        <option key={type.id} value={type.id}>{type.title}</option>
                    ))
                }
            </select>
            <select
                value={deviceData.brandId}
                onChange={selectBrandId}
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
                    <div className="flex flex-col items-center gap-4" key={info.id}>
                        <FormInput
                            label="Enter title"
                            variant="outlined"
                            type="text"
                            placeholder="Enter title"
                            className="w-full"
                        />
                        <StyledTextarea
                            ariaLabel="Enter description"
                            minRows={5}
                            placeholder="Enter description"
                        />
                        <Button
                            variant="contained"
                            color="error"
                            className="bg-red-600"
                            onClick={() => handleDeleteProductInfo(info.id)}
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