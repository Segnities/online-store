'use client';

import { observer } from "mobx-react-lite";
import { memo, useContext, useEffect } from "react";

import { auth } from "@/http/userAPI";

import { MobxContext } from "@/store/MobxProvider";
import { UserData } from "@/store/UserStore";

const AuthLayout = observer(({ children }: { children: React.ReactNode }) => {
   const store = useContext(MobxContext);
   const user = store?.user;

   useEffect(() => {
      auth().then((data: UserData) => {
         if (localStorage.getItem('token')) {
            user?.setIsAuth(true);
            user?.setUser(data);
         }

      }).catch(e => {
         user?.setIsAuth(false);
      }).finally(() => {
         user?.stopLoadingAuth()
      });
   }, [user?.isAuth]);

   return (
      <>
         {children}
      </>
   );
});

export default memo(AuthLayout);