export interface Device {
   id: number;
   name: string;
   price: string;
   rating: string;
   img: string;
   createdAt: string;
   updatedAt: string;
   typeId: number;
   brandId: number;
}

export interface DeviceInfo {
   id: number;
   title: string;
   description: string;
   createdAt: string;
   updatedAt: string;
   deviceId: number;
}

export interface TargetDevice extends Device {
   deviceInfos: DeviceInfo[];
}