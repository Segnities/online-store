'use client';

import { observer } from "mobx-react-lite";
import { memo, useContext, useEffect } from "react";

import { MobxContext } from "@/store/MobxProvider";
import { logout } from "@/http/userAPI";

const AuthLayout = observer(({ children }: { children: React.ReactNode }) => {
   const store = useContext(MobxContext);
   const user = store?.user;

   useEffect(()=> {
      
   }, [])

   return (
      <>
         {children}
      </>
   );
});

export default memo(AuthLayout);