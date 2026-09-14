export const getWeather = async (place) => {
    //  console.log("Place:", place);

    const {latitude, longitude, name} = place;

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,is_day,rain,precipitation,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,snowfall`;

    const result = await fetch(url);
    const data = await result.json();
    const now = data.current;
    // console.log("Weather Data:", now);
    if(!now) {
        throw new Error("Weather data not found!");
    }
    return {
        location: name,
        temperature: Math.round(now.temperature_2m),
        humidity: now.relative_humidity_2m,
        windSpeed: now.wind_speed_10m,
        rain:now.rain,
    }
};