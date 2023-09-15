import type {FormEvent} from "react";
import {memo} from "react";
import {Button, TextField} from "@mui/material";

import {createType} from "@/http/typesAPI";
import {useForm} from "react-hook-form";
import * as Yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

const schema = Yup.object({
    typeName: Yup.string().required()
})

function CreateTypeForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors,
        }
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            typeName: '',
        }
    })
    const onSubmit = (data) => {
        createType(data.typeName).finally(() => {
            console.log('Type created!');
            reset();
        });
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
                label="Title"
                variant="outlined"
                type="text"
                aria-label="Create type title"
                className="w-full"
                {...register('typeName')}
            />
            <p className='text-red-500'>{errors.typeName?.message}</p>
            <Button variant="contained" type="submit"
                    className="bg-sky-500 mt-4 float-right hover:bg-sky-700">Create</Button>
        </form>
    )
}

export default memo(CreateTypeForm);