import { useEffect } from "react";
import Body from "./components/Body";
import { Header } from "./components/Header";
import Hero from "./components/Hero";
import { cardData } from "./components/data.json";

export function Home() {
  // useEffect(()=>{
  //   if(!localStorage.getItem('cardData')){
  //   localStorage.setItem('cardData',JSON.stringify(cardData))
  // }
  // },[])
  return (
      <div className="w-[90%] m-auto">
        <Header />
        <Hero />
        <Body />
      </div>
  );
}

