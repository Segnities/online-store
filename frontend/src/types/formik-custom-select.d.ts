import type { FormikHookConfig } from "formik";
import type { MUIBasicSelectOption } from "./mui-basic-select";
import type MUIBasicInput from "./mui-basic-input";

type BasicSelectProps = {
   label: string,
   id: string,
   name: string,
   options: MUIBasicSelectOption[],
   ariaLabel?: string;
   ariaErrorMessage?: string;
};

type FormikCustomSelect = BasicSelectProps & FieldHookConfig<string>;

export { FormikCustomSelect, BasicSelectProps };