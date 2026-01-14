import { Cloud, Sun, CloudSun, CloudRain } from "lucide-react";

const getIcon = (text) => {
  if (text.includes("Rain")) return <CloudRain className="text-blue-400" size={28} />;
  if (text.includes("Cloud")) return <Cloud className="text-gray-300" size={28} />;
  if (text.includes("Sunny") || text.includes("Clear")) return <Sun className="text-yellow-400" size={28} />;
  return <CloudSun className="text-yellow-400" size={28} />;
};

const formatTime = (timeStr) => {
  const date = new Date(timeStr);
  return date.toLocaleTimeString([], { hour: 'numeric' });
};

const TodayForecast = ({ data }) => {
  if (!data) return null;

  const hours = data.forecast.forecastday[0].hour;

  // take every 3rd hour starting from 6 AM
  const filtered = hours.filter((_, index) => index % 3 === 0).slice(2, 8);

  return (
    <div className="w-full rounded-2xl bg-[#202C3C] backdrop-blur-xl px-8 py-6 border border-white/5 shadow-xl">

      <h3 className="text-sm text-gray-400 font-semibold tracking-wide mb-5">
        TODAY'S FORECAST
      </h3>

      <div className="flex justify-between">
        {filtered.map((h, i) => (
          <div key={i} className="flex cursor-pointer flex-col items-center gap-3 text-white">
            <span className="text-sm text-gray-400">{formatTime(h.time)}</span>
            {getIcon(h.condition.text)}
            <span className="text-xl font-bold">{Math.round(h.temp_c)}°</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodayForecast;
