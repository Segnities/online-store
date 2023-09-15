'use client';

import type { BasicSelectProps } from "@/types/formik-custom-select";
import CustomSelect from "./UI/Select";
import StyledLabel from "./UI/StyledLabel";
import StyledOption from "./UI/StyledOption";

import type { MUIBasicSelectOption } from "@/types/mui-basic-select";

function FormSelect(props: BasicSelectProps) {
    const options: MUIBasicSelectOption[] | undefined = props?.options;
    const selectHtmlId: string | undefined = props?.id;
    const selectHtmlName: string | undefined = props?.name;
    const labelText: string | undefined = props?.label;

    return (
        <div>
            <StyledLabel htmlFor={selectHtmlId}>
                {labelText}
            </StyledLabel>
            <CustomSelect
                {...props}
            >
                {
                    options?.map(option => (
                        <StyledOption key={option.id} value={option.id}>{option.title}</StyledOption>
                    ))
                }
            </CustomSelect>
        </div>
    );
}

export default FormSelect;