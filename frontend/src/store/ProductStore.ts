import { makeAutoObservable } from "mobx";

import type { ProductType } from "@/types/product-types";
import type { ProductBrand } from "@/types/product-brands";
import type { ProductDevice } from "@/types/product-devices";

export default class ProductStore {
    private _types: ProductType[];
    private _brands: ProductBrand[];
    private _devices: ProductDevice[];

    private _selectedType: ProductType | null = null;
    private _selectedBrand: ProductBrand | null = null;

    private _page: number;
    private _totalCount: number;
    private _limit: number;


    constructor() {
        this._types = [
            { id: 1, name: "Fridges" },
            { id: 2, name: "Smartphones" },
            { id: 3, name: "Laptops" },
            { id: 4, name: "TVs" },
        ];
        this._brands = [
            { id: 1, name: 'Samsung' },
            { id: 2, name: 'Apple' },
            { id: 3, name: 'LG' },
            { id: 4, name: 'Sony' },
            { id: 5, name: 'Huawei' },
            { id: 6, name: 'Xiaomi' },
            { id: 7, name: 'Motorola' },
            { id: 8, name: 'Nokia' },
            { id: 9, name: 'Micromax' },
            { id: 10, name: 'Asus' },
            { id: 11, name: 'MSI' },
            { id: 12, name: 'Acer' },
            { id: 13, name: 'Dell' },
        ];
        this._devices = [];
        this._page = 1;
        this._totalCount = 0;
        this._limit = 3;
        makeAutoObservable(this);
    }


    public setPage(page: number) {
        this._page = page;
    }

    public setTotalCount(count: number) {
        this._totalCount = count;
    }

    public setTypes(types: ProductType[]) {
        this._types = types;
    }
    public setBrands(brands: ProductBrand[]) {
        this._brands = brands;
    }

    public getProductById(productId: number) {
        for (let device of this._devices) {
            if (productId === device.id) {
                return device;
            }
        }
    }

    public getProductDescription(productId: number) {
        return [
            {
                id: 1,
                title: "Memory",
                description: "5 GB"
            },
            {
                id: 2,
                title: "Camera",
                description: "12 MgPx"
            },
            {
                id: 3,
                title: "Battery",
                description: "3000 mAh",
            },
            {
                id: 4,
                title: "OS",
                description: "Android"

            }

        ];
    }

    public setSelectedBrand(brand: ProductBrand | null) {
        this._selectedBrand = brand;
    }

    public setDevices(devices: ProductDevice[]) {
        this._devices = devices;
    }

    public setSelectedType(type: ProductType | null) {
        this._selectedType = type;
    }

    get selectedType() {
        return this._selectedType;
    }

    get selectedBrand() {
        return this._selectedBrand;
    }

    get types() {
        return this._types;
    }

    get brands() {
        return this._brands;
    }

    get devices() {
        return this._devices;
    }

    get page() {
        return this._page;
    }

    get totalCount() {
        return this._totalCount;
    }

    get limit() {
        return this._limit;
    }
}