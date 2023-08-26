import { useContext } from "react";
import { nanoid } from "nanoid";

import * as Yup from "yup";

import { Button } from "@mui/material";

import { MobxContext } from "@/store/MobxProvider";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import Modal from "./UI/Modal";

import type { MUIBasicSelectOption } from "@/types/mui-basic-select";

interface CreateDeviceModalProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const createBrandValidationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    type: Yup.string().required("Type is required"),
    brand: Yup.string().required("Brand is required"),

});

export default function CreateDeviceModal(props: CreateDeviceModalProps) {
    const store = useContext(MobxContext);
    const types: MUIBasicSelectOption[] | undefined = store?.product.types.map(type => {
        return {
            id: nanoid() + type.id.toString(),
            title: type.name,
            value: type.name
        }
    });
    const brands: MUIBasicSelectOption[] | undefined = store?.product.brands.map(brand => {
        return {
            id: nanoid() + brand.id.toString(),
            title: brand.name,
            value: brand.name
        }
    });

    return (
        <Modal
            isOpen={props.isOpen}
            setIsOpen={props.setIsOpen}
        >
            <div className="grid grid-flow-row gap-2">
              
                    <form className="grid grid-flow-row gap-5">
                        <FormInput
                            label="Title"
                            variant="outlined"
                            type="text"
                            placeholder="Enter product title"
                            ariaLabel="Create brand title"
                            className="w-full"
                            size="small"
                        />
                        {/* <FormikSelect
                                name="type"
                                id="select-type"
                                label="Select type"
                                options={types}
                            /> */}
                        <FormSelect
                            name="brand"
                            id="select-brand"
                            label="Select brand"
                            options={brands}
                        />
                    </form>
            </div>
            <div className="flex flex-row justify-between">
                <Button
                    variant="contained"
                    onClick={() => props.setIsOpen(false)}
                    color="success"
                    size="large"
                >
                    Create
                </Button>
                <Button
                    variant="outlined"
                    onClick={() => props.setIsOpen(false)}
                    color="secondary"
                    size="large"
                >
                    Close
                </Button>
            </div>
        </Modal>
    );
}