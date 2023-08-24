import type { SelectProps } from "@mui/base/Select";
import { Select } from "@mui/base/Select";
import { connect } from "formik";
import type { ForwardedRef, RefAttributes } from "react";
import { forwardRef } from "react";
import StyledButton from "./StyledButton";
import StyledListbox from "./StyledListbox";
import StyledPopper from "./StyledPopper";


const CustomSelect = forwardRef(function CustomSelect<
    TValue extends {},
    Multiple extends boolean,
>(props: SelectProps<TValue, Multiple>, ref: ForwardedRef<HTMLButtonElement>) {
    const slots: SelectProps<TValue, Multiple>['slots'] = {
        root: StyledButton,
        listbox: StyledListbox,
        popper: StyledPopper,
        ...props.slots,
    };
    return  <Select {...props} ref={ref} slots={slots} />;
}) as <TValue extends {}, Multiple extends boolean>(
    props: SelectProps<TValue, Multiple> & RefAttributes<HTMLButtonElement>,
) => JSX.Element;

export default connect(CustomSelect);