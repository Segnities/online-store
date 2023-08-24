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

    const optionArray: MUIBasicSelectOption[] = [
        {
            id: nanoid(),
            title: 'Foo 1',
            value: 'foo1',
        },
        {
            id: nanoid(),
            title: 'Foo 2',
            value: 'foo2',
        },
        {
            id: nanoid(),
            title: 'Foo 3',
            value: 'foo3',
        },
    ]

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
                                name="select-example"
                                id="select-id"
                                label="Select exaple component"
                                options={optionArray}
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