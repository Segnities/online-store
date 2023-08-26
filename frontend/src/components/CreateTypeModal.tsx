

import { Button } from "@mui/material";

import FormInput from "./FormInput";
import Modal from "./UI/Modal";

interface CreateTypeModalProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}


export default function CreateTypeModal(props: CreateTypeModalProps) {
    return (
        <Modal
            isOpen={props.isOpen}
            setIsOpen={props.setIsOpen}
            modalHeader="Create type"
        >
            <div className="grid grid-flow-row gap-2">
                <form>
                    <FormInput
                        label="Title"
                        variant="outlined"
                        type="text"
                        name="type-title"
                        placeholder="Enter type title"
                        ariaLabel="Create type title"
                        className="w-full"
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