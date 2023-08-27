

import { Button } from "@mui/material";

import FormInput from "./FormInput";
import Modal from "./UI/Modal";
import CreateTypeForm from "./CreateTypeForm";

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
                <CreateTypeForm/>
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