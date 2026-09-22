import { useLocation } from "react-router";
import { getWeather } from "../services/get-weather";
import { useState, useEffect } from "react";
import WeatherCard from "../components/WeatherCard";
import RecommendationCard from "../components/RecommendationCard";
import WeatherType from "../components/WeatherType";

const Weather = () => {
  const value = useLocation();
  const place = value.state.location;

  const [weather, setWeather] = useState(null);
  // console.log("Weather", weather);

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

  const Rain = ["rain", "drizzle", "freezing_rain", "showers"];

  const getRecommendations = (weather) => {
    if (!weather) {
      return null;
    }

    if (weather.condition === "snow") {
      return {
        type: "snow",
        label: "Snow",
        text: "It's snowing outside, wear warm clothes and boots.",
      };
    }

    if (Rain.includes(weather.condition)) {
      return {
        type: "rain",
        label: "Rain",
        text: "It's raining outside, carry an umbrella or raincoat.",
      };
    }

    if (weather.condition === "thunderstorm") {
      return {
        type: "thunderstorm",
        label: "Thunderstorm",
        text: "Thunderstorms are expected, stay indoors and avoid open areas.",
      };
    }

    if (weather.condition === "fog") {
      return {
        type: "fog",
        label: "Fog",
        text: "Visibility may be low, drive carefully and use your headlights.",
      };
    }

    if (["clear", "partly_cloudy", "cloudy"].includes(weather.condition)) {
      return {
        type: "general",
        label: "Mild Weather",
        text: "The weather looks comfortable today. Enjoy your day outdoors.",
      };
    }

    return {
      type: "general",
      label: "Weather Update",
      text: "Check the latest weather conditions before heading out.",
    };
  };

  const recommendation = getRecommendations(weather);
  const recommendationColors = {
    snow: "text-sky-600",
    rain: "text-blue-600",
    thunderstorm: "text-purple-700",
    fog: "text-slate-600",
    general: "text-green-600",
  };

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-4 p-4">
        <div className="space-y-3">
            <div className="bg-white shadow-2xl rounded-2xl p-4">

            {/* Weather Card */}
            <WeatherCard weather={weather} place={place} />
          
        </div>

          {/* Weather Recommendation */}
          <RecommendationCard recommendation={recommendation} recommendationColors={recommendationColors} />
        
        </div>

        {/*Weather Type */}
        <WeatherType weather={weather} place={place} />
        
      </div>
    </div>
  );
};

export default Weather;
