export interface ProductDevices {
    id: number;
    name: string;
    price: number;
    rating: number;
    img: string;
    createdAt: string;
    updatedAt: string;
    brandId: number;
    typeId: number;
}

export interface PaginationDevicesList {
    count: number;
    rows: ProductDevices[];
}