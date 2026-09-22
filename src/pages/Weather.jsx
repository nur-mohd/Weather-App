import { useLocation } from "react-router";
import { getWeather } from "../services/get-weather";
import { useState, useEffect } from "react";
import WeatherCard from "../components/WeatherCard";
import RecommendationCard from "../components/RecommendationCard";
import WeatherType from "../components/WeatherType";
import { getRecommendations } from "../utils/getRecommendation";

const Weather = () => {
  const value = useLocation();
  const place = value.state.location;

  const [weather, setWeather] = useState(null);
  const recommendation = getRecommendations(weather);
  const recommendationColors = {
    snow: "text-sky-600",
    rain: "text-blue-600",
    thunderstorm: "text-purple-700",
    fog: "text-slate-600",
    general: "text-green-600",
  };

  useEffect(() => {
    if (!place) {
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
        <div className="space-y-3">
            <div className="bg-white shadow-2xl rounded-2xl p-4">

            {/* Weather Card */}
            <WeatherCard weather={weather} place={place} />
          
        </div>

          {/* Weather Recommendation */}
          <RecommendationCard 
          recommendation={recommendation} 
          recommendationColors={recommendationColors}
          />
        
        </div>

        {/*Weather Type */}
        <WeatherType weather={weather} place={place} />
        
      </div>
    </div>
  );
};

export default Weather;
