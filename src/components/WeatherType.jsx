import { Thermometer } from "lucide-react";
import WeatherLottie from "./WeatherLottie";
import { getWeatherTheme } from "../utils/getTheme";

const WeatherType = ({ weather, place }) => {
  const theme = getWeatherTheme(weather?.icon || "unknown");

  const chipClass =
    "inline-flex items-center gap-2 rounded-full px-[14px] py-2 text-[13px] font-semibold";

  return (
    <section
      className="relative w-full overflow-hidden rounded-[32px] px-7 py-8 shadow-[0_28px_80px_-35px_rgba(15,23,42,0.52)] ring-1 ring-inset ring-white/40 animate-rise max-[480px]:px-5 max-[480px]:py-6 [animation-delay:80ms]"
      style={{ background: theme.sky }}
    >
      <span
        className="pointer-events-none absolute left-1/2 top-[42%] h-90 w-90 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{ background: theme.accent, opacity: 0.24 }}
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute -bottom-20 -right-16 h-64 w-64 rounded-full bg-white opacity-40 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative flex flex-col items-center text-center">
        <span
          className="self-start rounded-full border border-white/50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] shadow-sm"
          style={{ background: theme.chip, color: theme.ink }}
        >
          <span className="mr-2 inline-block h-1.75 w-1.75 rounded-full bg-current align-middle animate-pulse" />
          Live in {place?.name || "your area"}
        </span>

        <WeatherLottie
          kind="weather"
          name={theme.animation || weather?.icon || "clear"}
          className="my-1 h-67.5 w-67.5 max-[480px]:h-47.5 max-[480px]:w-47.5"
        />

        <h3
          className="m-0 font-display text-[32px] font-black leading-tight tracking-[-0.04em] max-[480px]:text-[25px]"
          style={{ color: theme.ink }}
        >
          {weather?.conditionLabel || "Weather"}
        </h3>
        <p className="mb-5 mt-1 m-0 text-[15px]" style={{ color: theme.inkSoft }}>
          {weather?.description || "Loading weather details..."}
        </p>

        <div className="flex flex-wrap justify-center gap-2">
          <span className={chipClass} style={{ background: theme.chip, color: theme.ink }}>
            <Thermometer size={15} strokeWidth={2.5} />
            Feels like {weather?.feelsLike ?? 0}°C
          </span>
        </div>
      </div>
    </section>
  );
};

export default WeatherType;