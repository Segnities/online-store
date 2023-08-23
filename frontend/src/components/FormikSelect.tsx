
import type FormikCustomField from "@/types/formik-custom-field";
import { useField } from "formik";
import CustomSelect from "./UI/Select";
import StyledLabel from "./UI/StyledLabel";
import StyledOption from "./UI/StyledOption";

function FormikSelect(props: FormikCustomField) {
    const [field] = useField(props);
    return (
          <div>
            <StyledLabel htmlFor="unnamedSelect">
                Custom select
            </StyledLabel>
            <CustomSelect defaultValue={10} id="unnamedSelect" name="example-select"> 
                <StyledOption value={10}>Ten</StyledOption>
                <StyledOption value={20}>Twenty</StyledOption>
                <StyledOption value={30}>Thirty</StyledOption>
            </CustomSelect>
          </div>
    );
}

export default FormikSelect;