import { $authHost, $defaultHost } from "./index";

import type { Device } from "@/types/devices-api";

type NullableNumber = number | null;

export const createDevice = async (device: Device) => {
   const { data } = await $authHost.post('api/device', device);
   return data;
}

export const getAllDevices = async (typeId: NullableNumber, brandId: NullableNumber, page: number, limit: number) => {
   try {
      const { data } = await $defaultHost.get('api/device', {
         params: {
            typeId,
            brandId,
            page,
            limit
         }
      });
      return data;
   } catch (e) {
      console.log(e);
   }
}

export const updateDevice = async (deviceId: number) => {
   const apiUrl = 'api/device/' + deviceId;

   try {
      const { data } = await $authHost.put(apiUrl);
      return { data }
   } catch (e) {
      console.log(e);
   }
}

export const deleteDevice = async (deviceId: number) => {
   const apiUrl = 'api/brand/' + deviceId;

   try {
      const { data } = await $authHost.delete(apiUrl);
      return { data }
   } catch (e) {
      console.log(e);
   }
}