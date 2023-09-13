'use client';

import { observer } from "mobx-react-lite";
import { memo, useContext, useEffect } from "react";

import { auth } from "@/http/userAPI";

import { MobxContext } from "@/store/MobxProvider";
import { UserData } from "@/store/UserStore";

const ObserveredLayout = observer(({ children }: { children: React.ReactNode }) => {
   const store = useContext(MobxContext);
   const user = store?.user;

   useEffect(() => {
      auth().then((data:UserData) => {
            user?.setIsAuth(true);
            user?.setUser(data);
      }).finally(()=> {
         user?.stopLoadingAuth()
      });
   }, []);

   return (
      <>
         {children}
      </>
   );
});

export default memo(ObserveredLayout);