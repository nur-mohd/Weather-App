import { Link, useLocation } from "react-router";
import { getWeather } from "../services/get-weather";
import { useState, useEffect } from "react";
import WeatherCard from "../components/WeatherCard";
import RecommendationCard from "../components/RecommendationCard";
import WeatherType from "../components/WeatherType";
import { getRecommendations } from "../utils/getRecommendation";
import Loader from "../components/Loader";
import LocationModel from "../components/LocationModel";






const Weather = () => {
  const value = useLocation();
  const place = value.state.location;

  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

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
      setLoading(true);
      try {
        const result = await getWeather(place);
        setWeather(result);
      } catch (error) {
        console.log("Error fetching weather data:", error);
      } finally {
        setLoading(false);
        setOpen(false);
      }
    };

    fetchWeather();
  }, [place]);

  return (
   <div className="max-w-6xl mx-auto">
      <header className="py-4">
        {!loading && (
          <div className="flex items-center justify-between">
            <div>
              <Link 
              className="border border-1 bg-blue-600 text-white rounded-full px-2 py-1"
               to={"/"}>
                Back To Home
              </Link>
            </div>
            <div>
              <h1 className="text-xl text-blue-300 font-bold">
                <span className="text-blue-500 text-2xl font-bold">Weather App</span>
              </h1>
            </div>
            <div>
              <button onClick={()=>setOpen(true)} className="text-md font-medium hover:scale-105 transition-all delay-500 bg-blue-500 px-5 cursor-pointer py-1 rounded-2xl text-gray-100" type="button">Change location</button>
            </div>
          </div>
        )}
      </header>

      {loading ? (
        <Loader />
      ) : (
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
      )}
      {open && <LocationModel onClose={() => setOpen(false)} />}
    </div>
  );
};

export default Weather;
