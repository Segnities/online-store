'use client'

import {memo} from "react";

import {Button, TextField} from "@mui/material";
import {createBrand} from "@/http/brandsAPI";
import {useForm} from "react-hook-form";
import type {SubmitHandler} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
    brandName: yup.string().required()
})

type FormValues = {
    brandName: string
}

function CreateBrandForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors
        }
    } = useForm<FormValues>({
        resolver: yupResolver(schema),
        defaultValues: {
            brandName: '',
        }
    });
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        createBrand(data.brandName).finally(() => {
            console.log('Brand created!');
            reset();
        });
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
                label="Title"
                variant="outlined"
                type="text"
                {...register('brandName')}
                aria-label="Create brand title"
                className="w-full"

            />
            <Button variant="contained" type="submit"
                    className="bg-sky-500 mt-4 float-right hover:bg-sky-700">Create</Button>
            <p>{errors.brandName?.message}</p>
        </form>
    );
}

export default memo(CreateBrandForm);