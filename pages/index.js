import React,{ useState } from "react"; 
const useStateTask = () => {
    const [color , setColor] = useState("black");
    return(
        <div className = {`flex flex-col justify-center items-center space-x-4 w-full h-screen bg-${color}-800`}>
            <p>Өнгө солих</p>
            {color == "red" ? (
              <>
              <button className="border rounded-2xl flex bg-red-800 w-23 py-4 px-6 m-5 h-10 justify-center items-center"
              onClick={() => {
                  setColor( color == "red" ? "black" : "red");
                  
              }}>
                  Улаан
              </button>
              </>
            ) : color == "green" ?(
              <><button className="border rounded-2xl flex bg-green-800 w-23 py-4 px-6 m-5 justify-center items-center h-10"
              onClick={() => {
                  setColor(color == "green" ? "black" : "green");
                  
              }}>
                  Ногоон
              </button></>
            ):color == "blue"?(
              <>
            <button className="border rounded-2xl flex bg-blue-800 w-23 py-4 px-6 m-5 h-10 justify-center items-center"
            onClick={() => {
                setColor(color == "blue" ? "black" : "blue");
                
            }}>
                Цэнхэр
            </button></>
            ):(
              <><button className="border rounded-2xl flex bg-red-800 w-23 py-4 px-6 m-5 h-10 justify-center items-center"
              onClick={() => {
                  setColor("red");
                  
              }}>
                  Улаан
              </button>
              <button className="border rounded-2xl flex bg-blue-800 w-23 py-4 px-6 m-5 h-10 justify-center items-center"
              onClick={() => {
                  setColor("blue");
                  
              }}>
                  Цэнхэр
              </button>
              <button className="border rounded-2xl flex bg-green-800 w-23 py-4 px-6 m-5 justify-center items-center h-10"
              onClick={() => {
                  setColor("green");
                  
              }}>
                  Ногоон
              </button></>
            )
}
        </div>
    );
};

export default useStateTask;
