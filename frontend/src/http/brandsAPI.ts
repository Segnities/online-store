import { $defaultHost, $authHost } from "./index";


export const createBrand = async () => {
   const { data } = await $authHost.post('api/brand');
   return data;
}

export const fetchAllBrands = async () => {
   try {
      const { data } = await $defaultHost.get('api/brand');
      return data;
   } catch (e) {
      console.log(e);
   }
}

export const updateBrand = async (brandId:number) => {
   const apiUrl = 'api/brand/' + brandId;

   try {
      const { data } = await $authHost.put(apiUrl);
      return { data }
   } catch (e) {
      console.log(e);
   }
}

export const deleteBrand = async (brandId:number) => {
   const apiUrl = 'api/brand/' + brandId;

   try {
      const { data } = await $authHost.delete(apiUrl);
      return { data }
   } catch (e) {
      console.log(e);
   }
}