'use client';

import { observer } from "mobx-react-lite";
import { memo, useContext, useEffect } from "react";

import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";

import { MobxContext } from "@/store/MobxProvider";
import { ProductBrand } from "@/types/product-brands";
import type { Brands } from "@/types/brands-api";

interface BrandBarProps {
    brands: Brands[];
}

function BrandBar(props: BrandBarProps) {
    const store = useContext(MobxContext);
    const selectedBrand = store?.product?.selectedBrand;
    const { brands } = props;

    const handleBrandSelect = (brand: ProductBrand) => {
        if (brand.id === selectedBrand?.id) {
            store?.product.setSelectedBrand(null);
        } else {
            store?.product.setSelectedBrand(brand);
        }
    }

    useEffect(() => {
        console.log(brands);
        store?.product.setBrands(brands);
    }, []);

    return (
        <section className="flex flex-row flex-wrap">
            <Divider />
            {
                brands?.map((brand) => {
                    const brand_id = brand?.id;
                    const selected = selectedBrand?.id === brand_id;

                    return (
                        <Card
                            key={brand.id}
                            className={`cursor-pointer mx-2 font-bold ${selected ? "" : "hover:bg-sky-400"} hover:transition-all hover:ease-in hover:duration-150 ${selected ? 'bg-sky-600' : ''} rounded-md p-3 my-2 hover:text-white ${selected ? 'text-white' : ''}`}
                            onClick={() => handleBrandSelect(brand)}
                        >
                            {brand.name}
                        </Card>
                    )
                })
            }
        </section>
    )
}

export default memo(observer(BrandBar));