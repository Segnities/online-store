'use client';

import {memo, useContext, useEffect} from "react";

import {observer} from "mobx-react-lite";

import {MobxContext} from "@/store/MobxProvider";
import {auth, refreshToken} from "@/http/userAPI";

const AuthLayout = observer(({ children }: { children: React.ReactNode }) => {
   const store = useContext(MobxContext);

   useEffect(()=> {
      auth().then((data)=> {
         store?.user?.setIsAuth(true);
         store?.user?.setJwtUser(data);
      });
   }, [])

   return (
      <>
         {children}
      </>
   );
});

export default memo(AuthLayout);