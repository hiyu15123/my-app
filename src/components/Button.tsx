"use client";

import React, { use, useCallback } from "react";
import { useState } from "react";

export function Button() {
   const [count, setCount] =  useState(1);

   const handleClick = useCallback(() => {
      if (count < 10) {
         setCount((count) => count + 1);
      }
   }, [count]);
   return (
      <>
         <button onClick={handleClick}>ボタン</button>
         <h2>{count}</h2>
      </>
   )
}



