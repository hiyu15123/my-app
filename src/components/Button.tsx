"use client";

import React, { useCallback } from "react";

export function Button() {
   const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
      console.log(e.currentTarget.href)
      e.preventDefault();
   }, []);
   return (
      <a href="/about"
         onClick={handleClick}>
         ボタン
      </a>
   )
}



