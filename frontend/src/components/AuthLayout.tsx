'use client';

import {memo, useContext} from "react";

import {observer} from "mobx-react-lite";

import {MobxContext} from "@/store/MobxProvider";

const AuthLayout = observer(({ children }: { children: React.ReactNode }) => {
   const store = useContext(MobxContext);

   return (
      <>
         {children}
      </>
   );
});

export default memo(AuthLayout);