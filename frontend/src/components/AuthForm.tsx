
import { memo } from "react";

import type { FormikProps } from "formik";
import { Form, Formik } from "formik";

import * as Yup from "yup";
import AuthInput from "./AuthInput";

import AuthButton from "./AuthButton";
import AuthFormMessage from "./AuthFormMessage";
import AuthHeader from "./AuthHeader";

export interface AuthFormValues {
    email: string;
    password: string;
}

const authFormValidationSchema = Yup.object({
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required")
});

function AuthForm() {
    return (
        <div className="w-4/5 md:w-2/5 flex flex-col gap-5 border-2 border-gray-200 rounded-lg p-8 lg:p-14">
            <AuthHeader />
            <Formik
                initialValues={{
                    email: "",
                    password: ""
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={authFormValidationSchema}
            >
                {(props: FormikProps<AuthFormValues>) => (
                    <Form
                        className="w-full grid grid-rows-2 grid-col-1 gap-5"
                    >
                        <AuthInput
                            label="Email"
                            variant="outlined"
                            type="email"
                            name="auth-email"
                            placeholder="Enter email"
                            ariaErrorMessage={props.errors.email}
                            ariaLabel="Email"
                        />
                        <AuthInput
                            label="Password"
                            name="auth-password"
                            placeholder="Enter password"
                            variant="outlined"
                            type="password"
                            ariaErrorMessage={props.errors.password}
                            ariaLabel="Password"
                        />
                        <AuthButton />
                        <AuthFormMessage />
                    </Form>
                )}

            </Formik>
        </div>
    );
}

export default memo(AuthForm);    