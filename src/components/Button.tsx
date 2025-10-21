"use client";

import { useCounter } from "@/hooks/useCounter";
import { useInputArray } from "@/hooks/useInputArray";
import React, { use, useCallback } from "react";

export function Button() {
   const { count, isShow, handleClick, handleDisplay } = useCounter();
   const { text, array, handleChange, handleAdd } = useInputArray();

   return (
      <>
         <button onClick={handleClick}>ボタン</button>
         <button 
            onClick={handleDisplay}
         >
            {isShow ? "非表示" : "表示"}
         </button>
         {isShow ? <h2>{count}</h2> : null}

         <input
            type="text"
            value={text}
            onChange={handleChange}
         />
         <button onClick={handleAdd}>追加</button>
         <ul>
            {array.map(item => {
               return <li key={item}>{item}</li>
            })}
         </ul>
      </>
   )
}