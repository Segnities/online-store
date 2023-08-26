import { Form, Formik } from "formik";
import { useContext } from "react";
import { nanoid } from "nanoid";

import * as Yup from "yup";

import { Button } from "@mui/material";

import { MobxContext } from "@/store/MobxProvider";
import FormikInput from "./FormikInput";
import FormikSelect from "./FormikSelect";
import Modal from "./UI/Modal";

import type { MUIBasicSelectOption } from "@/types/mui-basic-select";

interface CreateDeviceModalProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const createBrandValidationSchema = Yup.object({
    title: Yup.string().required("Required"),

});

export default function CreateDeviceModal(props: CreateDeviceModalProps) {
    const store = useContext(MobxContext);
    const types:MUIBasicSelectOption[] | undefined = store?.product.types.map(type => { 
        return {
            id: nanoid() + type.id.toString(),
            title: type.name,
            value: type.name
        }
    });
    const brands:MUIBasicSelectOption[] | undefined = store?.product.brands.map(brand => {
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
            modalHeader="Create device"
        >
            <div className="grid grid-flow-row gap-2">
                <Formik
                    initialValues={{
                        title: "",
                    }}
                    validationSchema={createBrandValidationSchema}
                    onSubmit={(values) => console.log(values)}
                >
                    {(props) => (
                        <Form className="grid grid-flow-row gap-5">
                            <FormikInput
                                label="Title"
                                variant="outlined"
                                type="text"
                                name="brand-title"
                                placeholder="Enter brand title"
                                ariaLabel="Create brand title"
                                className="w-full"
                                size="small"
                            />
                            <FormikSelect
                                name="select-types"
                                id="select-type"
                                label="Select type"
                                options={types}
                            />
                            <FormikSelect
                                name="select-brands"
                                id="select-brand"
                                label="Select brand"
                                options={brands}
                            />
                        </Form>
                    )}
                </Formik>
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