"use client";
import { useEffect } from "react";

type EffectProps = {
   count?: number;
};

const useBgLightBlue = () => {
   useEffect(() => {
         document.body.style.backgroundColor = "lightblue";
         return () => {
            document.body.style.backgroundColor = "";
         };
   }, []);
}

export function Effect({ count = 0 }: EffectProps) {
   useBgLightBlue();
   return null;
}