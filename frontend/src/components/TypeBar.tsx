'use client';

import { observer } from "mobx-react-lite";
import { memo, useContext } from "react";

import { MobxContext } from "@/store/MobxProvider";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

function TypeBar() {
    const store = useContext(MobxContext);
    const types = store?.product?.types;

    return (
        <List className="bg-white">
            {
                types?.map((type) => (
                    <ListItem
                        key={type.id}
                        className="cursor-pointer hover:bg-sky-100 hover:transition-all hover:ease-in hover:duration-150"
                    >
                        {type.name}
                    </ListItem>
                )
                )
            }
        </List>
    );
}

export default memo(observer(TypeBar));