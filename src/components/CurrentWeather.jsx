import { MapPin } from "lucide-react"
import { useState } from "react";


const CurrentWeather = ({ data }) => {
  if (!data) return null;

  const [unit, setUnit] = useState('c')

  const city = data?.location?.name;
  const temp = unit === "c" ? data.current.temp_c : data.current.temp_f;
  const rain = data?.forecast?.forecastday?.[0]?.day?.daily_chance_of_rain;

  return (
    <div className="w-full rounded-2xl backdrop-blur-xl flex items-center justify-between px-10 py-4">

      {/* Left info */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-white tracking-wide">
          {city}
        </h1>

        <p className="text-sm text-gray-400">
          Chance of rain: {rain}%
        </p>
        <div className="mt-6 text-5xl font-semibold text-white">
          {Math.round(temp)} {" "}
          <span onClick={()=>setUnit("c")} className={`cursor-pointer text-[40px] ${unit == "c" ? "text-white":"text-gray-500"}`}>°C </span> 
          <span className="font-light text-gray-500">|</span> 
          <span onClick={()=>setUnit("f")} className={`cursor-pointer text-[40px] ${unit == "f" ? "text-white":"text-gray-500"}`}> °F</span>
        </div>
      </div>

      {/* Right icon */}
      <img src={`https:${data.current.condition.icon}`} className=" absolute right-0 h-44" />


    </div>
  );
};

export default CurrentWeather;
