import WeatherLottie from "./WeatherLottie";

const REC_STYLES = {
  hot: { color: "#f97316", card: "bg-rec-hot" },
  warm: { color: "#fb923c", card: "bg-rec-warm" },
  cold: { color: "#38bdf8", card: "bg-rec-cold" },
  sunny: { color: "#f59e0b", card: "bg-rec-sunny" },
  rain: { color: "#3b82f6", card: "bg-rec-rain" },
  snow: { color: "#818cf8", card: "bg-rec-snow" },
  fog: { color: "#94a3b8", card: "bg-rec-fog" },
  cloudy: { color: "#64748b", card: "bg-rec-cloudy" },
  pleasant: { color: "#22c55e", card: "bg-rec-pleasant" },
};

const RecommendationCard = ({ recommendation }) => {
  if (!recommendation) return null;

  const style = REC_STYLES[recommendation.type] || REC_STYLES.pleasant;
  const badgeText = recommendation.label?.toUpperCase() || "MILD WEATHER";
  const suggestionTitle = "YOUR SMART SUGGESTION";
  const animationName = recommendation.type || "pleasant";

  return (
    <section
      className={`flex w-full items-start gap-5 rounded-[28px] border-l-[6px] border-solid p-6 shadow-[0_20px_50px_-28px_rgba(15,23,42,0.55)] transition duration-200 hover:-translate-y-0.5 animate-rise max-[480px]:p-5 [animation-delay:160ms] ${style.card}`}
      style={{ borderLeftColor: style.color }}
    >
      <span className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-[20px] bg-white/90 ring-1 ring-white shadow-[0_14px_25px_-18px_rgba(15,23,42,0.55)]">
        <WeatherLottie kind="advice" name={animationName} className="h-11 w-11" />
      </span>

      <div className="flex-1">
        <div className="mb-2 flex items-center gap-3 max-[480px]:flex-wrap">
          <span
            className="rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-[0.14em] text-white shadow-sm"
            style={{ background: style.color }}
          >
            {badgeText}
          </span>
        </div>

        <h3 className="m-0 mb-2 text-[12.5px] font-black uppercase tracking-[0.18em] text-slate-700">
          {suggestionTitle}
        </h3>

        <p className="m-0 text-[17.5px] font-semibold leading-[1.6] text-slate-800">
          {recommendation.text}
        </p>
      </div>
    </section>
  );
};

export default RecommendationCard;