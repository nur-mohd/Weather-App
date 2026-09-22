  const Rain = ["rain", "drizzle", "freezing_rain", "showers"];

export const getRecommendations = (weather) => {
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
