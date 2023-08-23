'use client';

import { ErrorPage } from "@/types/error-page";
import { useEffect } from "react";

import { Button } from "@mui/material";

export default function Error({ error, reset }: ErrorPage) {
    useEffect(() => {
        console.log(error);
    }, [error]);
    return (
        <div>
            <h2 className="text-2xl">Something went wrong...</h2>
            <Button
                variant="text"
                color="primary"
                onClick={() => reset()}
            >
                Try again
            </Button>
        </div>
    );
}