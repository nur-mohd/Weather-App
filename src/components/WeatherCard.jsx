import { MapPin, Thermometer, Droplet, Wind } from "lucide-react";
import { getWeatherTheme } from "../utils/getTheme";

const WeatherCard = ({ weather, place }) => {
  if (!weather) {
    return null;
  }

  const theme = getWeatherTheme(weather.icon || "unknown");
  const locationName = place?.name || "Current location";

  const stats = [
    { icon: Thermometer, label: "Feels like", value: `${weather.feelsLike ?? 0}°C` },
    { icon: Droplet, label: "Humidity", value: `${weather.humidity ?? 0}%` },
    { icon: Wind, label: "Wind speed", value: `${weather.windSpeed ?? 0} km/h` },
  ];

  return (
    <section
      className="relative overflow-hidden rounded-[28px] p-6 shadow-xl ring-1 ring-black/5"
      style={{ background: theme.sky }}
    >
      <span
        className="absolute -right-16 -top-16 h-44 w-44 rounded-full blur-3xl"
        style={{ background: theme.accent, opacity: 0.18 }}
        aria-hidden="true"
      />

      <div className="relative">
        <div className="mb-5 flex items-center justify-between gap-3">
          <span
            className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em]"
            style={{ background: theme.chip, color: theme.ink }}
          >
            Today&apos;s weather
          </span>
        </div>

        <div className="flex items-center gap-2 text-slate-800">
          <MapPin size={20} strokeWidth={2.5} />
          <h2 className="text-2xl font-semibold" style={{ color: theme.ink }}>
            {locationName}
          </h2>
        </div>

        <div className="mt-6 flex items-end gap-4 max-[480px]:flex-col max-[480px]:items-start">
          <div className="text-5xl font-extrabold leading-none" style={{ color: theme.strong }}>
            {weather.temperature ?? 0}
            <span className="text-3xl align-top">°</span>
          </div>

          <div>
            <p className="text-lg font-bold" style={{ color: theme.ink }}>
              {weather.conditionLabel || weather.description}
            </p>
            <p className="text-sm" style={{ color: theme.inkSoft }}>
              {weather.description || "Weather update"}
            </p>
          </div>
        </div>

        <div className="mt-7 grid grid-cols-3 gap-3 max-[560px]:grid-cols-1">
          {stats.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-2xl border border-white/60 bg-white/50 p-3 shadow-sm shadow-slate-200/60 backdrop-blur-sm"
            >
              <span
                className="flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ background: theme.chip, color: theme.strong }}
              >
                <Icon size={18} strokeWidth={2.2} />
              </span>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-600">
                  {label}
                </p>
                <p className="text-sm font-bold text-slate-800">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeatherCard;