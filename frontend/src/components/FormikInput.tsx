import { memo } from "react";

import { useField } from "formik";

import TextField from "@mui/material/TextField";
import FormikCustomField from "@/types/formik-custom-field";

function FormikInput(props: FormikCustomField) {
    const [field] = useField(props);
    return (
        <TextField
            {...field}
            placeholder={props.placeholder}
            className={props?.className}
            type={props.type}
            label={props.label}
            variant={props.variant}
            aria-errormessage={props.ariaErrorMessage}
            aria-label={props.ariaLabel}
        />

    );
}

export default memo(FormikInput);