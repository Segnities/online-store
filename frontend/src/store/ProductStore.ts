import { makeAutoObservable } from "mobx";

import type { ProductType } from "@/types/product-types";
import type { ProductBrand } from "@/types/product-brands";
import type { ProductDevices } from "@/types/product-devices";

export default class ProductStore {
    private _types: ProductType[];
    private _brands: ProductBrand[];
    private _devices: ProductDevices[];

    private _selectedType: ProductType | null = null;
    private _selectedBrand: ProductBrand | null = null;

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
            { id: 3, name: "Laptops" },
            { id: 4, name: "TVs" },
        ];
        this._brands = [
            { id: 1, name: 'Samsung' },
            { id: 2, name: 'Apple' }
        ];
        this._devices = this.generateDevices();
        makeAutoObservable(this);
    }

    public setTypes(types: ProductType[]) {
        this._types = types;
    }
    public setBrands(brands: ProductBrand[]) {
        this._brands = brands;
    }

    public setSelectedBrand(brand: ProductBrand | null) {
        this._selectedBrand = brand;
    }

    public setDevices(devices: ProductDevices[]) {
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
}