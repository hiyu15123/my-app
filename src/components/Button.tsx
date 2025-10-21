"use client";

import React, { use, useCallback } from "react";
import { useState } from "react";

export function Button() {
   const [foo, setFoo] =  useState(1);

   const handleClick = (() => {
      setFoo((foo) => foo + 1);
   });
   return (
      <>
         <button onClick={handleClick}>ボタン</button>
         <h2>{foo}</h2>
      </>
   )
}



