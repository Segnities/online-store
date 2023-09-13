export interface DeviceInfoType {
    id: number;
    title: string;
    description: string;
}

export interface ProductDevice {
    id: number;
    name: string;
    price: number;
    rating: number;
    img: string;
    createdAt: string;
    updatedAt: string;
    brandId: number;
    typeId: number;
    info?: DeviceInfoType[]
}

export interface PaginationDevicesList {
    count: number;
    rows: ProductDevice[];
}