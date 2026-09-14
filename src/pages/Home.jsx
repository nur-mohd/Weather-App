import { useState } from "react";
import LocationModel from "../components/LocationModel";

const Home = () => {
    const [click, setClick] = useState(false);
    console.log(click);
    return (
        <div>
           <div className="text-center">
             <h1 className="text-4xl text-blue-500 font-bold">
                <span className="text-amber-300">Weather</span> App</h1>
            <p className="py-3 text-md text-green-400">
                Check your weather today in Weather App</p>   
           </div>

            <div className="flex justify-center">
            <button type="button" 
            onClick={() => setClick(true)}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-2xl hover:scale-105 transition-all delay-300">
                Check Weather</button>
            </div>
            {
                click && <LocationModel onClose={()=>setClick(false)}/>
            }
        </div>
    );
};

export default Home;