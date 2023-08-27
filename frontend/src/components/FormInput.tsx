import { memo } from "react";


import TextField from "@mui/material/TextField";
import type MUIBasicInput from "@/types/mui-basic-input";

function FormInput(props: MUIBasicInput) {
    return (
        <TextField
            placeholder={props?.placeholder}
            className={props?.className}
            name={props?.name}
            type={props.type}
            label={props.label}
            variant={props.variant}
            aria-errormessage={props.ariaErrorMessage}
            aria-label={props.ariaLabel}
            size={props.size}
            multiline={props?.multiline}
        />

    );
}

export default memo(FormInput);