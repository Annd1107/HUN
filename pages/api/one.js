import React,{ useState } from "react"; 

const useStateTask = () => {
    const [color , setColor] = useState("");
    return(
        <div className = {`flex space-x-4 w-full h-screen bg-${color}-800`}>
            <p>Өнгө солих</p>
            <button className="border bg-red-800 py-4 px-6 h-10"
            onClick={() => {
                setColor("red");
            }}>
                Улаан
            </button>
            <button className="border bg-blue-800 py-4 px-6 h-10"
            onClick={() => {
                setColor("blue");
            }}>
                Цэнхэр
            </button>
            <button className="border bg-green-800 py-4 px-6 h-10"
            onClick={() => {
                setColor("green");
            }}>
                Ногоон
            </button>
        </div>
    );
};

export default useStateTask;
