
import { memo } from "react";

import { Formik, Form } from "formik";
import type { FormikProps } from "formik";

import * as Yup from "yup";
import AuthInput from "./AuthInput";

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
        <div>
            <h1>Auth form</h1>
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
                    <Form>
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
                    </Form>
                )}

            </Formik>
        </div>
    );
}

export default memo(AuthForm);    