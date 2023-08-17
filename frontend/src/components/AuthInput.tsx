import { memo } from "react";

import type { FieldHookConfig } from "formik";
import { useField } from "formik";


import TextField from "@mui/material/TextField";
import type { TextFieldVariants } from "@mui/material/TextField";

type Props = {
    placeholder: string;
    type: string;
    name: string;
    variant: TextFieldVariants | undefined;
    label: string;
    ariaErrorMessage?: string;
    ariaLabel?: string;
}

type AuthInputProps = Props & FieldHookConfig<string>;

function AuthInput(props: AuthInputProps) {
    const [field] = useField(props);
    return (
        <TextField
            {...field}
            placeholder={props.placeholder}
            type={props.type}
            label={props.label}
            variant={props.variant}
            aria-errormessage={props.ariaErrorMessage}
            aria-label={props.ariaLabel}
        />

    );
}

export default memo(AuthInput);