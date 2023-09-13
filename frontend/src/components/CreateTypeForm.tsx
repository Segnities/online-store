import { memo, useState } from "react";
import type { FormEvent } from "react";

import FormInput from "./FormInput";
import { Button, TextField } from "@mui/material";

import { createType } from "@/http/typesAPI";

function CreateTypeForm() {
   const [typeName, setTypeName] = useState<string>('');

   const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      createType(typeName).finally(()=> {
         setTypeName('');
         console.log('Type created!');
      });
   }

   return (
      <form onSubmit={handleSubmit}>
         <TextField
            label="Title"
            variant="outlined"
            value={typeName}
            onChange={(e) => setTypeName(e.target.value)}
            type="text"
            name="type-title"
            aria-label="Create type title"
            className="w-full"
         />
         <Button variant="contained" type="submit" className="bg-sky-500 mt-4 float-right hover:bg-sky-700">Create</Button>
      </form>
   )
}

export default memo(CreateTypeForm);