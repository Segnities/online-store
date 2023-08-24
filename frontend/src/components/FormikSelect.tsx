
import { useField } from "formik";

import CustomSelect from "./UI/Select";
import StyledLabel from "./UI/StyledLabel";
import StyledOption from "./UI/StyledOption";

import type { FormikCustomSelect } from "@/types/formik-custom-select";
import type { MUIBasicSelectOption } from "@/types/mui-basic-select";

function FormikSelect(props: FormikCustomSelect) {
    const [field] = useField(props);

    const options: MUIBasicSelectOption[] = props?.options;
    const selectHtmlId: string | undefined = props?.id;
    const selectHtmlName: string | undefined = props?.name;
    const labelText: string | undefined = props?.label;

    return (
        <div>
            <StyledLabel htmlFor={selectHtmlId}>
                {labelText}
            </StyledLabel>
            <CustomSelect
                {...field}
                id={selectHtmlId}
                name={selectHtmlName}
                className="w-full h-15"
            >
                {
                    options.map(option => (
                        <StyledOption key={option.id} value={option.value}>{option.title}</StyledOption>
                    ))
                }
            </CustomSelect>
        </div>
    );
}

export default FormikSelect;