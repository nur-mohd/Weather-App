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
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#f0f9ff_0%,_#e0f2fe_18%,_#f8fafc_52%,_#eff6ff_100%)] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-6">
          {!loading && (
            <div className="flex items-center justify-between gap-4 rounded-[30px] border border-white/80 bg-white/75 px-4 py-3 shadow-[0_16px_40px_-22px_rgba(14,116,144,0.55)] backdrop-blur-md sm:px-5">
              <Link
                className="inline-flex items-center rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-sky-500"
                to="/"
              >
                Back To Home
              </Link>

              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-sky-500 shadow-[0_0_18px_rgba(14,165,233,0.9)]" />
                <h1 className="text-center text-lg font-black tracking-[0.18em] text-sky-700 sm:text-xl">
                  WEATHER APP
                </h1>
              </div>

              <button
                onClick={() => setOpen(true)}
                type="button"
                className="rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700 transition duration-200 hover:-translate-y-0.5 hover:bg-sky-100"
              >
                Change location
              </button>
            </div>
          )}
        </header>

        {loading ? (
          <Loader />
        ) : (
          <div className="grid gap-6 p-1 md:grid-cols-[1.08fr_0.92fr]">
            <div className="space-y-5">
              <div className="rounded-[30px] bg-white/80 p-3 shadow-[0_25px_70px_-32px_rgba(14,116,144,0.7)] ring-1 ring-sky-100 backdrop-blur-sm">
                <WeatherCard weather={weather} place={place} />
              </div>

              <RecommendationCard
                recommendation={recommendation}
                recommendationColors={recommendationColors}
              />
            </div>

            <WeatherType weather={weather} place={place} />
          </div>
        )}
        {open && <LocationModel onClose={() => setOpen(false)} />}
      </div>
    </div>
  );
};

export default Weather;
