import { memo } from "react";

import FormInput from "./FormInput";
import { Button } from "@mui/material";

function CreateTypeForm() {
   return (
      <form>
         <FormInput
            label="Title"
            variant="outlined"
            type="text"
            name="type-title"
            placeholder="Enter type title"
            ariaLabel="Create type title"
            className="w-full"
         />
         <Button variant="contained">Create</Button>
      </form>
   )
}

export default memo(CreateTypeForm);