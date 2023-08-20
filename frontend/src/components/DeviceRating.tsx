import { useState, useEffect, memo } from "react";

import { Grid } from "@mui/material";
import { Star } from "@mui/icons-material";

interface DeviceHeaderRatingProps {
    name: string;
    rating: number;
}

function DeviceRating(props: DeviceHeaderRatingProps) {
    const {
        name,
        rating
    } = props;
    const [starRatingUI, setStarRatingUI] = useState<JSX.Element[]>([]);

    useEffect(() => {
        const stars: JSX.Element[] = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(
                    <li key={i}>
                        <Star fontSize="large" color="warning" />
                    </li>
                );
            }
        }
        setStarRatingUI(stars);
    }, []);

    return (
        <div className="flex flex-col gap-3">
            <h2 className="text-2xl text-gray-700 font-bold">{name}</h2>
            <ul className="flex gap-1">
                {
                    starRatingUI
                }
            </ul>
        </div>
    );
}

export default memo(DeviceRating);