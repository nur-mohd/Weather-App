import { LottieLight } from "lottie-react";

const WeatherLottie = ({ kind, name, className = "" }) => {
  const safeName = name || "pleasant";

  return (
    <LottieLight
      key={safeName}
      src={`/animations/${kind}/${safeName}.json`}
      className={className}
      autoplay
      loop
      onError={(event) => {
        const fallback = `/animations/${kind}/pleasant.json`;
        if (event.currentTarget.src !== window.location.origin + fallback) {
          event.currentTarget.src = fallback;
        }
      }}
    />
  );
};

export default WeatherLottie;