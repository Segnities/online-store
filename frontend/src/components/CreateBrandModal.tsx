import { Form, Formik } from "formik";

import * as Yup from "yup";

import { Button } from "@mui/material";

import FormikInput from "./FormikInput";
import Modal from "./UI/Modal";

interface CreateBrandModalProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const createBrandValidationSchema = Yup.object({
    title: Yup.string().required("Required"),

});

export default function CreateBrandModal(props: CreateBrandModalProps) {
    return (
        <Modal
            isOpen={props.isOpen}
            setIsOpen={props.setIsOpen}
            modalHeader="Create Brand"
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