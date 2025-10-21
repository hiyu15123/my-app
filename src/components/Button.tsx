"use client";

import React, { use, useCallback } from "react";
import { useState } from "react";


export function Button() {
   const [count, setCount] = useState(1);
   const [text, setText] = useState("");
   const [isShow, setIsShow] = useState(true);
   const [array, setArray] = useState<string[]>([]);

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
      setText(e.target.value.trim());
   }, []);

   const handleDisplay = useCallback(() => {
      setIsShow((prevIsShow) => !prevIsShow);
   }, []);

   const handleAdd = useCallback(() => {
      setArray((prevArray) => {
         if (prevArray.some(item => item === text)) {
            alert("同じ要素がすでに存在します。");
            return prevArray;
         }
         return [...prevArray, text];
      });
   }, [text])

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



