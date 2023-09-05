import { memo, useContext, useState } from "react";
import { nanoid } from "nanoid";

import type { MUIBasicSelectOption } from "@/types/mui-basic-select";

import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import StyledTextarea from "./UI/StyledTextarea";

import { Button } from "@mui/material";

import { MobxContext } from "@/store/MobxProvider";

interface IProductInfo {
   id: string;
   title: string;
   description: string;
}


function CreateDeviceForm() {
   const [productInfo, setProductInfo] = useState<IProductInfo[]>([]);
   const store = useContext(MobxContext);
   const types: MUIBasicSelectOption[] | undefined = store?.product.types.map(type => {
      return {
         id: nanoid() + type.id.toString(),
         title: type.name,
         value: type.name
      }
   });
   const brands: MUIBasicSelectOption[] | undefined = store?.product.brands.map(brand => {
      return {
         id: nanoid() + brand.id.toString(),
         title: brand.name,
         value: brand.name
      }
   });
   const handleAddProductInfo = () => {
      const newProductInfo: IProductInfo = {
         id: nanoid(),
         title: '',
         description: ''
      };
      setProductInfo(prev => [...prev, newProductInfo]);
   }
   const handleDeleteProductInfo = (rmId: string) => {
      const clearedProductInfo = [...productInfo].filter(product => product.id !== rmId);
      setProductInfo(clearedProductInfo);
   }

   return (
      <form className="grid grid-flow-row gap-5">
         <FormInput
            label="Title"
            variant="outlined"
            type="text"
            placeholder="Enter product title"
            ariaLabel="Create brand title"
            className="w-full"
            size="small"
         />
         <FormInput
            label=""
            variant="outlined"
            type="file"
            name="productImage"
         />
         <FormSelect
            name="type"
            id="select-type"
            label="Select type"
            options={types}
            className="w-full"
         />
         <FormSelect
            name="brand"
            id="select-brand"
            label="Select brand"
            options={brands}
            className="w-full"
         />
         <Button variant="text" onClick={handleAddProductInfo}>
            Add additional data
         </Button>
         {
            productInfo.map(info => (
               <div className="flex flex-col items-center gap-4" key={info.id}>
                  <FormInput
                     label="Enter title"
                     variant="outlined"
                     type="text"
                     placeholder="Enter title"
                     className="w-full"
                  />
                  <StyledTextarea
                     ariaLabel="Enter description"
                     minRows={5}
                     placeholder="Enter description"
                  />
                  <Button
                     variant="contained"
                     color="error"
                     className="bg-red-600"
                     onClick={() => handleDeleteProductInfo(info.id)}
                  >
                     Delete
                  </Button>
               </div>
            ))
         }
         <Button variant="contained" type="submit" color="success" className="bg-green-600">Create</Button>
      </form>
   );
}

export default memo(CreateDeviceForm);