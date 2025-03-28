import { Geist, Geist_Mono } from "next/font/google";
import React , {useState} from "react";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [click, setClick] = useState();
  let ner = "  Anand";
  return (
    // REACT USESTATE HOOK 
    <div className="w-full h-[1000px] bg-black flex justify-center items-center flex-col">
      <a href="/"><div className="bg-white text-black absolute top-2 left-2 p-4 rounded-lg">BACK</div></a>
      <button className="text-white border-white border-2 rounded-lg p-2 mb-5 text-2xl shadow-lg shadow-cyan-500/50" onClick={() => setClick((ner) => !ner)}>CLICK</button>
      <div className="flex flex-row">
        <p className="text-white text-3xl" >Click count: {click} </p>
        <p className="text-white text-3xl ml-2">{click == true ? ner:""}</p>
      </div>
    </div>
  );
}
