"use client";
import { useEffect } from "react";

type EffectProps = {
   count: number;
};

export function Effect({ count }: EffectProps) {
   useEffect(() => {
      console.log(`マウント時: ${count}`)
      document.body.style.backgroundColor = "lightblue";
      return () => {
         console.log(count)
         document.body.style.backgroundColor = "";
      };
   }, [count]);
   return null;
}