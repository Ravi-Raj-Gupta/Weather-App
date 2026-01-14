import { Thermometer, Wind, Droplets, Sun } from "lucide-react";

const AirConditions = ({data}) => {
  return (
    <div className="w-full rounded-2xl bg-[#202C3C] backdrop-blur-xl px-8 py-6 border border-white/5 shadow-xl">

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm text-gray-400 font-medium tracking-wide">
          AIR CONDITIONS
        </h3>

        <button className="px-4 py-1.5 cursor-pointer rounded-lg text-xs bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition">
          See more
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-y-6 gap-x-12">

        <Condition icon={<Thermometer size={24} />} label="Real Feel" value={`${data.current.feelslike_c}°`} />
        <Condition icon={<Wind size={24} />} label="Wind" value={`${data.current.wind_kph} km/h`} />
        <Condition icon={<Droplets size={24} />} label="Chance of rain" value={`${data.forecast.forecastday[0].day.daily_chance_of_rain}%`} />
        <Condition icon={<Sun size={24} />} label="UV Index" value={data.current.uv} />

      </div>
    </div>
  );
};

const Condition = ({ icon, label, value }) => {
  return (
    <div className="flex items-center gap-3">

      <div className="text-gray-400 cursor-pointer">
        {icon}
      </div>

      <div className="flex flex-col cursor-pointer">
        <span className="text-sm text-gray-400">{label}</span>
        <span className="text-lg font-semibold text-white">{value}</span>
      </div>

    </div>
  );
};

export default AirConditions;
