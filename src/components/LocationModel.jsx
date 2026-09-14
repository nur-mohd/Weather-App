import { X } from "lucide-react";
import { useState } from "react";
import { Getgeolocation } from "../services/get-geolocation";
import { useNavigate } from "react-router";

const LocationModel = ({ onClose }) => {

    const navigate = useNavigate();
    const [city, setCity] = useState("");

    const [error, setError] = useState ("");

    const goToPage = (location) => {
      navigate("/weather", {state: {location}})
    }


    const handleSubmit =async (e) => {
        e.preventDefault();
        const value = city.trim()
        // console.log(value);
        if(!value){
            setError("Please enter a city name")
            return;
        }
        try{
            const location =await Getgeolocation(value);
            //console.log(result);
            if(!location){
                setError("Geocoding request failed!")
            }
            goToPage(location)

        }
        catch (error) {
            // console.log(error)
            setError(error)
        }
    } 

    const handleGetLocation = () => {
      navigator.geolocation.getCurrentPosition((position)=> {
        const {latitude, longitude} = position.coords
        // console.log({latitude, longitude});
        goToPage({name: "Your Location", latitude: latitude, longitude: longitude})
        
      }, (error)=> {
          // console.log(error)
          setError(error)
      }, {
         timeout: 10000
      })
    }

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-950/60">
      <div className="h-[300px] w-[400px] bg-gray-100 shadow-2xl rounded-2xl">
        <div className="flex justify-between items-center">
          <h2 className="text-xl p-5 font-semibold text-gray-700">
            Where are you today?
          </h2>
          <button onClick={onClose} className="cursor-pointer">
            <X />
          </button>
        </div>
        
        <div className="px-5">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter city name"
              value={city}
              onChange ={(e)=>setCity(e.target.value)}
              className="w-full border p-2 rounded-2xl"
            />
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded-2xl hover:scale-105 transition-all delay-300 cursor-pointer"
              >
                Get Weather
              </button>
            </div>
          </form>
        </div>
        <div className="py-1.5 text-center">Or</div>
        <div className="flex justify-center">
              <button
                onClick={handleGetLocation}
                type="button"
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded-2xl hover:scale-105 transition-all delay-300 cursor-pointer"
              >
                Use My Location
              </button>
            </div>
            <div className="flex justify-center mt-2">
              { error && 
                <p className="text-red-500 text-md font-medium">{error}</p>}
            </div>
      </div>
    </div>
  );
};

export default LocationModel;
