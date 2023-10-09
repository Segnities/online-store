'use client';

import { observer } from "mobx-react-lite";
import { memo, useContext, useEffect } from "react";

import { MobxContext } from "@/store/MobxProvider";

import { ProductType } from "@/types/product-types";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import type { Types } from "@/types/types-api";

interface TypeBarProps {
    types: Types[];
}

function TypeBar(props: TypeBarProps) {
    const store = useContext(MobxContext);
    const { types } = props;
    const selectedType = store?.product?.selectedType;

    const handleTypeSelect = (type: ProductType) => {
        if (type.id === selectedType?.id) {
            store?.product.setSelectedType(null);
        } else {
            store?.product.setSelectedType(type);
        }
    }
    
    useEffect(() => {
        store?.product?.setTypes(types);
    }, []);

    return (
        <section className="bg-white p-2">
            <List>
                {
                    types?.map((type) => {
                        const type_id = type?.id;
                        const selected = selectedType?.id === type_id;

                        return (
                            <ListItem
                                key={type.id}
                                className={`cursor-pointer font-bold ${selected ? "" : "hover:bg-sky-400"} hover:transition-all hover:ease-in hover:duration-150 ${selected ? 'bg-sky-600' : ''} rounded-md p-3 my-2 hover:text-white ${selected ? 'text-white' : ''}`}
                                onClick={() => handleTypeSelect(type)}
                            >
                                {type.name}
                            </ListItem>
                        )
                    })
                }
            </List>
        </section>
    );
}

export default memo(observer(TypeBar));