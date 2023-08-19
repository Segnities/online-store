import { useState, useEffect } from "react";

export default function useClientSide() {
    const [clientSide, setClientSide] = useState<boolean>(false);

    useEffect(()=> {
        setClientSide(true);
        return () => {
            setClientSide(false);
        }
    }, []);
    return clientSide;
}