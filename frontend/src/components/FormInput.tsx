import { memo } from "react";


import TextField from "@mui/material/TextField";
import FormikCustomField from "@/types/formik-custom-field";

function FormInput(props: FormikCustomField) {
    return (
        <TextField
            placeholder={props?.placeholder}
            className={props?.className}
            name={props.name}
            type={props.type}
            label={props.label}
            variant={props.variant}
            aria-errormessage={props.ariaErrorMessage}
            aria-label={props.ariaLabel}
            size={props.size}
        />

    );
}

export default memo(FormInput);