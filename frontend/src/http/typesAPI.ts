import { $defaultHost, $authHost } from "./index";


export const createType = async (name:string) => {
   const { data } = await $authHost.post('api/type', {name});
   return data;
}

export const fetchAllTypes = async () => {
   try {
      const { data } = await $defaultHost.get('api/type');
      return data;
   } catch (e) {
      console.log(e);
   }
}

export const updateType = async (typeId:number) => {
   const apiUrl = 'api/type/' + typeId;

   try {
      const { data } = await $authHost.put(apiUrl);
      return { data }
   } catch (e) {
      console.log(e);
   }
}

export const deleteType = async (typeId:number) => {
   const apiUrl = 'api/type/' + typeId;

   try {
      const { data } = await $authHost.delete(apiUrl);
      return { data }
   } catch (e) {
      console.log(e);
   }
}