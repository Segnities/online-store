export interface Device {
   id: number;
   name: string;
   price: number;
   img: File | null;
   typeId: number;
   brandId: number;
}

export interface DeviceInfo {
   id:string;
   title: string;
   description: string;
}

export interface TargetDevice extends Device {
   device: Device;
   info: DeviceInfo[];
}