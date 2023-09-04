import type { FormEvent } from "react";
import { memo, useState } from "react";

import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";

import { login, registration } from "@/http/userAPI";
import AuthButton from "./AuthButton";
import AuthFormMessage from "./AuthFormMessage";
import AuthHeader from "./AuthHeader";

interface AuthFormProps {
    pathname:string;
}

function AuthForm(props: AuthFormProps) {
    const {
        pathname
    } = props;
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('');
    const isLoginPage = pathname === '/login';

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if (isLoginPage) {
                const response = await login(email, password);
                console.log(response);
                setEmail('');
                setPassword('');
                
            } else  {
                const response = await registration(email, password);
                console.log(response);
                setEmail('');
                setPassword('');
            }
        } catch(e) {
            console.log(e);
        }
    }   
    
    return (
        <Card
            variant="outlined"
            className="w-4/5 md:w-2/5 flex flex-col gap-5  border-gray-200 rounded-lg p-8 lg:p-14"
        >
            <AuthHeader />
            <form
                className="w-full grid grid-rows-2 grid-col-1 gap-5"
                onSubmit={handleSubmit}
            >
                <TextField
                    label="Email"
                    variant="outlined"
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    aria-label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    label="Password"
                    name="password"
                    placeholder="Enter password"
                    variant="outlined"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    aria-label="Password"
                />
                <AuthButton />
                <AuthFormMessage />
            </form>
        </Card>
    );
}

export default memo(AuthForm);    