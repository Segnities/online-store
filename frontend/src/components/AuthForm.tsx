'use client';

import type {FormEvent} from "react";
import {useContext, useState} from "react";
import {usePathname, useRouter} from "next/navigation";


import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";

import {login, registration} from "@/http/userAPI";
import AuthButton from "./AuthButton";
import AuthFormMessage from "./AuthFormMessage";
import AuthHeader from "./AuthHeader";
import {observer} from "mobx-react-lite";
import {MobxContext} from "@/store/MobxProvider";
import type {UserData} from "@/store/UserStore";

import Button from "@mui/material/Button";
import GoogleIcon from '@mui/icons-material/Google';
import firebaseSignUp from "@/firebase/auth/signUp";


const AuthForm = observer(() => {
    const store = useContext(MobxContext);
    const router = useRouter();
    const pathname = usePathname();

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('');

    const isLoginPage = pathname === '/login';

    const signUpWithGoogle = async () => {
        try {
           const result = await firebaseSignUp();
           store?.user.setGoogleUser(result?.user);
           store?.user.setIsAuth(true);
           router.push("/");
        } catch (e) {
            console.log(e);
        }
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let userData;
        try {
            if (isLoginPage) {
                const response: UserData = await login(email, password);
                userData = response;
                console.log(response);
                setEmail('');
                setPassword('');
            } else {
                const response: UserData = await registration(email, password);
                userData = response;
                console.log(response);

                setEmail('');
                setPassword('');
            }
            store?.user.setJwtUser(userData);
            store?.user.setIsAuth(true);
            router.push("/");
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <Card
            variant="outlined"
            className="w-4/5 md:w-2/5 flex flex-col gap-5  border-gray-200 rounded-lg p-8 lg:`p-14"
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
                <div className="w-full">
                    <Button type="button" onClick={()=> signUpWithGoogle()}>
                        <GoogleIcon />
                        Google
                    </Button>
                </div>
            </form>
        </Card>
    );
});

export default AuthForm;