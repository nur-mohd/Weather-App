const WeatherType = ({ weather, place }) => {
    return (
        <div className="bg-white shadow-2xl rounded-2xl p-4 flex flex-col items-center justify-center">
          <div className="">
            <h2 className="text-blue-950 font-bold text-2xl">
              Live in {place.name}
            </h2>
          </div>
          <div className="flex items-center justify-center mt-4">
            <p className="text-3xl text-blue-900 font-extrabold">
                {weather?.description}
              </p>
          </div>

          <div className="flex items-center justify-center mt-4">
            <span className="rounded-full border-2 border-purple-400 p-2">
              Feel's Like: {weather?.feelsLike}°C
            </span>
          </div>

        </div>
    );
};

export default WeatherType;