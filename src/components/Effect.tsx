"use client";
import { useEffect } from "react";

export function Effect() {
   useEffect(() => {
      document.body.style.backgroundColor = "lightblue";
      console.log("マウントされました: 背景色がライトブルーに設定されました");
      return () => {
         document.body.style.backgroundColor = "";
         console.log("マウント解除されました: 背景色が元に戻されました");
      };
   }, []);
   return null;
} 