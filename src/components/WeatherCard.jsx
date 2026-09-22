import { MapPin } from 'lucide-react';
import StatCard from './StatCard';

const WeatherCard = ({ weather, place }) => {

    const stat = [
        {
            icon:"", 
            label:"Feels Like", 
            value:`${weather?.feelsLike}°C`
        },

        {
            icon:"", 
            label:"Humidity", 
            value:`${weather?.humidity}%`
        },
        {
            icon:"", 
            label:"Wind Speed", 
            value:`${weather?.windSpeed} m/s`
        },

    ]




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

            {
                stat.map((s, index)=>(
                    <StatCard key={index} s={s} />
                ))
            }             

              
            </div>
          </div>
    );
};

export default WeatherCard;