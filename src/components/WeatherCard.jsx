import React, { useState } from 'react';
import Sidebars from './Sidebars';
import Searchbar from './Searchbar';
import CurrentWeather from './CurrentWeather';
import TodayForecast from './TodayForecast';
import AirConditions from './AirConditons';
import WeeklyForecast from './WeeklyForecast';
import useWeather from '../hooks/useWeather';

const WeatherCard = () => {
    const [input, setInput] = useState("delhi");
    const [city, setCity] = useState("delhi");

    const { data, loading, error } = useWeather(city);

    if (error) return <p className="text-red-400">{error}</p>;

    return (
        <div className="h-screen w-[80%] bg-[#0B131E] flex px-6 py-6 gap-6 items-center">

            <Sidebars />

            {data && (
                <>
                    <div className="w-[65%] flex flex-col gap-4">
                        <Searchbar
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onSubmit={(e) => {
                                e.preventDefault();
                                if (!input.trim()) return;
                                setCity(input);
                            }}
                            onClear={() => setInput("")}
                        />


                        <CurrentWeather data={data} />
                        <TodayForecast data={data} />
                        <AirConditions data={data} />
                    </div>

                    <WeeklyForecast data={data} />
                </>
            )}
        </div>
    );
};

export default WeatherCard;
