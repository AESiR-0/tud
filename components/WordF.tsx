import React from "react";
import { FlipWords } from "./ui/FlipWords";
import { mfont } from "./fonts";


export function WordFlip() {
  const words = ["Innovative", "Impactful", "Scalable"];

  return (
    
      <div className={`${mfont.variable} font-sans text-black`}>
        <h1 className={`${mfont.variable} font-sans  text-center text-3xl md:text-4xl lg:text-6xl font-medium pb-4`}>Strategy that is
        <FlipWords words={words} /></h1>
      </div>
  );
}
