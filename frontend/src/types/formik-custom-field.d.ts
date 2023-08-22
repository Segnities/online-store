import MUIBasicInput from "./mui-basic-input";
import { FieldHookConfig } from "formik";

type FormikCustomField = MUIBasicInput & FieldHookConfig<string>;

export default FormikCustomField;