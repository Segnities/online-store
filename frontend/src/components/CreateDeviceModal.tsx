import { useContext } from "react";
import { Form, Formik } from "formik";

import * as Yup from "yup";

import { Button } from "@mui/material";

import FormikInput from "./FormikInput";
import Modal from "./UI/Modal";
import { MobxContext } from "@/store/MobxProvider";
import FormikSelect from "./FormikSelect";

interface CreateDeviceModalProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const createBrandValidationSchema = Yup.object({
    title: Yup.string().required("Required"),

});

export default function CreateDeviceModal(props: CreateDeviceModalProps) {
    const store = useContext(MobxContext);
    return (
        <Modal
            isOpen={props.isOpen}
            setIsOpen={props.setIsOpen}
        >
            <h3 className="text-xl font-bold text-center text-gray-700">
                Create device
            </h3>
            <div className="grid grid-flow-row gap-2">
                <Formik
                    initialValues={{
                        title: "",
                    }}
                    validationSchema={createBrandValidationSchema}
                    onSubmit={(values) => console.log(values)}
                >
                    {(props) => (
                        <Form>
                            <FormikInput
                                label="Title"
                                variant="outlined"
                                type="text"
                                name="brand-title"
                                placeholder="Enter brand title"
                                ariaLabel="Create brand title"
                                className="w-full"
                            />
                            <FormikSelect
                                name="name"
                                placeholder=""
                                variant="filled"
                                label="lavel"
                                type="select"
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