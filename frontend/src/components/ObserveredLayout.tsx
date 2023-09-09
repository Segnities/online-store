'use client';

import { observer } from "mobx-react-lite";
import { memo, useContext, useEffect, useState } from "react";

import { MobxContext } from "@/store/MobxProvider";
import { auth } from "@/http/userAPI";
import { UserData } from "@/store/UserStore";

import CircularProgress from '@mui/joy/CircularProgress';



const ObserveredLayout = observer(({ children }: { children: React.ReactNode }) => {
   const store = useContext(MobxContext);
   const user = store?.user;
   const [loading, setLoading] = useState<boolean>(true);

   useEffect(() => {
      auth().then((data:UserData) => {
            user?.setIsAuth(true);
            user?.setUser(data);
      }).finally(()=> setLoading(false));
   }, []);

   if (loading) {
      <CircularProgress variant='outlined' />
   }

   return (
      <>
         {children}
      </>
   );
});

export default memo(ObserveredLayout);