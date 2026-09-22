import { MapPin } from 'lucide-react';

const WeatherCard = ({ weather, place }) => {
    return (
       <div className="space-y-3">
            <h1 className="text-4xl text-blue-500 font-semibold ">
              Today's Weather details
            </h1>
            <div className="flex items-center gap-2">
              <MapPin size={30} />
              <h2 className="text-4xl text-lime-500 font-semibold">
                {place.name}
              </h2>
            </div>
            <div className="flex items-center gap-16">
              <h3 className="text-4xl text-purple-900 font-extrabold">
                {weather?.temperature}°C
              </h3>
              <p className="text-3xl text-purple-700 font-extrabold">
                {weather?.description}
              </p>
            </div>
            <div className="flex items-center justify-between">

              <div className="rounded-2xl shadow-2xl p-4 text-center">
                <h3 className="text-lg text-purple-900 font-bold">
                  Feels Like
                </h3>
                <p className="text-3xl text-purple-700 font-extrabold">
                  {weather?.feelsLike}°C
                </p>
              </div>
              <div className="rounded-2xl shadow-2xl p-4 text-center">
                <h3 className="text-lg text-purple-900 font-bold">Humidity</h3>
                <p className="text-3xl text-purple-700 font-extrabold">
                  {weather?.humidity}%
                </p>
              </div>

              <div className="rounded-2xl shadow-2xl p-4 text-center">
                <h3 className="text-lg text-purple-900 font-bold">
                  Wind Speed
                </h3>
                <p className="text-3xl text-purple-700 font-extrabold">
                  {weather?.windSpeed} m/s
                </p>
              </div>
            </div>
          </div>
    );
};

export default WeatherCard;