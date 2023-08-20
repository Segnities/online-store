import { memo } from "react";

import { Card, CardContent, CardActions, Button } from "@mui/material";

import { isUndefined as _isUndefined } from "lodash";

interface PriceCardProps {
    price: string | undefined;
}

function PriceCard(props: PriceCardProps) {
    const { price } = props;

    return (
        <Card className="flex flex-col justify-between h-full p-5">
            <CardContent className="flex flex-col gap-3">
                <h3 className="text-2xl text-center uppercase text-black font-semibold">
                    Price
                </h3>
            </CardContent>
            <p className="text-center md:text-4xl text-2xl justify-center">
                {_isUndefined(price) ? 'Sorry, now device is not available' : price + ' $'}
            </p>
            <CardActions className="w-full flex justify-center">
                <Button
                    variant="contained"
                    className="w-full bg-sky-600"
                    size="medium"
                    disabled={_isUndefined(price)}
                >
                    Add to basket
                </Button>
            </CardActions>
        </Card>
    );
}

export default memo(PriceCard);