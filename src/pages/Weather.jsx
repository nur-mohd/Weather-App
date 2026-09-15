import { useLocation } from "react-router";
import { getWeather } from "../services/get-weather";
import { useState, useEffect } from "react";
import { MapPin } from "lucide-react";

const Weather = () => {
    const value = useLocation();
    const place = value.state.location;

    const [weather, setWeather] = useState(null);
    // console.log("Weather", weather);

    
   useEffect(()=> {
    if(!place) {
        console.log("No place data available.");
        return;
    }
     const fetchWeather = async () => {
        try {
            const result = await getWeather(place);   
            // console.log("Weather Data:", result);
            setWeather(result);
        } catch (error) {
            console.log("Error fetching weather data:", error);
        }
    };

    fetchWeather();
   }, [place]);

    return (
        <div>
            <div className="grid md:grid-cols-2 gap-4 p-4">
                <div className="bg-white shadow-md rounded-lg p-4">
                    <div className="space-y-3">
                         <h1 className="text-4xl text-blue-500 font-semibold ">
                            Today's Weather details</h1>
                       <div className="flex items-center gap-2">
                        <MapPin size={30}/>
                        <h2 className="text-4xl text-lime-500 font-semibold">
                            {place.name}</h2> 
                        </div> 
                       <div className="flex items-center gap-16">
                            <h3 className="text-4xl text-purple-900 font-extrabold">
                                {weather?.temperature}°C</h3>
                            <p className="text-3xl text-purple-700 font-extrabold">
                                {weather?.description}</p>
                       </div>
                       <div className="flex items-center justify-between">
                        <div className = "rounded-2xl shadow-2xl p-4 text-center">
                                <h3 className="text-lg text-purple-900 font-bold">
                                    Feels Like</h3>
                            <p className="text-3xl text-purple-700 font-extrabold">
                                {weather?.feelsLike}°C</p>
                        </div>


                        <div className = "rounded-2xl shadow-2xl p-4 text-center">
                                <h3 className="text-lg text-purple-900 font-bold">
                                    Humidity</h3>
                            <p className="text-3xl text-purple-700 font-extrabold">
                                {weather?.humidity}%</p>
                        </div>

                        <div className = "rounded-2xl shadow-2xl p-4 text-center">
                                <h3 className="text-lg text-purple-900 font-bold">
                                    Wind Speed</h3>
                            <p className="text-3xl text-purple-700 font-extrabold">
                                {weather?.windSpeed} m/s</p>
                        </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Weather;