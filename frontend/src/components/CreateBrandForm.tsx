import { memo } from "react"

import FormInput from "./FormInput";

function CreateBrandForm() {
   return (
      <form>
         <FormInput
            label="Title"
            variant="outlined"
            type="text"
            name="brand-title"
            placeholder="Enter brand title"
            ariaLabel="Create brand title"
            className="w-full"
         />
      </form>
   );
}

export default memo(CreateBrandForm);