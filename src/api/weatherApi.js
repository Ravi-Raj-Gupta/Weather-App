const API_KEY = "your_api_key_here";


export const fetchweather = async (city) => {
    const res = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7&aqi=no&alerts=no`
    );
    
    if (!res.ok) {
        throw new Error("Loading Failed");
    }

    return res.json();
};
