import { makeAutoObservable } from "mobx";

import type { ProductType } from "@/types/product-types";
import type { ProductBrand } from "@/types/product-brands";
import type { ProductDevices } from "@/types/product-devices";

export default class ProductStore {
    private _types: ProductType[];
    private _brands: ProductBrand[];
    private _devices: ProductDevices[];

    generateDevices() {
        const generatedDevices: ProductDevices[] = [];

        for (let i = 1; i <= 100; i++) {
            generatedDevices.push({
                id: i,
                name: `Product ${i}`,
                price: Math.random() * 1000,
                rating: Math.floor(Math.random() * 6),
                img: `image_${i}.jpg`,
            });
        }
        return generatedDevices;
    }

    constructor() {
        this._types = [
            { id: 1, name: "Fridges" },
            { id: 2, name: "Smartphones" },
        ];
        this._brands = [
            { id: 1, name: 'Samsung' },
            { id: 2, name: 'Apple' }
        ];
        this._devices = this.generateDevices();
        makeAutoObservable(this);
    }

    setTypes(types: ProductType[]) {
        this._types = types;
    }
    setBrands(brands: ProductBrand[]) {
        this._brands = brands;
    }

    setDevices(devices: ProductDevices[]) {
        this._devices = devices;
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
}