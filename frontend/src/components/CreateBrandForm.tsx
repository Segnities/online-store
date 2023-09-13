'use client'

import { memo, useState } from "react";
import type { FormEvent } from "react";

import { Button, TextField } from "@mui/material";
import { createBrand } from "@/http/brandsAPI";

function CreateBrandForm() {
   const [brandName, setBrandName] = useState<string>('');

   const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      createBrand(brandName).finally(()=> {
         setBrandName('');
         console.log('Brand created!');
      });
   }

   return (
      <form onSubmit={handleSubmit}>
         <TextField
            label="Title"
            variant="outlined"
            type="text"
            value={brandName}
            onChange={(e)=> setBrandName(e.target.value)}
            name="brand-title"
            aria-label="Create brand title"
            className="w-full"
         />
         <Button variant="contained" type="submit" className="bg-sky-500 mt-4 float-right hover:bg-sky-700">Create</Button>
      </form>
   );
}

export default memo(CreateBrandForm);