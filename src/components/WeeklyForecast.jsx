import React from 'react';
import { Cloud, CloudRain, Sun } from 'lucide-react';

export default function WeeklyForecast({ data }) {
    if (!data) return null;

    const forecast = data.forecast.forecastday;

    const getWeatherIcon = (text) => {
        if (text.includes("Rain")) return <CloudRain className="w-8 h-8 text-blue-300" fill="currentColor" />;
        if (text.includes("Cloud")) return <Cloud className="w-8 h-8 text-gray-300" fill="currentColor" />;
        if (text.includes("Sunny") || text.includes("Clear")) return <Sun className="w-8 h-8 text-yellow-400" fill="currentColor" />;
        return <Sun className="w-12 h-12 text-yellow-400" />;
    };

    return (
        // <div className="w-[38%] bg-[#202C3C] backdrop-blur-sm rounded-3xl shadow-2xl p-8 mt-14">
        <div className="w-[38%] h-[92%] bg-[#202C3C] backdrop-blur-sm rounded-3xl  shadow-2xl pt-8 px-8 mt-14">
            <h1 className="text-gray-400 text-sm font-semibold tracking-wider uppercase mb-8">
                7-Day Forecast
            </h1>

            <div>
                {forecast.map((day, index) => (
                    <div
                        key={index}
                        className="flex cursor-pointer items-center justify-between py-[16px] border-b border-slate-700/50 last:border-b-0"
                    >
                        {/* Day */}
                        <div className="w-16 text-gray-400 text-md font-medium">
                            {index === 0
                                ? "Today"
                                : new Date(day.date).toLocaleDateString("en-US", { weekday: "short" })}
                        </div>

                        {/* Icon + condition */}
                        <div className="flex items-center gap-4 pl-6 flex-1">
                            <div className="flex items-center justify-center w-9">
                                {getWeatherIcon(day.day.condition.text)}
                            </div>

                            <div className="text-white font-semibold text-[14px] min-w-[80px]">
                                {day.day.condition.text}
                            </div>
                        </div>

                        {/* Temps */}
                        <div className="flex items-center gap-1 text-right">
                            <span className="text-white font-semibold text-md">
                                {Math.round(day.day.maxtemp_c)}
                            </span>
                            <span className="text-gray-500 text-base text-md">
                                /{Math.round(day.day.mintemp_c)}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
