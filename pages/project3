import { useState } from "react";

const dataB = [
  {
    id: 21,
    firstname: "Temuujin",
    lastname: "Soyol-Erdene",
    job: "CEO of Google",
    height: 210,
    age:21,
    image: "https://www.dreamhouseapartments.com/wp-content/uploads/2014/09/Big-Ben-and-The-Palace-of-Westminster-600x300.jpg",
    items: "iPhone XX , Rolls-Royce"
  },
  {
    id: 1,
    firstname: "Anand",
    lastname: "Altankhuyag",
    job: "Student",
    alive: true,
    height: 183,
    age:16,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyFY0JoSuVI0bxSaa5euyo-m0398lyeSeVFA&s",
    items: "Computer , Smartphone"
  },
  {
    id: 2,
    firstname: "Anar",
    lastname: "Batsukh",
    job: "Student",
    alive: true,
    height: 178,
    age:16,
    image: "https://earthlab.ucsc.edu/files/2022/08/performance-ecosex-walk-tour-4-24-22-600x300.jpg",
    items: "iWatch , Smartphone"
  },
  {
    id: 3,
    firstname: "Chinguun",
    lastname: "Toivgoo",
    job: "Student",
    alive: true,
    height: 181,
    age:16,
    image: "https://media.4-paws.org/f/7/f/8/f7f83b15e9053a291277a350ce735fccf54b85e2/Kaninchen%20im%20Freigehege%20%282%29-4608x2303-600x300.jpg",
    items: "Computer , Airpods"
  },
  {
    id: 4,
    firstname: "Aidaulet",
    lastname: "Nurbolsin",
    job: "Student",
    alive: true,
    height: 175,
    age:16,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWbd8IQj0Eh-1SEZYQUsGC4zVvQK97QaUoYw&s",
    items: "Notebook , Smartphone"
  },
  {
    id: 5,
    firstname: "Khulan",
    lastname: "Sukhdorj",
    job: "Student",
    alive: true,
    height: 171,
    age:16,
    image: "https://media.4-paws.org/a/f/1/e/af1e8ffc278258492c580ef1a4d574cb8e0c6035/Molly_006-2829x1886-2829x1414-600x300.jpg",
    items: "Computer , Smartphone"
  },
  {
    id: 6,
    firstname: "Anduul",
    lastname: "Altankhaich",
    job: "Student",
    alive: true,
    height: 173,
    age:16,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgSFHiaMVVrAdET9rnd3TIVOM2ljy7MQP2rw&s",
    items: "Laptop , Watch"
  },
  {
    id: 7,
    firstname: "Naran-Erdene",
    lastname: "Gankhuyag",
    job: "Student",
    alive: true,
    height: 174,
    age:16,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwPkF-_6n7Gky8nxIBYBfaC7TnTwtLzRaT1g&s",
    items: "Computer , Ring"
  },
  {
    id: 8,
    firstname: "Telmuun",
    lastname: "Tserenbaljir",
    job: "Student",
    alive: true,
    height: 167,
    age:16,
    image: "https://www.1zoom.me/prev/323/322504.jpg",
    items: "Smartphone"
    
  },
  {
    id: 9,
    firstname: "Ysui",
    lastname: "Enkhbayar",
    job: "Student",
    alive: true,
    height: 173,
    age:16,
    image: "https://www.1zoom.me/prev/247/246508.jpg",
    items: "Smartphone , Glasses"
  },
  {
    id: 10,
    firstname: "Azzaya",
    lastname: "Amarbat",
    job: "Student",
    alive: true,
    height: 165,
    age:16,
    image: "https://www.dreamhouseapartments.com/wp-content/uploads/2014/09/Big-Ben-and-The-Palace-of-Westminster-600x300.jpg",
    items: "Smartphone , Bicycyle"
  },
  {
    id: 11,
    firstname: "Soyombo",
    lastname: "Chingunjav",
    job: "Student",
    alive: true,
    height: 177,
    age:16,
    image: "https://www.croatiaairlines.com/resources/fotke/zabranjeni-predmeti.png",
    items: "Smartphone , Scooter"
  },
  {
    id: 12,
    firstname: "Erkhes",
    lastname: "Sanchir",
    job: "Student",
    alive: true,
    height: 178,
    age:16,
    image: "https://hdri-skies.com/wp-content/uploads/2025/02/thumb-hdri_sky_925-600x300.jpg",
    items: "Smartphone , Notebook"
  },
  {
    id: 13,
    firstname: "Ayden-Anand",
    lastname: "Amarbayar",
    job: "Student",
    alive: true,
    height: 181,
    age:16,
    image: "https://www.holts.com/clubhouse/sites/default/files/teaserimage-Cigars-in-Casinos-600x300.png",
    items: "Smartphone , Bicycle"
  },
  {
    id: 14,
    firstname: "Oyunbilig",
    lastname: "Chimiddorj",
    job: "Student",
    alive: true,
    height: 170,
    age:16,
    image: "https://durhamcollege.ca/wp-content/uploads/library-1200x600-1-600x300.jpg",
    items: "Smartphone , Notebook"
  },
  {
    id: 15,
    firstname: "Tsolmon",
    lastname: "Bat",
    job: "Student",
    alive: true,
    height: 163,
    age:17,
    image: "https://www.croatiaairlines.com/resources/Destinacijeije/spu/SPU-600x300-istock.jpeg",
    items: "Smartphone , Bracelet"
  },
  {
    id: 16,
    firstname: "Serjmyadag",
    lastname: "Gankhuyag",
    job: "Student",
    alive: true,
    height: 160,
    age:16,
    image: "https://www.montereyboats.com/zupload/library/32704/-74879-600x300-1.jpg?ztv=20250204105510",
    items: "Smartphone , Charger"
  },
  {
    id: 17,
    firstname: "Batpurev",
    lastname: "Batmunkh",
    job: "Student",
    alive: true,
    height: 173,
    age:16,
    image: "https://sf-static.sixflags.com/wp-content/uploads/Kangaroo-600x300-1.jpg",
    items: "Notebook , Surron"
  },
  {
    id: 18,
    firstname: "Minori",
    lastname: "Nguyen",
    job: "Student",
    alive: true,
    height: 161,
    age:17,
    image: "https://www.rspcasa.org.au/wp-content/uploads/2019/02/Donate-items-mobile-banner-600x300-fit-constrain-q70-mobile_banner_image.jpg",
    items: "Contik , Tymbark"
  },
  {
    id: 19,
    firstname: "Khantushig",
    lastname: "Gankhuyag",
    job: "Student",
    alive: true,
    height: 166,
    age:17,
    image: "https://environment.leeds.ac.uk/images/resized/600x300-0-0-1-80-800x400_train.jpg",
    items: "Smartphone , Helmet"
  },
  {
    id: 20,
    firstname: "Gunsan-Yanjin",
    lastname: "Tsengel",
    job: "Student",
    height: 161,
    age:16,
    image: "https://www.montereyboats.com/zupload/library/32705/-74884-600x300-1.png?ztv=20250213174450",
    items: "Smartphone , Notebook"
  },
]

export default function Home() {
  const [isColumn, setIsColumn] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filter = dataB.filter((item) => item.firstname.toLowerCase().includes(searchQuery.toLowerCase()))

  console.log(filter);
  
  return (
    <div className="bg-black h-fit w-screen pt-10 pb-10">
      <a href="/"><div className="bg-white text-black absolute top-2 left-2 p-4 rounded-lg">BACK</div></a>
      <div className="flex flex-row gap-4 ml-5">
        <input
          type="text"
          placeholder="Name"
          className="text-white bg-gray-800 p-2 rounded-md"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="bg-gray-800 border-pink-600 border-2 w-fit p-3 rounded-xl text-white transition-all duration-300 
          hover:scale-105 active:scale-95"
          onClick={() => setIsColumn(!isColumn)}
        >
          Column
        </button>
      </div>

      <div
        className={`m-3 grid gap-10 transition-all duration-500 ease-in-out ${
          isColumn ? "grid-cols-1" : "sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        }`}
      >
        {filter.length > 0 ? (
          filter.map((element, index) => (
            <div
              key={index}
              className={`relative shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] p-5 mb-10 flex flex-col border-3 border-solid border-pink-600 gap-5 rounded-xl 
                 transform hover:scale-105 active:scale-95 group
                ${isColumn ? "w-196 mx-auto w-x-400 flex-row" : "w-96"}`}
            >
              <img
                src={element.image}
                className={`rounded-lg 
                
                ${isColumn ? "w-80 h-40 h-60 object-cover" : "w-80 h-40"}`}
              />
              <img
                src={element.image}
                className={`absolute inset-0 w-full h-full object-cover opacity-30 blur-md rounded-lg
                ${isColumn ? "w-80 h-40 h-60 object-cover" : "w-80 h-40"}`}
              />
              <div>
                <div className="flex flex-row justify-evenly pb-2">
                  <p className="text-2xl text-white">{element.firstname}</p>
                  <p className="text-2xl text-white">{element.lastname}</p>
                </div>
                <p className="text-2xl text-white">{element.job}</p>
                <div className="text-2xl text-white flex gap-2">
                <div className="font-bold text-gray-400">Items:</div>
                  <p className="text-2xl text-gray-400">{element.items}</p>
                </div>
                
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-90 rounded-lg">
              <div>
                <div className="flex flex-row justify-evenly pb-2">
                  <p className="text-2xl text-white">{element.firstname}</p>
                  <p className="text-2xl text-white">{element.lastname}</p>
                </div>
                <p className="text-2xl text-white">{element.job}</p>
                <div className="text-2xl text-white flex gap-2">
                <p className="text-xl">Age: {element.age}</p>
                  <p className="text-xl">Height: {element.height} cm</p>
                
              </div>
              <div className="font-bold text-xl text-white">Items:</div>
                  <p className="text-2xl text-gray-400">  {element.items}</p>
                  
                </div>
                </div>
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
