import React,{ useState } from "react"; 
const useStateTask = () => {
    const [ner, setClick] = useState("Suragch");
    const [firstName, setFirstName] = useState('Suragch');
    return(
        <div className="bg-white h-screen flex justify-center">
        <div className="mt-10 w-96 bg-white h-screen flex flex-row justify-center justify-evenly">
            <p className="text-black">Name:</p>
            <div className="p-0 border-2 border-black h-7 rounded-md w-29">
                <input placeholder="Name" className="text-black" onChange={e => setFirstName(e.target.value)}/>
            </div> 
            <p className="text-black">Hi?</p>
            {firstName === '' ? (
            <p className="text-black">Suragch?</p>
            ) : (
            <p className="text-black">{firstName}?</p>
            )} 
        </div>
        </div>
    );
};

export default useStateTask;
