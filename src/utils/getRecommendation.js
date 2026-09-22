const RAINY_CONDITIONS = ["rain", "drizzle", "freezing_rain", "showers"];

const RECOMMENDATION_LIBRARY = {
  snow: {
    type: "snow",
    label: "Snow",
    text: "It's snowing outside, wear warm clothes and boots.",
  },
  rain: {
    type: "rain",
    label: "Rain",
    text: "It's raining outside, carry an umbrella or raincoat.",
  },
  thunderstorm: {
    type: "thunderstorm",
    label: "Thunderstorm",
    text: "Thunderstorms are expected, stay indoors and avoid open areas.",
  },
  fog: {
    type: "fog",
    label: "Fog",
    text: "Visibility may be low, drive carefully and use your headlights.",
  },
  clear: {
    type: "pleasant",
    label: "Mild Weather",
    text: "The weather looks comfortable today. Enjoy your day outdoors.",
  },
  partly_cloudy: {
    type: "pleasant",
    label: "Mild Weather",
    text: "The weather looks comfortable today. Enjoy your day outdoors.",
  },
  cloudy: {
    type: "cloudy",
    label: "Cloudy",
    text: "The sky is cloudy today. A light layer is a good choice if you are heading out.",
  },
  hot: {
    type: "hot",
    label: "Hot",
    text: "It feels hot outside. Drink water and stay in the shade when possible.",
  },
  warm: {
    type: "warm",
    label: "Warm",
    text: "The weather is warm and pleasant. A light outfit would feel comfortable.",
  },
  cold: {
    type: "cold",
    label: "Cold",
    text: "It is quite cold today. Keep a jacket or warm layer with you.",
  },
  sunny: {
    type: "sunny",
    label: "Sunny",
    text: "It is bright and sunny. A light outfit and sunscreen will help.",
  },
  general: {
    type: "pleasant",
    label: "Weather Update",
    text: "Check the latest weather conditions before heading out.",
  },
};

export const getRecommendations = (weather) => {
  if (!weather) {
    return null;
  }

  const condition = weather.condition;

  if (condition === "snow") {
    return RECOMMENDATION_LIBRARY.snow;
  }

  if (RAINY_CONDITIONS.includes(condition)) {
    return RECOMMENDATION_LIBRARY.rain;
  }

  if (condition === "thunderstorm") {
    return RECOMMENDATION_LIBRARY.thunderstorm;
  }

  if (condition === "fog") {
    return RECOMMENDATION_LIBRARY.fog;
  }

  if (["clear", "partly_cloudy"].includes(condition)) {
    return RECOMMENDATION_LIBRARY.clear;
  }

  if (condition === "cloudy") {
    return RECOMMENDATION_LIBRARY.cloudy;
  }

  if (condition === "hot") {
    return RECOMMENDATION_LIBRARY.hot;
  }

  if (condition === "warm") {
    return RECOMMENDATION_LIBRARY.warm;
  }

  if (condition === "cold") {
    return RECOMMENDATION_LIBRARY.cold;
  }

  if (condition === "sunny") {
    return RECOMMENDATION_LIBRARY.sunny;
  }

  return RECOMMENDATION_LIBRARY.general;
};
