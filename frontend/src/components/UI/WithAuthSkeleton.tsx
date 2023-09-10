import { MobxContext } from "@/store/MobxProvider";
import { Skeleton } from "@mui/material";
import { observer } from "mobx-react-lite";
import type { ReactNode } from "react";
import { useContext } from "react";

import { StandardCSSProperties } from "@mui/system/styleFunctionSx/StandardCssProperties";

interface WithAuthSkeletonProps {
   children: ReactNode;
   animation?: false | "wave" | "pulse" | undefined;
   className?: string;
   variant?: "text" | "rectangular" | "rounded" | "circular" | undefined;
   width?: number;
   height?: number;
   bgcolor?: StandardCSSProperties['backgroundColor'];
}

function WithAuthSkeleton(props: WithAuthSkeletonProps) {
   const {
      children,
   } = props;
   const store = useContext(MobxContext);
   const isLoading = store?.user.isAuthLoading;

   if (isLoading) {
      return (
         <Skeleton
            variant={props?.variant}
            animation={props?.animation}
            className={props?.className}
            width={props?.width}
            height={props?.height}
            sx={{ bgcolor: props?.bgcolor || 'gray.900'}}
         />
      )
   }
   return (
      <>
         {
            children
         }
      </>
   );

}

export default observer(WithAuthSkeleton);