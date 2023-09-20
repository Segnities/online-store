export interface Device {
   id: number;
   name: string;
   price: number;
   img: File | null;
   typeId: number;
   brandId: number;
}

export interface DeviceInfo {
   key:string;
   title: string;
   description: string;
}

export interface FormDevice {
   name: string;
   price: number;
   typeId: number;
   brandId: number;
   img: File | null;
   info: DeviceInfo[];
}