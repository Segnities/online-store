import type { TextFieldVariants } from "@mui/material"

type MUIBasicInput = {
    placeholder?: string,
    type: string,
    name?: string,
    variant: TextFieldVariants | undefined,
    label: string,
    ariaErrorMessage?: string,
    ariaLabel?: string,
    className?: string,
    size?: "small" | "medium",
    multiline?: boolean
}

export default MUIBasicInput;