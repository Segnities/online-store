import type { FormikHookConfig } from "formik";
import type { MUIBasicSelectOption } from "./mui-basic-select";
import type MUIBasicInput from "./mui-basic-input";

export type BasicSelectProps = {
   label: string,
   id: string,
   name: string,
   className?: string;
   options: MUIBasicSelectOption[] | undefined,
   ariaLabel?: string;
   ariaErrorMessage?: string;
   value?: string;
   onChange?: (e:any)=> void;
};

type FormikCustomSelect = BasicSelectProps & FieldHookConfig<string>;

export { FormikCustomSelect, BasicSelectProps };