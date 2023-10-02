'use client';

import {memo, useContext, useEffect} from "react";

import {observer} from "mobx-react-lite";

import {MobxContext} from "@/store/MobxProvider";
import {auth, refreshToken} from "@/http/userAPI";

const AuthLayout = observer(({ children }: { children: React.ReactNode }) => {
   const store = useContext(MobxContext);
   const refreshMinutes = 15;

   useEffect(() => {
      const checkAuth = async () => {
         try {
            const userData = await auth();
            if (userData) {
               store?.user.setUser(userData);
               store?.user.setIsAuth(true);
            } else {
               store?.user.setIsAuth(false);
            }
         } catch (e) {
            console.log(e)
         } finally {
            store?.user.stopLoadingAuth();
         }
      }
      checkAuth();
   }, []);

   useEffect(()=> {
      const refreshIntervalId = setInterval(async()=> {
         const newAccessToken = await refreshToken();
         if (newAccessToken) {
            console.log('Tokens updated!');
            store?.user.setIsAuth(true);
         } else {
            console.log('Failed to update tokens!');
            store?.user.setIsAuth(false);
         }
      }, refreshMinutes * 60 * 1000);
      return ()=> {
         clearInterval(refreshIntervalId);
      }
   }, []);

   if (store?.user.isAuth) {
      return <p>Loading...</p>
   }

   return (
      <>
         {children}
      </>
   );
});

export default memo(AuthLayout);