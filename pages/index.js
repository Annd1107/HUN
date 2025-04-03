import { useState } from "react";
import Link from "next/link";

const imageUrl = "/ungusolih.jpg";
const imageUrl1 = "/name.jpg";
const imageUrl2 = "/cards.jpg";
const imageUrl3 = "/clickcounter.jpg";

const dataB = [
  {
    id: 1,
    name: "Өнгө солих",
    image: imageUrl,
    href: "/project1"
  },
  {
    id: 2,
    name: "Нэр өгөх",
    image: imageUrl1,
    href: "/project2"
  },
  {
    id: 3,
    name: "Ангийн карт",
    image: imageUrl2,
    href: "/project3"
  },
  {
    id: 4,
    name: "клик тоолох",
    image: imageUrl3,
    href: "/project4"
  },
]

export default function Home() {
  const [isColumn, setIsColumn] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filter = dataB.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()))

  console.log(filter);

  return (
    <div
      className="h-fit w-screen pt-10 pb-10 flex flex-col items-center"
    >
      <div className="p-4 w-screen fixed top-0 left-0 flex flex-row justify-evenly items-center backdrop-blur-md border-b border-gray-300 z-50">
        <img src="https://nhs.edu.mn/favicon.ico" className="w-20" alt="Logo" />
        <p className="text-4xl text-white font-bold bg-black/50 p-4 rounded-4xl">Anand 11v</p>
      </div>
 
      <div className="h-20"></div>
      <div
        className={`m-10 grid gap-10 transition-all duration-500 ease-in-out ${
          isColumn ? "grid-cols-1" : "sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
        }`}
      >
        {filter.length > 0 ? (
          filter.map((element, index) => (
            <div
              key={index}
              className={`shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] p-5 mb-10 flex flex-col border-3 border-solid border-blue-600 gap-5 rounded-xl 
                 transform hover:scale-105 active:scale-95 group
                ${isColumn ? "w-196 mx-auto w-x-400 flex-row" : "w-195"}`}
            >
              <a href={element.href}>
                <div>
                  <div className="flex flex-row justify-evenly pb-2">
                    <p className="text-2xl text-white">{element.name}</p>
                  </div>
                </div>
                <img
                  src={element.image}
                  className={`rounded-lg 
                
                ${isColumn ? "w-180 h-100 object-cover" : "w-180 h-100"}`}
                />
                <img
                  src={element.image}
                  className={`absolute inset-0 w-full h-full object-cover opacity-30 blur-md rounded-lg
                ${isColumn ? "w-80 h-40 h-60 object-cover" : "w-80 h-40"}`}
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-90 rounded-lg">
                  <p className="text-4xl">Enter</p>
                </div>
              </a>
            </div>
          ))
        ) : (
          <p className="text-white text-2xl text-center col-span-full">
            No results found
          </p>
        )}
      </div>
    </div>
  );
}
