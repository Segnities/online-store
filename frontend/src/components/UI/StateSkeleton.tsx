import type { ReactNode } from "react";
import type { StandardCSSProperties } from "@mui/system/styleFunctionSx/StandardCssProperties";

import { Skeleton } from "@mui/material";

interface StateSkeletonProps {
   children: ReactNode;
   animation?: false | "wave" | "pulse" | undefined;
   className?: string;
   variant?: "text" | "rectangular" | "rounded" | "circular" | undefined;
   width?: number;
   height?: number;
   bgcolor?: StandardCSSProperties['backgroundColor'];
   isLoading: boolean;
}

function StateSkeleton(props: StateSkeletonProps) {
   if (props.isLoading) {
      return (
         <Skeleton
            variant={props?.variant}
            animation={props?.animation}
            className={props?.className}
            width={props?.width}
            height={props?.height}
            sx={{ bgcolor: props?.bgcolor || 'gray.900' }}
         />
      )
   }
   return (
      <>
         {
            props.children
         }
      </>
   );
}

export default StateSkeleton;