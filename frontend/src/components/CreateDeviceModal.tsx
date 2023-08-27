import { Button } from "@mui/material";

import Modal from "./UI/Modal";
import CreateDeviceForm from "./CreateDeviceForm";

interface CreateDeviceModalProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export default function CreateDeviceModal(props: CreateDeviceModalProps) {
   
    return (
        <Modal
            isOpen={props.isOpen}
            setIsOpen={props.setIsOpen}
        >
            <div className="grid grid-flow-row gap-2">
                <CreateDeviceForm/>
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
                    className="float-right"
                >
                    Close
                </Button>
            </div>
        </Modal>
    );
}