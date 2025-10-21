"use client";

import React, { use, useCallback } from "react";
import { useState } from "react";

export function Button() {
   const [count, setCount] = useState(1);
   const [text, setText] = useState("");
   const [isShow, setIsShow] = useState(true);

   const handleClick = useCallback(() => {
      if (count < 10) {
         setCount((prevCount) => prevCount + 1);
      }
   }, [count]);

   const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value.length > 5) {
         alert("5文字以下にしてください");
         return;
      }
      setText(e.target.value.trim);
   }, []);

   const handleDisplay = useCallback(() => {
      setIsShow((prevIsShow) => !prevIsShow);
   }, []);

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
      </>
   )
}



