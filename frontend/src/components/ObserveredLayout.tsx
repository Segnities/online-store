'use client';

import { useEffect, useContext, useState, memo } from "react";
import { observer } from "mobx-react-lite";

import { MobxContext } from "@/store/MobxProvider";

import CircularProgress from "@mui/joy/CircularProgress";
import { check } from "@/http/userAPI";
import type { UserData } from "@/store/UserStore";

const ObserveredLayout = observer(({ children }: { children: React.ReactNode }) => {
   const store = useContext(MobxContext);
   const user = store?.user;
   const [loading, setLoading] = useState<boolean>(false);


   if (loading) {
      return (
         <div className="absolute max-w-sm items-center inset-1/2 flex flex-col">
            <CircularProgress color="primary" size="lg" />
            <h3 className="text-2xl font-bold">Loading data...</h3>
         </div>
      )
   }

   return (
      <>
         {children}
      </>
   );
});

export default memo(ObserveredLayout);