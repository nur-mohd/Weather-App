import { LottieLight } from "lottie-react";

const WeatherLottie = ({ kind, name, className = "" }) => {
  return (
    <LottieLight
      src={`/animations/${kind}/${name}.json`}
      className={className}
      autoplay
      loop
    />
  );
};

export default WeatherLottie;